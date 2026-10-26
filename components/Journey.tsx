import { HeartHandshake } from "lucide-react";
import { journeyDict, type Locale } from "@/lib/i18n";

const images = [
  { image: "/01%20know.png", alt: "Icon representing clear communication about next steps in care" },
  { image: "/02%20time.png", alt: "Icon representing timely, unhurried care" },
  { image: "/03%20care2.png", alt: "Icon representing connected, coordinated care" },
  { image: "/04%20heard.png", alt: "Icon representing patients and families being heard" },
  { image: "/05%20safety.png", alt: "Icon representing patient safety" },
  { image: "/06family.png", alt: "Icon representing keeping family members informed" },
];

export default function Journey({ locale = "en" }: { locale?: Locale }) {
  const t = journeyDict[locale];
  const promises = t.promises.map((p, i) => ({ ...p, ...images[i] }));

  return (
    <section className="px-5 pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-teal-700 bg-white p-6 shadow-glass sm:p-10 lg:p-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-teal-50 px-5 py-2.5 text-sm font-black uppercase tracking-[.14em] text-teal-700">
            <HeartHandshake size={20} />
            <span className="h-5 w-px bg-teal-200" />
            {t.kicker}
          </div>
          <h2 className="text-balance mt-7 text-4xl font-semibold tracking-[-.02em] text-ink sm:text-5xl">
            {t.h2Line1}<br />
            {t.h2Line2}
          </h2>
          <img src="/whyleaf.png" alt="Decorative leaf divider" className="mx-auto mt-6 h-8 w-auto max-w-xs object-contain" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {promises.map((p) => (
            <div key={p.title} className="flex items-start gap-5 rounded-2xl border border-teal-700 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-teal-50/50 hover:shadow-md">
              <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-full bg-teal-50">
                <img src={p.image} alt={p.alt} className="h-16 w-16 object-contain mix-blend-multiply" />
              </div>
              <div>
                <div className="text-lg font-black text-ink">{p.title}</div>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-bold leading-8 text-ink">
          {t.closing}
        </p>
      </div>
    </section>
  );
}
