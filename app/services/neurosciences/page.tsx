import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const keyServices = [
  {
    category: "Stroke Care",
    items: ["24×7 stroke emergency response", "Clot-dissolving (thrombolysis) therapy", "Post-stroke rehabilitation", "Stroke risk assessment"],
  },
  {
    category: "Neurology",
    items: ["Epilepsy and seizure management", "Headache and migraine clinic", "Parkinson's and movement disorders", "Nerve and muscle disorders"],
  },
  {
    category: "Neurosurgery",
    items: ["Brain tumour surgery", "Spine surgery", "Head injury and trauma surgery", "Minimally invasive neurosurgery"],
  },
  {
    category: "Diagnostics & Support",
    items: ["CT and MRI brain imaging", "EEG and nerve conduction studies", "Neuro-critical care (ICU)", "Long-term neuro-rehabilitation"],
  },
];

export const metadata = {
  title: "Neurosciences | Hopewell Hospital Ranchi",
  description:
    "Comprehensive neurosciences care at Hopewell Hospital: stroke care, neurology, neurosurgery and advanced neuro-diagnostics.",
};

export default function NeurosciencesPage() {
  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar />

      {/* Hero banner */}
      <section
        className="relative flex h-80 flex-col items-center justify-center bg-cover bg-center px-5 text-center sm:h-[30rem]"
        style={{ backgroundImage: "url(/neuro.png)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2119]/80 via-[#2a2119]/60 to-[#2a2119]/80" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          Neurosciences
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-3 text-center text-3xl font-black tracking-[-.02em] text-ink">Our Key Services</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-bold text-slate-500">
          Comprehensive brain, spine and nerve care, from emergency stroke response to
          neurosurgery and long-term rehabilitation.
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
          href="/appointment?specialty=Neurology"
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
