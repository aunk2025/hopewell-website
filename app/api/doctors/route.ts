import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { auth } from "@/lib/auth";

const createSchema = z.object({
  name:           z.string().min(2),
  slug:           z.string().min(2).regex(/^[a-z0-9-]+$/),
  specialty:      z.string().min(2),
  qualifications: z.string().min(2),
  experience:     z.number().int().min(0),
  bio:            z.string().min(10),
  imageUrl:       z.string().default(""),
  phone:          z.string().default(""),
  email:          z.string().default(""),
  available:      z.boolean().default(true),
});

/* GET /api/doctors — public list (available only), or full list for signed-in admins */
export async function GET() {
  const session = await auth();
  const doctors = await prisma.doctor.findMany({
    where: session?.user ? {} : { available: true },
    orderBy: [{ specialty: "asc" }, { experience: "desc" }],
  });
  return NextResponse.json({ doctors });
}

/* POST /api/doctors — admin: add doctor */
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = createSchema.parse(await req.json());
  const doctor = await prisma.doctor.create({ data });
  return NextResponse.json({ success: true, doctor }, { status: 201 });
}

/* PATCH /api/doctors — admin: update doctor */
export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, ...data } = await req.json();
  const doctor = await prisma.doctor.update({ where: { id: Number(id) }, data });
  return NextResponse.json({ success: true, doctor });
}

/* DELETE /api/doctors — admin: deactivate doctor */
export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  await prisma.doctor.update({ where: { id: Number(id) }, data: { available: false } });
  return NextResponse.json({ success: true });
}
