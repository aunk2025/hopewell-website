"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Star, GraduationCap, Clock } from "lucide-react";
import { DEPARTMENTS, matchesDepartment, sortByDepartment } from "@/lib/doctor-order";
import { doctorsPageDict, type Locale } from "@/lib/i18n";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  qualifications: string;
  experience: number;
  bio: string;
  imageUrl: string;
};

// Filter values stay the English department labels (matchesDepartment keys
// off these) — only the displayed chip text is translated.
const SPECIALTIES = ["All", ...DEPARTMENTS.map((d) => d.label)];

function DoctorCard({ doc, onClick, t }: { doc: Doctor; onClick: () => void; t: typeof doctorsPageDict["en"] }) {
  const initials = doc.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <button
      onClick={onClick}
      className="group w-full rounded-3xl border border-teal-700 bg-white/70 p-6 text-left shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 flex items-center gap-4">
        {doc.imageUrl ? (
          <img
            src={doc.imageUrl}
            alt={doc.name}
            className="h-16 w-16 rounded-2xl object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-teal-500 text-xl font-black text-white">
            {initials}
          </div>
        )}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-teal-700">
            {doc.specialty}
          </div>
          <h3 className="mt-0.5 text-lg font-black text-[#2a2119]">{doc.name}</h3>
        </div>
      </div>
      <p className="line-clamp-2 text-sm leading-6 text-slate-600">{doc.bio}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <Clock size={11} /> {t.yearsShort(doc.experience)}
        </span>
        <span className="flex items-center gap-1">
          <GraduationCap size={11} /> {doc.qualifications.split(",")[0]}
        </span>
      </div>
    </button>
  );
}

function DoctorModal({ doc, onClose, t, appointmentHref }: { doc: Doctor; onClose: () => void; t: typeof doctorsPageDict["en"]; appointmentHref: string }) {
  const initials = doc.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
        >
          ✕
        </button>
        <div className="flex items-center gap-5">
          {doc.imageUrl ? (
            <img src={doc.imageUrl} alt={doc.name} className="h-20 w-20 rounded-2xl object-cover" />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-teal-500 text-2xl font-black text-white">
              {initials}
            </div>
          )}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-teal-700">{doc.specialty}</div>
            <h2 className="mt-1 text-2xl font-black text-[#2a2119]">{doc.name}</h2>
            <div className="mt-1 text-sm text-slate-500">{doc.qualifications}</div>
          </div>
        </div>
        <div className="mt-5 flex gap-4">
          <div className="flex items-center gap-1.5 rounded-xl bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-700">
            <Clock size={14} /> {t.yearsExperienceFull(doc.experience)}
          </div>
          <div className="flex items-center gap-1.5 rounded-xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
            <Star size={14} fill="currentColor" /> {t.expertSpecialist}
          </div>
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-600">{doc.bio}</p>
        <a
          href={appointmentHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2a2119] py-3.5 text-sm font-bold text-white transition hover:bg-teal-900"
        >
          {t.bookAppointmentWithDr(doc.name.split(" ").pop() ?? doc.name)}
        </a>
      </div>
    </div>
  );
}

export default function DoctorsPageContent({ locale = "en", altHref }: { locale?: Locale; altHref?: string }) {
  const t = doctorsPageDict[locale];
  const appointmentHref = locale === "hi" ? "/hi/appointment" : "/appointment";
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filtered, setFiltered] = useState<Doctor[]>([]);
  const [specialty, setSpecialty] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/doctors")
      .then((r) => (r.ok ? r.json() : { doctors: [] }))
      .then(({ doctors }) => { const sorted = sortByDepartment((doctors ?? []) as Doctor[]); setDoctors(sorted); setFiltered(sorted); })
      .catch(() => { setDoctors([]); setFiltered([]); })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let list = doctors;
    if (specialty !== "All") list = list.filter((d) => matchesDepartment(d.specialty, specialty));
    if (search) list = list.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase()));
    setFiltered(list);
  }, [specialty, search, doctors]);

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar locale={locale} altHref={altHref} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2a2119] py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-transparent to-sky-900/20" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-400">{t.kicker}</p>
          <h1 className="text-5xl font-black leading-tight sm:text-6xl">{t.h1}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/60 leading-8">
            {t.heroText}
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[70px] z-30 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center lg:px-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {SPECIALTIES.map((s) => (
              <button
                key={s}
                onClick={() => setSpecialty(s)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${specialty === s ? "bg-[#2a2119] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {s === "All" ? t.all : t.departmentLabels[s] ?? s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Doctor grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-56 animate-pulse rounded-3xl bg-slate-200" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center text-slate-400">
            <p className="text-lg font-semibold">{t.noDoctorsFound}</p>
            <p className="mt-1 text-sm">{t.tryDifferentFilter}</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((doc) => (
              <DoctorCard key={doc.id} doc={doc} onClick={() => setSelected(doc)} t={t} />
            ))}
          </div>
        )}
      </section>

      {selected && <DoctorModal doc={selected} onClose={() => setSelected(null)} t={t} appointmentHref={appointmentHref} />}

      <Footer locale={locale} />
    </main>
  );
}
