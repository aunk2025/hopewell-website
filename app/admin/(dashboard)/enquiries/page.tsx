"use client";

import { useState, useEffect, useCallback } from "react";
import { format } from "date-fns";
import { Filter, RefreshCw, Mail, MailOpen } from "lucide-react";

type Enquiry = {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  enquiryType: string;
  department: string | null;
  preferredAt: string | null;
  message: string;
  read: boolean;
  createdAt: string;
};

const ENQUIRY_TYPE_OPTIONS = [
  "ALL",
  "Appointment",
  "Emergency",
  "Ambulance",
  "Feedback",
  "Corporate Enquiry",
  "TPA / Insurance Enquiry",
  "Career Enquiry",
  "Media Enquiry",
  "General Enquiry",
];

export default function EnquiriesAdmin() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [enquiryType, setEnquiryType] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const url = enquiryType === "ALL" ? "/api/contact" : `/api/contact?enquiryType=${encodeURIComponent(enquiryType)}`;
    const res = await fetch(url);
    const { enquiries } = res.ok ? await res.json() : { enquiries: [] };
    setEnquiries(enquiries ?? []);
    setLoading(false);
  }, [enquiryType]);

  useEffect(() => { load(); }, [load]);

  async function toggleRead(id: number, read: boolean) {
    setUpdatingId(id);
    await fetch("/api/contact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read }),
    });
    await load();
    setUpdatingId(null);
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-black text-[#2a2119]">Enquiries</h1>
        <button onClick={load} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Enquiry type filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {ENQUIRY_TYPE_OPTIONS.map((t) => (
          <button
            key={t}
            onClick={() => setEnquiryType(t)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition ${enquiryType === t ? "bg-[#2a2119] text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"}`}
          >
            <Filter size={11} /> {t}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
              <tr>
                {["", "Received", "Name", "Contact", "Type", "Department", "Preferred", "Message", "Action"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 9 }).map((_, j) => (
                      <td key={j} className="px-4 py-4">
                        <div className="h-4 animate-pulse rounded bg-slate-200" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : enquiries.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-400">No enquiries found.</td>
                </tr>
              ) : (
                enquiries.map((e) => (
                  <tr key={e.id} className={`align-top hover:bg-slate-50 ${e.read ? "" : "bg-teal-50/40"}`}>
                    <td className="px-4 py-4">
                      {e.read ? (
                        <MailOpen size={15} className="text-slate-300" />
                      ) : (
                        <Mail size={15} className="text-teal-600" />
                      )}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="font-semibold">{format(new Date(e.createdAt), "d MMM yyyy")}</div>
                      <div className="text-xs text-slate-400">{format(new Date(e.createdAt), "h:mm a")}</div>
                    </td>
                    <td className="px-4 py-4 font-semibold text-[#2a2119]">{e.name}</td>
                    <td className="px-4 py-4">
                      <div className="text-xs text-slate-500">{e.phone}</div>
                      <div className="text-xs text-slate-400">{e.email ?? "—"}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                        e.enquiryType === "Emergency" ? "bg-red-100 text-red-700" : "bg-teal-100 text-teal-700"
                      }`}>
                        {e.enquiryType}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-500">{e.department ?? "—"}</td>
                    <td className="px-4 py-4 text-xs text-slate-500">{e.preferredAt ?? "—"}</td>
                    <td className="max-w-[220px] px-4 py-4">
                      <p className={`text-xs text-slate-600 ${expandedId === e.id ? "" : "line-clamp-2"}`}>{e.message}</p>
                      {e.message.length > 80 && (
                        <button
                          type="button"
                          onClick={() => setExpandedId(expandedId === e.id ? null : e.id)}
                          className="mt-1 text-xs font-bold text-teal-700 hover:underline"
                        >
                          {expandedId === e.id ? "Show less" : "Show more"}
                        </button>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <button
                        type="button"
                        disabled={updatingId === e.id}
                        onClick={() => toggleRead(e.id, !e.read)}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
                      >
                        Mark as {e.read ? "unread" : "read"}
                      </button>
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
