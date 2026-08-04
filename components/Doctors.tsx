"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  qualifications: string;
  imageUrl: string;
};

/* Doctors whose names match these (in order) are pinned to the front of the list. */
const FEATURED_NAMES = ["neha ali", "shahbaz alam"];

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
      .then((r) => r.json())
      .then(({ doctors }) => setDoctors(doctors ?? []));
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
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
        <div>
          <div className="section-kicker">Find a Doctor</div>
          <h2 className="text-balance mt-5 max-w-2xl text-4xl font-black tracking-[-.045em] sm:text-5xl">
            Expertise made easier to discover.
          </h2>
        </div>
        <label className="glass flex min-w-0 items-center gap-3 rounded-full px-5 py-4 lg:w-[360px]">
          <Search size={19} className="text-slate-400" />
          <span className="sr-only">Search doctors</span>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by doctor or speciality"
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" />
        </label>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {visible.map((doctor) => (
          <article key={doctor.id} className="group relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-glass">
            <div className="relative grid aspect-[4/4.4] place-items-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#dffbfa] via-white to-[#cceef3]">
              {doctor.imageUrl ? (
                <img src={doctor.imageUrl} alt={doctor.name} className="h-full w-full object-cover" />
              ) : (
                <>
                  <div className="absolute h-56 w-56 rounded-full border border-teal-700/10" />
                  <div className="absolute h-40 w-40 rounded-full border border-teal-700/15" />
                  <div className="text-6xl font-black tracking-[-.08em] text-teal-900/70">{initials(doctor.name)}</div>
                </>
              )}
              <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                Available
              </span>
            </div>
            <div className="px-1 pb-1 pt-5">
              <div className="text-xs font-bold uppercase tracking-[.13em] text-teal-700">{doctor.specialty}</div>
              <h3 className="mt-2 text-xl font-black">{doctor.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{doctor.qualifications}</p>
              <a href="/doctors" className="mt-5 flex w-full items-center justify-between rounded-full bg-slate-100 px-4 py-3 text-sm font-bold transition group-hover:bg-ink group-hover:text-white">
                View Profile <ArrowUpRight size={16} />
              </a>
            </div>
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
