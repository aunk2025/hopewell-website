import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { sendContactAlert } from "@/lib/email";

const schema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  phone:   z.string().default(""),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const data = schema.parse(await req.json());

    const msg = await prisma.contactMessage.create({ data });

    void sendContactAlert(data);

    return NextResponse.json({ success: true, id: msg.id }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", issues: err.issues }, { status: 400 });
    }
    console.error("[contact POST]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
