"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { geist } from "@/lib/fonts";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  qualifications: string;
  imageUrl: string;
};

/* Doctors whose names match these (in order) are pinned to the front of the list. */
const FEATURED_NAMES = ["neha ali", "shahbaz alam", "md arif tauheed"];

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const VISIBLE_COUNT = 3;

export default function Doctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/api/doctors")
      .then((r) => (r.ok ? r.json() : { doctors: [] }))
      .then(({ doctors }) => setDoctors(doctors ?? []))
      .catch(() => setDoctors([]));
  }, []);

  const ordered = useMemo(() => {
    const rank = (d: Doctor) =>
      FEATURED_NAMES.findIndex((n) => d.name.toLowerCase().includes(n));
    return [...doctors].sort((a, b) => {
      const ra = rank(a), rb = rank(b);
      if (ra === -1 && rb === -1) return 0;
      if (ra === -1) return 1;
      if (rb === -1) return -1;
      return ra - rb;
    });
  }, [doctors]);

  const filtered = useMemo(() =>
    ordered.filter(d => `${d.name} ${d.specialty} ${d.qualifications}`.toLowerCase().includes(query.toLowerCase())),
    [ordered, query]
  );

  const visible = showAll ? filtered : filtered.slice(0, VISIBLE_COUNT);

  return (
    <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-kicker before:content-none !text-base">Find a Doctor</div>
        <h2 className={`${geist.className} text-balance mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl`}>
          Expertise made easier to discover.
        </h2>
      </div>
      <label className="glass mx-auto mt-8 flex max-w-[420px] items-center gap-3 rounded-full px-5 py-4">
        <Search size={19} className="text-slate-400" />
        <span className="sr-only">Search doctors</span>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by doctor or speciality"
          className={`${geist.className} w-full bg-transparent text-sm outline-none placeholder:text-slate-400`} />
      </label>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {visible.map((doctor) => (
          <article key={doctor.id} className="group relative flex flex-col items-center overflow-hidden rounded-[2rem] border border-teal-700 bg-white p-7 text-center shadow-glass transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#f8ede0] to-[#e4cbb0] shadow-glow">
              {doctor.imageUrl ? (
                <img src={doctor.imageUrl} alt={doctor.name} className="h-full w-full object-cover" />
              ) : (
                <div className="grid h-full w-full place-items-center text-3xl font-black tracking-[-.05em] text-teal-900/70">
                  {initials(doctor.name)}
                </div>
              )}
            </div>
            <span className="mt-4 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-teal-700">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Available
            </span>
            <h3 className="mt-2 text-xl font-black">{doctor.name}</h3>
            <div className="mt-1 text-xs font-bold uppercase tracking-[.1em] text-slate-400">{doctor.specialty}</div>
            <p className="mt-2 text-sm text-slate-500">{doctor.qualifications}</p>
            <a href="/doctors" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-bold transition group-hover:bg-ink group-hover:text-white">
              View Profile <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
      {doctors.length === 0 ? (
        <p className="mt-8 text-slate-400">Loading doctors…</p>
      ) : filtered.length === 0 ? (
        <p className="mt-8 text-slate-500">No matching doctor found.</p>
      ) : !showAll && filtered.length > VISIBLE_COUNT ? (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mx-auto mt-10 flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-bold transition hover:bg-ink hover:text-white"
        >
          More Doctors <ArrowUpRight size={16} />
        </button>
      ) : null}
    </section>
  );
}
