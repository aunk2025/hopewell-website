"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, CalendarDays, Users, LogOut, Menu, X } from "lucide-react";

const navItems = [
  { href: "/admin",              label: "Dashboard",    icon: LayoutDashboard },
  { href: "/admin/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/admin/doctors",      label: "Doctors",      icon: Users },
];

export default function AdminShell({ email, children }: { email: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {open && (
        <aside className="flex w-64 shrink-0 flex-col border-r border-slate-200 bg-[#061822]">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div>
              <div className="text-base font-black tracking-wide text-white">HOPEWELL</div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Admin Panel</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-8 w-8 place-items-center rounded-lg text-white/50 transition hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
          <div className="flex-1 p-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={17} />
                {label}
              </Link>
            ))}
          </div>
          <div className="border-t border-white/10 p-4">
            <div className="mb-3 px-2 text-xs text-white/40">
              Signed in as<br />
              <span className="font-semibold text-white/70">{email}</span>
            </div>
            <Link
              href="/api/auth/signout"
              className="flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
            >
              <LogOut size={15} /> Sign Out
            </Link>
          </div>
        </aside>
      )}

      <main className="flex-1 overflow-auto">
        {!open && (
          <div className="border-b border-slate-200 bg-white p-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50"
            >
              <Menu size={18} />
            </button>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
