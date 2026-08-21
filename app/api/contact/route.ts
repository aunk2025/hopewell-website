import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { sendContactEnquiryEmail } from "@/lib/email";
import { ENQUIRY_TYPES } from "@/lib/contact-config";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid mobile number")
    .max(20, "Enter a valid mobile number")
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid mobile number"),
  email: z.union([z.string().trim().email("Enter a valid email address"), z.literal("")]).optional(),
  enquiryType: z.enum(ENQUIRY_TYPES),
  department: z.string().trim().max(100).optional().or(z.literal("")),
  preferredAt: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please share a few more details").max(2000),
  consent: z.literal(true, { message: "Please provide consent to continue" }),
  // Honeypot — real visitors never see or fill this in. Deliberately
  // unconstrained here (no max(0)) so a filled-in value still passes
  // validation and reaches the silent bot-drop check below, instead of
  // failing loudly with a 400 that would tip a bot off.
  website: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = schema.parse(await req.json());

    // Silently accept-and-drop anything a bot fills into the honeypot,
    // without letting it know it was caught.
    if (body.website) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    const record = await prisma.contactMessage.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email || null,
        enquiryType: body.enquiryType,
        department: body.department || null,
        preferredAt: body.preferredAt || null,
        message: body.message,
      },
    });

    void sendContactEnquiryEmail({
      name: body.name,
      phone: body.phone,
      email: body.email || undefined,
      enquiryType: body.enquiryType,
      department: body.department || undefined,
      preferredAt: body.preferredAt || undefined,
      message: body.message,
    });

    return NextResponse.json({ success: true, id: record.id }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", issues: err.issues }, { status: 400 });
    }
    console.error("[contact POST]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
