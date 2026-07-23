import nodemailer from "nodemailer";

/* ── Transporter ── */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM = process.env.SMTP_FROM ?? "Hopewell Hospital <noreply@hopewellhospital.in>";
const HOSPITAL_EMAIL = process.env.HOSPITAL_EMAIL ?? "admin@hopewellhospital.in";
const emailEnabled = !!(process.env.SMTP_USER && process.env.SMTP_PASS);

/* ── Send helper ── */
async function send(opts: nodemailer.SendMailOptions) {
  if (!emailEnabled) {
    console.log("[email] SMTP not configured — skipping:", opts.subject);
    return;
  }
  try {
    await transporter.sendMail({ from: FROM, ...opts });
  } catch (err) {
    console.error("[email] Failed to send:", err);
  }
}

/* ── Appointment confirmation to patient ── */
export async function sendAppointmentConfirmation(data: {
  patientName: string;
  patientEmail: string;
  refNumber: string;
  doctorName: string;
  appointmentDate: string;
  timeSlot: string;
}) {
  await send({
    to: data.patientEmail,
    subject: `Appointment Confirmed — ${data.refNumber} | Hopewell Hospital`,
    html: `
      <div style="font-family:sans-serif;max-width:540px;margin:auto;background:#f8fffe;border:1px solid #e0f5f5;border-radius:12px;overflow:hidden;">
        <div style="background:#061822;padding:24px 32px;">
          <h1 style="color:#57e6e6;margin:0;font-size:20px;font-weight:900;letter-spacing:.08em;">HOPEWELL HOSPITAL</h1>
          <p style="color:#fff;margin:4px 0 0;font-size:12px;opacity:.6;">Ranchi, Jharkhand</p>
        </div>
        <div style="padding:32px;">
          <h2 style="color:#061822;margin:0 0 8px;">Appointment Confirmed ✓</h2>
          <p style="color:#475569;">Dear <strong>${data.patientName}</strong>,</p>
          <p style="color:#475569;">Your appointment has been booked successfully. Here are your details:</p>
          <table style="width:100%;border-collapse:collapse;margin:20px 0;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e0f5f5;">
            <tr><td style="padding:12px 16px;background:#edf9f8;font-weight:700;color:#0d7377;width:40%;">Ref No.</td><td style="padding:12px 16px;font-weight:900;color:#061822;">${data.refNumber}</td></tr>
            <tr><td style="padding:12px 16px;background:#edf9f8;font-weight:700;color:#0d7377;">Doctor</td><td style="padding:12px 16px;">${data.doctorName}</td></tr>
            <tr><td style="padding:12px 16px;background:#edf9f8;font-weight:700;color:#0d7377;">Date</td><td style="padding:12px 16px;">${data.appointmentDate}</td></tr>
            <tr><td style="padding:12px 16px;background:#edf9f8;font-weight:700;color:#0d7377;">Time</td><td style="padding:12px 16px;">${data.timeSlot}</td></tr>
          </table>
          <p style="color:#475569;font-size:14px;">Please arrive 15 minutes before your scheduled time. Carry a valid ID and any previous medical records.</p>
          <p style="color:#475569;font-size:14px;"><strong>Emergency:</strong> +91 72819 90530</p>
        </div>
      </div>
    `,
  });
}

/* ── New appointment alert to hospital ── */
export async function sendAppointmentAlert(data: {
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  refNumber: string;
  doctorName: string;
  appointmentDate: string;
  timeSlot: string;
  reason: string;
}) {
  await send({
    to: HOSPITAL_EMAIL,
    subject: `New Appointment — ${data.refNumber} — ${data.patientName}`,
    html: `
      <h2>New Appointment Booking</h2>
      <table style="border-collapse:collapse;width:100%;">
        <tr><td style="padding:8px;font-weight:bold;">Ref</td><td style="padding:8px;">${data.refNumber}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Patient</td><td style="padding:8px;">${data.patientName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${data.patientPhone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.patientEmail}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Doctor</td><td style="padding:8px;">${data.doctorName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Date/Time</td><td style="padding:8px;">${data.appointmentDate} at ${data.timeSlot}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Reason</td><td style="padding:8px;">${data.reason}</td></tr>
      </table>
    `,
  });
}

/* ── Contact message alert to hospital ── */
export async function sendContactAlert(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  await send({
    to: HOSPITAL_EMAIL,
    subject: `Website Contact: ${data.subject} — from ${data.name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>From:</strong> ${data.name} &lt;${data.email}&gt;</p>
      <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <hr/>
      <p>${data.message}</p>
    `,
  });
}
