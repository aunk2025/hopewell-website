import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const keyServices = [
  {
    category: "Ear Conditions",
    items: [
      { label: "Hearing loss evaluation", href: "/services/ent/tympanoplasty" },
      { label: "Chronic ear infections", href: "/services/ent/mastoidectomy" },
      { label: "Tympanoplasty (eardrum repair)", href: "/services/ent/tympanoplasty" },
      { label: "Mastoidectomy", href: "/services/ent/mastoidectomy" },
      { label: "Cochlear implant assessment", href: "/services/ent/mastoidectomy" },
      { label: "Tinnitus management", href: "/services/ent/mastoidectomy" },
    ],
  },
  {
    category: "Nose & Sinus Conditions",
    items: [
      { label: "Chronic sinusitis", href: "/services/ent/noseandsinuscondition" },
      { label: "Functional Endoscopic Sinus Surgery (FESS)", href: "/services/ent/noseandsinuscondition" },
      { label: "Deviated nasal septum correction", href: "/services/ent/noseandsinuscondition" },
      { label: "Nasal polyps removal", href: "/services/ent/noseandsinuscondition" },
      { label: "Allergic rhinitis management", href: "/services/ent/noseandsinuscondition" },
      { label: "Nosebleed (epistaxis) treatment", href: "/services/ent/noseandsinuscondition" },
    ],
  },
  {
    category: "Throat & Voice Conditions",
    items: [
      { label: "Tonsillitis & tonsillectomy", href: "/services/ent/tonsillectomy" },
      { label: "Adenoidectomy", href: "/services/ent/tonsillectomy" },
      { label: "Voice and swallowing disorders", href: "/services/ent/tonsillectomy" },
      { label: "Snoring & sleep apnea evaluation", href: "/services/ent/tonsillectomy" },
      { label: "Laryngitis and vocal cord issues", href: "/services/ent/tonsillectomy" },
    ],
  },
  {
    category: "Head & Neck Surgery",
    items: [
      { label: "Thyroid and neck swelling evaluation", href: "/services/ent/head-neck-surgery" },
      { label: "Salivary gland disorders", href: "/services/ent/head-neck-surgery" },
      { label: "Head and neck tumour management", href: "/services/ent/head-neck-surgery" },
      { label: "Facial trauma care", href: "/services/ent/head-neck-surgery" },
    ],
  },
  {
    category: "Paediatric ENT",
    items: [
      { label: "Recurrent ear infections in children", href: "/services/ent/paediatricent" },
      { label: "Speech and hearing delay evaluation", href: "/services/ent/paediatricent" },
      { label: "Adenotonsillar hypertrophy", href: "/services/ent/paediatricent" },
      { label: "Foreign body removal (ear/nose/throat)", href: "/services/ent/paediatricent" },
    ],
  },
];

export const metadata = {
  title: "ENT | Hopewell Hospital Ranchi",
  description:
    "Comprehensive ear, nose and throat care at Hopewell Hospital: hearing, sinus, throat, head & neck and paediatric ENT services.",
};

export default function EntPage() {
  return (
    <main className="min-h-screen bg-[#edf9f8]">
      <Navbar />

      {/* Hero banner */}
      <section
        className="relative flex h-80 flex-col items-center justify-center bg-contain bg-center bg-no-repeat bg-[#061822] px-5 text-center sm:h-[30rem]"
        style={{ backgroundImage: "url(/entbanner.jfif)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#061822]/70 via-[#061822]/50 to-[#061822]/70" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          ENT
        </h1>
        <p className="relative mt-5 max-w-2xl text-white/80 sm:text-lg">
          Complete ear, nose and throat care, from routine infections and hearing concerns to
          advanced sinus, voice and head & neck surgery.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-3 text-center text-3xl font-black tracking-[-.02em] text-ink">Our Key Services</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-slate-500">
          Comprehensive ENT diagnostics and treatment for patients of every age, backed by
          experienced specialists and modern surgical technique.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {keyServices.map((group) => (
            <div key={group.category} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-lg font-black text-ink">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => {
                  const label = typeof item === "string" ? item : item.label;
                  const href = typeof item === "string" ? undefined : item.href;
                  return (
                    <li key={label} className="flex items-center gap-2 text-sm text-slate-600">
                      <ChevronRight size={14} className="shrink-0 text-violet-600" />
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-violet-800 underline decoration-violet-300 underline-offset-2 hover:text-violet-900"
                        >
                          {label}
                        </a>
                      ) : (
                        label
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <a
          href="/appointment?specialty=ENT"
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
