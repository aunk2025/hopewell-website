"use client";

import { useState, useEffect, useCallback } from "react";
import { format } from "date-fns";
import { Filter, RefreshCw } from "lucide-react";

type Appointment = {
  id: number;
  refNumber: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  reason: string;
  appointmentDate: string;
  timeSlot: string;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  doctor: { name: string; specialty: string } | null;
};

const STATUS_OPTIONS = ["ALL", "PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"];

const STATUS_COLORS: Record<string, string> = {
  PENDING:   "bg-amber-100 text-amber-700",
  CONFIRMED: "bg-green-100 text-green-700",
  COMPLETED: "bg-blue-100 text-blue-700",
  CANCELLED: "bg-red-100 text-red-700",
};

export default function AppointmentsAdmin() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [status, setStatus] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const url = status === "ALL" ? "/api/appointments" : `/api/appointments?status=${status}`;
    const res = await fetch(url);
    const { appointments } = await res.json();
    setAppointments(appointments ?? []);
    setLoading(false);
  }, [status]);

  useEffect(() => { load(); }, [load]);

  async function updateStatus(id: number, newStatus: string) {
    setUpdatingId(id);
    await fetch("/api/appointments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });
    await load();
    setUpdatingId(null);
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-black text-[#061822]">Appointments</h1>
        <button onClick={load} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Status filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {STATUS_OPTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition ${status === s ? "bg-[#061822] text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"}`}
          >
            <Filter size={11} /> {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
              <tr>
                {["Ref #", "Patient", "Contact", "Doctor", "Date / Time", "Reason", "Status", "Action"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 8 }).map((_, j) => (
                      <td key={j} className="px-4 py-4">
                        <div className="h-4 animate-pulse rounded bg-slate-200" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : appointments.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">No appointments found.</td>
                </tr>
              ) : (
                appointments.map((a) => (
                  <tr key={a.id} className="hover:bg-slate-50">
                    <td className="px-4 py-4 font-mono text-xs text-slate-400">{a.refNumber}</td>
                    <td className="px-4 py-4 font-semibold text-[#061822]">{a.patientName}</td>
                    <td className="px-4 py-4">
                      <div className="text-xs text-slate-500">{a.patientPhone}</div>
                      <div className="text-xs text-slate-400">{a.patientEmail}</div>
                    </td>
                    <td className="px-4 py-4">
                      {a.doctor ? (
                        <>
                          <div className="font-semibold">{a.doctor.name}</div>
                          <div className="text-xs text-slate-400">{a.doctor.specialty}</div>
                        </>
                      ) : (
                        <span className="text-slate-400">Any</span>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-semibold">{format(new Date(a.appointmentDate), "d MMM yyyy")}</div>
                      <div className="text-xs text-slate-400">{a.timeSlot}</div>
                    </td>
                    <td className="max-w-[180px] px-4 py-4">
                      <p className="line-clamp-2 text-xs text-slate-600">{a.reason}</p>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${STATUS_COLORS[a.status]}`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <select
                        value={a.status}
                        disabled={updatingId === a.id}
                        onChange={(e) => updateStatus(a.id, e.target.value)}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-semibold outline-none focus:border-teal-400"
                      >
                        {["PENDING","CONFIRMED","COMPLETED","CANCELLED"].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
