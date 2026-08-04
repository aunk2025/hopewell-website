"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const schema = z.object({
  name:    z.string().min(2, "Name required"),
  email:   z.string().email("Valid email required"),
  phone:   z.string().optional().transform(v => v ?? ""),
  subject: z.string().min(2, "Subject required"),
  message: z.string().min(10, "Message too short"),
});
type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const DEPARTMENTS = [
  { name: "Emergency & Critical Care", phone: "+91 72819 90530", available: "24×7" },
  { name: "Cardiology OPD",            phone: "+91 72819 90531", available: "Mon–Sat 9AM–5PM" },
  { name: "Surgical OPD",              phone: "+91 72819 90532", available: "Mon–Sat 9AM–5PM" },
  { name: "Appointment Desk",          phone: "+91 72819 90533", available: "Mon–Sat 8AM–8PM" },
  { name: "Billing & Accounts",        phone: "+91 72819 90534", available: "Mon–Sat 9AM–5PM" },
  { name: "Radiology / Reports",       phone: "+91 72819 90535", available: "Mon–Sat 8AM–6PM" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema) as import("react-hook-form").Resolver<FormData>,
    defaultValues: { phone: "" },
  });

  async function onSubmit(data: FormData) {
    setServerError("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) { setSent(true); }
    else { setServerError("Failed to send. Please call us directly."); }
  }

  return (
    <main className="min-h-screen bg-[#edf9f8]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#061822] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-400">Reach Us</p>
          <h1 className="text-5xl font-black sm:text-6xl">Contact Us</h1>
          <p className="mt-4 max-w-xl text-lg text-white/60">
            We&apos;re here to help. Reach out for appointments, enquiries, or emergency assistance.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">

          {/* Left — Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-xl">
              <h2 className="mb-4 font-black text-[#061822]">Hospital Address</h2>
              <div className="flex gap-3 text-sm text-slate-600">
                <MapPin size={18} className="mt-0.5 shrink-0 text-teal-600" />
                <p>New Hopewell Hospital<br />Hazari Baug Road<br />Tharpakna<br />Ranchi, Jharkhand — 834001</p>
              </div>
              <a href="mailto:hopewellranchi@gmail.com" className="mt-4 flex items-center gap-3 text-sm font-semibold text-teal-700 hover:underline">
                <Mail size={18} className="shrink-0" />
                hopewellranchi@gmail.com
              </a>
            </div>

            {/* Emergency */}
            <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={18} className="text-red-500" />
                <h2 className="font-black text-red-700">Emergency — 24×7</h2>
              </div>
              <a href="tel:+917281990530" className="text-2xl font-black text-red-600 hover:underline">
                +91 72819 90530
              </a>
            </div>

            {/* Department contacts */}
            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-xl">
              <h2 className="mb-4 font-black text-[#061822]">Department Contacts</h2>
              <div className="space-y-3">
                {DEPARTMENTS.map((d) => (
                  <div key={d.name} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                    <div>
                      <div className="font-bold text-[#061822]">{d.name}</div>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                        <Clock size={10} /> {d.available}
                      </div>
                    </div>
                    <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="font-bold text-teal-700 hover:underline">
                      {d.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 backdrop-blur-xl">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle size={48} className="text-teal-500 mb-4" />
                <h2 className="text-xl font-black text-[#061822]">Message Received!</h2>
                <p className="mt-2 text-slate-500">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h2 className="mb-6 text-xl font-black text-[#061822]">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-slate-700">Full Name *</label>
                      <input {...register("name")} placeholder="Your name" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100" />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-slate-700">Phone</label>
                      <input {...register("phone")} placeholder="+91 XXXXX XXXXX" type="tel" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Email Address *</label>
                    <input {...register("email")} placeholder="you@example.com" type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100" />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Subject *</label>
                    <input {...register("subject")} placeholder="How can we help?" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100" />
                    {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Message *</label>
                    <textarea {...register("message")} rows={5} placeholder="Your message…" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100" />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>
                  {serverError && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{serverError}</p>}
                  <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-[#061822] py-4 font-bold text-white transition hover:-translate-y-0.5 disabled:opacity-60">
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
