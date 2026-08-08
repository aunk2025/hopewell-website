import { HeartHandshake } from "lucide-react";

const promises = [
  { title: "You will know what happens next.", text: "We believe patients and families should understand the next step in their care.", image: "/01-know-what-happens-next.png" },
  { title: "Your time will be respected.", text: "Our workflows are designed to reduce avoidable waiting, repeated movement and unnecessary delays.", image: "/02-your-time-will-be-respected.png", zoom: true },
  { title: "Your care will be connected.", text: "Doctors, nursing, diagnostics, pharmacy and support teams work as one coordinated care system.", image: "/03-care-will-be-connected.png" },
  { title: "You will be heard.", text: "Questions, concerns and feedback are part of care, not an interruption to it.", image: "/04-you-will-be-heard%281%29.png", zoom: true },
  { title: "Safety will come before convenience.", text: "Clinical protocols, medication safety, infection control and escalation systems are built into everyday operations.", image: "/05-safety-will-come-before-convenience.png", zoom: true },
  { title: "Your family will remain informed.", text: "Especially during emergency, surgery and critical care, communication with attendants should never become an afterthought.", image: "/06-your-family-will-remain-informed.png", zoom: true },
];

export default function Journey() {
  return (
    <section className="px-5 pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-glass sm:p-10 lg:p-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-teal-50 px-5 py-2.5 text-sm font-black uppercase tracking-[.14em] text-teal-700">
            <HeartHandshake size={20} />
            <span className="h-5 w-px bg-teal-200" />
            The Hopewell Promise
          </div>
          <h2 className="text-balance mt-7 text-4xl font-semibold tracking-[-.02em] text-ink sm:text-5xl">
            What you should expect<br />
            from every Hopewell experience.
          </h2>
          <img src="/hopewell-leaf-divider-icon.png" alt="" className="mx-auto mt-6 h-8 w-auto max-w-xs object-contain" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {promises.map((p) => (
            <div key={p.title} className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-full bg-teal-50">
                <img src={p.image} alt="" className={`h-16 w-16 object-contain mix-blend-multiply ${p.zoom ? "scale-[2]" : ""}`} />
              </div>
              <div>
                <div className="text-lg font-black text-ink">{p.title}</div>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-bold leading-8 text-ink">
          You shouldn&apos;t have to understand how a hospital works to receive good healthcare.
          It is our responsibility to make the hospital work for you.
        </p>
      </div>
    </section>
  );
}
