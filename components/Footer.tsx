import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-xl font-black tracking-[.1em]">HOPEWELL</div>
          <div className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-slate-400">Hospital • Ranchi</div>
          <p className="mt-5 max-w-xs leading-7 text-slate-500">
            Advanced cardiac and surgical care designed around safety, coordination and compassion.
          </p>
        </div>
        <div>
          <h3 className="font-black">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-500">
            {["Doctors", "Services", "Health Packages", "Careers"].map(x =>
              <a href="#" key={x} className="hover:text-ink">{x}</a>
            )}
          </div>
        </div>
        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-500">
            <div className="flex gap-3"><MapPin size={18} className="shrink-0 text-teal-700" /> Ranchi, Jharkhand, India</div>
            <a href="tel:+917281990530" className="flex gap-3"><Phone size={18} className="text-teal-700" /> +91 72819 90530</a>
            <a href="mailto:info@hopewellhospital.in" className="flex gap-3"><Mail size={18} className="shrink-0 text-teal-700" /> info@hopewellhospital.in</a>
          </div>
        </div>
        <div>
          <h3 className="font-black">Stay connected</h3>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) =>
              <a href="#" key={i} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200"><Icon size={17} /></a>
            )}
          </div>
          <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-800">Get directions <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="border-t border-slate-100 px-5 py-5 text-center text-xs text-slate-400">
        Concept frontend for Hopewell Hospital. Replace placeholder doctors and operational data before production launch.
      </div>
    </footer>
  );
}
