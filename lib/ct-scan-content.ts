// CT Scan used to be one of three procedures under Diagnostics
// (lib/diagnostics-procedures.ts) — it's now its own standalone top-level
// service (app/services/ct-scan), so it gets its own small content file
// instead of living in that array. Content is unchanged from the original.

import type { ProcedurePage } from "./procedure-content";

export const ctScanService: ProcedurePage = {
  slug: "ct-scan",
  title: "CT Scan in Ranchi",
  metaDescription: "CT Scan in Ranchi at Hopewell Hospital including CT brain, chest, abdomen, CT KUB, trauma imaging and CT angiography.",
  category: "Diagnostics",
  eyebrow: "Diagnostics",
  heroTitle: "CT Scan in Ranchi",
  heroCopy: "Detailed cross-sectional imaging for accurate diagnosis, emergency evaluation and treatment planning.",
  heroCardKicker: "Hopewell Diagnostics",
  heroCardTitle: "CT Scan",
  heroCardText: "",
  heroImage: "/diagnostics/ct-scan-realistic.jpg",
  heroImageCaption: "Illustrative diagnostic-suite visual for website presentation.",
  doctorName: "",
  doctorSpecialtyMini: "",
  heroTags: ["CT Brain", "CT Chest", "CT KUB", "CT Angiography"],
  facts: [{ label: "Test", value: "CT Scan" }, { label: "Imaging", value: "Cross-Sectional" }, { label: "Speed", value: "Fast" }, { label: "Contrast*", value: "When Needed" }, { label: "Radiation", value: "Yes" }, { label: "Reporting", value: "Digital Ready" }],
  sections: [
  { id: "overview", kicker: "Overview", heading: "What is a CT Scan?", blocks: [
    { kind: "text", text: "Computed Tomography (CT) combines X-rays with computer processing to create detailed cross-sectional images. It is especially useful when doctors need rapid and precise information about the brain, chest, abdomen, bones, blood vessels or injuries." }
  ] },
  { id: "who", kicker: "Who May Need It?", heading: "When might your doctor advise CT?", blocks: [
    { kind: "bullets", items: ["Head injury, suspected bleeding or selected neurological symptoms.", "Chest infection, lung lesion or trauma.", "Abdominal pain, suspected appendicitis or other surgical conditions.", "Kidney or ureteric stones.", "Complex fractures.", "Selected cancer evaluation and follow-up.", "CT angiography for blood-vessel assessment."] }
  ] },
  { id: "uses", kicker: "Common CT Studies", heading: "CT examinations may include", blocks: [
    { kind: "grid", items: [{ title: "CT Brain", text: "Head injury, bleeding and selected neurological conditions." }, { title: "CT Chest", text: "Lung and chest evaluation." }, { title: "CT Abdomen & Pelvis", text: "Abdominal organs, acute pain and surgical diagnosis." }, { title: "CT KUB", text: "Detailed assessment of urinary stones." }, { title: "CT Angiography", text: "Detailed blood-vessel assessment when contrast is indicated." }, { title: "Trauma CT", text: "Rapid imaging in selected emergency situations." }] }
  ] },
  { id: "prep", kicker: "Preparation", heading: "Before your scan", blocks: [
    { kind: "bullets", items: ["Bring your doctor's prescription and previous imaging.", "Tell staff if you are pregnant or may be pregnant.", "Fasting may be required for selected contrast studies.", "Kidney-function testing may be required before IV contrast.", "Report previous contrast reactions, asthma or kidney disease."] }
  ] },
  { id: "procedure", kicker: "What Happens During CT?", heading: "The scan process", blocks: [
    { kind: "timeline", steps: [{ num: "01", title: "Registration & protocol", text: "Your prescription and clinical indication are reviewed." }, { num: "02", title: "Positioning", text: "You lie on a table that moves through the CT scanner." }, { num: "03", title: "Image acquisition", text: "Images are acquired rapidly; you may be asked to hold your breath briefly." }, { num: "04", title: "Reporting", text: "The acquired images are reviewed and reported according to clinical findings." }] }
  ] },
  { id: "contrast", kicker: "Contrast CT", heading: "Will contrast be required?", blocks: [
    { kind: "text", text: "Some CT scans are done without contrast. Others require oral or intravenous contrast to improve visualisation of organs or blood vessels. Contrast is used only when clinically appropriate." },
    { kind: "warning", text: "Always inform the team about previous contrast allergy, significant kidney disease, pregnancy or other relevant medical conditions." }
  ] },
  { id: "safety", kicker: "Radiation Safety", heading: "Is CT Scan safe?", blocks: [
    { kind: "text", text: "CT uses ionising radiation. Scans should be performed when clinically justified and with an appropriate protocol designed to obtain necessary diagnostic information while avoiding unnecessary exposure." }
  ] },
  { id: "cost", kicker: "Cost Guidance", heading: "CT Scan cost in Ranchi", blocks: [
    { kind: "cost", range: "Depends on Scan & Contrast", note: "Cost varies by body part, plain versus contrast scan, angiography protocol and reporting requirements.", insuranceTitle: "Insurance / TPA / Ayushman", insuranceNote: "Coverage depends on medical indication, admission status, policy or scheme rules and empanelment." }
  ] },
  { id: "why", kicker: "Why Hopewell", heading: "Why choose Hopewell for CT Scan?", blocks: [
    { kind: "grid", items: [{ title: "Hospital-based diagnostics", text: "Imaging can be correlated with OPD, emergency and inpatient care." }, { title: "Fast clinical pathway", text: "Suitable cases can move quickly from diagnosis to specialist treatment." }, { title: "Digital workflow", text: "Designed for digital reporting and future patient-access integration." }] }
  ] },
  { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
    { kind: "faq", items: [{ q: "How long does a CT Scan take?", a: "Image acquisition itself is often quick, but registration, preparation and contrast protocols may increase the total time." }, { q: "Can I eat before a CT Scan?", a: "Many scans need no fasting, while selected contrast studies may require it. Follow the instructions given for your specific scan." }, { q: "Is CT better than MRI?", a: "Neither is universally better. CT and MRI answer different clinical questions, and the correct test depends on the condition being evaluated." }] }
  ] }
  ],
  finalCta: { heading: "Need a CT Scan?", text: "Book your diagnostic appointment at Hopewell Hospital, Ranchi. Our team will guide you about preparation, prescription requirements and reporting." },
};
