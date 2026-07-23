"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Baby, Bone, HeartPulse, ScanHeart, ShieldPlus, Stethoscope } from "lucide-react";

const centres = [
  { icon: HeartPulse, name: "Cardiac Sciences", text: "Integrated cardiology, cardiac diagnostics and critical cardiac support.", stat: "24×7" },
  { icon: ScanHeart, name: "Surgical Excellence", text: "Precision-led general, laparoscopic and gastrointestinal surgery.", stat: "Advanced OT" },
  { icon: Bone, name: "Orthopaedics", text: "Joint preservation, trauma care and advanced mobility restoration.", stat: "Mobility" },
  { icon: Baby, name: "Mother & Child", text: "Sensitive obstetric, gynaecological, paediatric and newborn care.", stat: "Family care" },
  { icon: ShieldPlus, name: "Critical Care", text: "Continuous monitoring, rapid escalation and specialist-led intensive care.", stat: "ICU" },
  { icon: Stethoscope, name: "Emergency Medicine", text: "Rapid assessment and coordinated response when every minute matters.", stat: "Always on" },
];

export default function Centres() {
  return (
    <section id="centres" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="section-kicker">Centres of Excellence</div>
          <h2 className="text-balance mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl">
            Specialized care, connected as one intelligent system.
          </h2>
          <p className="mt-6 max-w-md leading-7 text-slate-600">
            Instead of making patients navigate departments, Hopewell connects expertise,
            diagnostics, critical care and recovery around the patient.
          </p>
          <a href="#" className="mt-8 inline-flex items-center gap-2 font-bold text-teal-800">
            View all specialities <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {centres.map((centre, index) => {
            const Icon = centre.icon;
            return (
              <motion.article
                key={centre.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .25 }}
                transition={{ delay: index * .06 }}
                whileHover={{ y: -7, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
                className="glass group relative min-h-[285px] overflow-hidden rounded-[2rem] p-6 shadow-glass [transform-style:preserve-3d]"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan/15 blur-2xl transition group-hover:bg-cyan/30" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-cyan shadow-glow">
                      <Icon size={25} />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      {centre.stat}
                    </span>
                  </div>
                  <h3 className="mt-10 text-2xl font-black tracking-tight">{centre.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{centre.text}</p>
                  <div className="mt-auto flex items-center justify-between pt-7">
                    <span className="text-sm font-bold">Explore centre</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 transition group-hover:rotate-45 group-hover:bg-ink group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
