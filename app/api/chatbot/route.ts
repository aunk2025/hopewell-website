import { NextRequest, NextResponse } from "next/server";
import { ApiError, GoogleGenAI } from "@google/genai";
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
The visitor has selected ${languageName} as their preferred language. Reply in ${languageName} (Devanagari script for Hindi), even if their message is typed in another script, unless they clearly switch to a different language themselves — then follow their lead.`;

    const generationConfig = { systemInstruction, maxOutputTokens: 1024 };

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

    return NextResponse.json({ reply: stripMarkdown(response.text ?? "") });
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
