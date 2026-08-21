// AUTO-GENERATED from procedure page content provided by the client.
// See lib/procedure-content.ts for the shared block/section/page schema.
// These 4 pages carry a real hero photo (heroImage/heroImageCaption) instead
// of a doctor card, since diagnostic tests aren't attributed to one surgeon.

import type { ContentBlock, ContentSection, ProcedurePage } from "./procedure-content";

export type DiagnosticsBlock = ContentBlock;
export type DiagnosticsSection = ContentSection;
export type DiagnosticsProcedure = ProcedurePage;

export const diagnosticsProcedures: DiagnosticsProcedure[] = [
  {
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
  },
  {
    slug: "mri",
    title: "MRI in Ranchi",
    metaDescription: "MRI in Ranchi at Hopewell Hospital for brain, spine, joints, muscles, pelvis and selected vascular imaging without ionising radiation.",
    category: "Diagnostics",
    eyebrow: "Diagnostics",
    heroTitle: "MRI in Ranchi",
    heroCopy: "High-resolution imaging for the brain, spine, joints, muscles and other soft tissues without ionising radiation.",
    heroCardKicker: "Hopewell Diagnostics",
    heroCardTitle: "MRI",
    heroCardText: "",
    heroImage: "/diagnostics/mri-realistic.jpg",
    heroImageCaption: "Illustrative diagnostic-suite visual for website presentation.",
    doctorName: "",
    doctorSpecialtyMini: "",
    heroTags: ["MRI Brain", "MRI Spine", "MRI Knee", "Soft Tissue Imaging"],
    facts: [{ label: "Test", value: "MRI" }, { label: "Radiation", value: "None" }, { label: "Best For", value: "Soft Tissues" }, { label: "Screening", value: "Implants / Metal" }, { label: "Contrast*", value: "When Needed" }, { label: "Reporting", value: "Digital Ready" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What is an MRI Scan?", blocks: [
      { kind: "text", text: "Magnetic Resonance Imaging (MRI) uses a strong magnetic field and radiofrequency signals to create detailed images of the brain, spine, joints, muscles and other soft tissues. MRI does not use ionising radiation." }
    ] },
    { id: "who", kicker: "Who May Need It?", heading: "When might your doctor advise MRI?", blocks: [
      { kind: "bullets", items: ["Brain and neurological evaluation.", "Slip disc, spinal stenosis and nerve compression.", "Knee, shoulder and other joint injuries.", "Ligament, cartilage and muscle injuries.", "Pelvic and selected abdominal conditions.", "Tumour evaluation and follow-up."] }
    ] },
    { id: "uses", kicker: "Common MRI Studies", heading: "MRI examinations may include", blocks: [
      { kind: "grid", items: [{ title: "MRI Brain", text: "Detailed neurological imaging." }, { title: "MRI Spine", text: "Disc, nerves, spinal cord and stenosis evaluation." }, { title: "MRI Knee", text: "Ligaments, meniscus and cartilage." }, { title: "MRI Shoulder", text: "Rotator cuff and soft-tissue assessment." }, { title: "MRI Pelvis", text: "Selected gynaecological, urological and soft-tissue evaluation." }, { title: "MR Angiography*", text: "Selected blood-vessel studies where clinically indicated." }] }
    ] },
    { id: "screening", kicker: "MRI Safety Screening", heading: "Tell us about implants or metal", blocks: [
      { kind: "bullets", items: ["Pacemaker or implanted cardiac device.", "Cochlear implant.", "Neurostimulator or implanted pump.", "Metal clips or other implants.", "History of metallic foreign body, particularly in the eye.", "Pregnancy or significant kidney disease if contrast is being considered."] },
      { kind: "warning", text: "MRI suitability depends on the exact implant and model. An implant should never be assumed MRI-safe without verification." }
    ] },
    { id: "procedure", kicker: "What Happens During MRI?", heading: "The scan process", blocks: [
      { kind: "timeline", steps: [{ num: "01", title: "Safety screening", text: "Implants, metal and relevant medical history are reviewed." }, { num: "02", title: "Positioning", text: "You lie on the MRI table with the appropriate imaging coil." }, { num: "03", title: "Scanning", text: "The scanner produces loud repetitive sounds; hearing protection is provided." }, { num: "04", title: "Reporting", text: "Images are reviewed after acquisition and correlated with the clinical indication." }] }
    ] },
    { id: "comfort", kicker: "Comfort & Claustrophobia", heading: "What if I feel anxious inside the scanner?", blocks: [
      { kind: "text", text: "Some patients experience claustrophobia. Inform the team in advance so that positioning, reassurance or other appropriate measures can be planned." }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "MRI cost in Ranchi", blocks: [
      { kind: "cost", range: "Depends on Body Part & Contrast", note: "Cost varies by region scanned, specialised sequences and whether contrast is required.", insuranceTitle: "Insurance / TPA / Ayushman", insuranceNote: "Coverage depends on medical indication, admission status, policy or scheme rules and empanelment." }
    ] },
    { id: "why", kicker: "Why Hopewell", heading: "Why choose Hopewell for MRI?", blocks: [
      { kind: "grid", items: [{ title: "Integrated clinical pathway", text: "MRI findings can be linked directly to orthopaedic, spine, medicine and surgical care." }, { title: "Patient preparation", text: "Safety and implant screening are built into the workflow." }, { title: "Digital reporting", text: "Designed for efficient access and future patient-portal integration." }] }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "Does MRI use radiation?", a: "No. MRI uses a magnetic field and radiofrequency signals rather than ionising radiation." }, { q: "Why does MRI make loud sounds?", a: "The sounds are produced by rapid switching of magnetic-field gradients during image acquisition." }, { q: "Can a patient with a pacemaker have MRI?", a: "Some modern devices are MRI-conditional, but eligibility depends on the exact device and protocol. Specialist verification is required." }] }
    ] }
    ],
    finalCta: { heading: "Need a MRI?", text: "Book your diagnostic appointment at Hopewell Hospital, Ranchi. Our team will guide you about preparation, prescription requirements and reporting." },
  },
  {
    slug: "pathology-lab",
    title: "Pathology Lab in Ranchi",
    metaDescription: "Pathology Lab in Ranchi at Hopewell Hospital for CBC, blood sugar, kidney and liver tests, lipid profile, urine testing, microbiology and preventive health packages.",
    category: "Diagnostics",
    eyebrow: "Diagnostics",
    heroTitle: "Pathology Lab in Ranchi",
    heroCopy: "Reliable laboratory diagnostics for disease detection, treatment monitoring and preventive healthcare.",
    heroCardKicker: "Hopewell Diagnostics",
    heroCardTitle: "Pathology Lab",
    heroCardText: "",
    heroImage: "/diagnostics/pathology-lab-realistic.jpg",
    heroImageCaption: "Illustrative diagnostic-laboratory visual for website presentation.",
    doctorName: "",
    doctorSpecialtyMini: "",
    heroTags: ["Haematology", "Biochemistry", "Microbiology", "Health Packages"],
    facts: [{ label: "Service", value: "Pathology Lab" }, { label: "Samples", value: "Blood • Urine • More" }, { label: "Testing", value: "Routine + Selected Specialised" }, { label: "Quality", value: "Controlled Workflow" }, { label: "Reports", value: "Digital Ready" }, { label: "Support", value: "OPD • IPD • Health Checks" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "Pathology & Laboratory Diagnostics", blocks: [
      { kind: "text", text: "The pathology laboratory supports diagnosis, monitoring and preventive healthcare through blood, urine and other specimen testing. Accurate laboratory medicine depends on correct patient identification, sample quality, processing and clinical interpretation." }
    ] },
    { id: "tests", kicker: "Tests Offered", heading: "Common laboratory services", blocks: [
      { kind: "grid", items: [{ title: "Haematology", text: "CBC, haemoglobin, platelet count and related tests." }, { title: "Biochemistry", text: "Blood sugar, kidney function, liver function and lipid profile." }, { title: "Urine Testing", text: "Routine analysis, microscopy and culture where indicated." }, { title: "Microbiology", text: "Culture, sensitivity and selected infection testing." }, { title: "Hormones", text: "Thyroid and selected endocrine investigations." }, { title: "Health Packages", text: "Preventive profiles for diabetes, heart, liver and kidney risk." }] }
    ] },
    { id: "prep", kicker: "Preparation", heading: "Do I need fasting?", blocks: [
      { kind: "text", text: "Some tests require fasting while many do not. The correct preparation depends on the investigation ordered. Follow the instructions provided at booking." }
    ] },
    { id: "sample", kicker: "Sample Collection", heading: "What happens at the laboratory?", blocks: [
      { kind: "timeline", steps: [{ num: "01", title: "Registration", text: "Patient details and prescribed tests are confirmed." }, { num: "02", title: "Sample collection", text: "Blood, urine or other samples are collected using the appropriate method." }, { num: "03", title: "Processing", text: "Samples are processed according to laboratory protocols." }, { num: "04", title: "Reporting", text: "Validated results are released according to the expected turnaround time." }] }
    ] },
    { id: "quality", kicker: "Quality", heading: "Why the laboratory process matters", blocks: [
      { kind: "text", text: "Reliable testing requires appropriate collection tubes, correct labelling, timely transport, calibrated equipment, internal controls and review of abnormal or critical results." }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "Pathology test cost in Ranchi", blocks: [
      { kind: "cost", range: "Depends on Tests Ordered", note: "Cost varies according to the number and type of routine or specialised tests.", insuranceTitle: "Insurance / Corporate / Health Packages", insuranceNote: "Coverage depends on admission status, package, corporate agreement or policy conditions." }
    ] },
    { id: "why", kicker: "Why Hopewell", heading: "Why choose Hopewell Pathology Lab?", blocks: [
      { kind: "grid", items: [{ title: "Integrated clinical care", text: "Laboratory results can be correlated with physician and inpatient care." }, { title: "Preventive packages", text: "Laboratory profiles can support structured health check-ups." }, { title: "Digital-ready reporting", text: "Designed for efficient reporting and future patient access." }] }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "Which blood tests require fasting?", a: "Requirements differ by test. The laboratory will confirm whether fasting is necessary for your specific prescription." }, { q: "Can I drink water while fasting?", a: "Plain water is often allowed for many fasting tests, but follow the exact instructions given for your test." }, { q: "Why can lab values differ between reports?", a: "Values can vary because of biological variation, timing, medicines, fasting status and laboratory methods. Trends should be interpreted clinically." }] }
    ] }
    ],
    finalCta: { heading: "Need a Pathology Lab?", text: "Book your diagnostic appointment at Hopewell Hospital, Ranchi. Our team will guide you about preparation, prescription requirements and reporting." },
  },
  {
    slug: "digital-xray",
    title: "Digital X-Ray in Ranchi",
    metaDescription: "Digital X-Ray in Ranchi at Hopewell Hospital for chest imaging, fractures, joints, spine and selected pre-operative evaluation.",
    category: "Diagnostics",
    eyebrow: "Diagnostics",
    heroTitle: "Digital X-Ray in Ranchi",
    heroCopy: "Fast digital radiography for bones, chest, joints and selected clinical conditions.",
    heroCardKicker: "Hopewell Diagnostics",
    heroCardTitle: "Digital X-Ray",
    heroCardText: "",
    heroImage: "/diagnostics/digital-xray-realistic.jpg",
    heroImageCaption: "Illustrative diagnostic-suite visual for website presentation.",
    doctorName: "",
    doctorSpecialtyMini: "",
    heroTags: ["Chest X-Ray", "Fractures", "Joint Imaging", "Spine X-Ray"],
    facts: [{ label: "Test", value: "Digital X-Ray" }, { label: "Imaging", value: "Digital" }, { label: "Speed", value: "Fast" }, { label: "Radiation", value: "Low Dose" }, { label: "Preparation", value: "Minimal" }, { label: "Reporting", value: "Digital Ready" }],
    sections: [
    { id: "overview", kicker: "Overview", heading: "What is Digital X-Ray?", blocks: [
      { kind: "text", text: "Digital X-ray uses a small amount of ionising radiation to create images of bones, the chest and selected body regions. Digital acquisition allows rapid image review and electronic storage." }
    ] },
    { id: "who", kicker: "Who May Need It?", heading: "Common reasons for X-Ray", blocks: [
      { kind: "bullets", items: ["Suspected fracture or dislocation.", "Chest infection or selected lung conditions.", "Joint pain, arthritis or injury.", "Spine alignment and selected back conditions.", "Pre-operative evaluation when advised.", "Follow-up of fracture healing."] }
    ] },
    { id: "uses", kicker: "Common X-Ray Studies", heading: "Digital radiography may include", blocks: [
      { kind: "grid", items: [{ title: "Chest X-Ray", text: "Chest and lung evaluation." }, { title: "Bone X-Ray", text: "Fracture, injury and healing assessment." }, { title: "Joint X-Ray", text: "Arthritis, alignment and injury." }, { title: "Spine X-Ray", text: "Alignment, degeneration and selected injuries." }, { title: "Pre-Operative X-Ray", text: "Selected surgical work-up when clinically required." }, { title: "Follow-Up Imaging", text: "Monitoring healing or structural change." }] }
    ] },
    { id: "prep", kicker: "Preparation", heading: "Before your X-Ray", blocks: [
      { kind: "text", text: "Most routine X-rays need little preparation. Jewellery or metal objects may need to be removed from the area being imaged. Always tell the radiographer if you are pregnant or may be pregnant." }
    ] },
    { id: "procedure", kicker: "What Happens During X-Ray?", heading: "The imaging process", blocks: [
      { kind: "timeline", steps: [{ num: "01", title: "Prescription review", text: "The body part and required views are confirmed." }, { num: "02", title: "Positioning", text: "The radiographer positions you for the required image." }, { num: "03", title: "Exposure", text: "The image is acquired in a fraction of a second." }, { num: "04", title: "Digital review", text: "The image is checked for technical adequacy and sent for reporting." }] }
    ] },
    { id: "safety", kicker: "Radiation Safety", heading: "Is X-Ray safe?", blocks: [
      { kind: "text", text: "Routine X-rays use relatively low levels of ionising radiation. The examination should still be clinically justified, with appropriate positioning and exposure protocols." }
    ] },
    { id: "cost", kicker: "Cost Guidance", heading: "Digital X-Ray cost in Ranchi", blocks: [
      { kind: "cost", range: "Depends on Body Part & Views", note: "Cost varies by body region and number of required projections.", insuranceTitle: "Insurance / TPA / Ayushman", insuranceNote: "Coverage depends on indication, admission status and policy or scheme rules." }
    ] },
    { id: "why", kicker: "Why Hopewell", heading: "Why choose Hopewell for Digital X-Ray?", blocks: [
      { kind: "grid", items: [{ title: "Hospital integration", text: "Useful for emergency, orthopaedic, chest and inpatient care." }, { title: "Digital workflow", text: "Images can be stored and accessed electronically." }, { title: "Fast examination", text: "Most routine X-rays can be completed quickly." }] }
    ] },
    { id: "faq", kicker: "FAQs", heading: "Frequently asked questions", blocks: [
      { kind: "faq", items: [{ q: "How long does an X-Ray take?", a: "Most routine X-rays are quick, though multiple views or mobility limitations may increase the total time." }, { q: "Can pregnant women have X-Ray?", a: "The need must be carefully assessed. Always inform the doctor and radiographer if you are pregnant or may be pregnant." }, { q: "Do I need fasting?", a: "Routine X-rays usually do not require fasting." }] }
    ] }
    ],
    finalCta: { heading: "Need a Digital X-Ray?", text: "Book your diagnostic appointment at Hopewell Hospital, Ranchi. Our team will guide you about preparation, prescription requirements and reporting." },
  }
];

export function getDiagnosticsProcedure(slug: string) {
  return diagnosticsProcedures.find((p) => p.slug === slug);
}
