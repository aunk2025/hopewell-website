import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, IndianRupee } from "lucide-react";

const packages = [
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

export const metadata = {
  title: "Health Packages | Hopewell Hospital Ranchi",
  description:
    "Preventive health checkup packages at Hopewell Hospital, Ranchi, covering general wellness, cardiac, women's health, senior care and diabetes screening.",
};

export default function HealthPackagesPage() {
  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar />

      {/* Hero banner */}
      <section className="relative flex h-64 flex-col items-center justify-center bg-[#2a2119] px-5 text-center sm:h-80">
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          Health Packages
        </h1>
        <p className="relative mt-5 max-w-2xl text-white/80 sm:text-lg">
          Preventive health checkup packages designed to catch concerns early and keep you well.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className="flex flex-col rounded-3xl border border-teal-700 bg-white p-7 shadow-sm">
              <h3 className="mb-2 text-lg font-black text-ink">{pkg.name}</h3>
              <p className="mb-4 text-sm leading-6 text-slate-600">{pkg.text}</p>
              <ul className="mb-5 space-y-2">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="shrink-0 text-teal-700" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-1.5 text-sm font-bold text-teal-700">
                <IndianRupee size={14} />
                Price on Consultation
              </div>
            </div>
          ))}
        </div>

        <a
          href="/appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 flex items-center justify-center gap-2 rounded-2xl bg-ink py-4 text-sm font-bold text-white transition hover:bg-teal-900 sm:mx-auto sm:w-80"
        >
          Book an Appointment
        </a>
      </section>

      <Footer />
    </main>
  );
}
