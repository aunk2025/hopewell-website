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
});

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

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: system,
        maxOutputTokens: 1024,
      },
    });

    return NextResponse.json({ reply: response.text ?? "" });
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
