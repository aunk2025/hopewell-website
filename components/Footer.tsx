import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const centres: { label: string; href?: string }[] = [
  { label: "General, GI & Laparoscopic Surgery", href: "/services#surgeries" },
  { label: "IVF, Gynaecology & Women's Health", href: "/services#ivf" },
  { label: "Paediatrics & Neonatology", href: "/services#motherchild" },
  { label: "Orthopaedics & Joint Replacement", href: "/services#orthopaedics" },
  { label: "General Medicine", href: "/services#general-medicine" },
  { label: "Urology", href: "/services#urology" },
  { label: "Vascular Surgery", href: "/services#vascular-surgery" },
  { label: "ENT", href: "/services#ent" },
  { label: "Spine", href: "/services#spine" },
  { label: "Diagnostics", href: "/services#diagnostics" },
];

const explore = [
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Health Packages", href: "/health-packages" },
  { label: "Book Appointment", href: "/appointment" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2a2119] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <a href="/" className="inline-flex items-center rounded-2xl bg-white/95 px-4 py-3 shadow-glow">
            <img src="/hopewell%20logo%202.jpeg" alt="Hopewell Hospital" className="h-20 w-auto object-contain" />
          </a>
          <p className="mt-5 max-w-xs leading-7">
            Advanced cardiac and surgical care designed around safety, coordination and compassion.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) =>
              <a href="#" key={i} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-cyan hover:text-cyan"><Icon size={17} /></a>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm">
            {explore.map(x =>
              <a href={x.href} key={x.label} className="transition hover:text-white">{x.label}</a>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Centres of Excellence</h3>
          <div className="mt-5 grid gap-3 text-sm">
            {centres.map(c =>
              c.href ? (
                <a href={c.href} key={c.label} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">{c.label}</a>
              ) : (
                <span key={c.label}>{c.label}</span>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Contact</h3>
          <div className="mt-5 space-y-4 text-sm">
            <div className="flex gap-3"><MapPin size={18} className="shrink-0 text-cyan" /> New Hopewell Hospital, Hazari Baug Road, Tharpakna, Ranchi, Jharkhand 834001</div>
            <a href="tel:+917281990530" className="flex gap-3 transition hover:text-white"><Phone size={18} className="shrink-0 text-cyan" /> +91 72819 90530</a>
            <a href="mailto:hopewellranchi@gmail.com" className="flex gap-3 transition hover:text-white"><Mail size={18} className="shrink-0 text-cyan" /> hopewellranchi@gmail.com</a>
          </div>
          <a href="https://maps.google.com/?q=New+Hopewell+Hospital+Hazari+Baug+Road+Tharpakna+Ranchi" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan">
            Get directions <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white">
        © {new Date().getFullYear()} Hopewell Hospital, Ranchi. All rights reserved.
      </div>
    </footer>
  );
}
