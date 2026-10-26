// Diabetology used to be the "Diabetes & Hypertension Care" entry under
// General Medicine (lib/general-medicine-procedures.ts) — it's now its own
// standalone top-level service (app/services/diabetology), matching the
// Diabetology service card on the Services page. Clinical content carried
// over unchanged; only the SEO fields and a couple of headings were
// adapted for the service's own branding and target keywords.

import type { ProcedurePage } from "./procedure-content";

export const diabetologyService: ProcedurePage = {
  slug: "diabetology",
  title: "Diabetology & Diabetes Care in Ranchi",
  seoTitle: "Diabetologist in Ranchi | Diabetes & Hypertension Care",
  metaDescription: "Looking for a diabetologist in Ranchi? Get structured diabetes treatment and hypertension care in Jharkhand, including HbA1c monitoring, blood pressure control and complication screening at Hopewell Hospital.",
  category: "Diabetology",
  eyebrow: "Diabetology",
  heroTitle: "Diabetology & Diabetes Care in Ranchi",
  heroCopy: "Integrated management of blood sugar and blood pressure to reduce the long-term risk of heart disease, stroke, kidney disease and other complications.",
  heroCardKicker: "Hopewell Diabetology",
  heroCardTitle: "Metabolic & Blood Pressure Care",
  heroCardText: "HbA1c monitoring, blood pressure control, kidney protection, cardiovascular risk reduction and lifestyle management.",
  heroImage: "/diabetology-diabetes-care-ranchi-hopewell-hospital.webp",
  heroImageCaption: "Diabetology and diabetes care at Hopewell Hospital, Ranchi.",
  doctorName: "Dr. MD Arif Tauheed",
  doctorSpecialtyMini: "General Medicine & Preventive Healthcare",
  heroTags: ["HbA1c", "Blood pressure", "Kidney protection", "Heart risk"],
  facts: [{ label: "Conditions", value: "Diabetes + Hypertension" }, { label: "Monitoring", value: "HbA1c / BP" }, { label: "Kidney", value: "Regular Review" }, { label: "Heart Risk", value: "Integrated" }, { label: "Lifestyle", value: "Essential" }, { label: "Follow-Up", value: "Long Term" }],
  sections: [
  { id: "overview", kicker: "Overview", heading: "Why manage diabetes and hypertension together?", blocks: [
    { kind: "text", text: "Diabetes and high blood pressure commonly occur together and significantly increase the risk of heart disease, stroke, kidney disease and eye complications. Coordinated control of both conditions offers better long-term protection than treating either one in isolation." }
  ] },
  { id: "symptoms", kicker: "Symptoms", heading: "Many patients have no symptoms", blocks: [
    { kind: "twocol", boxes: [{ title: "Possible diabetes symptoms", items: ["Excess thirst.", "Frequent urination.", "Unexplained weight loss.", "Blurred vision.", "Slow-healing wounds."] }, { title: "Possible hypertension symptoms", items: ["Often no symptoms.", "Headache in some patients.", "Dizziness.", "Breathlessness when severe.", "Chest discomfort requiring urgent review."] }] }
  ] },
  { id: "diagnosis", kicker: "Diagnosis", heading: "How are diabetes and hypertension assessed?", blocks: [
    { kind: "text", text: "Evaluation may include fasting or random blood sugar, HbA1c, blood pressure measurements, kidney tests, urine protein testing, lipid profile and additional cardiovascular assessment when indicated." }
  ] },
  { id: "treatment", kicker: "Treatment", heading: "Control numbers—and protect organs", blocks: [
    { kind: "grid", items: [{ title: "Medicines", text: "Individualised blood pressure and glucose-lowering treatment." }, { title: "Weight Management", text: "Even modest weight reduction can improve both conditions." }, { title: "Diet", text: "Lower salt, balanced carbohydrates and adequate fibre." }, { title: "Exercise", text: "Regular activity improves cardiovascular and metabolic health." }, { title: "Kidney Protection", text: "Urine protein and kidney function should be monitored." }, { title: "Eye & Foot Review", text: "Diabetes-related complications should be screened periodically." }] }
  ] },
  { id: "targets", kicker: "Monitoring Targets", heading: "Targets must be individualised", blocks: [
    { kind: "text", text: "Blood pressure and HbA1c goals differ according to age, kidney function, pregnancy, cardiovascular disease and risk of low blood sugar. The treating physician should define safe targets for each patient." }
  ] },
  { id: "urgent", kicker: "Urgent Warning Signs", heading: "Seek urgent medical care for", blocks: [
    { kind: "bullets", items: ["Chest pain or severe breathlessness.", "New weakness, facial droop or speech difficulty.", "Very high blood pressure with severe headache or neurological symptoms.", "Severe low blood sugar with confusion or unconsciousness.", "Very high blood sugar with vomiting or dehydration."] }
  ] },
  { id: "cost", kicker: "Cost Guidance", heading: "Diabetes & hypertension care cost in Ranchi", blocks: [
    { kind: "cost", range: "Depends on Tests & Follow-Up", note: "Cost varies by consultation, HbA1c, kidney tests, lipid profile, ECG and complication screening.", insuranceTitle: "Insurance / TPA", insuranceNote: "Outpatient monitoring coverage varies, while admissions for complications may be covered depending on policy." }
  ] },
  { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
    { kind: "faq", items: [
      { q: "Do I need to see a diabetologist, or can General Medicine help?", a: "Many patients with diabetes and related conditions such as hypertension can be managed through structured General Medicine care, which covers diagnosis, monitoring, medicines and complication screening. More complex or difficult-to-control cases may need additional specialist input." },
      { q: "Can diabetes and hypertension be reversed?", a: "Some patients can greatly improve control through weight loss and lifestyle change, but long-term medical monitoring is still important." },
      { q: "How often should HbA1c be checked?", a: "Frequency depends on control and treatment changes, often every few months when adjustment is needed." },
      { q: "Why check kidneys if I feel fine?", a: "Both diabetes and hypertension can damage kidneys silently, so early screening is important." },
    ] }
  ] },
  { id: "doctor", kicker: "Doctor", heading: "Meet the medicine specialist", blocks: [
    { kind: "doctor", name: "Dr. MD Arif Tauheed", specialty: "General Medicine & Preventive Healthcare • Hopewell Hospital, Ranchi", focus: "" }
  ] }
  ],
  finalCta: { heading: "Need a diabetologist in Ranchi?", text: "Book a General Medicine consultation with Dr. MD Arif Tauheed at Hopewell Hospital, Ranchi for structured diabetes and hypertension care." },
};
