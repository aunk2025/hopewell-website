import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Microscope, Brain, Bone, Activity, Shield, ChevronRight } from "lucide-react";

const centres = [
  {
    icon: Heart,
    name: "Cardiac Sciences",
    tagline: "Advanced Heart & Vascular Care",
    description:
      "Our Cardiac Sciences Centre offers world-class interventional cardiology, electrophysiology, and cardiac surgery. Equipped with state-of-the-art catheterisation labs and a dedicated cardiac ICU.",
    services: [
      "Coronary Angiography & Angioplasty",
      "Pacemaker Implantation",
      "Open Heart Surgery (CABG)",
      "Heart Failure Management",
      "Echocardiography & Stress Testing",
      "24×7 Heart Attack Care",
    ],
    color: "#ef4444",
    bgColor: "rgba(239,68,68,.08)",
  },
  {
    icon: Microscope,
    name: "Advanced Surgery",
    tagline: "Precision Surgical Excellence",
    description:
      "Our surgical centre houses ultra-modern operation theatres with laparoscopic, thoracoscopic, and robotic-assisted systems. Minimally invasive procedures mean faster recovery and less pain.",
    services: [
      "Laparoscopic & Minimally Invasive Surgery",
      "General & GI Surgery",
      "Thoracic Surgery",
      "Vascular Surgery",
      "Bariatric Surgery",
      "Day-care Surgical Procedures",
    ],
    color: "#0ca8ad",
    bgColor: "rgba(12,168,173,.08)",
  },
  {
    icon: Activity,
    name: "Critical Care & ICU",
    tagline: "Round-the-Clock Intensive Monitoring",
    description:
      "Our multi-disciplinary ICU is staffed 24×7 by intensivists and critical care nurses. We offer advanced ventilation support, haemodynamic monitoring, and multi-organ failure management.",
    services: [
      "Multi-disciplinary ICU (MICU/SICU/CICU)",
      "Mechanical Ventilation & Respiratory Care",
      "Haemodynamic Monitoring",
      "Renal Replacement Therapy",
      "Nutritional Support",
      "Post-Operative Recovery",
    ],
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,.08)",
  },
  {
    icon: Bone,
    name: "Orthopaedics",
    tagline: "Joint, Spine & Sports Medicine",
    description:
      "Our orthopaedic specialists deliver comprehensive musculoskeletal care — from sports injuries and fracture management to complex joint replacements and spine surgeries.",
    services: [
      "Hip & Knee Replacement",
      "Spine Surgery & Disc Care",
      "Sports Injury & Arthroscopy",
      "Fracture Management",
      "Paediatric Orthopaedics",
      "Physiotherapy & Rehabilitation",
    ],
    color: "#8b5cf6",
    bgColor: "rgba(139,92,246,.08)",
  },
  {
    icon: Brain,
    name: "Neurology & Neurosurgery",
    tagline: "Brain, Spine & Nerve Disorders",
    description:
      "Our neurology team manages stroke, epilepsy, Parkinson's, and complex brain disorders, supported by our neurosurgeons who handle tumour resections and spinal interventions.",
    services: [
      "Stroke Unit & Thrombolysis",
      "Epilepsy Management & EEG",
      "Parkinson's & Movement Disorders",
      "Brain Tumour Surgery",
      "Spinal Cord Disorders",
      "Headache & Migraine Clinic",
    ],
    color: "#ec4899",
    bgColor: "rgba(236,72,153,.08)",
  },
  {
    icon: Shield,
    name: "Diagnostics & Radiology",
    tagline: "Accurate Imaging & Lab Sciences",
    description:
      "Our fully equipped diagnostics hub provides same-day results across imaging, pathology, and biochemistry — enabling rapid clinical decision-making.",
    services: [
      "1.5T MRI & 64-Slice CT",
      "Digital X-Ray & Fluoroscopy",
      "Colour Doppler & USG",
      "Pathology & Haematology",
      "Biochemistry & Microbiology",
      "Cardiac CT Angiography",
    ],
    color: "#10b981",
    bgColor: "rgba(16,185,129,.08)",
  },
];

export const metadata = {
  title: "Centres of Excellence | Hopewell Hospital Ranchi",
  description:
    "Explore Hopewell Hospital's specialised Centres of Excellence — Cardiac, Surgery, Critical Care, Orthopaedics, Neurology and Diagnostics in Ranchi, Jharkhand.",
};

export default function CentresPage() {
  return (
    <main className="min-h-screen bg-[#edf9f8]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#061822] py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-transparent to-sky-900/20" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="section-kicker mb-4" style={{ color: "#57e6e6" }}>
            Clinical Excellence
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Centres of Excellence
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/65 leading-8">
            Each centre is a dedicated clinical ecosystem — specialised teams, dedicated equipment,
            and evidence-based protocols — delivering outcomes that rival the best institutions
            nationally.
          </p>
        </div>
      </section>

      {/* Centres grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {centres.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.name}
                className="group rounded-3xl border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: c.bgColor }}
                >
                  <Icon size={28} style={{ color: c.color }} />
                </div>
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                  {c.tagline}
                </div>
                <h2 className="mb-3 text-xl font-black text-[#061822]">{c.name}</h2>
                <p className="mb-5 text-sm leading-7 text-slate-600">{c.description}</p>
                <ul className="space-y-2">
                  {c.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-700">
                      <ChevronRight size={14} style={{ color: c.color }} className="shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
