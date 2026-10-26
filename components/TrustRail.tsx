import { Activity, BrainCircuit, CircleCheckBig, HeartHandshake, ShieldPlus } from "lucide-react";
import { trustRailDict, type Locale } from "@/lib/i18n";

export default function TrustRail({ locale = "en" }: { locale?: Locale }) {
  const icons = [HeartHandshake, BrainCircuit, ShieldPlus, Activity, CircleCheckBig];
  const labels = trustRailDict[locale].items;

  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 lg:px-8">
      <div className="dark-glass grid gap-4 rounded-[2rem] p-5 text-white shadow-glass sm:grid-cols-2 lg:grid-cols-5">
        {icons.map((Icon, i) => (
          <div key={labels[i]} className="flex items-center gap-3 rounded-2xl border border-white/5 px-3 py-3 transition hover:border-cyan/40 hover:bg-white/5">
            <Icon className="text-cyan" size={20} />
            <span className="text-sm font-semibold">{labels[i]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
