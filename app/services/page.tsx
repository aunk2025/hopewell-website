import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/services/ServicesGrid";
import { ListChecks, UserRoundSearch, ScanLine, HeartHandshake } from "lucide-react";

const journey = [
  { icon: ListChecks, label: "Choose Speciality" },
  { icon: UserRoundSearch, label: "Meet Specialist" },
  { icon: ScanLine, label: "Diagnostics & Treatment" },
  { icon: HeartHandshake, label: "Recovery & Follow-up" },
];

export const metadata = {
  title: "Services | Hopewell Hospital Ranchi",
  description:
    "A modern, premium hospital experience with Centres of Excellence, advanced diagnostics and patient-first digital care at Hopewell Hospital, Ranchi.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#edf9f8]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <div className="section-kicker mb-5 before:content-none">Patient Services</div>
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

      <ServicesGrid />

      <Footer />
    </main>
  );
}
