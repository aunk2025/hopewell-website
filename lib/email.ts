import nodemailer from "nodemailer";

/* ── Transporter ──
 * Port 465 is Gmail's implicit-TLS port and needs secure:true; port 587
 * (STARTTLS) needs secure:false. Derive it from the port instead of
 * hardcoding one, so SMTP_PORT can be switched without a code change. */
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.gmail.com",
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM = process.env.SMTP_FROM ?? "Hopewell Hospital <noreply@hopewellhospital.in>";
const HOSPITAL_EMAIL = process.env.HOSPITAL_EMAIL ?? "info@hopewellhospital.in";
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
      <div style="font-family:sans-serif;max-width:540px;margin:auto;background:#faf5ef;border:1px solid #f1dec9;border-radius:12px;overflow:hidden;">
        <div style="background:#2a2119;padding:24px 32px;">
          <h1 style="color:#c8b6a6;margin:0;font-size:20px;font-weight:900;letter-spacing:.08em;">HOPEWELL HOSPITAL</h1>
          <p style="color:#fff;margin:4px 0 0;font-size:12px;opacity:.6;">Ranchi, Jharkhand</p>
        </div>
        <div style="padding:32px;">
          <h2 style="color:#2a2119;margin:0 0 8px;">Appointment Confirmed ✓</h2>
          <p style="color:#475569;">Dear <strong>${data.patientName}</strong>,</p>
          <p style="color:#475569;">Your appointment has been booked successfully. Here are your details:</p>
          <table style="width:100%;border-collapse:collapse;margin:20px 0;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #f1dec9;">
            <tr><td style="padding:12px 16px;background:#faf5ef;font-weight:700;color:#624133;width:40%;">Ref No.</td><td style="padding:12px 16px;font-weight:900;color:#2a2119;">${data.refNumber}</td></tr>
            <tr><td style="padding:12px 16px;background:#faf5ef;font-weight:700;color:#624133;">Doctor</td><td style="padding:12px 16px;">${data.doctorName}</td></tr>
            <tr><td style="padding:12px 16px;background:#faf5ef;font-weight:700;color:#624133;">Date</td><td style="padding:12px 16px;">${data.appointmentDate}</td></tr>
            <tr><td style="padding:12px 16px;background:#faf5ef;font-weight:700;color:#624133;">Time</td><td style="padding:12px 16px;">${data.timeSlot}</td></tr>
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

/* ── Contact page enquiry → hospital ──
 * Recipient is intentionally hard-coded here (never taken from the
 * request body) so a client can never redirect where enquiries go. */
const CONTACT_RECIPIENT = "hopewellranchi@gmail.com";

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEnquiryEmail(data: {
  name: string;
  phone: string;
  email?: string;
  enquiryType: string;
  department?: string;
  preferredAt?: string;
  message: string;
}) {
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 16px 8px 0;font-weight:700;color:#624133;white-space:nowrap;">${label}</td><td style="padding:8px 0;color:#2a2119;">${escapeHtml(value)}</td></tr>`;

  await send({
    to: CONTACT_RECIPIENT,
    subject: `[Hopewell Website] ${data.enquiryType} - ${data.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:auto;background:#faf5ef;border:1px solid #f1dec9;border-radius:12px;overflow:hidden;">
        <div style="background:#2a2119;padding:20px 28px;">
          <h1 style="color:#c8b6a6;margin:0;font-size:18px;font-weight:900;letter-spacing:.06em;">HOPEWELL HOSPITAL — WEBSITE ENQUIRY</h1>
        </div>
        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${row("Date &amp; Time", submittedAt)}
            ${row("Enquiry Type", data.enquiryType)}
            ${row("Full Name", data.name)}
            ${row("Mobile Number", data.phone)}
            ${row("Email Address", data.email || "Not provided")}
            ${row("Department / Service", data.department || "Not specified")}
            ${row("Preferred Date / Time", data.preferredAt || "Not specified")}
          </table>
          <p style="margin:20px 0 4px;font-weight:700;color:#624133;">Message</p>
          <p style="margin:0;color:#2a2119;white-space:pre-wrap;line-height:1.6;">${escapeHtml(data.message)}</p>
          <p style="margin-top:24px;color:#8a7869;font-size:12px;">Source: Hopewell Hospital Website</p>
        </div>
      </div>
    `,
  });
}
