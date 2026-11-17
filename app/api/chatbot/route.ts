import { NextRequest, NextResponse } from "next/server";
import { ApiError, GoogleGenAI, Type } from "@google/genai";
import { z } from "zod";
import { buildSiteContext } from "@/lib/chatbot-context";

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      })
    )
    .min(1)
    .max(20),
  language: z.enum(["en", "hi"]).default("en"),
});

const LANGUAGE_NAMES: Record<"en" | "hi", string> = {
  en: "English",
  hi: "Hindi",
};

// Shown instead of a reply that names a doctor who isn't actually on
// staff, rather than risk the visitor acting on a fabricated name.
const UNSAFE_REPLY_FALLBACK: Record<"en" | "hi", string> = {
  en: "I'm not fully sure about that. Please check our doctor list at /doctors or call +91 91996 66246 for accurate details.",
  hi: "मुझे इसकी पूरी जानकारी नहीं है। कृपया /doctors पेज देखें या सही जानकारी के लिए +91 91996 66246 पर कॉल करें।",
};

// Pulls out any "Dr. <Name>" mentions from a reply — including from the
// Latin-script parenthetical Hindi replies often include alongside the
// Devanagari name (e.g. "डॉ. आशीष पाल (Dr. Ashish Paal)") — so they can be
// checked against who's actually on staff.
function extractMentionedDoctorNames(text: string): string[] {
  const matches = text.matchAll(/Dr\.?\s+([A-Z][a-zA-Z.]+(?:\s+[A-Z][a-zA-Z.]+){0,3})/g);
  return Array.from(matches, (m) => m[1].trim());
}

// Counts how many name-parts two names share, rather than a plain
// substring check — Indian surnames like "Kumar" or "Das" repeat across
// several real doctors here, so "shares one surname" alone would wrongly
// call a completely different invented full name "known".
function isKnownDoctor(mentionedName: string, doctorNames: string[]): boolean {
  const tokenize = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .split(/\s+/)
      .filter((t) => t.length > 2);
  const mentionedTokens = tokenize(mentionedName);
  if (!mentionedTokens.length) return false;
  return doctorNames.some((known) => {
    const knownTokens = tokenize(known);
    if (!knownTokens.length) return false;
    const overlap = mentionedTokens.filter((t) => knownTokens.includes(t)).length;
    // A single shared name-part is only enough when one side IS just that
    // one part (e.g. a reply that just says "Dr. Paal" or "Dr. Das") —
    // sharing just a surname between two otherwise-different full names
    // doesn't count.
    return overlap >= 2 || (overlap >= 1 && (mentionedTokens.length === 1 || knownTokens.length === 1));
  });
}

// A cheap model occasionally names a doctor who isn't real rather than
// admitting it doesn't know. If the site's doctor list loaded at all,
// treat any "Dr. X" mention that matches none of them as unsafe to show.
function mentionsUnknownDoctor(text: string, doctorNames: string[]): boolean {
  if (!doctorNames.length) return false;
  return extractMentionedDoctorNames(text).some((name) => !isKnownDoctor(name, doctorNames));
}

// "gemini-3.6-flash" was prone to Google-side "high demand" 503s and
// multi-minute queueing delays, and "gemini-3.8-flash" (the full flash
// tier) turned out to have a free-tier cap of just 20 requests/day total —
// unusable for a live site with real visitor traffic. The "flash-lite"
// tier has a much higher free-tier daily quota, which is the difference
// that matters here since there's no paid billing on this API key. Using
// the "-latest" alias (currently gemini-3.5-flash-lite) rather than
// pinning a dated version so this keeps auto-migrating as Google retires
// older versions, the same way gemini-2.5-flash and gemini-2.0-flash just
// did out from under this code.
const MODEL = "gemini-flash-lite-latest";

// Gemini occasionally returns a transient 503 "high demand" error, and can
// also just sit queueing a request for a long time instead of failing fast.
// One retry with backoff rides out a momentary blip, and capping each
// attempt with an abort timeout means a visitor never waits more than
// ~29s total — they get a clear "try again" error instead of a spinner
// that hangs for a minute or more. 14s per attempt (not shorter) because
// plain, legitimate replies on the free-tier model were observed taking
// 10-11s on their own even when nothing was wrong.
const MAX_ATTEMPTS = 2;
const PER_ATTEMPT_TIMEOUT_MS = 14000;
const RETRY_BACKOFF_MS = [1000];

function isRetryable(err: unknown): boolean {
  if (err instanceof ApiError && err.status === 503) return true;
  const name = (err as { name?: string })?.name ?? "";
  const message = (err as { message?: string })?.message ?? "";
  return /abort/i.test(name) || /abort/i.test(message);
}

async function generateWithResilience(
  ai: GoogleGenAI,
  contents: { role: "user" | "model"; parts: { text: string }[] }[],
  config: Record<string, unknown>
) {
  let lastErr: unknown;
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), PER_ATTEMPT_TIMEOUT_MS);
    try {
      return await ai.models.generateContent({
        model: MODEL,
        contents,
        config: { ...config, abortSignal: controller.signal },
      });
    } catch (err) {
      lastErr = err;
      if (!isRetryable(err) || attempt === MAX_ATTEMPTS - 1) throw err;
      await new Promise((r) => setTimeout(r, RETRY_BACKOFF_MS[attempt] ?? 1000));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastErr;
}

