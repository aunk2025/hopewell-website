"use client";

import { useState } from "react";
import { Menu, X, Phone, CalendarDays } from "lucide-react";

import Link from "next/link";

const links = [
  { label: "Home",            href: "/" },
  { label: "Doctors",         href: "/doctors" },
  { label: "Services",        href: "/services" },
  { label: "Health Packages", href: "/health-packages" },
  { label: "Contact",         href: "/contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-ink px-5 py-2 text-center text-xs font-medium tracking-wide text-white">
        24×7 Emergency & Critical Care
        <span className="mx-2 text-cyan">•</span>
        Ranchi, Jharkhand
        <span className="mx-2 text-cyan">•</span>
        <a href="tel:+919199666246" className="underline decoration-cyan/60 underline-offset-4">
          +91 91996 66246
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="group flex items-center">
            <img src="/hopewell%20logo%202.jpeg" alt="Hopewell Hospital" className="h-24 w-auto object-contain" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-700 transition hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:+919199666246" className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white">
              <Phone size={17} />
            </a>
            <Link href="/appointment" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">
              <CalendarDays size={16} />
              Book Appointment
            </Link>
          </div>

          <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 lg:hidden" aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
            <div className="grid gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/appointment" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-ink px-4 py-3 text-center font-bold text-white">Book Appointment</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
