import Link from "next/link";
import { Clock, Stethoscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Block from "@/components/services/ProcedureBlocks";
import type { ProcedurePage } from "@/lib/procedure-content";
import { buildProcedureJsonLd } from "@/lib/procedure-seo";
import { procedureChromeDict, type Locale } from "@/lib/i18n";

export default function ProcedurePageTemplate({
  procedure,
  categoryHref,
  canonicalPath,
  consultationLabel,
  locale = "en",
  altHref,
}: {
  procedure: ProcedurePage;
  categoryHref: string;
  // Path used for canonical/OG URLs and JSON-LD (e.g.
  // "/services/surgeries/gallbladder-surgery"). Optional only so this
  // template doesn't hard-break for a caller that hasn't been updated yet;
  // every current route passes it.
  canonicalPath?: string;
  consultationLabel?: string;
  locale?: Locale;
  altHref?: string;
}) {
  const t = procedureChromeDict[locale];
  const appointmentHref = locale === "hi" ? "/hi/appointment" : "/appointment";
  const servicesHref = locale === "hi" ? "/hi/services" : "/services";
  const toc = procedure.sections.filter((s) => s.id);
  const jsonLd = canonicalPath ? buildProcedureJsonLd(procedure, canonicalPath, procedure.category, categoryHref) : null;

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Navbar locale={locale} altHref={altHref} />

      <div className="mx-auto max-w-7xl px-5 pt-6 text-sm text-slate-500 lg:px-8">
        <Link href={servicesHref} className="hover:text-ink">
          {t.breadcrumbServices}
        </Link>
        <span className="mx-2">/</span>
        <Link href={categoryHref} className="hover:text-ink">
          {procedure.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{procedure.heroTitle}</span>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-stretch">
          <div>
            <div className="section-kicker mb-4 before:content-none">{procedure.eyebrow}</div>
            <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-[-.03em] text-ink sm:text-5xl">
              {procedure.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{procedure.heroCopy}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={appointmentHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                {consultationLabel ?? t.bookConsultation}
              </a>
              <a
                href="#cost"
                className="rounded-full border border-teal-700 bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5"
              >
                {t.getCostEstimate}
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-teal-700 bg-white p-7 shadow-glass">
            <div className="section-kicker mb-2 before:content-none">{procedure.heroCardKicker}</div>
            <h3 className="text-xl font-black text-ink">{procedure.heroCardTitle}</h3>
            {procedure.heroCardText && (
              <p className="mt-2 text-sm leading-6 text-slate-600">{procedure.heroCardText}</p>
            )}

            {procedure.heroImage && (
              <div className="mt-4">
                <img
                  src={procedure.heroImage}
                  alt={procedure.heroCardTitle}
                  className="h-48 w-full rounded-2xl border border-teal-700/30 object-cover"
                />
                {procedure.heroImageCaption && (
                  <p className="mt-2 text-xs text-slate-400">{procedure.heroImageCaption}</p>
                )}
              </div>
            )}

            {procedure.doctorName && (
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-teal-700/30 bg-teal-50/40 p-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 text-xs font-black text-white">
                  <Stethoscope size={18} />
                </div>
                <div>
                  <div className="font-black text-ink">{procedure.doctorName}</div>
                  <div className="text-xs text-slate-500">{procedure.doctorSpecialtyMini}</div>
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {procedure.heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-teal-700/30 bg-teal-50/60 px-3 py-1.5 text-xs font-bold text-teal-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-7xl px-5 pb-4 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {procedure.facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-teal-700 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <Clock size={11} /> {fact.label}
              </div>
              <div className="mt-1.5 text-sm font-black text-ink">{fact.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content + TOC */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start">
          <aside className="hidden rounded-[1.5rem] border border-teal-700 bg-white p-5 shadow-sm lg:sticky lg:top-28 lg:block">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">{t.onThisPage}</h4>
            <nav className="grid gap-1">
              {toc.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-lg px-2.5 py-1.5 text-sm text-slate-600 transition hover:bg-teal-50 hover:text-ink"
                >
                  {s.kicker}
                </a>
              ))}
            </nav>
          </aside>

          <div className="grid gap-6">
            {procedure.sections.map((s, i) => (
              <div
                key={s.id || i}
                id={s.id || undefined}
                className="scroll-mt-28 rounded-[1.5rem] border border-teal-700 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="section-kicker mb-2 before:content-none">{s.kicker}</div>
                <h2 className="mb-4 text-xl font-black text-ink sm:text-2xl">{s.heading}</h2>
                <div className="grid gap-4">
                  {s.blocks.map((block, bi) => (
                    <Block key={bi} block={block} locale={locale} />
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-[1.5rem] bg-ink p-8 text-white sm:p-10">
              <h2 className="text-2xl font-black">{procedure.finalCta.heading}</h2>
              <p className="mt-2 max-w-xl leading-7 text-white/70">{procedure.finalCta.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={appointmentHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5"
                >
                  {t.bookAppointment}
                </a>
                <a
                  href="tel:+919199666246"
                  className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  {t.callHospital}
                </a>
              </div>
            </div>

            <p className="text-xs leading-6 text-slate-400">
              {t.footnote}
            </p>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
