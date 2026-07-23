"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

const doctors = [
  { name: "Dr. Aarya Mehta", specialty: "Cardiac Sciences", initials: "AM", focus: "Interventional Cardiology" },
  { name: "Dr. Kabir Sinha", specialty: "Surgical Excellence", initials: "KS", focus: "Laparoscopic Surgery" },
  { name: "Dr. Naina Verma", specialty: "Mother & Child", initials: "NV", focus: "Obstetrics & Gynaecology" },
];

export default function Doctors() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() =>
    doctors.filter(d => `${d.name} ${d.specialty} ${d.focus}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

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
        {filtered.map((doctor, index) => (
          <article key={doctor.name} className="group relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-glass">
            <div className="relative grid aspect-[4/4.4] place-items-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#dffbfa] via-white to-[#cceef3]">
              <div className="absolute h-56 w-56 rounded-full border border-teal-700/10" />
              <div className="absolute h-40 w-40 rounded-full border border-teal-700/15" />
              <div className="text-6xl font-black tracking-[-.08em] text-teal-900/70">{doctor.initials}</div>
              <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                Available
              </span>
            </div>
            <div className="px-1 pb-1 pt-5">
              <div className="text-xs font-bold uppercase tracking-[.13em] text-teal-700">{doctor.specialty}</div>
              <h3 className="mt-2 text-xl font-black">{doctor.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{doctor.focus}</p>
              <button type="button" className="mt-5 flex w-full items-center justify-between rounded-full bg-slate-100 px-4 py-3 text-sm font-bold transition group-hover:bg-ink group-hover:text-white">
                View Profile <ArrowUpRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <p className="mt-8 text-slate-500">No matching doctor found.</p>}
    </section>
  );
}
