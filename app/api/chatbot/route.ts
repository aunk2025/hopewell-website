import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
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
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat assistant is not configured yet. Please call the hospital directly at +91 72819 90530." },
      { status: 503 }
    );
  }

  const parsed = bodySchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const [system, anthropic] = await Promise.all([
      buildSiteContext(),
      Promise.resolve(new Anthropic({ apiKey })),
    ]);

    const response = await anthropic.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 500,
      system,
      messages: parsed.data.messages,
    });

    const reply = response.content.find((b) => b.type === "text")?.text ?? "";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chatbot error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call +91 72819 90530." },
      { status: 500 }
    );
  }
}
