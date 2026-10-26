"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  AlertTriangle,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Newspaper,
  Phone,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import {
  AMBULANCE_PHONE,
  EMERGENCY_PHONE,
  ENQUIRY_TYPES,
  HOSPITAL_ADDRESS,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_SRC,
  MAPS_VIEW_URL,
} from "@/lib/contact-config";
import { contactDict, type Locale } from "@/lib/i18n";

type EnquiryType = (typeof ENQUIRY_TYPES)[number];

type QuickItem = { icon: LucideIcon; enquiryType: EnquiryType };

const QUICK_ACCESS: QuickItem[] = [
  { icon: AlertTriangle, enquiryType: "Emergency" },
  { icon: CalendarDays, enquiryType: "Appointment" },
  { icon: Truck, enquiryType: "Ambulance" },
  { icon: ShieldCheck, enquiryType: "TPA / Insurance Enquiry" },
  { icon: Briefcase, enquiryType: "Career Enquiry" },
  { icon: MessageSquare, enquiryType: "Feedback" },
];

type OptionCard = { icon: LucideIcon; enquiryType: EnquiryType; accent?: boolean };

const OPTION_CARDS: OptionCard[] = [
  { icon: AlertTriangle, enquiryType: "Emergency", accent: true },
  { icon: CalendarDays, enquiryType: "Appointment" },
  { icon: Truck, enquiryType: "Ambulance" },
  { icon: MessageSquare, enquiryType: "Feedback" },
  { icon: Building2, enquiryType: "Corporate Enquiry" },
  { icon: ShieldCheck, enquiryType: "TPA / Insurance Enquiry" },
  { icon: Briefcase, enquiryType: "Career Enquiry" },
  { icon: Newspaper, enquiryType: "Media Enquiry" },
  { icon: HelpCircle, enquiryType: "General Enquiry" },
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid mobile number")
    .max(20, "Enter a valid mobile number")
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid mobile number"),
  email: z.union([z.string().trim().email("Enter a valid email address"), z.literal("")]).optional(),
  enquiryType: z.enum(ENQUIRY_TYPES, { message: "Please select an enquiry type" }),
  department: z.string().optional(),
  preferredAt: z.string().max(60).optional(),
  message: z.string().trim().min(10, "Please share a few more details").max(2000),
  consent: z.literal(true, { message: "Please provide consent to continue" }),
  website: z.string().optional(), // honeypot — left empty by real visitors
});
type FormValues = z.infer<typeof schema>;

const DEFAULT_VALUES: Partial<FormValues> = {
  name: "",
  phone: "",
  email: "",
  enquiryType: "General Enquiry",
  department: "",
  preferredAt: "",
  message: "",
  website: "",
};

