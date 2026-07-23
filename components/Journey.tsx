"use client";

import { useState } from "react";
import { CalendarCheck, ChevronRight, MessageCircleMore, ScanLine, UserRoundSearch } from "lucide-react";

const steps = [
  { icon: MessageCircleMore, title: "Tell us what you need", text: "Start on WhatsApp, phone or the website." },
  { icon: UserRoundSearch, title: "Right specialist, faster", text: "Intelligent routing to the appropriate department." },
  { icon: CalendarCheck, title: "Coordinated appointment", text: "Clear timing, preparation and confirmation." },
  { icon: ScanLine, title: "Connected treatment journey", text: "Diagnostics, admission, care and follow-up in one pathway." },
];

export default function Journey() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ink px-5 py-28 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <div className="section-kicker !text-cyan">Patient Journey</div>
            <h2 className="text-balance mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl">
              The hospital should feel clear before you even arrive.
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-white/60">
              A digital front door that reduces uncertainty, directs every enquiry and keeps the patient informed.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-cyan via-cyan/30 to-transparent sm:block" />
            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const selected = index === active;
                return (
                  <button key={step.title} type="button" onClick={() => setActive(index)}
                    className={`relative flex w-full items-center gap-5 rounded-[1.6rem] border p-5 text-left transition ${
                      selected ? "border-cyan/40 bg-white/10" : "border-white/5 bg-white/[.03] hover:bg-white/[.06]"
                    }`}>
                    <div className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${
                      selected ? "bg-cyan text-ink" : "bg-white/10 text-cyan"
                    }`}>
                      <Icon size={21} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-[.16em] text-cyan/70">Step 0{index + 1}</div>
                      <div className="mt-1 text-lg font-black">{step.title}</div>
                      <div className="mt-1 text-sm leading-6 text-white/55">{step.text}</div>
                    </div>
                    <ChevronRight className={`transition ${selected ? "translate-x-1 text-cyan" : "text-white/25"}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
