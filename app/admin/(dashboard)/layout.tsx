import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, CalendarDays, Users, LogOut } from "lucide-react";

const navItems = [
  { href: "/admin",              label: "Dashboard",    icon: LayoutDashboard },
  { href: "/admin/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/admin/doctors",      label: "Doctors",      icon: Users },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-slate-200 bg-[#061822]">
        <div className="border-b border-white/10 px-6 py-5">
          <div className="text-base font-black tracking-wide text-white">HOPEWELL</div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Admin Panel</div>
        </div>
        <div className="p-2 flex-1">
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
            <span className="font-semibold text-white/70">{session.user.email}</span>
          </div>
          <Link
            href="/api/auth/signout"
            className="flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
          >
            <LogOut size={15} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
