import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

// Same number used by the WhatsApp chat button in components/ContactFAB.tsx.
const WHATSAPP_NUMBER = "919199666246";
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about Hopewell Hospital.";

function WhatsAppIcon({ size = 17 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.652 4.47 1.782 6.307L4 29l7.86-1.746A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 16.984c-.297.836-1.47 1.53-2.41 1.727-.64.135-1.474.243-4.29-.92-3.6-1.49-5.916-5.14-6.096-5.377-.173-.238-1.457-1.94-1.457-3.7 0-1.76.92-2.623 1.246-2.984.297-.328.65-.41.867-.41.217 0 .434.002.624.012.2.01.468-.076.732.559.297.712.98 2.472 1.067 2.652.087.18.145.393.029.63-.116.238-.174.386-.348.594-.174.207-.365.463-.522.622-.174.176-.355.367-.153.72.203.352.902 1.487 1.938 2.409 1.332 1.186 2.454 1.552 2.807 1.727.352.174.557.145.762-.09.203-.234.87-1.017 1.102-1.365.232-.348.464-.29.782-.174.319.116 2.02.951 2.367 1.125.348.174.58.26.667.406.087.145.087.842-.21 1.677Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/HopewellHospitalRanchi", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/hopewellhospitalranchi/", icon: Instagram },
  {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    icon: WhatsAppIcon,
  },
];

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
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                href={href}
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Hopewell Hospital on ${label}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-cyan hover:text-cyan"
              >
                <Icon size={17} />
              </a>
            ))}
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
            <a href="tel:+919199666246" className="flex gap-3 transition hover:text-white"><Phone size={18} className="shrink-0 text-cyan" /> +91 91996 66246</a>
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
