"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, RefreshCw, X, EyeOff, Eye } from "lucide-react";

type Doctor = {
  id: number;
  name: string;
  slug: string;
  specialty: string;
  qualifications: string;
  experience: number;
  bio: string;
  imageUrl: string;
  phone: string;
  email: string;
  available: boolean;
};

const emptyForm = {
  name: "",
  slug: "",
  specialty: "",
  qualifications: "",
  experience: "",
  bio: "",
  imageUrl: "",
  phone: "",
  email: "",
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function DoctorsAdmin() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [togglingId, setTogglingId] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/doctors");
    const { doctors } = await res.json();
    setDoctors(doctors ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  function updateField(key: keyof typeof emptyForm, value: string) {
    setForm((f) => ({
      ...f,
      [key]: value,
      ...(key === "name" ? { slug: slugify(value) } : {}),
    }));
  }

  async function addDoctor(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/doctors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, experience: Number(form.experience) }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to add doctor");
      setForm(emptyForm);
      setShowForm(false);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  async function toggleAvailable(doc: Doctor) {
    setTogglingId(doc.id);
    if (doc.available) {
      await fetch("/api/doctors", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: doc.id }),
      });
    } else {
      await fetch("/api/doctors", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: doc.id, available: true }),
      });
    }
    await load();
    setTogglingId(null);
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-black text-[#061822]">Doctors</h1>
        <div className="flex gap-2">
          <button onClick={load} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <RefreshCw size={14} /> Refresh
          </button>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="flex items-center gap-2 rounded-xl bg-[#061822] px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900"
          >
            {showForm ? <X size={14} /> : <Plus size={14} />}
            {showForm ? "Cancel" : "Add Doctor"}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={addDoctor} className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Full Name *</label>
              <input required value={form.name} onChange={(e) => updateField("name", e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400" placeholder="Dr. Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Slug *</label>
              <input required value={form.slug} onChange={(e) => updateField("slug", e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400" placeholder="dr-jane-doe" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Specialty *</label>
              <input required value={form.specialty} onChange={(e) => updateField("specialty", e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400" placeholder="Cardiology" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Experience (years) *</label>
              <input required type="number" min={0} value={form.experience} onChange={(e) => updateField("experience", e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400" placeholder="10" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Qualifications *</label>
              <input required value={form.qualifications} onChange={(e) => updateField("qualifications", e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400" placeholder="MBBS, MD" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Image URL</label>
              <input value={form.imageUrl} onChange={(e) => updateField("imageUrl", e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400" placeholder="https://…" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Phone</label>
              <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Email</label>
              <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400" placeholder="doctor@hopewellhospital.in" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Bio *</label>
              <textarea required rows={3} value={form.bio} onChange={(e) => updateField("bio", e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-400" placeholder="Short professional biography…" />
            </div>
          </div>
          {error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={saving} className="mt-4 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-teal-700 disabled:opacity-60">
            {saving ? "Saving…" : "Save Doctor"}
          </button>
        </form>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
              <tr>
                {["Name", "Specialty", "Experience", "Contact", "Status", "Action"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 6 }).map((_, j) => (
                      <td key={j} className="px-4 py-4"><div className="h-4 animate-pulse rounded bg-slate-200" /></td>
                    ))}
                  </tr>
                ))
              ) : doctors.length === 0 ? (
                <tr><td colSpan={6} className="py-12 text-center text-slate-400">No doctors found.</td></tr>
              ) : (
                doctors.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-50">
                    <td className="px-4 py-4 font-semibold text-[#061822]">{d.name}</td>
                    <td className="px-4 py-4 text-slate-600">{d.specialty}</td>
                    <td className="px-4 py-4 text-slate-600">{d.experience}+ yrs</td>
                    <td className="px-4 py-4">
                      <div className="text-xs text-slate-500">{d.phone || "—"}</div>
                      <div className="text-xs text-slate-400">{d.email || "—"}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${d.available ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                        {d.available ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => toggleAvailable(d)}
                        disabled={togglingId === d.id}
                        className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-50"
                      >
                        {d.available ? <EyeOff size={12} /> : <Eye size={12} />}
                        {d.available ? "Deactivate" : "Activate"}
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
