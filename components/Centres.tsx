"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Baby, Bone, Dna, Ear, HeartPulse, ScanHeart, ShieldPlus, Stethoscope } from "lucide-react";
import { geist } from "@/lib/fonts";

const centres = [
  { icon: HeartPulse, name: "Cardiac Sciences", text: "Integrated cardiology, cardiac diagnostics and critical cardiac support.", stat: "24×7", href: "/services/cardiac", image: "/cardiac.png" },
  { icon: ScanHeart, name: "Surgical Excellence", text: "Precision-led general, laparoscopic and gastrointestinal surgery.", stat: "Advanced OT", href: "/services/surgeries", image: "/surgical.png" },
  { icon: Bone, name: "Orthopaedics", text: "Joint preservation, trauma care and advanced mobility restoration.", stat: "Mobility", href: "/services/orthopaedics", image: "/ortho.png" },
  { icon: Baby, name: "Mother & Child", text: "Sensitive obstetric, gynaecological, paediatric and newborn care.", stat: "Family care", href: "/services/motherchild", image: "/mother%20&%20child.png" },
  { icon: ShieldPlus, name: "Critical Care", text: "Continuous monitoring, rapid escalation and specialist-led intensive care.", stat: "ICU", href: "/services/icu", image: "/criticalcare.png" },
  { icon: Stethoscope, name: "Emergency Medicine", text: "Rapid assessment and coordinated response when every minute matters.", stat: "Always on", href: "/services/emergencymedicine", image: "/emergencycare.png" },
  { icon: Dna, name: "IVF", text: "Personalized fertility evaluation and assisted reproduction for couples building their family.", stat: "Fertility care", href: "/services/ivf", image: "/ivf.png" },
  { icon: Ear, name: "ENT", text: "Comprehensive ear, nose and throat diagnostics, treatment and surgical care.", stat: "Head & neck", href: "/services/ent", image: "/ent.png" },
];

export default function Centres() {
  return (
    <section id="centres" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-kicker before:content-none !text-base">Centres of Excellence</div>
        <h2 className={`${geist.className} text-balance mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl`}>
          Specialized care, connected as one intelligent system.
        </h2>
        <p className="mx-auto mt-6 max-w-md leading-7 text-slate-600">
          Instead of making patients navigate departments, Hopewell connects expertise,
          diagnostics, critical care and recovery around the patient.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {centres.map((centre, index) => {
          const Icon = centre.icon;
          const Wrapper = centre.href ? motion.a : motion.article;
          return (
            <Wrapper
              key={centre.name}
              {...(centre.href ? { href: centre.href, target: "_blank", rel: "noopener noreferrer" } : {})}
              whileHover={{ y: -7, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
              className={`glass group relative flex min-h-[270px] flex-col overflow-hidden rounded-[2rem] p-6 shadow-glass [transform-style:preserve-3d] ${centre.href ? "cursor-pointer" : ""}`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan/15 blur-2xl transition group-hover:bg-cyan/30" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  {centre.image ? (
                    <div className="h-14 w-14 overflow-hidden rounded-2xl shadow-glow">
                      <img src={centre.image} alt={centre.name} className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-cyan shadow-glow">
                      <Icon size={25} />
                    </div>
                  )}
                  <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {centre.stat}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-black tracking-tight">{centre.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{centre.text}</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-sm font-bold">Explore centre</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 transition group-hover:rotate-45 group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <a href="/services" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-teal-800">
          View all specialities <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
