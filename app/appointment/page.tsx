"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarDays, Clock, User, Phone, Mail, FileText, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { format, addDays, isBefore, startOfDay } from "date-fns";

const schema = z.object({
  patientName:  z.string().min(2, "Name must be at least 2 characters"),
  patientPhone: z.string().min(7, "Enter a valid phone number"),
  patientEmail: z.string().email("Enter a valid email address"),
  reason:       z.string().min(5, "Please describe your reason for visit"),
  appointmentDate: z.string().min(1, "Select a date"),
  timeSlot:     z.string().min(1, "Select a time slot"),
  doctorId:     z.number().optional(),
});

type FormData = z.infer<typeof schema>;

type Doctor = { id: number; name: string; specialty: string; };

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM",  "3:00 PM",  "3:30 PM",  "4:00 PM",  "4:30 PM",
];

const STEPS = ["Doctor & Date", "Patient Details", "Confirm"];

export default function AppointmentPage() {
  return (
    <Suspense fallback={null}>
      <AppointmentForm />
    </Suspense>
  );
}

function AppointmentForm() {
  const searchParams = useSearchParams();
  const specialtyFilter = searchParams.get("specialty");

  const [step, setStep] = useState(0);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [refNumber, setRefNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, watch, setValue, getValues, trigger, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    fetch("/api/doctors")
      .then((r) => (r.ok ? r.json() : { doctors: [] }))
      .then(({ doctors }) => setDoctors(doctors ?? []))
      .catch(() => setDoctors([]));
  }, []);

  const visibleDoctors = specialtyFilter
    ? doctors.filter((d) => d.specialty.toLowerCase() === specialtyFilter.toLowerCase())
    : doctors;

  const selectedDoctorId = watch("doctorId");
  const selectedDate = watch("appointmentDate");
  const selectedSlot = watch("timeSlot");
  const selectedDoctor = doctors.find((d) => d.id === selectedDoctorId);

  /* Generate available dates (next 30 days, skip Sundays) — memoized so the
     ISO timestamps stay stable across re-renders and the selected-date
     comparison below keeps matching. */
  const availableDates = useMemo(
    () => Array.from({ length: 30 }, (_, i) => addDays(new Date(), i + 1)).filter((d) => d.getDay() !== 0),
    []
  );

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          appointmentDate: new Date(data.appointmentDate).toISOString(),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Booking failed");
      setRefNumber(json.refNumber);
      setStep(3);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  function onInvalid() {
    setError("Please check the highlighted fields and try again.");
    setStep(1);
  }

  /* Success screen */
  if (step === 3) {
    return (
      <main className="min-h-screen bg-[#faf5ef]">
        <Navbar />
        <div className="flex min-h-[70vh] items-center justify-center px-5">
          <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-10 text-center shadow-xl backdrop-blur-xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <CheckCircle size={36} className="text-teal-600" />
            </div>
            <h1 className="text-2xl font-black text-[#2a2119]">Appointment Booked!</h1>
            <p className="mt-2 text-slate-500">Your booking reference number is:</p>
            <div className="my-4 rounded-2xl bg-[#2a2119] px-6 py-3 text-2xl font-black tracking-widest text-cyan-400">
              {refNumber}
            </div>
            <p className="text-sm text-slate-500">
              A confirmation has been sent to <strong>{getValues("patientEmail")}</strong>.
              Please arrive 15 minutes before your scheduled time.
            </p>
            <a href="/" className="mt-6 inline-block rounded-full bg-[#2a2119] px-8 py-3 font-bold text-white hover:-translate-y-0.5 transition">
              Back to Home
            </a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#2a2119] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h1 className="text-4xl font-black sm:text-5xl">Book an Appointment</h1>
          <p className="mt-3 text-white/60">Choose your doctor, date, and time in just a few steps.</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
        {/* Step indicator */}
        <div className="mb-10 flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition ${i <= step ? "bg-[#2a2119] text-white" : "bg-slate-200 text-slate-500"}`}>
                {i + 1}
              </div>
              <span className={`hidden text-sm sm:block ${i === step ? "font-bold text-[#2a2119]" : "text-slate-400"}`}>{s}</span>
              {i < STEPS.length - 1 && <ChevronRight size={14} className="text-slate-300 mx-1" />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          {/* Step 0 — Doctor & Date */}
          {step === 0 && (
            <div className="space-y-6">
              {/* Doctor selection */}
              <div className="rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-xl">
                <h2 className="mb-1 font-black text-[#2a2119]">Select Doctor (Optional)</h2>
                {specialtyFilter && (
                  <p className="mb-4 text-xs font-semibold text-teal-700">
                    Showing {specialtyFilter} specialists
                  </p>
                )}
                <div className={`grid gap-3 sm:grid-cols-2 ${specialtyFilter ? "" : "mt-4"}`}>
                  <button
                    type="button"
                    onClick={() => setValue("doctorId", undefined)}
                    className={`rounded-2xl border-2 p-4 text-left text-sm transition ${selectedDoctorId === undefined ? "border-teal-500 bg-teal-50" : "border-slate-200 bg-white hover:border-slate-300"}`}
                  >
                    <div className="font-bold">Any Available Doctor</div>
                    <div className="text-slate-500">We'll assign the best match</div>
                  </button>
                  {visibleDoctors.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setValue("doctorId", d.id)}
                      className={`rounded-2xl border-2 p-4 text-left text-sm transition ${selectedDoctorId === d.id ? "border-teal-500 bg-teal-50" : "border-slate-200 bg-white hover:border-slate-300"}`}
                    >
                      <div className="font-bold">{d.name}</div>
                      <div className="text-slate-500">{d.specialty}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date selection */}
              <div className="rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-xl">
                <h2 className="mb-4 flex items-center gap-2 font-black text-[#2a2119]">
                  <CalendarDays size={18} /> Select Date
                </h2>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
                  {availableDates.slice(0, 18).map((d) => (
                    <button
                      key={d.toISOString()}
                      type="button"
                      onClick={() => setValue("appointmentDate", d.toISOString())}
                      className={`rounded-xl border py-2 text-center text-xs font-bold transition ${selectedDate === d.toISOString() ? "border-teal-500 bg-teal-500 text-white" : "border-slate-200 bg-white hover:border-teal-300"}`}
                    >
                      <div>{format(d, "EEE")}</div>
                      <div className="text-base">{format(d, "d")}</div>
                      <div className="text-[10px] opacity-70">{format(d, "MMM")}</div>
                    </button>
                  ))}
                </div>
                {errors.appointmentDate && <p className="mt-2 text-xs text-red-500">{errors.appointmentDate.message}</p>}
              </div>

              {/* Time slot */}
              {selectedDate && (
                <div className="rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 flex items-center gap-2 font-black text-[#2a2119]">
                    <Clock size={18} /> Select Time
                  </h2>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setValue("timeSlot", t)}
                        className={`rounded-xl border py-2.5 text-sm font-bold transition ${selectedSlot === t ? "border-teal-500 bg-teal-500 text-white" : "border-slate-200 bg-white hover:border-teal-300"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {errors.timeSlot && <p className="mt-2 text-xs text-red-500">{errors.timeSlot.message}</p>}
                </div>
              )}

              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={!selectedDate || !selectedSlot}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2a2119] py-4 font-bold text-white transition hover:-translate-y-0.5 disabled:opacity-40"
              >
                Continue to Patient Details <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Step 1 — Patient details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-xl">
                <h2 className="mb-5 font-black text-[#2a2119]">Patient Information</h2>
                <div className="space-y-4">
                  {[
                    { name: "patientName",  label: "Full Name",    icon: User,     type: "text",  placeholder: "Your full name" },
                    { name: "patientPhone", label: "Phone Number", icon: Phone,    type: "tel",   placeholder: "+91 XXXXX XXXXX" },
                    { name: "patientEmail", label: "Email Address",icon: Mail,     type: "email", placeholder: "you@example.com" },
                  ].map(({ name, label, icon: Icon, type, placeholder }) => (
                    <div key={name}>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>
                      <div className="relative">
                        <Icon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type={type}
                          placeholder={placeholder}
                          {...register(name as keyof FormData)}
                          className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                        />
                      </div>
                      {errors[name as keyof FormData] && (
                        <p className="mt-1 text-xs text-red-500">{errors[name as keyof FormData]?.message}</p>
                      )}
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">Reason for Visit</label>
                    <div className="relative">
                      <FileText size={15} className="absolute left-3.5 top-4 text-slate-400" />
                      <textarea
                        rows={3}
                        placeholder="Brief description of your symptoms or reason…"
                        {...register("reason")}
                        className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                    {errors.reason && <p className="mt-1 text-xs text-red-500">{errors.reason.message}</p>}
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(0)} className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-slate-200 py-4 font-bold text-slate-600 transition hover:border-slate-300">
                  <ChevronLeft size={18} /> Back
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    const valid = await trigger(["patientName", "patientPhone", "patientEmail", "reason"]);
                    if (valid) setStep(2);
                  }}
                  className="flex flex-[2] items-center justify-center gap-2 rounded-full bg-[#2a2119] py-4 font-bold text-white transition hover:-translate-y-0.5"
                >
                  Review Booking <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2 — Confirm */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-xl">
                <h2 className="mb-5 font-black text-[#2a2119]">Confirm Your Booking</h2>
                <dl className="space-y-3 text-sm">
                  {[
                    ["Doctor",   selectedDoctor?.name ?? "Any Available Doctor"],
                    ["Date",     selectedDate ? format(new Date(selectedDate), "EEEE, d MMMM yyyy") : ""],
                    ["Time",     selectedSlot],
                    ["Patient",  getValues("patientName")],
                    ["Phone",    getValues("patientPhone")],
                    ["Email",    getValues("patientEmail")],
                    ["Reason",   getValues("reason")],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-2.5">
                      <dt className="w-16 shrink-0 font-bold text-slate-500">{k}</dt>
                      <dd className="font-semibold text-[#2a2119]">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{error}</p>}
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-slate-200 py-4 font-bold text-slate-600">
                  <ChevronLeft size={18} /> Back
                </button>
                <button type="submit" disabled={submitting} className="flex flex-[2] items-center justify-center gap-2 rounded-full bg-teal-600 py-4 font-bold text-white transition hover:-translate-y-0.5 disabled:opacity-60">
                  {submitting ? "Booking…" : "Confirm Appointment"}
                  {!submitting && <CheckCircle size={18} />}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      <Footer />
    </main>
  );
}
