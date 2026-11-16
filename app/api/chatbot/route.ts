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
    const [system, ai] = await Promise.all([
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

    // Gemini occasionally returns a transient 503 "high demand" error that
    // clears up within a second or two — one quiet retry avoids surfacing
    // that as a visible failure for what's really just a momentary blip.
    let response;
    try {
      response = await ai.models.generateContent({ model: "gemini-3.6-flash", contents, config: generationConfig });
    } catch (err) {
      if (err instanceof ApiError && err.status === 503) {
        await new Promise((r) => setTimeout(r, 1500));
        response = await ai.models.generateContent({ model: "gemini-3.6-flash", contents, config: generationConfig });
      } else {
        throw err;
      }
    }

    const { reply, voiceReply } = extractReplyFields(response.text ?? "");

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
