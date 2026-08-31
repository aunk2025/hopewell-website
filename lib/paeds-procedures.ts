// AUTO-GENERATED from procedure page content provided by the client.
// See lib/procedure-content.ts for the shared block/section/page schema.
// Doctor placeholder ("Dr XXX") in the source files was resolved to the
// live Paediatrics specialist (Dr. Shakti Das) already in the database.

import type { ContentBlock, ContentSection, ProcedurePage } from "./procedure-content";

export type PaedsBlock = ContentBlock;
export type PaedsSection = ContentSection;
export type PaedsProcedure = ProcedurePage;

export const paedsProcedures: PaedsProcedure[] = [
  {
    slug: "newborn-care",
    title: "Newborn Care in Ranchi",
    metaDescription: "Newborn care in Ranchi at Hopewell Hospital including routine newborn assessment, breastfeeding support, jaundice monitoring, vaccination, newborn screening, weight checks, danger signs, NICU referral and consultation with Dr. Shakti Das.",
    category: "Paediatrics & Neonatology",
    eyebrow: "Paediatrics & Neonatology",
    heroTitle: "Newborn Care in Ranchi",
    heroCopy: "Comprehensive care for babies from birth through the early newborn period, including immediate assessment, feeding support, jaundice monitoring, vaccination, newborn screening, weight checks and early identification of babies who need NICU support.",
    heroCardKicker: "From first breath to first follow-up",
    heroCardTitle: "Newborn Care at Hopewell",
    heroCardText: "Birth-room assessment, temperature and feeding support, newborn examination, jaundice screening, vaccination, discharge counselling and structured follow-up with neonatal escalation when required.",
    doctorName: "Dr. Shakti Das",
    doctorSpecialtyMini: "Paediatrics & Neonatology",
    heroTags: ["Newborn examination", "Breastfeeding support", "Jaundice care", "NICU backup"],
    facts: [{ label: "Age Group", value: "Birth to 28 Days" }, { label: "First Check", value: "At Birth" }, { label: "Feeding", value: "Breastfeeding Support" }, { label: "Screening", value: "Jaundice + Newborn Tests" }, { label: "Vaccines", value: "As Per Schedule" }, { label: "Escalation", value: "NICU When Needed" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What does newborn care include?", blocks: [
      { kind: "text", text: "Newborn care begins immediately after delivery and continues through the first 28 days of life. The focus is on breathing, temperature, feeding, infection prevention, jaundice surveillance, growth, vaccination and early detection of conditions that may need specialist or NICU care." }
    ] },
    { id: "birth-care", kicker: "Care At Birth", heading: "The first minutes and hours matter", blocks: [
      { kind: "grid", items: [{ title: "Immediate Assessment", text: "Breathing, heart rate, colour, tone and overall transition are checked after birth." }, { title: "Warmth", text: "Skin-to-skin contact and temperature protection help reduce hypothermia." }, { title: "Early Feeding", text: "Breastfeeding is encouraged early when mother and baby are clinically stable." }, { title: "Identity & Safety", text: "Newborn identification and safe handover processes are essential." }, { title: "Vitamin / Prophylaxis", text: "Routine newborn preventive measures are given according to clinical protocol." }, { title: "Risk Review", text: "Prematurity, low birth weight, maternal diabetes, infection risk and difficult delivery are noted early." }] }
    ] },
    { id: "examination", kicker: "Newborn Examination", heading: "What does the paediatrician check?", blocks: [
      { kind: "bullets", items: ["Breathing pattern and oxygenation.", "Heart sounds and circulation.", "Head, face, mouth and palate.", "Spine, hips, limbs and movement.", "Abdomen and umbilical cord.", "Genitalia and passage of urine/stool.", "Skin colour, rashes and birth marks.", "Neurological tone and newborn reflexes.", "Birth weight, length and head circumference."] }
    ] },
    { id: "feeding", kicker: "Breastfeeding & Feeding", heading: "Feeding support is part of medical care", blocks: [
      { kind: "twocol", boxes: [{ title: "Breastfeeding support", items: ["Positioning and latch assessment.", "Feeding frequency guidance.", "Recognition of effective swallowing.", "Breast and nipple comfort advice.", "Support after caesarean delivery."] }, { title: "When feeding needs review", items: ["Baby is too sleepy to feed.", "Poor suck or weak feeding.", "Repeated vomiting.", "Low urine output.", "Excessive weight loss.", "Signs of dehydration."] }] }
    ] },
    { id: "jaundice", kicker: "Newborn Jaundice", heading: "Why does a newborn look yellow?", blocks: [
      { kind: "text", text: "Jaundice is common in newborns because bilirubin levels rise after birth. Many cases are mild, but some babies need bilirubin measurement and treatment such as phototherapy. Risk is higher in premature babies, babies with blood-group incompatibility, significant bruising, feeding problems or certain illnesses." },
      { kind: "warning", text: "Very early jaundice, rapidly increasing yellow colour, poor feeding, excessive sleepiness or jaundice reaching the legs should be assessed promptly." }
    ] },
    { id: "screening", kicker: "Newborn Screening", heading: "Screening can identify problems before symptoms appear", blocks: [
      { kind: "grid", items: [{ title: "Hearing Screening", text: "Early hearing assessment supports timely intervention if a problem is detected." }, { title: "Metabolic Screening", text: "Selected newborn blood-spot screening can identify important inherited or metabolic conditions." }, { title: "Pulse Oximetry", text: "Oxygen saturation screening may help identify selected critical congenital heart conditions." }, { title: "Thyroid Screening", text: "Congenital hypothyroidism screening may be included depending on programme and package." }, { title: "G6PD / Other Tests", text: "Additional screening may be advised based on family history or clinical risk." }, { title: "Targeted Imaging", text: "Ultrasound or other tests are used only when clinical findings or risk factors indicate." }] }
    ] },
    { id: "vaccination", kicker: "Vaccination", heading: "Birth-dose vaccination", blocks: [
      { kind: "text", text: "Vaccines due at birth are administered according to the national and paediatric immunisation schedule, clinical condition and parental counselling. Documentation of vaccine name, batch, date and next due date should be provided before discharge." }
    ] },
    { id: "weight", kicker: "Weight & Growth", heading: "Some early weight loss is expected", blocks: [
      { kind: "text", text: "Most newborns lose some weight in the first few days before regaining it. The paediatric team monitors the pattern of weight change along with feeding, urine output and hydration rather than looking at weight alone." },
      { kind: "bullets", items: ["Birth weight is documented accurately.", "Weight is rechecked when clinically indicated.", "Excessive weight loss needs feeding and dehydration review.", "Low-birth-weight babies may need closer temperature and feeding monitoring."] }
    ] },
    { id: "danger-signs", kicker: "Danger Signs", heading: "When should parents seek urgent medical care?", blocks: [
      { kind: "bullets", items: ["Difficulty breathing, chest indrawing, grunting or bluish colour.", "Baby is unusually sleepy, floppy or difficult to wake.", "Poor feeding or inability to feed.", "Fever or abnormally low temperature.", "Repeated vomiting or green-coloured vomiting.", "Convulsions or abnormal movements.", "Very low urine output.", "Increasing jaundice or rapidly spreading yellow colour.", "Redness, swelling or pus around the umbilical cord."] },
      { kind: "warning", text: "Newborns can deteriorate quickly. If a baby looks unwell, do not wait for the next routine appointment." }
    ] },
    { id: "nicu", kicker: "NICU Escalation", heading: "Which babies may need neonatal intensive care?", blocks: [
      { kind: "grid", items: [{ title: "Premature Babies", text: "Preterm babies may need breathing, feeding and temperature support." }, { title: "Low Birth Weight", text: "Very small babies may require closer monitoring or incubator care." }, { title: "Breathing Difficulty", text: "Respiratory distress may require oxygen, CPAP or advanced support." }, { title: "Suspected Sepsis", text: "Infection risk may require blood tests, antibiotics and monitoring." }, { title: "Low Blood Sugar", text: "Babies of diabetic mothers and other high-risk newborns may need glucose monitoring." }, { title: "Severe Jaundice", text: "High bilirubin may require intensive phototherapy or further treatment." }] }
    ] },
    { id: "discharge", kicker: "Discharge Advice", heading: "What parents should know before taking baby home", blocks: [
      { kind: "bullets", items: ["Feeding plan and expected frequency.", "Safe sleeping position and environment.", "Umbilical cord care.", "Bathing and temperature protection.", "Vaccination record and next due date.", "Jaundice warning signs.", "Urine and stool expectations.", "Emergency warning signs and whom to contact."] }
    ] },
    { id: "follow-up", kicker: "Follow-Up", heading: "Why early newborn follow-up matters", blocks: [
      { kind: "text", text: "Follow-up timing depends on birth weight, gestational age, jaundice risk, feeding, mode of delivery and discharge timing. Early review can identify feeding problems, excessive weight loss, rising jaundice or other newborn issues before they become serious." }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "Understanding newborn care cost", blocks: [
      { kind: "cost", range: "Depends on Care Required", note: "Routine newborn care cost may include paediatric examination, vaccination, screening tests and follow-up. Additional charges apply for phototherapy, laboratory tests, imaging, prolonged observation or NICU care.", insuranceTitle: "Insurance / TPA / Ayushman", insuranceNote: "Coverage differs between routine newborn services and medically necessary admission or NICU treatment. Eligibility depends on the insurer, scheme, empanelment and policy conditions." }
    ] },
    { id: "why-hopewell", kicker: "Why Hopewell", heading: "Why choose Hopewell for newborn care?", blocks: [
      { kind: "grid", items: [{ title: "Mother & child pathway", text: "Delivery, newborn assessment and paediatric follow-up are coordinated in one care pathway." }, { title: "Neonatal backup", text: "Babies needing closer observation can be escalated quickly to neonatal care." }, { title: "Feeding support", text: "Breastfeeding and early nutrition are treated as a core part of newborn care." }, { title: "Jaundice monitoring", text: "Risk assessment, bilirubin testing and phototherapy can be coordinated when required." }, { title: "Screening & vaccination", text: "Preventive newborn care is built into the discharge pathway." }, { title: "Parent education", text: "Families receive clear discharge instructions and warning-sign guidance before going home." }] }
    ] },
    { id: "doctor", kicker: "Doctor", heading: "Meet the paediatric & newborn care specialist", blocks: [
      { kind: "doctor", name: "Dr. Shakti Das", specialty: "Paediatrics & Neonatology • Hopewell Hospital, Ranchi", focus: "Clinical focus may include newborn care, neonatal jaundice, feeding support, growth monitoring, newborn screening, premature babies and paediatric follow-up." }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "When should a newborn first see the paediatrician?", a: "The first assessment begins at birth. Follow-up after discharge depends on feeding, jaundice risk, birth weight and clinical condition." }, { q: "Is newborn jaundice normal?", a: "Mild jaundice is common, but some babies need bilirubin testing and treatment. Very early or rapidly increasing jaundice needs prompt assessment." }, { q: "How often should a newborn feed?", a: "Newborns usually feed frequently. The exact pattern varies, but effective latch, swallowing, urine output and weight trend are more important than one fixed number." }, { q: "How do I know if my baby is getting enough milk?", a: "Signs include effective swallowing, improving urine output, appropriate stool pattern, satisfactory weight trend and a baby who appears settled after many feeds." }, { q: "When does a newborn need NICU care?", a: "Prematurity, breathing difficulty, severe jaundice, low blood sugar, suspected infection or other medical instability may require NICU observation or treatment." }, { q: "Which danger signs should never be ignored?", a: "Poor feeding, breathing difficulty, fever or low temperature, severe sleepiness, seizures, green vomiting, worsening jaundice or reduced urine output require prompt medical review." }] }
    ] }
    ],
    finalCta: { heading: "Need newborn care, feeding support or a baby check-up?", text: "Book a newborn consultation with Dr. Shakti Das for examination, feeding review, jaundice assessment, vaccination, screening and early growth monitoring." },
  },
  {
    slug: "nicu",
    title: "NICU in Ranchi | Neonatal Intensive Care",
    metaDescription: "NICU in Ranchi at Hopewell Hospital for premature, low-birth-weight and medically unstable newborns including respiratory support, jaundice care, feeding support and consultation with Dr. Shakti Das.",
    category: "Paediatrics & Neonatology",
    eyebrow: "Paediatrics & Neonatology",
    heroTitle: "NICU in Ranchi",
    heroCopy: "Specialised neonatal intensive care for premature, low-birth-weight and medically unstable newborns who need continuous monitoring and advanced support.",
    heroCardKicker: "Hopewell Mother & Child",
    heroCardTitle: "Neonatal Intensive Care",
    heroCardText: "Continuous monitoring, breathing support, feeding support, jaundice management and family-centred neonatal care.",
    doctorName: "Dr. Shakti Das",
    doctorSpecialtyMini: "Paediatrics & Neonatology",
    heroTags: ["Prematurity", "Low birth weight", "Respiratory support", "Phototherapy"],
    facts: [{ label: "Unit", value: "NICU" }, { label: "Patients", value: "Newborns" }, { label: "Monitoring", value: "Continuous" }, { label: "Respiratory", value: "Oxygen / CPAP*" }, { label: "Feeding", value: "Breast Milk Support" }, { label: "Follow-Up", value: "Neonatal Clinic" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What is NICU care?", blocks: [
      { kind: "text", text: "The Neonatal Intensive Care Unit provides specialised monitoring and treatment for premature, low-birth-weight or medically unstable newborns who need more support than routine nursery care." }
    ] },
    { id: "who", kicker: "Who May Need NICU?", heading: "Common reasons for NICU admission", blocks: [
      { kind: "grid", items: [{ title: "Prematurity", text: "Babies born early may need breathing, feeding and temperature support." }, { title: "Low Birth Weight", text: "Small babies may need incubator care and close feeding monitoring." }, { title: "Breathing Difficulty", text: "Respiratory distress may require oxygen, CPAP or advanced respiratory support." }, { title: "Sepsis Risk", text: "Suspected infection may require blood tests, antibiotics and monitoring." }, { title: "Jaundice", text: "High bilirubin may need intensive phototherapy and further treatment." }, { title: "Low Blood Sugar", text: "High-risk newborns may need glucose monitoring and IV support." }] }
    ] },
    { id: "support", kicker: "NICU Support", heading: "What support may be provided?", blocks: [
      { kind: "bullets", items: ["Continuous cardiorespiratory monitoring.", "Oxygen therapy and CPAP where indicated.", "Incubator or warmer support.", "IV fluids and medicines.", "Tube feeding or breastfeeding support.", "Phototherapy.", "Infection management and blood testing."] }
    ] },
    { id: "parents", kicker: "Parents & Family", heading: "Parents remain part of the care team", blocks: [
      { kind: "text", text: "Where clinically safe, parents should be encouraged to participate in feeding, skin-to-skin care, expressed breast milk provision and discharge preparation." }
    ] },
    { id: "discharge", kicker: "Discharge", heading: "When can a baby go home?", blocks: [
      { kind: "text", text: "Discharge depends on stable breathing, temperature, feeding, weight trend and the absence of unresolved medical concerns. Premature infants may need structured follow-up after discharge." }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "NICU cost", blocks: [
      { kind: "cost", range: "Depends on Level of Care", note: "Cost depends on gestational age, respiratory support, medicines, tests, phototherapy, feeding support and length of stay.", insuranceTitle: "Insurance / TPA / Ayushman", insuranceNote: "Coverage depends on medical necessity, admission category, policy or scheme rules and empanelment." }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "Does every premature baby need NICU?", a: "No. Need for NICU depends on gestational age, weight, breathing, feeding and overall stability." }, { q: "Can mothers provide breast milk in NICU?", a: "Yes, expressed breast milk is strongly encouraged when clinically appropriate." }, { q: "How long will a baby stay in NICU?", a: "It depends on the baby's maturity, condition and ability to breathe, feed and maintain temperature safely." }] }
    ] },
    { id: "doctor", kicker: "Doctor", heading: "Meet the paediatric specialist", blocks: [
      { kind: "doctor", name: "Dr. Shakti Das", specialty: "Paediatrics & Neonatology • Hopewell Hospital, Ranchi", focus: "" }
    ] }
    ],
    finalCta: { heading: "Need paediatric or newborn care?", text: "Book a consultation with Dr. Shakti Das at Hopewell Hospital, Ranchi." },
  },
  {
    slug: "child-immunization",
    title: "Child Immunization in Ranchi",
    metaDescription: "Child immunization in Ranchi at Hopewell Hospital including vaccination schedule review, catch-up vaccines, preventive paediatrics, vaccine aftercare and consultation with Dr. Shakti Das.",
    category: "Paediatrics & Neonatology",
    eyebrow: "Paediatrics & Neonatology",
    heroTitle: "Child Immunization in Ranchi",
    heroCopy: "Structured vaccination and preventive paediatric care with schedule review, catch-up planning and clear documentation.",
    heroCardKicker: "Hopewell Mother & Child",
    heroCardTitle: "Vaccination & Preventive Child Care",
    heroCardText: "Age-appropriate vaccination, catch-up schedules, vaccine counselling and preventive health review in one paediatric visit.",
    doctorName: "Dr. Shakti Das",
    doctorSpecialtyMini: "Paediatrics & Neonatology",
    heroTags: ["Vaccination schedule", "Catch-up vaccines", "Preventive paediatrics", "Digital/printed records"],
    facts: [{ label: "Service", value: "Child Immunization" }, { label: "Age", value: "Birth onward" }, { label: "Record", value: "Documented" }, { label: "Catch-Up", value: "Available" }, { label: "Consultation", value: "Paediatric Review" }, { label: "Follow-Up", value: "Next Due Date" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What is child immunization?", blocks: [
      { kind: "text", text: "Child immunization protects children against serious vaccine-preventable diseases. A vaccination plan should be age appropriate, properly documented and adjusted when doses have been missed." }
    ] },
    { id: "schedule", kicker: "Vaccination Schedule", heading: "Vaccines by age", blocks: [
      { kind: "text", text: "Vaccines are given according to the national immunisation schedule and paediatric recommendations. The exact schedule depends on age, previous doses, medical history and risk factors." }
    ] },
    { id: "catchup", kicker: "Catch-Up Vaccination", heading: "Missed vaccines can often be caught up", blocks: [
      { kind: "text", text: "A child who has missed doses usually does not need to restart the entire series. The paediatrician can create a catch-up schedule based on the child's age and documented vaccination history." }
    ] },
    { id: "visit", kicker: "At The Visit", heading: "What happens during a vaccination appointment?", blocks: [
      { kind: "bullets", items: ["Review of previous vaccine record.", "Age and weight check.", "Screening for current illness or contraindications.", "Vaccine administration with documentation of batch and date.", "Advice on expected fever or local swelling.", "Next due date clearly recorded."] }
    ] },
    { id: "aftercare", kicker: "After Vaccination", heading: "Common reactions", blocks: [
      { kind: "text", text: "Mild fever, local pain or swelling can occur after many vaccines. Parents should seek medical review for breathing difficulty, persistent high fever, unusual lethargy, seizures or any severe reaction." }
    ] },
    { id: "special", kicker: "Special Situations", heading: "Vaccination may need individual planning", blocks: [
      { kind: "grid", items: [{ title: "Premature babies", text: "Most are vaccinated by chronological age unless otherwise advised." }, { title: "Chronic illness", text: "Children with heart, lung, kidney or immune conditions may need additional planning." }, { title: "Travel", text: "Travel vaccines may be advised according to destination." }] }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "Vaccination cost", blocks: [
      { kind: "cost", range: "Depends on Vaccine", note: "Cost varies by vaccine type, brand, number of doses and combination vaccines.", insuranceTitle: "Insurance / Schemes", insuranceNote: "Routine outpatient vaccination may not always be covered by private insurance. Scheme eligibility varies." }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "What if my child missed a vaccine?", a: "A catch-up schedule can usually be created without restarting the entire series." }, { q: "Can vaccines be given during a mild cold?", a: "Often yes, but the paediatrician should assess the child first." }, { q: "Why is vaccine documentation important?", a: "It prevents missed or duplicate doses and helps plan future vaccinations accurately." }] }
    ] },
    { id: "doctor", kicker: "Doctor", heading: "Meet the paediatric specialist", blocks: [
      { kind: "doctor", name: "Dr. Shakti Das", specialty: "Paediatrics & Neonatology • Hopewell Hospital, Ranchi", focus: "" }
    ] }
    ],
    finalCta: { heading: "Need paediatric or newborn care?", text: "Book a consultation with Dr. Shakti Das at Hopewell Hospital, Ranchi." },
  },
  {
    slug: "paediatric-emergency",
    title: "Paediatric Emergency in Ranchi",
    metaDescription: "Paediatric emergency care in Ranchi at Hopewell Hospital for fever, breathing difficulty, dehydration, seizures, injuries and acute childhood illness with Dr. Shakti Das.",
    category: "Paediatrics & Neonatology",
    eyebrow: "Paediatrics & Neonatology",
    heroTitle: "Paediatric Emergency in Ranchi",
    heroCopy: "Rapid assessment and stabilisation for infants and children with fever, breathing difficulty, dehydration, seizures, injuries, poisoning and other urgent conditions.",
    heroCardKicker: "Hopewell Mother & Child",
    heroCardTitle: "Rapid Paediatric Assessment",
    heroCardText: "Triage, stabilisation, targeted investigations and escalation to observation, admission or intensive care when required.",
    doctorName: "Dr. Shakti Das",
    doctorSpecialtyMini: "Paediatrics & Neonatology",
    heroTags: ["Fever", "Breathing difficulty", "Seizures", "Injuries"],
    facts: [{ label: "Service", value: "Paediatric Emergency" }, { label: "Priority", value: "Triage First" }, { label: "Age", value: "Infants & Children" }, { label: "Stabilisation", value: "Immediate" }, { label: "Diagnostics", value: "As Needed" }, { label: "Escalation", value: "Admission / ICU" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What is paediatric emergency care?", blocks: [
      { kind: "text", text: "Paediatric emergency care provides rapid assessment and stabilisation for infants and children with acute illness, injury or sudden deterioration." }
    ] },
    { id: "conditions", kicker: "Common Emergencies", heading: "Conditions commonly assessed urgently", blocks: [
      { kind: "grid", items: [{ title: "High Fever", text: "Especially in young infants or children who appear unwell." }, { title: "Breathing Difficulty", text: "Wheezing, stridor, chest indrawing or blue colour." }, { title: "Dehydration", text: "Persistent vomiting, diarrhoea or poor oral intake." }, { title: "Seizures", text: "First seizure, prolonged seizure or altered consciousness." }, { title: "Injuries", text: "Head injury, fractures, cuts, burns and falls." }, { title: "Poisoning", text: "Accidental ingestion or exposure requiring urgent assessment." }] }
    ] },
    { id: "danger", kicker: "Danger Signs", heading: "Seek urgent help if your child has", blocks: [
      { kind: "bullets", items: ["Difficulty breathing or bluish lips.", "Severe lethargy or unresponsiveness.", "Seizure lasting more than a few minutes or repeated seizures.", "Severe dehydration or no urine for prolonged periods.", "Major trauma or head injury with vomiting/drowsiness.", "Suspected poisoning.", "Persistent severe abdominal pain.", "High fever in a young infant."] },
      { kind: "warning", text: "For life-threatening symptoms, do not wait for an outpatient appointment." }
    ] },
    { id: "process", kicker: "Emergency Process", heading: "How children are assessed", blocks: [
      { kind: "timeline", steps: [{ num: "01", title: "Triage", text: "Airway, breathing, circulation and consciousness are assessed first." }, { num: "02", title: "Stabilisation", text: "Oxygen, IV access, fluids, medicines or seizure control are provided as required." }, { num: "03", title: "Diagnosis", text: "Tests and imaging are ordered only as clinically needed." }, { num: "04", title: "Disposition", text: "The child is discharged, observed, admitted or transferred to higher-level care depending on condition." }] }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "Emergency care cost", blocks: [
      { kind: "cost", range: "Depends on Emergency", note: "Cost varies by consultation, tests, imaging, medicines, procedures and whether admission is required.", insuranceTitle: "Insurance / TPA / Ayushman", insuranceNote: "Coverage depends on admission status, policy or scheme rules and medical necessity." }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "When should I bring my child to emergency rather than OPD?", a: "Breathing difficulty, severe lethargy, seizures, major trauma, poisoning, dehydration or sudden deterioration should be assessed urgently." }, { q: "Is high fever alone always dangerous?", a: "The child's age, behaviour, breathing, hydration and associated symptoms matter as much as the temperature itself." }, { q: "Can children be admitted directly from emergency?", a: "Yes, if the child needs observation, IV treatment, oxygen, intensive monitoring or further investigation." }] }
    ] },
    { id: "doctor", kicker: "Doctor", heading: "Meet the paediatric specialist", blocks: [
      { kind: "doctor", name: "Dr. Shakti Das", specialty: "Paediatrics & Neonatology • Hopewell Hospital, Ranchi", focus: "" }
    ] }
    ],
    finalCta: { heading: "Need paediatric or newborn care?", text: "Book a consultation with Dr. Shakti Das at Hopewell Hospital, Ranchi." },
  }
];

export function getPaedsProcedure(slug: string) {
  return paedsProcedures.find((p) => p.slug === slug);
}
