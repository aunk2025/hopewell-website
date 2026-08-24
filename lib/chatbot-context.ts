import { prisma } from "@/lib/prisma";
import type { ProcedurePage } from "@/lib/procedure-content";

// Legacy (pre-restructure) procedure sets — still live for any slug not yet
// covered by the newer, richer per-specialty files below. Aliased on import
// since both files export identically-named `procedures`/`getProcedure`.
import { procedures as orthoLegacy } from "@/lib/orthopaedics-procedures";
import { procedures as entLegacy } from "@/lib/ent-procedures";

// Current per-specialty procedure/treatment content — same data that
// backs each /services/{specialty}/[procedure] page.
import { orthoProcedures } from "@/lib/ortho-procedures";
import { entTreatments } from "@/lib/ent-treatments";
import { diagnosticsProcedures } from "@/lib/diagnostics-procedures";
import { generalMedicineProcedures } from "@/lib/general-medicine-procedures";
import { ivfProcedures } from "@/lib/ivf-procedures";
import { paedsProcedures } from "@/lib/paeds-procedures";
import { spineProcedures } from "@/lib/spine-procedures";
import { surgeryProcedures } from "@/lib/surgery-procedures";
import { urologyProcedures } from "@/lib/urology-procedures";
import { vascularProcedures } from "@/lib/vascular-procedures";

import { HEALTH_PACKAGES } from "@/lib/health-packages";
import {
  AMBULANCE_PHONE,
  CONTACT_EMAIL,
  EMERGENCY_PHONE,
  ENQUIRY_TYPES,
  HOSPITAL_ADDRESS,
} from "@/lib/contact-config";

const CENTRES = [
  { name: "General, GI & Laparoscopic Surgery", page: "/services/surgeries" },
  { name: "Orthopaedics & Joint Replacement", page: "/services/orthopaedics" },
  { name: "IVF, Gynaecology & Women's Health", page: "/services/ivf" },
  { name: "Paediatrics & Neonatology", page: "/services/motherchild" },
  { name: "Urology", page: "/services/urology" },
  { name: "Vascular Surgery", page: "/services/vascular-surgery" },
  { name: "ENT", page: "/services/ent" },
  { name: "Spine", page: "/services/spine" },
  { name: "Diagnostics", page: "/services/diagnostics" },
  { name: "General Medicine", page: "/services/general-medicine" },
];

/** One line per rich (ProcedurePage-shaped) procedure. */
function formatRich(list: ProcedurePage[], basePath: string) {
  return list.map((p) => `- ${p.title}: ${p.metaDescription} (details: ${basePath}/${p.slug})`).join("\n");
}

/** One line per legacy ({ slug, name, overview }) procedure. */
function formatLegacy(list: { slug: string; name: string; overview: string }[], basePath: string) {
  return list.map((p) => `- ${p.name}: ${p.overview} (details: ${basePath}/${p.slug})`).join("\n");
}

/** Merge a rich list with its legacy predecessor the same way the live
 *  page does: rich entries win, legacy entries fill in any slug the rich
 *  set doesn't cover yet — so the chatbot never lists the same procedure
 *  twice or contradicts what the page actually shows. */
function mergeSection(rich: ProcedurePage[], legacy: { slug: string; name: string; overview: string }[], basePath: string) {
  const richSlugs = new Set(rich.map((p) => p.slug));
  const legacyOnly = legacy.filter((p) => !richSlugs.has(p.slug));
  return [formatRich(rich, basePath), formatLegacy(legacyOnly, basePath)].filter(Boolean).join("\n");
}

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

  const centreLines = CENTRES.map((c) => `- ${c.name} (page: ${c.page})`).join("\n");

  const packageLines = HEALTH_PACKAGES
    .map((p) => `- ${p.name}: ${p.text} Includes: ${p.items.join(", ")}.`)
    .join("\n");

  const enquiryTypeLines = ENQUIRY_TYPES.map((t) => `- ${t}`).join("\n");

  return `You are the official website assistant for Hopewell Hospital, Ranchi (Jharkhand, India). Answer visitor questions ONLY using the information below, which reflects the hospital's actual website content. Be warm, concise and helpful.

Hard rules:
- Never diagnose, prescribe or give medical advice. For any symptom, diagnosis or treatment question, say you can't provide medical advice and direct them to book an appointment or call the hospital.
- For emergencies, immediately give the emergency number: ${EMERGENCY_PHONE} (24x7).
- If asked something not covered by the information below, say you're not sure and suggest calling the hospital or using the "Book an Appointment" / "Contact Us" pages, rather than guessing.
- Keep answers short and easy to read (a few sentences, or a short list).
- When relevant, mention the specific page a visitor can look at (e.g. "/services/orthopaedics/tkr") or suggest booking at /appointment.

HOSPITAL INFO
- Name: New Hopewell Hospital
- Address: ${HOSPITAL_ADDRESS}
- Phone / Emergency (24x7): ${EMERGENCY_PHONE}
- Ambulance: ${AMBULANCE_PHONE}
- Email: ${CONTACT_EMAIL}
- Appointment booking page: /appointment
- Full doctor list: /doctors
- Full services list: /services
- Health packages page: /health-packages

CENTRES OF EXCELLENCE
${centreLines}

CURRENT DOCTORS (available)
${doctorLines}

HEALTH CHECKUP PACKAGES (/health-packages)
${packageLines}

GENERAL, GI & LAPAROSCOPIC SURGERY (/services/surgeries)
${formatRich(surgeryProcedures, "/services/surgeries")}

ORTHOPAEDICS & JOINT REPLACEMENT (/services/orthopaedics)
${mergeSection(orthoProcedures, orthoLegacy, "/services/orthopaedics")}

IVF, GYNAECOLOGY & WOMEN'S HEALTH (/services/ivf)
${formatRich(ivfProcedures, "/services/ivf")}

PAEDIATRICS & NEONATOLOGY (/services/motherchild)
${formatRich(paedsProcedures, "/services/motherchild")}

UROLOGY (/services/urology)
${formatRich(urologyProcedures, "/services/urology")}

VASCULAR SURGERY (/services/vascular-surgery)
${formatRich(vascularProcedures, "/services/vascular-surgery")}

ENT (/services/ent)
${mergeSection(entTreatments, entLegacy, "/services/ent")}

SPINE (/services/spine)
${formatRich(spineProcedures, "/services/spine")}

DIAGNOSTICS (/services/diagnostics)
${formatRich(diagnosticsProcedures, "/services/diagnostics")}

GENERAL MEDICINE (/services/general-medicine)
${formatRich(generalMedicineProcedures, "/services/general-medicine")}

CONTACT US (/contact)
The Contact Us page routes enquiries by type. If a visitor asks about any of the following, point them to /contact:
${enquiryTypeLines}
`;
}
