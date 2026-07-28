import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const keyServices = [
  {
    category: "Critical Care Monitoring",
    items: ["24×7 continuous vital sign monitoring", "Multi-parameter bedside monitors", "Round-the-clock intensivist and nursing coverage", "Rapid response to deteriorating patients"],
  },
  {
    category: "Respiratory & Ventilator Support",
    items: ["Invasive and non-invasive ventilation", "Advanced airway management", "Weaning and extubation protocols", "Management of acute respiratory failure"],
  },
  {
    category: "Organ Support & Life Support",
    items: ["Haemodynamic and cardiac support", "Renal replacement therapy / dialysis support", "Nutritional and metabolic support", "Sepsis and multi-organ dysfunction management"],
  },
  {
    category: "Specialised Critical Care",
    items: ["Post-operative critical care", "Neuro-critical care", "Cardiac critical care", "Trauma and emergency critical care"],
  },
];

export const metadata = {
  title: "ICU | Hopewell Hospital Ranchi",
  description:
    "Comprehensive critical care at Hopewell Hospital: 24x7 ICU monitoring, ventilator and organ support, and specialised intensive care for critically ill patients.",
};

export default function IcuPage() {
  return (
    <main className="min-h-screen bg-[#edf9f8]">
      <Navbar />

      {/* Hero banner */}
      <section
        className="relative flex h-72 flex-col items-center justify-center bg-cover px-5 text-center sm:h-96"
        style={{ backgroundImage: "url(/icu1.jfif)", backgroundPosition: "center 45%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#061822]/88 via-[#061822]/72 to-[#061822]/88" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-black sm:text-6xl">
          ICU / Critical Care
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-3 text-center text-3xl font-black tracking-[-.02em] text-ink">Our Key Services</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-bold text-slate-500">
          Continuous monitoring, rapid escalation and specialist-led intensive care for our most
          critically ill patients, 24 hours a day.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {keyServices.map((group) => (
            <div key={group.category} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-lg font-black text-ink">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <ChevronRight size={14} className="shrink-0 text-violet-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a
          href="/appointment?specialty=Critical%20Care"
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
