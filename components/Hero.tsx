"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="mesh relative isolate min-h-[820px] overflow-hidden">
      <div className="absolute left-[-16rem] top-20 h-[36rem] w-[36rem] rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute right-[-12rem] top-[-5rem] h-[38rem] w-[38rem] rounded-full bg-sky/70 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-24 pt-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-32 lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-teal-800 backdrop-blur-xl">
            <Sparkles size={14} />
            The Future of Care in Ranchi
          </div>

          <h1 className="text-balance max-w-3xl text-5xl font-black leading-[.98] tracking-[-.055em] text-ink sm:text-6xl lg:text-7xl">
            Human care.
            <span className="block bg-gradient-to-r from-teal-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Engineered for tomorrow.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            A 70-bed Cardiac and Surgical Centre of Excellence combining advanced medicine,
            intelligent coordination and deeply personal care.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/appointment" className="group flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-bold text-white shadow-glass transition hover:-translate-y-1">
              Book an Appointment
              <ArrowUpRight className="transition group-hover:rotate-45" size={18} />
            </Link>
            <a href="#centres" className="glass flex items-center justify-center rounded-full px-7 py-4 font-bold text-ink transition hover:-translate-y-1">
              Explore Centres of Excellence
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["24×7", "Emergency"],
              ["70", "Advanced Beds"],
              ["8+", "Specialty Centres"],
            ].map(([value, label]) => (
              <div key={label} className="glass rounded-2xl p-4">
                <div className="text-2xl font-black">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: .1 }}
          className="relative min-h-[500px] overflow-visible"
        >
          <HeroVideo />

          {/*
           * Cardiac Command — centered on the LEFT arc of the globe.
           * left-[-115px] shifts it so exactly half (115px) hangs outside.
           */}
          <div className="glass floating absolute z-20 w-[230px] rounded-3xl p-4 shadow-glass"
            style={{ left: "-115px", top: "38%", transform: "translateY(-50%)" }}>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan/20 text-teal-800">
                <HeartPulse size={21} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Cardiac Command</div>
                <div className="mt-1 font-black">Connected Care</div>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-teal-600 to-cyan" />
            </div>
          </div>

          {/*
           * Patient Journey — centered on the RIGHT arc of the globe.
           * right-[-125px] shifts it so exactly half (125px) hangs outside.
           */}
          <div className="dark-glass floating-slow absolute z-20 w-[250px] rounded-3xl p-5 text-white shadow-glass"
            style={{ right: "-125px", bottom: "9%", transform: "translateY(50%)" }}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[.16em] text-cyan">Patient Journey</span>
              <ShieldCheck size={19} className="text-cyan" />
            </div>
            <div className="mt-4 text-2xl font-black">One coordinated pathway</div>
            <p className="mt-2 text-sm leading-6 text-white/65">From first enquiry to recovery and follow-up.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
