import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, IndianRupee } from "lucide-react";
import { HEALTH_PACKAGES } from "@/lib/health-packages";
import { healthPackagesDict } from "@/lib/i18n";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "हेल्थ पैकेज | हॉपवेल हॉस्पिटल रांची";
const DESCRIPTION =
  "हॉपवेल हॉस्पिटल, रांची में निवारक स्वास्थ्य जांच पैकेज, जो सामान्य स्वास्थ्य, कार्डियक, महिला स्वास्थ्य, सीनियर केयर एवं डायबिटीज स्क्रीनिंग को कवर करते हैं।";
const URL = `${SITE_URL}/hi/health-packages`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "en-IN": "/health-packages", "hi-IN": "/hi/health-packages" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Hopewell Hospital",
    type: "website",
    locale: "hi_IN",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Hopewell Hospital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function HealthPackagesPageHindi() {
  const t = healthPackagesDict.hi;
  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar locale="hi" altHref="/health-packages" />

      {/* Hero banner */}
      <section className="relative flex h-64 flex-col items-center justify-center bg-[#2a2119] px-5 text-center sm:h-80">
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          {t.h1}
        </h1>
        <p className="relative mt-5 max-w-2xl text-white/80 sm:text-lg">
          {t.subtitle}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HEALTH_PACKAGES.map((pkg, i) => {
            const copy = t.packages[i];
            return (
              <div key={pkg.name} className="flex flex-col rounded-3xl border border-teal-700 bg-white p-7 shadow-sm">
                <h3 className="mb-2 text-lg font-black text-ink">{copy.name}</h3>
                <p className="mb-4 text-sm leading-6 text-slate-600">{copy.text}</p>
                <ul className="mb-5 space-y-2">
                  {copy.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="shrink-0 text-teal-700" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-1.5 text-sm font-bold text-teal-700">
                  <IndianRupee size={14} />
                  {t.priceOnConsultation}
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="/appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 flex items-center justify-center gap-2 rounded-2xl bg-ink py-4 text-sm font-bold text-white transition hover:bg-teal-900 sm:mx-auto sm:w-80"
        >
          {t.bookAppointment}
        </a>
      </section>

      <Footer locale="hi" />
    </main>
  );
}
