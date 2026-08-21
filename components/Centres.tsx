"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Baby, Bone, ChevronRight, Dna, ScanHeart } from "lucide-react";
import { geist } from "@/lib/fonts";

const surgeryItems = [
  "Gallbladder Surgery",
  "Hernia Surgery",
  "Appendix Surgery",
  "Laser Piles Treatment",
  "Fistula Treatment",
  "Fissure Treatment",
  "ERCP",
  "GI Surgery",
  "Colorectal Surgery",
  "Varicose Vein Treatment",
];

const orthoItems = [
  "Knee Replacement",
  "Hip Replacement",
  "Arthroscopy",
  "ACL Reconstruction",
  "Fracture Surgery",
  "Sports Injury Treatment",
  "Spine Procedures",
];

const ivfItems = [
  "IVF",
  "Infertility Treatment",
  "Laparoscopic Gynaecology",
  "Hysterectomy",
  "Fibroid Treatment",
  "High-Risk Pregnancy",
];

const paediatricItems = ["Newborn Care", "NICU", "Child Immunization", "Paediatric Emergency"];

const centres = [
  { icon: ScanHeart, name: "General, GI & Laparoscopic Surgery", text: "Precision-led general, laparoscopic and gastrointestinal surgery.", items: surgeryItems, stat: "Advanced OT", href: "/services#surgeries", image: "/GI%20surgery.png" },
  { icon: Dna, name: "IVF, Gynaecology & Women's Health", text: "Personalized fertility evaluation, gynaecological care and assisted reproduction.", items: ivfItems, stat: "Fertility care", href: "/services#ivf", image: "/ivfhome.png" },
  { icon: Baby, name: "Paediatrics & Neonatology", text: "Sensitive newborn, infant and child care, including NICU support.", items: paediatricItems, stat: "Paediatric care", href: "/services#motherchild", image: "/paed%20nd%20neo%20new.png" },
  { icon: Bone, name: "Orthopaedics & Joint Replacement", text: "Joint preservation, trauma care and advanced mobility restoration.", items: orthoItems, stat: "Mobility", href: "/services#orthopaedics", image: "/orthopaedicsnew.png" },
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
              className={`glass group relative flex min-h-[270px] flex-col overflow-hidden rounded-[2rem] border border-teal-700 p-6 shadow-glass [transform-style:preserve-3d] ${centre.href ? "cursor-pointer" : ""}`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan/15 blur-2xl transition group-hover:bg-cyan/30" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  {centre.image ? (
                    <div className="h-24 w-24">
                      <img src={centre.image} alt={centre.name} className="h-full w-full object-contain" />
                    </div>
                  ) : (
                    <div className="grid h-24 w-24 place-items-center rounded-2xl bg-ink text-cyan shadow-glow">
                      <Icon size={36} />
                    </div>
                  )}
                  <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {centre.stat}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-black tracking-tight">{centre.name}</h3>
                {centre.items ? (
                  <ul className="mt-3 grid grid-cols-1 gap-x-3 gap-y-1.5">
                    {centre.items.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs leading-5 text-slate-600">
                        <ChevronRight size={12} className="shrink-0 text-teal-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{centre.text}</p>
                )}
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
