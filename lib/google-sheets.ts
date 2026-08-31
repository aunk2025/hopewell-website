// Scoped, Sheets-only package instead of the monolithic `googleapis` —
// the latter bundles generated types for every Google API and was pushing
// the Next.js build's type-checker past its memory limit.
import { auth as googleAuthPlus, sheets } from "@googleapis/sheets";

// Server-side only — the service account key must never reach the browser.
// Mirrors the graceful "not configured yet" fallback used by lib/email.ts:
// if credentials aren't set, this silently no-ops (logs to console) instead
// of breaking the form it's attached to.
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

// A real service account key always contains a PEM header — checking for
// it (rather than a bare truthy check) keeps the placeholder value in
// .env.local from being mistaken for real credentials and attempted
// against the live API, where it would fail loudly instead of skipping.
const sheetsEnabled = !!(
  CLIENT_EMAIL &&
  PRIVATE_KEY?.includes("BEGIN PRIVATE KEY") &&
  SPREADSHEET_ID &&
  !SPREADSHEET_ID.startsWith("your-")
);

/** Appends one row to the given "Tab!A1"-style range, prefixing it with an
 *  auto-computed "Sr No" based on how many rows already exist above the
 *  configured start row. Shared by every sheet-backed form on the site —
 *  each just supplies its own range and row values. */
async function appendRow(range: string, values: (string | number)[], label: string) {
  if (!sheetsEnabled) {
    console.log(`[google-sheets] Not configured — skipping ${label} row.`);
    return;
  }

  const match = range.match(/^(.+)!([A-Z]+)(\d+)$/);
  const sheetName = match?.[1] ?? "Sheet1";
  const startRow = match ? Number(match[3]) : 1;

  try {
    const auth = new googleAuthPlus.GoogleAuth({
      credentials: { client_email: CLIENT_EMAIL, private_key: PRIVATE_KEY },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const client = sheets({ version: "v4", auth });

    // Column A already holds title/header rows above the data (per
    // startRow) — count how many rows are populated so far to derive the
    // next "Sr No", instead of leaving that column blank or colliding.
    const existing = await client.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:A`,
    });
    const existingRows = existing.data.values?.length ?? startRow - 1;
    const serialNo = existingRows - (startRow - 1) + 1;

    await client.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[serialNo, ...values]] },
    });
  } catch (err) {
    // Never let a Sheets outage break the actual submission — it's already
    // saved to the database and emailed by this point.
    console.error(`[google-sheets] Failed to append ${label} row:`, err);
  }
}

function nowIST() {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

// Contact-form enquiries — tab/range set by GOOGLE_SHEETS_RANGE.
const ENQUIRIES_RANGE = process.env.GOOGLE_SHEETS_RANGE ?? "Sheet1!A1";

export async function appendEnquiryToSheet(data: {
  name: string;
  phone: string;
  email?: string;
  enquiryType: string;
  department?: string;
  preferredAt?: string;
  message: string;
}) {
  await appendRow(
    ENQUIRIES_RANGE,
    [
      nowIST(),
      data.enquiryType,
      data.name,
      data.phone,
      data.email || "",
      data.department || "",
      data.preferredAt || "",
      data.message,
    ],
    "enquiry"
  );
}

// Appointment bookings — separate tab in the same spreadsheet. Create a tab
// named "Appointments" (or set GOOGLE_SHEETS_APPOINTMENTS_RANGE to match
// whatever you name it) with a header row: Sr No | Date | Ref Number |
// Patient Name | Phone | Email | Doctor | Appointment Date | Time Slot | Reason
const APPOINTMENTS_RANGE = process.env.GOOGLE_SHEETS_APPOINTMENTS_RANGE ?? "Appointments!A1";

export async function appendAppointmentToSheet(data: {
  refNumber: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  doctorName: string;
  appointmentDate: string;
  timeSlot: string;
  reason: string;
}) {
  await appendRow(
    APPOINTMENTS_RANGE,
    [
      nowIST(),
      data.refNumber,
      data.patientName,
      data.patientPhone,
      data.patientEmail,
      data.doctorName,
      data.appointmentDate,
      data.timeSlot,
      data.reason,
    ],
    "appointment"
  );
}
