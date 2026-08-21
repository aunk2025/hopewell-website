import Link from "next/link";
import { ChevronRight, AlertTriangle, IndianRupee, ShieldCheck } from "lucide-react";
import SurgeryFaq from "@/components/services/SurgeryFaq";
import type { ContentBlock } from "@/lib/procedure-content";

export default function ProcedureBlock({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case "text":
      return <p className="leading-7 text-slate-600">{block.text}</p>;

    case "bullets":
      return (
        <ul className="grid gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
              <ChevronRight size={14} className="mt-1 shrink-0 text-teal-700" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "warning":
      return (
        <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-600" />
          <p className="text-sm leading-6 text-amber-900/80">{block.text}</p>
        </div>
      );

    case "twocol":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.boxes.map((box) => (
            <div key={box.title} className="rounded-2xl border border-teal-700/30 bg-teal-50/40 p-5">
              <h4 className="mb-2 font-black text-ink">{box.title}</h4>
              {box.items ? (
                <ul className="grid gap-1.5">
                  {box.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                      <ChevronRight size={13} className="mt-1 shrink-0 text-teal-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-6 text-slate-600">{box.text}</p>
              )}
            </div>
          ))}
        </div>
      );

    case "grid":
      return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-teal-700 bg-white p-4 shadow-sm">
              <div className="font-black text-ink">{item.title}</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      );

    case "timeline":
      return (
        <div className="grid gap-3">
          {block.steps.map((step, i) => (
            <div key={i} className="flex gap-4 rounded-2xl border border-teal-700/30 bg-teal-50/30 p-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-sm font-black text-cyan">
                {step.num}
              </div>
              <div>
                <div className="font-black text-ink">{step.title}</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "cost":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-teal-700 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
              <IndianRupee size={13} /> Indicative treatment range
            </div>
            <div className="mt-2 text-2xl font-black text-ink">
              {block.range || "Shared after clinical evaluation"}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{block.note}</p>
            <a
              href="/appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-teal-700"
            >
              Get exact estimate <ChevronRight size={14} />
            </a>
          </div>
          <div className="rounded-2xl border border-teal-700/30 bg-teal-50/40 p-6">
            <div className="flex items-center gap-2 font-black text-ink">
              <ShieldCheck size={17} className="text-teal-700" />
              {block.insuranceTitle}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{block.insuranceNote}</p>
          </div>
        </div>
      );

    case "doctor": {
      const initials = block.name
        .replace(/^Dr\.?\s*/i, "")
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 3);
      return (
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-teal-700/30 bg-teal-50/30 p-6 sm:flex-row">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 text-xl font-black text-white">
            {initials}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-lg font-black text-ink">{block.name}</h4>
            <p className="mt-0.5 text-sm text-teal-700">{block.specialty}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{block.focus}</p>
          </div>
          <a
            href="/appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-900"
          >
            Book Appointment
          </a>
        </div>
      );
    }

    case "faq":
      return <SurgeryFaq items={block.items} />;

    case "links":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-teal-700 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2 font-black text-ink">
                {item.title}
                <ChevronRight size={15} className="shrink-0 text-teal-700 transition group-hover:translate-x-0.5" />
              </div>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.text}</p>
            </Link>
          ))}
        </div>
      );

    default:
      return null;
  }
}
