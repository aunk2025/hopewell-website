import { notFound } from "next/navigation";
import { AlertTriangle, IndianRupee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProcedure, procedures } from "@/lib/ent-procedures";

export function generateStaticParams() {
  return procedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getProcedure(slug);
  if (!procedure) return { title: "ENT | Hopewell Hospital Ranchi" };
  return {
    title: `${procedure.name} | Hopewell Hospital Ranchi`,
    description: procedure.overview,
  };
}

export default async function EntProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getProcedure(slug);
  if (!procedure) notFound();

  return (
    <main
      className={`min-h-screen ${procedure.backgroundImage ? "bg-cover bg-fixed" : "bg-[#edf9f8]"}`}
      style={
        procedure.backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.15)), url(${procedure.backgroundImage})`,
              backgroundPosition: procedure.backgroundPosition ?? "center 25%",
            }
          : undefined
      }
    >
      <Navbar />

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="section-kicker mb-4">ENT</div>
        <h1
          className="mb-6 text-4xl font-black tracking-[-.03em] text-black sm:text-5xl"
          style={{ textShadow: "0 2px 12px rgba(255,255,255,.8), 0 1px 2px rgba(255,255,255,.9)" }}
        >
          {procedure.name}
        </h1>
        <p
          className="mb-10 text-lg font-bold leading-8 text-slate-800"
          style={{ textShadow: "0 1px 8px rgba(255,255,255,.8)" }}
        >
          {procedure.overview}
        </p>

        {procedure.sections ? (
          <div className="space-y-8">
            {procedure.sections.map((s) =>
              s.variant === "warning" ? (
                <div key={s.title} className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-amber-600" />
                    <h2 className="text-lg font-black text-amber-800">{s.title}</h2>
                  </div>
                  <p className="text-sm leading-6 text-amber-900/80">{s.text}</p>
                </div>
              ) : (
                <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h2 className="mb-2 text-lg font-black text-ink">{s.title}</h2>
                  <p className="text-sm leading-6 text-slate-600">{s.text}</p>
                </div>
              )
            )}

            <div className="rounded-3xl border border-teal-200 bg-teal-50 p-7">
              <div className="mb-1 flex items-center gap-2">
                <IndianRupee size={18} className="text-teal-700" />
                <h2 className="text-lg font-black text-teal-800">Price Range</h2>
              </div>
              <p className="text-sm leading-6 text-teal-900/80">Price on Consultation</p>
            </div>

            {procedure.timeline && (
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="mb-5 text-lg font-black text-ink">Recovery Timeline</h2>
                <div className="space-y-4">
                  {procedure.timeline.map((t, i) => (
                    <div key={t.phase} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-cyan">
                          {i + 1}
                        </div>
                        {i < procedure.timeline!.length - 1 && (
                          <div className="mt-1 w-px flex-1 bg-slate-200" />
                        )}
                      </div>
                      <div className="pb-4">
                        <div className="text-xs font-bold uppercase tracking-widest text-teal-700">{t.phase}</div>
                        {t.title && <div className="mt-1 font-black text-ink">{t.title}</div>}
                        <p className="mt-1 text-sm leading-6 text-slate-600">{t.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-7 text-sm text-slate-500 shadow-sm">
            More detailed information about this procedure is on the way. In the meantime, call
            us or book an appointment to speak with a specialist directly.
          </div>
        )}

        <a
          href="/appointment?specialty=ENT"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-center gap-2 rounded-2xl bg-ink py-4 text-sm font-bold text-white transition hover:bg-teal-900"
        >
          Book an Appointment
        </a>
      </section>

      <Footer />
    </main>
  );
}
