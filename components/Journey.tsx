import { Aperture, Hospital, HeartPulse, Microscope, Scan, ShieldPlus, Syringe } from "lucide-react";

const features = [
  { icon: Scan, label: "Digital X-Ray" },
  { icon: Microscope, label: "In-house Lab" },
  { icon: Aperture, label: "MRI" },
  { icon: HeartPulse, label: "Cath Lab" },
  { icon: Syringe, label: "Modular OT" },
  { icon: ShieldPlus, label: "ICU by Intensivists" },
];

export default function Journey() {
  return (
    <section className="px-5 pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-glass sm:p-10 lg:p-14">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-teal-700">
            <Hospital size={15} />
            Why Hopewell Hospital
          </div>
          <h2 className="text-balance mt-6 text-4xl font-bold tracking-[-.02em] text-ink sm:text-5xl">
            Advanced infrastructure, built with trusted care.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-500">
            From diagnostics to surgery to intensive care, every facility is in-house and
            connected, so care never waits on a referral elsewhere.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Icon className="text-teal-700" size={20} />
                <div className="mt-3 text-sm font-bold text-ink">{feature.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
