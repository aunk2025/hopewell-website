"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import HeroVideo from "./HeroVideo";
import { heroDict, type Locale } from "@/lib/i18n";

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = heroDict[locale];

  return (
    <section className="mesh relative isolate min-h-[820px] overflow-hidden">
      {/* Decorative ambient glows — sized with fixed rem offsets meant to
          sit mostly off-screen on a wide desktop viewport. On a narrow phone
          screen those same offsets cover a much larger share of the width,
          washing the blur directly over the heading/paragraph text (which
          have no background of their own to shield them). Hidden below lg
          where they'd otherwise overlap the text instead of framing it. */}
      <div className="absolute left-[-16rem] top-20 hidden h-[36rem] w-[36rem] rounded-full bg-cyan/20 blur-3xl lg:block" />
      <div className="absolute right-[-12rem] top-[-5rem] hidden h-[38rem] w-[38rem] rounded-full bg-sky/70 blur-3xl lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-24 pt-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-32 lg:pt-24">
        <motion.div initial={{ y: 26 }} animate={{ y: 0 }} transition={{ duration: .8 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-teal-800 backdrop-blur-xl">
            <Sparkles size={14} />
            {t.kicker}
          </div>

          <h1 className="text-balance max-w-3xl text-3xl font-black leading-[1.05] tracking-[-.045em] text-ink sm:text-5xl lg:text-6xl">
            {t.h1}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            {t.paragraph}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/appointment" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-bold text-white shadow-glass transition hover:-translate-y-1">
              {t.bookAppointment}
              <ArrowUpRight className="transition group-hover:rotate-45" size={18} />
            </Link>
            <a href="#centres" className="glass flex items-center justify-center rounded-full px-7 py-4 font-bold text-ink transition hover:-translate-y-1">
              {t.exploreCentres}
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {t.stats.map(([value, label]) => (
              <div key={label} className="glass rounded-2xl p-4 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-glow">
                <div className="text-2xl font-black">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: .92 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: .1 }}
          className="relative min-h-[500px] overflow-visible"
        >
          <HeroVideo />

          {/*
           * Advanced Medicine card — sits above the globe on mobile; on the
           * LEFT arc of the globe from lg upward. left-[-24px] keeps it
           * clear of the text column's right edge (the gap-10 column gutter
           * is 40px, so a 24px hang never reaches text content) regardless
           * of how long the text column's own content runs.
           */}
          <div className="glass floating absolute left-1/2 top-4 z-20 w-[250px] max-w-[calc(100vw-2.5rem)] -translate-x-1/2 rounded-3xl p-4 shadow-glass lg:left-[-24px] lg:top-[38%] lg:-translate-y-1/2 lg:max-w-none lg:translate-x-0">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cyan/20 text-teal-800">
                <HeartPulse size={21} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{t.cardTitle}</div>
                <div className="mt-1 whitespace-nowrap font-black">{t.cardHeading}</div>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-teal-600 to-cyan" />
            </div>
          </div>

          {/*
           * Patient Journey — sits below the globe on mobile; on the RIGHT
           * arc of the globe from lg upward, where right-[-125px] shifts it
           * so exactly half (125px) hangs outside.
           */}
          <div className="dark-glass floating-slow absolute bottom-0 left-[42%] z-20 w-[250px] max-w-[calc(100vw-2.5rem)] -translate-x-1/2 translate-y-[100%] rounded-3xl p-5 text-white shadow-glass lg:left-auto lg:right-[-125px] lg:bottom-[9%] lg:max-w-none lg:translate-x-0 lg:translate-y-1/2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[.16em] text-cyan">{t.journeyKicker}</span>
              <ShieldCheck size={19} className="text-cyan" />
            </div>
            <div className="mt-4 text-2xl font-black">{t.journeyHeading}</div>
            <p className="mt-2 text-sm leading-6 text-white/65">{t.journeyText}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
