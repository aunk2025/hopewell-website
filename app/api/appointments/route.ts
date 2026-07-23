import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { format } from "date-fns";
import { sendAppointmentConfirmation, sendAppointmentAlert } from "@/lib/email";
import { auth } from "@/lib/auth";

/* ── Validation schema ── */
const createSchema = z.object({
  patientName:  z.string().min(2).max(100),
  patientPhone: z.string().min(7).max(20),
  patientEmail: z.string().email(),
  reason:       z.string().min(3).max(500),
  appointmentDate: z.string().datetime({ offset: true }),
  timeSlot:     z.string().min(1),
  doctorId:     z.number().int().optional(),
});

/* ── Generate reference number ── */
async function generateRef(): Promise<string> {
  const count = await prisma.appointment.count();
  const year  = new Date().getFullYear();
  return `HW-${year}-${String(count + 1).padStart(4, "0")}`;
}

/* ─────────────────────────────────────────────────────────────────── */
/* POST /api/appointments — create new booking                         */
/* ─────────────────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = createSchema.parse(body);

    const refNumber = await generateRef();
    const doctor = data.doctorId
      ? await prisma.doctor.findUnique({ where: { id: data.doctorId } })
      : null;

    const appointment = await prisma.appointment.create({
      data: {
        refNumber,
        patientName:  data.patientName,
        patientPhone: data.patientPhone,
        patientEmail: data.patientEmail,
        reason:       data.reason,
        appointmentDate: new Date(data.appointmentDate),
        timeSlot:     data.timeSlot,
        doctorId:     data.doctorId ?? null,
      },
      include: { doctor: true },
    });

    const dateStr  = format(appointment.appointmentDate, "EEEE, d MMMM yyyy");
    const doctorName = doctor?.name ?? "Any Available Doctor";

    /* Fire emails (non-blocking) */
    void sendAppointmentConfirmation({
      patientName:     data.patientName,
      patientEmail:    data.patientEmail,
      refNumber,
      doctorName,
      appointmentDate: dateStr,
      timeSlot:        data.timeSlot,
    });
    void sendAppointmentAlert({
      patientName:     data.patientName,
      patientPhone:    data.patientPhone,
      patientEmail:    data.patientEmail,
      refNumber,
      doctorName,
      appointmentDate: dateStr,
      timeSlot:        data.timeSlot,
      reason:          data.reason,
    });

    return NextResponse.json({ success: true, refNumber, id: appointment.id }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", issues: err.issues }, { status: 400 });
    }
    console.error("[appointments POST]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/* ─────────────────────────────────────────────────────────────────── */
/* GET /api/appointments — admin: list all (requires auth)             */
/* ─────────────────────────────────────────────────────────────────── */
export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const page   = Math.max(1, Number(searchParams.get("page") ?? 1));
  const limit  = 20;

  const where = status && status !== "ALL" ? { status: status as "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED" } : {};

  const [appointments, total] = await Promise.all([
    prisma.appointment.findMany({
      where,
      include: { doctor: { select: { name: true, specialty: true } } },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.appointment.count({ where }),
  ]);

  return NextResponse.json({ appointments, total, page, pages: Math.ceil(total / limit) });
}

/* ─────────────────────────────────────────────────────────────────── */
/* PATCH /api/appointments — admin: update status                      */
/* ─────────────────────────────────────────────────────────────────── */
export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, status, notes } = await req.json();
  const updated = await prisma.appointment.update({
    where: { id: Number(id) },
    data: { status, notes },
  });
  return NextResponse.json({ success: true, appointment: updated });
}
