"use client";

import { useState } from "react";
import { Bot, CalendarDays, CheckCircle2, MessageSquareText, PhoneCall } from "lucide-react";

export default function Intelligence() {
  const [sent, setSent] = useState(false);

  return (
    <section id="appointment" className="px-5 pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0b3945] via-ink to-[#041219] p-6 text-white shadow-glass sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-cyan">
              <Bot size={15} />
              Hopewell Care Navigator
            </div>
            <h2 className="text-balance mt-6 text-4xl font-black tracking-[-.045em] sm:text-5xl">
              Tell us what is happening. We will guide the next step.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/60">
              This front-end prototype demonstrates the future appointment assistant:
              human handover, intelligent routing and zero diagnostic claims.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [MessageSquareText, "Describe need"],
                [CalendarDays, "Choose timing"],
                [PhoneCall, "Receive callback"],
              ].map(([Icon, label]) => {
                const I = Icon as typeof Bot;
                return (
                  <div key={label as string} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <I className="text-cyan" size={20} />
                    <div className="mt-3 text-sm font-bold">{label as string}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 text-ink sm:p-7">
            {sent ? (
              <div className="grid min-h-[390px] place-items-center text-center">
                <div>
                  <CheckCircle2 className="mx-auto text-teal-600" size={52} />
                  <h3 className="mt-5 text-2xl font-black">Request captured</h3>
                  <p className="mt-2 text-slate-500">A Hopewell care coordinator will contact you.</p>
                  <button type="button" onClick={() => setSent(false)} className="mt-6 rounded-full bg-ink px-5 py-3 font-bold text-white">
                    Submit another
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <div className="text-xs font-black uppercase tracking-[.15em] text-teal-700">Appointment Request</div>
                  <h3 className="mt-2 text-2xl font-black">How may we assist?</h3>
                </div>
                <label className="block text-sm font-bold">
                  Full name
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-500" placeholder="Patient name" />
                </label>
                <label className="block text-sm font-bold">
                  Mobile number
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-500" placeholder="+91" />
                </label>
                <label className="block text-sm font-bold">
                  Select service
                  <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-500">
                    <option>Cardiac consultation</option>
                    <option>Surgical consultation</option>
                    <option>Mother & child care</option>
                    <option>Orthopaedics</option>
                    <option>General enquiry</option>
                  </select>
                </label>
                <label className="block text-sm font-bold">
                  Brief concern
                  <textarea className="mt-2 min-h-24 w-full rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-500" placeholder="Do not share highly sensitive medical information here." />
                </label>
                <button type="button" onClick={() => setSent(true)} className="w-full rounded-full bg-ink px-5 py-4 font-black text-white transition hover:-translate-y-0.5">
                  Request a callback
                </button>
                <p className="text-center text-xs leading-5 text-slate-400">
                  For emergencies, call the hospital directly. This form does not provide medical diagnosis.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
