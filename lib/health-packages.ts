// Shared with app/health-packages/page.tsx and lib/chatbot-context.ts, so
// the chatbot always describes the exact same packages shown on the page.
export type HealthPackage = { name: string; text: string; items: string[] };

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    name: "Basic Health Checkup",
    text: "A foundational screening for general wellness, ideal for a routine annual checkup.",
    items: ["Complete Blood Count", "Blood Sugar (Fasting)", "Lipid Profile", "Urine Routine", "BMI & Vitals"],
  },
  {
    name: "Executive Health Checkup",
    text: "A comprehensive screening for working professionals, covering major organ systems.",
    items: ["Full Body Blood Panel", "ECG", "Chest X-Ray", "Ultrasound Abdomen", "Physician Consultation"],
  },
  {
    name: "Cardiac Health Checkup",
    text: "Focused screening for heart health and early detection of cardiac risk factors.",
    items: ["ECG & Echocardiography", "Lipid Profile", "Blood Sugar", "Cardiologist Consultation", "Stress Test (TMT)"],
  },
  {
    name: "Women's Wellness Package",
    text: "A screening package tailored to women's health across every life stage.",
    items: ["Complete Blood Count", "Thyroid Profile", "Pap Smear", "Ultrasound Pelvis", "Gynaecologist Consultation"],
  },
  {
    name: "Senior Citizen Checkup",
    text: "A thorough screening designed for the health needs of older adults.",
    items: ["Full Body Blood Panel", "ECG & Echocardiography", "Bone Density Screening", "Eye & Ear Checkup", "Physician Consultation"],
  },
  {
    name: "Diabetes Screening Package",
    text: "Focused evaluation for diagnosing and monitoring diabetes and related risk factors.",
    items: ["Blood Sugar (Fasting & PP)", "HbA1c", "Kidney Function Test", "Lipid Profile", "Physician Consultation"],
  },
];
