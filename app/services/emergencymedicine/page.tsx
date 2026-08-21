import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const keyServices = [
  {
    category: "24×7 Emergency Care",
    items: ["Round-the-clock emergency department", "Rapid triage and assessment", "On-site emergency physicians", "Ambulance and transfer coordination"],
  },
  {
    category: "Trauma & Accident Care",
    items: ["Road traffic accident management", "Fracture and orthopaedic trauma stabilisation", "Head injury assessment", "Burns and wound care"],
  },
  {
    category: "Critical Emergency Response",
    items: ["Cardiac emergencies (heart attack, arrhythmia)", "Stroke and neurological emergencies", "Respiratory distress and airway emergencies", "Shock and haemorrhage management"],
  },
  {
    category: "Specialised Emergency Services",
    items: ["Paediatric emergency care", "Obstetric emergencies", "Poisoning and overdose management", "Seamless handover to ICU and specialist teams"],
  },
];

export const metadata = {
  title: "Emergency Medicine | Hopewell Hospital Ranchi",
  description:
    "24x7 emergency care at Hopewell Hospital: rapid trauma response, critical emergency management and seamless escalation to ICU and specialist care.",
};

export default function EmergencyMedicinePage() {
  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar />

      {/* Hero banner */}
      <section
        className="relative flex h-80 flex-col items-center justify-center bg-cover px-5 text-center sm:h-[30rem]"
        style={{ backgroundImage: "url(/ememed%20-%20Copy.jfif)", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2119]/88 via-[#2a2119]/75 to-[#2a2119]/88" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          Emergency Medicine
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-3 text-center text-3xl font-black tracking-[-.02em] text-ink">Our Key Services</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-bold text-slate-500">
          Rapid assessment and coordinated response when every minute matters, backed by
          experienced emergency physicians and seamless escalation to critical care.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {keyServices.map((group) => (
            <div key={group.category} className="rounded-3xl border border-teal-700 bg-white p-7 shadow-sm">
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
          href="/appointment?specialty=Emergency%20Medicine"
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
