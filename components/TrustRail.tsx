import { Activity, BrainCircuit, CircleCheckBig, HeartHandshake, ShieldPlus } from "lucide-react";

export default function TrustRail() {
  const items = [
    [HeartHandshake, "Compassion-led"],
    [BrainCircuit, "Technology-enabled"],
    [ShieldPlus, "Safety designed"],
    [Activity, "24×7 coordinated"],
    [CircleCheckBig, "Outcome focused"],
  ];

  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 lg:px-8">
      <div className="dark-glass grid gap-4 rounded-[2rem] p-5 text-white shadow-glass sm:grid-cols-2 lg:grid-cols-5">
        {items.map(([Icon, label]) => {
          const I = Icon as typeof Activity;
          return (
            <div key={label as string} className="flex items-center gap-3 rounded-2xl border border-white/5 px-3 py-3 transition hover:border-cyan/40 hover:bg-white/5">
              <I className="text-cyan" size={20} />
              <span className="text-sm font-semibold">{label as string}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
