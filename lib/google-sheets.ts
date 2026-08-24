// Scoped, Sheets-only package instead of the monolithic `googleapis` —
// the latter bundles generated types for every Google API and was pushing
// the Next.js build's type-checker past its memory limit.
import { auth as googleAuthPlus, sheets } from "@googleapis/sheets";

// Server-side only — the service account key must never reach the browser.
// Mirrors the graceful "not configured yet" fallback used by lib/email.ts:
// if credentials aren't set, this silently no-ops (logs to console) instead
// of breaking the contact form.
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
// Sheet/tab + starting cell to append after. Change GOOGLE_SHEETS_RANGE if
// the tab isn't named "Sheet1" (e.g. rename it to "Enquiries" and set
// GOOGLE_SHEETS_RANGE="Enquiries!A1").
const RANGE = process.env.GOOGLE_SHEETS_RANGE ?? "Sheet1!A1";

// Parsed once so we can read back how many rows already exist (for the
// "Sr No" column) — e.g. "Sheet1!A3" → sheet "Sheet1", data starting at
// row 3 (rows 1–2 reserved for a title/header).
const RANGE_MATCH = RANGE.match(/^(.+)!([A-Z]+)(\d+)$/);
const SHEET_NAME = RANGE_MATCH?.[1] ?? "Sheet1";
const START_ROW = RANGE_MATCH ? Number(RANGE_MATCH[3]) : 1;

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

export async function appendEnquiryToSheet(data: {
  name: string;
  phone: string;
  email?: string;
  enquiryType: string;
  department?: string;
  preferredAt?: string;
  message: string;
}) {
  if (!sheetsEnabled) {
    console.log("[google-sheets] Not configured — skipping enquiry row for:", data.name);
    return;
  }

  try {
    const auth = new googleAuthPlus.GoogleAuth({
      credentials: { client_email: CLIENT_EMAIL, private_key: PRIVATE_KEY },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const client = sheets({ version: "v4", auth });

    // Column A already holds title/header rows above the data (per
    // START_ROW) — count how many rows are populated so far to derive the
    // next "Sr No", instead of leaving that column blank or colliding.
    const existing = await client.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:A`,
    });
    const existingRows = existing.data.values?.length ?? START_ROW - 1;
    const serialNo = existingRows - (START_ROW - 1) + 1;

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    await client.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          serialNo,
          submittedAt,
          data.enquiryType,
          data.name,
          data.phone,
          data.email || "",
          data.department || "",
          data.preferredAt || "",
          data.message,
        ]],
      },
    });
  } catch (err) {
    // Never let a Sheets outage break the actual enquiry submission —
    // it's already saved to the database and emailed by this point.
    console.error("[google-sheets] Failed to append row:", err);
  }
}