export default function ContactPageContent({ locale = "en" }: { locale?: Locale }) {
  const t = contactDict[locale];
  const formSectionRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_VALUES,
  });

  function selectEnquiryAndScroll(enquiryType: EnquiryType) {
    setValue("enquiryType", enquiryType, { shouldValidate: true, shouldDirty: true });
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function scrollToMap() {
    document.getElementById("hospital-location")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function onSubmit(data: FormValues) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset(DEFAULT_VALUES);
      scrollToMap();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-6 text-sm text-slate-500 lg:px-8">
        <Link href="/" className="hover:text-ink">
          {t.breadcrumbHome}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{t.breadcrumbCurrent}</span>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2a2119] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#c8b6a6" }}>
                {t.heroKicker}
              </p>
              <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-[-.03em] sm:text-5xl">
                {t.h1}
              </h1>
              <p className="mt-5 max-w-xl leading-8 text-white/70">
                {t.heroParagraph}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5"
                >
                  {t.bookAppointment}
                </Link>
                <a
                  href={`tel:${EMERGENCY_PHONE}`}
                  className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-700"
                >
                  <Phone size={16} /> {t.emergencyHelp}
                </a>
                <button
                  type="button"
                  onClick={scrollToMap}
                  className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {t.getDirectionsBtn}
                </button>
              </div>
            </div>

            {/* Quick access panel */}
            <aside className="rounded-[2rem] border border-white/15 bg-white p-6 shadow-2xl sm:p-7">
              <h2 className="mb-4 text-lg font-black text-ink">{t.quickAccessHeading}</h2>
              <div className="grid gap-2">
                {QUICK_ACCESS.map((item, i) => {
                  const Icon = item.icon;
                  const copy = t.quickAccess[i];
                  return (
                    <button
                      key={copy.label}
                      type="button"
                      onClick={() => selectEnquiryAndScroll(item.enquiryType)}
                      className="group flex items-center gap-3 rounded-2xl border border-teal-700/20 bg-teal-50/40 p-3.5 text-left transition hover:border-teal-700 hover:bg-teal-50"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-white">
                        <Icon size={18} />
                      </span>
                      <span className="flex-1">
                        <span className="block font-bold text-ink">{copy.label}</span>
                        <span className="block text-xs text-slate-500">{copy.text}</span>
                      </span>
                      <ChevronRight size={16} className="shrink-0 text-teal-700 transition group-hover:translate-x-0.5" />
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-black tracking-[-.02em] text-ink sm:text-4xl">
            {t.optionsHeading}
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-slate-500">
            {t.optionsSubtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OPTION_CARDS.map((card, i) => {
            const Icon = card.icon;
            const copy = t.optionCards[i];
            return (
              <div
                key={copy.title}
                className={`flex flex-col rounded-3xl border bg-white p-7 shadow-sm ${
                  card.accent ? "border-red-200" : "border-teal-700"
                }`}
              >
                <div
                  className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl ${
                    card.accent ? "bg-red-50 text-red-600" : "bg-teal-50 text-teal-700"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-black text-ink">{copy.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-6 text-slate-600">{copy.text}</p>
                <button
                  type="button"
                  onClick={() => selectEnquiryAndScroll(card.enquiryType)}
                  className={`inline-flex items-center gap-1 self-start text-sm font-bold uppercase tracking-wide ${
                    card.accent ? "text-red-600" : "text-teal-700"
                  }`}
                >
                  {t.contactThisTeam} <ChevronRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hospital location */}
      <section id="hospital-location" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-black tracking-[-.02em] text-ink sm:text-4xl">
            {t.findHospital}
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-teal-700 shadow-sm">
              <iframe
                src={MAPS_EMBED_SRC}
                title="Hopewell Hospital location on Google Maps"
                className="h-[360px] w-full sm:h-[420px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-3xl border border-teal-700 bg-[#faf5ef] p-7 sm:p-8">
              <h3 className="mb-5 text-lg font-black text-ink">{t.planVisit}</h3>

              <div className="mb-6 flex gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-teal-700" />
                <div>
                  <div className="text-sm font-bold text-ink">{t.hospitalAddress}</div>
                  <p className="text-sm leading-6 text-slate-600">{HOSPITAL_ADDRESS}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-teal-700/30 bg-white p-4">
                  <div className="text-sm font-bold text-ink">{t.byCar}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {t.byCarText}
                  </p>
                </div>
                <div className="rounded-2xl border border-teal-700/30 bg-white p-4">
                  <div className="text-sm font-bold text-ink">{t.byAmbulance}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {t.byAmbulanceText}
                  </p>
                  <a href={`tel:${AMBULANCE_PHONE}`} className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:underline">
                    <Phone size={13} /> {AMBULANCE_PHONE}
                  </a>
                </div>
                <div className="rounded-2xl border border-teal-700/30 bg-white p-4">
                  <div className="text-sm font-bold text-ink">{t.publicTransport}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {t.publicTransportText}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={MAPS_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  <MapPin size={15} /> {t.openInMaps}
                </a>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-700 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5"
                >
                  <Navigation size={15} /> {t.getDirections}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section ref={formSectionRef} id="contact-form" className="scroll-mt-24 mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-black tracking-[-.02em] text-ink sm:text-4xl">{t.formHeading}</h2>
          <p className="text-slate-500">
            {t.formSubtitle}
          </p>
        </div>

        <div className="rounded-3xl border border-teal-700 bg-white p-7 shadow-sm sm:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center" role="status" aria-live="polite">
              <CheckCircle2 size={48} className="mb-4 text-teal-700" />
              <h3 className="text-xl font-black text-ink">{t.successHeading}</h3>
              <p className="mt-2 max-w-md text-slate-500">
                {t.successText}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full border border-teal-700 px-5 py-2.5 text-sm font-bold text-ink"
              >
                {t.submitAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {/* Honeypot — hidden from real visitors */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                    {t.fullName}
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
                    {t.mobileNumber}
                  </label>
                  <input
                    id="phone"
                    {...register("phone")}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                    {t.emailAddress}
                  </label>
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="enquiryType" className="mb-1.5 block text-sm font-semibold text-slate-700">
                    {t.enquiryType}
                  </label>
                  <select
                    id="enquiryType"
                    {...register("enquiryType")}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                  >
                    {ENQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {t.enquiryTypeLabels[type]}
                      </option>
                    ))}
                  </select>
                  {errors.enquiryType && <p className="mt-1 text-xs text-red-500">{errors.enquiryType.message}</p>}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="department" className="mb-1.5 block text-sm font-semibold text-slate-700">
                    {t.department}
                  </label>
                  <select
                    id="department"
                    {...register("department")}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                  >
                    <option value="">{t.selectIfApplicable}</option>
                    {t.departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="preferredAt" className="mb-1.5 block text-sm font-semibold text-slate-700">
                    {t.preferredDateTime}
                  </label>
                  <input
                    id="preferredAt"
                    {...register("preferredAt")}
                    placeholder={t.preferredDateTimePlaceholder}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  placeholder={t.messagePlaceholder}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                <input
                  id="consent"
                  type="checkbox"
                  {...register("consent")}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-teal-700 focus:ring-teal-400"
                />
                <label htmlFor="consent" className="text-xs leading-5 text-slate-600">
                  {t.consent}
                </label>
              </div>
              {errors.consent && <p className="text-xs text-red-500">{errors.consent.message}</p>}

              <div aria-live="polite">
                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                    {t.errorMessage}
                  </p>
                )}
                {status === "sending" && (
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <Loader2 size={15} className="animate-spin" /> {t.sending}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ink py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? t.sending : t.submit}
              </button>

              <p className="flex items-center gap-2 text-center text-xs text-slate-400">
                <Mail size={12} className="shrink-0" />
                {t.emergencyNote(EMERGENCY_PHONE)}
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
