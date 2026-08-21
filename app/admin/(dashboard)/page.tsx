import { prisma } from "@/lib/prisma";
import { CalendarDays, Users, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [total, pending, confirmed, doctorCount, recent] = await Promise.all([
    prisma.appointment.count(),
    prisma.appointment.count({ where: { status: "PENDING" } }),
    prisma.appointment.count({ where: { status: "CONFIRMED" } }),
    prisma.doctor.count({ where: { available: true } }),
    prisma.appointment.findMany({
      take: 8,
      orderBy: { createdAt: "desc" },
      include: { doctor: { select: { name: true } } },
    }),
  ]);

  const stats = [
    { label: "Total Appointments", value: total,       icon: CalendarDays, color: "text-teal-600",  bg: "bg-teal-50" },
    { label: "Pending",            value: pending,     icon: Clock,        color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Confirmed",          value: confirmed,   icon: CheckCircle,  color: "text-green-600", bg: "bg-green-50" },
    { label: "Active Doctors",     value: doctorCount, icon: Users,        color: "text-violet-600",bg: "bg-violet-50" },
  ];

  return (
    <div className="p-8">
      <h1 className="mb-2 text-2xl font-black text-[#2a2119]">Dashboard</h1>
      <p className="mb-8 text-sm text-slate-500">
        {format(new Date(), "EEEE, d MMMM yyyy")}
      </p>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}>
              <Icon size={20} className={color} />
            </div>
            <div className="text-3xl font-black text-[#2a2119]">{value}</div>
            <div className="mt-1 text-sm text-slate-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Recent Appointments */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="font-black text-[#2a2119]">Recent Appointments</h2>
          <Link href="/admin/appointments" className="text-sm font-semibold text-teal-600 hover:underline">
            View All →
          </Link>
        </div>
        <div className="divide-y divide-slate-100">
          {recent.map((a) => (
            <div key={a.id} className="flex items-center justify-between px-6 py-4">
              <div>
                <div className="font-semibold text-[#2a2119]">{a.patientName}</div>
                <div className="text-xs text-slate-500">
                  {a.doctor?.name ?? "Any Doctor"} · {format(a.appointmentDate, "d MMM yyyy")} · {a.timeSlot}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                  a.status === "PENDING"   ? "bg-amber-100 text-amber-700"  :
                  a.status === "CONFIRMED" ? "bg-green-100 text-green-700"  :
                  a.status === "COMPLETED" ? "bg-blue-100 text-blue-700"    :
                                             "bg-red-100 text-red-700"
                }`}>
                  {a.status}
                </span>
                <div className="text-xs font-mono text-slate-400">{a.refNumber}</div>
              </div>
            </div>
          ))}
          {recent.length === 0 && (
            <p className="px-6 py-8 text-center text-sm text-slate-400">No appointments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
