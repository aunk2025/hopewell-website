import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HeartPulse,
  Stethoscope,
  Baby,
  Bone,
  Brain,
  Microscope,
  ListChecks,
  UserRoundSearch,
  ScanLine,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

const journey = [
  { icon: ListChecks, label: "Choose Speciality" },
  { icon: UserRoundSearch, label: "Meet Specialist" },
  { icon: ScanLine, label: "Diagnostics & Treatment" },
  { icon: HeartHandshake, label: "Recovery & Follow-up" },
];

const services = [
  {
    icon: HeartPulse,
    name: "Cardiac Sciences",
    items: ["Cardiology", "Angioplasty", "Heart Failure Clinic"],
    color: "#ef4444",
    bgColor: "rgba(239,68,68,.08)",
  },
  {
    icon: Stethoscope,
    name: "GI Surgery",
    items: ["Endoscopy", "ERCP", "Laparoscopic Surgery"],
    color: "#0ca8ad",
    bgColor: "rgba(12,168,173,.08)",
  },
  {
    icon: Baby,
    name: "Women & Child Care",
    items: ["Maternity", "NICU", "Paediatrics"],
    color: "#ec4899",
    bgColor: "rgba(236,72,153,.08)",
  },
  {
    icon: Bone,
    name: "Orthopaedics",
    items: ["Joint Replacement", "Sports Injuries", "Trauma Care"],
    color: "#8b5cf6",
    bgColor: "rgba(139,92,246,.08)",
  },
  {
    icon: Brain,
    name: "Neurosciences",
    items: ["Stroke Care", "Neurology", "Neurosurgery"],
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,.08)",
  },
  {
    icon: Microscope,
    name: "Diagnostics",
    items: ["CT Scan", "Pathology", "Digital Imaging"],
    color: "#10b981",
    bgColor: "rgba(16,185,129,.08)",
  },
];

export const metadata = {
  title: "Services | Hopewell Hospital Ranchi",
  description:
    "A modern, premium hospital experience — Centres of Excellence, advanced diagnostics and patient-first digital care at Hopewell Hospital, Ranchi.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#edf9f8]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <div className="section-kicker mb-5">Patient Services</div>
            <h1 className="text-balance text-5xl font-black leading-[1.02] tracking-[-.045em] text-ink sm:text-6xl">
              Healthcare.
              <span className="block bg-gradient-to-r from-teal-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                Reimagined.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              A modern, premium hospital experience with Centres of Excellence, advanced
              diagnostics and patient-first digital care.
            </p>
          </div>

          <div className="glass rounded-3xl p-7 shadow-glass">
            <h3 className="mb-5 text-lg font-black text-ink">Patient Journey</h3>
            <div className="space-y-3">
              {journey.map(({ icon: Icon, label }, index) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl bg-white/70 p-3.5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-cyan">
                    <Icon size={19} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Step 0{index + 1}
                    </div>
                    <div className="font-bold text-ink">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="section-kicker mb-4">Centres of Excellence</div>
        <h2 className="mb-3 text-4xl font-black tracking-[-.03em] text-ink">
          Specialised care, close to home.
        </h2>
        <p className="mb-12 max-w-xl text-slate-500">
          Simple, premium care across every major speciality — built around the patient.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: s.bgColor }}
                >
                  <Icon size={26} style={{ color: s.color }} />
                </div>
                <h3 className="mb-4 text-xl font-black text-ink">{s.name}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <ChevronRight size={14} style={{ color: s.color }} className="shrink-0" />
                      {item}
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
