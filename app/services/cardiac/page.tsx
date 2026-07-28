import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const keyServices = [
  {
    category: "Diagnostic Cardiology",
    items: ["ECG and Echocardiography", "Treadmill (stress) testing", "Holter and ambulatory BP monitoring", "Cardiac CT and calcium scoring"],
  },
  {
    category: "Interventional Cardiology",
    items: ["Coronary angiography", "Angioplasty and stenting", "Pacemaker implantation", "Balloon valvuloplasty"],
  },
  {
    category: "Cardiac Surgery",
    items: ["Coronary artery bypass grafting (CABG)", "Valve repair and replacement", "Congenital heart surgery", "Minimally invasive cardiac surgery"],
  },
  {
    category: "Preventive & Critical Cardiac Care",
    items: ["Cardiac risk assessment", "Heart failure management", "Cardiac rehabilitation", "24×7 cardiac emergency and CCU care"],
  },
];

export const metadata = {
  title: "Cardiac Sciences | Hopewell Hospital Ranchi",
  description:
    "Integrated cardiology, cardiac diagnostics, interventional procedures and cardiac surgery at Hopewell Hospital, backed by 24x7 critical cardiac support.",
};

export default function CardiacPage() {
  return (
    <main className="min-h-screen bg-[#edf9f8]">
      <Navbar />

      {/* Hero banner */}
      <section
        className="relative flex h-72 flex-col items-center justify-center bg-cover bg-center px-5 text-center sm:h-96"
        style={{ backgroundImage: "url(/cardiac.jfif)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#061822]/70 via-[#061822]/50 to-[#061822]/70" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          Cardiac Sciences
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-3 text-center text-3xl font-black tracking-[-.02em] text-ink">Our Key Services</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-bold text-slate-500">
          Integrated cardiology, cardiac diagnostics and critical cardiac support, delivered by
          experienced cardiologists and cardiac surgeons around the clock.
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
          href="/appointment?specialty=Cardiology"
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
