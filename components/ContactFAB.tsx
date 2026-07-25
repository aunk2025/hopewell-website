"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "+917281990530";
const WHATSAPP_NUMBER = "917281990530";
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about Hopewell Hospital.";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.652 4.47 1.782 6.307L4 29l7.86-1.746A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 16.984c-.297.836-1.47 1.53-2.41 1.727-.64.135-1.474.243-4.29-.92-3.6-1.49-5.916-5.14-6.096-5.377-.173-.238-1.457-1.94-1.457-3.7 0-1.76.92-2.623 1.246-2.984.297-.328.65-.41.867-.41.217 0 .434.002.624.012.2.01.468-.076.732.559.297.712.98 2.472 1.067 2.652.087.18.145.393.029.63-.116.238-.174.386-.348.594-.174.207-.365.463-.522.622-.174.176-.355.367-.153.72.203.352.902 1.487 1.938 2.409 1.332 1.186 2.454 1.552 2.807 1.727.352.174.557.145.762-.09.203-.234.87-1.017 1.102-1.365.232-.348.464-.29.782-.174.319.116 2.02.951 2.367 1.125.348.174.58.26.667.406.087.145.087.842-.21 1.677Z" />
    </svg>
  );
}

export default function ContactFAB() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glass transition hover:-translate-y-1 hover:shadow-xl"
      >
        <WhatsAppIcon />
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Hopewell Hospital"
        className="grid h-14 w-14 place-items-center rounded-full bg-ink text-white shadow-glass transition hover:-translate-y-1 hover:shadow-xl"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
