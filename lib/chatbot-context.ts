import { prisma } from "@/lib/prisma";
import { procedures as orthoProcedures } from "@/lib/orthopaedics-procedures";
import { procedures as entProcedures } from "@/lib/ent-procedures";

const CENTRES = [
  { name: "Neurosciences", text: "Comprehensive stroke care, neurology and neurosurgery services.", page: "/services/neurosciences" },
  { name: "Surgical Excellence", text: "Precision-led general, laparoscopic and gastrointestinal surgery.", page: "/services" },
  { name: "Orthopaedics", text: "Joint preservation, trauma care and advanced mobility restoration.", page: "/services" },
  { name: "Mother & Child", text: "Sensitive obstetric, gynaecological, paediatric and newborn care.", page: "/services" },
  { name: "Critical Care (ICU)", text: "Continuous monitoring, rapid escalation and specialist-led intensive care.", page: "/services/icu" },
  { name: "Emergency Medicine", text: "Rapid assessment and coordinated response 24x7.", page: "/services/emergencymedicine" },
  { name: "IVF", text: "Personalized fertility evaluation and assisted reproduction.", page: "/services" },
  { name: "ENT", text: "Comprehensive ear, nose and throat diagnostics, treatment and surgical care.", page: "/services" },
];

/** Builds a system prompt describing Hopewell Hospital's real site content,
 *  so the chatbot only answers from what's actually on the website. */
export async function buildSiteContext(): Promise<string> {
  let doctorLines = "Doctor list is temporarily unavailable.";
  try {
    const doctors = await prisma.doctor.findMany({
      where: { available: true },
      orderBy: [{ specialty: "asc" }],
    });
    doctorLines = doctors
      .map((d) => `- ${d.name.trim()} — ${d.specialty} (${d.qualifications}, ${d.experience}+ yrs experience)`)
      .join("\n");
  } catch {
    // DB unreachable; fall back to the generic line above rather than failing the whole chat.
  }

  const orthoLines = orthoProcedures
    .map((p) => `- ${p.name}: ${p.overview} (details: /services/orthopaedics/${p.slug})`)
    .join("\n");

  const entLines = entProcedures
    .map((p) => `- ${p.name}: ${p.overview} (details: /services/ent/${p.slug})`)
    .join("\n");

  const centreLines = CENTRES.map((c) => `- ${c.name}: ${c.text} (page: ${c.page})`).join("\n");

  return `You are the official website assistant for Hopewell Hospital, Ranchi (Jharkhand, India). Answer visitor questions ONLY using the information below, which reflects the hospital's actual website content. Be warm, concise and helpful.

Hard rules:
- Never diagnose, prescribe or give medical advice. For any symptom, diagnosis or treatment question, say you can't provide medical advice and direct them to book an appointment or call the hospital.
- For emergencies, immediately give the emergency number: +91 72819 90530 (24x7).
- If asked something not covered by the information below, say you're not sure and suggest calling the hospital or using the "Book an Appointment" page, rather than guessing.
- Keep answers short and easy to read (a few sentences, or a short list).
- When relevant, mention the specific page a visitor can look at (e.g. "/services/orthopaedics/tkr") or suggest booking at /appointment.

HOSPITAL INFO
- Name: New Hopewell Hospital
- Address: Hazari Baug Road, Tharpakna, Ranchi, Jharkhand 834001
- Phone / Emergency (24x7): +91 72819 90530
- Email: hopewellranchi@gmail.com
- Appointment booking page: /appointment
- Full doctor list: /doctors
- Full services list: /services

CENTRES OF EXCELLENCE
${centreLines}

CURRENT DOCTORS (available)
${doctorLines}

ORTHOPAEDIC PROCEDURES (detail pages)
${orthoLines}

ENT PROCEDURES (detail pages)
${entLines}
`;
}