// The system prompt tells the model never to use Markdown (the chat
// widget only renders plain text), but LLMs occasionally slip and emit
// [label](url) anyway — most often with the path as both the label and
// the target, e.g. "[/appointment](/appointment)". This is a backstop so
// a slip never reaches the widget as literal brackets/duplicated text.
function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, url) => (label === url ? url : `${label} (${url})`))
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1");
}

// responseSchema asks Gemini for { reply, voiceReply } JSON, but a reply
// long enough to hit maxOutputTokens cuts the JSON off mid-string —
// JSON.parse then throws, and without a fallback the raw, broken JSON
// text would otherwise leak straight into the visible chat reply. This
// recovers the "reply" field's text even out of truncated/malformed JSON,
// so visitors only ever see prose, never JSON syntax.
function extractReplyFields(rawText: string): { reply: string; voiceReply?: string } {
  try {
    const parsed = JSON.parse(rawText);
    if (parsed && typeof parsed === "object" && typeof parsed.reply === "string") {
      return { reply: parsed.reply, voiceReply: typeof parsed.voiceReply === "string" ? parsed.voiceReply : undefined };
    }
  } catch {
    // Fall through to the best-effort recovery below.
  }
  const match = rawText.match(/"reply"\s*:\s*"((?:[^"\\]|\\.)*)"/);
  if (match) {
    try {
      return { reply: JSON.parse(`"${match[1]}"`) };
    } catch {
      return { reply: match[1] };
    }
  }
  return { reply: rawText };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  // Treat an unset OR still-placeholder key as "not configured" — a bare
  // truthy check lets ".env.local"'s literal placeholder string through,
  // which then fails at the real API call instead of with a clear message.
  if (!apiKey || apiKey.startsWith("your-")) {
    return NextResponse.json(
      { error: "Chat assistant is not configured yet. Please call the hospital directly at +91 91996 66246." },
      { status: 503 }
    );
  }

  const parsed = bodySchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const [{ system, doctorNames }, ai] = await Promise.all([
      buildSiteContext(),
      Promise.resolve(new GoogleGenAI({ apiKey })),
    ]);

    // Gemini uses "model" (not "assistant") for the assistant's turns.
    const contents = parsed.data.messages.map((m) => ({
      role: m.role === "assistant" ? ("model" as const) : ("user" as const),
      parts: [{ text: m.content }],
    }));

    const languageName = LANGUAGE_NAMES[parsed.data.language];
    const systemInstruction = `${system}

LANGUAGE
The visitor has selected ${languageName} as their preferred language. Reply in ${languageName} (Devanagari script for Hindi), even if their message is typed in another script, unless they clearly switch to a different language themselves — then follow their lead.

RESPONSE FORMAT
Return both of the following for every reply:
- "reply": the full answer as written for the chat window — can include specific page paths (e.g. "/services/orthopaedics") and a few sentences of detail, exactly as described above.
- "voiceReply": the same answer rewritten to be read aloud by a voice assistant — one or two short sentences, the direct answer only, in natural spoken ${languageName}. Never include page paths, URLs, or phrases like "you can visit /appointment" — if the full reply points somewhere, just say it in words (e.g. "you can book an appointment with us" instead of naming the path). Never read out a phone number digit-by-digit or describe formatting.`;
    const generationConfig = {
      systemInstruction,
      // Asking for both "reply" and "voiceReply" roughly doubles the
      // output length versus a single plain-text reply, and Devanagari
      // text tends to use more tokens per word than Latin script — the
      // previous 1024 budget was tight enough that Hindi replies could
      // get cut off mid-JSON.
      maxOutputTokens: 2048,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          reply: { type: Type.STRING },
          voiceReply: { type: Type.STRING },
        },
        required: ["reply", "voiceReply"],
      },
    };

    const response = await generateWithResilience(ai, contents, generationConfig);
    let { reply, voiceReply } = extractReplyFields(response.text ?? "");

    // A fabricated doctor name is usually a one-off — regenerating once
    // typically self-corrects, since the model isn't deterministic. If it
    // happens again, showing nothing fabricated matters more than showing
    // an answer, so fall back to a safe, generic message instead.
    if (mentionsUnknownDoctor(reply, doctorNames)) {
      try {
        const retry = await generateWithResilience(ai, contents, generationConfig);
        const retryFields = extractReplyFields(retry.text ?? "");
        if (!mentionsUnknownDoctor(retryFields.reply, doctorNames)) {
          reply = retryFields.reply;
          voiceReply = retryFields.voiceReply;
        } else {
          reply = UNSAFE_REPLY_FALLBACK[parsed.data.language];
          voiceReply = undefined;
        }
      } catch {
        reply = UNSAFE_REPLY_FALLBACK[parsed.data.language];
        voiceReply = undefined;
      }
    }

    return NextResponse.json({
      reply: stripMarkdown(reply),
      ...(voiceReply && { voiceReply: stripMarkdown(voiceReply) }),
    });
  } catch (err) {
    if (err instanceof ApiError) {
      console.error("Chatbot error (Gemini API):", err.status, err.message);
    } else {
      console.error("Chatbot error:", err);
    }
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call +91 91996 66246." },
      { status: 500 }
    );
  }
}
