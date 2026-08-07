"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Plus, RefreshCw, X, EyeOff, Eye, Upload, Camera as CameraIcon, User, Pencil } from "lucide-react";

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

/* Downscale an image (from a File or a video frame) to a max dimension and
   return it as a JPEG data URL, so photos stay small enough to store as text
   in the database — the site has no writable file storage in production. */
function resizeImageToDataUrl(source: HTMLImageElement | HTMLVideoElement, maxDim = 640): string {
  const width = "videoWidth" in source ? source.videoWidth : source.naturalWidth;
  const height = "videoWidth" in source ? source.videoHeight : source.naturalHeight;
  const scale = Math.min(1, maxDim / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.85);
}

function fileToImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

export default function DoctorsAdmin() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [togglingId, setTogglingId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/doctors");
      const { doctors } = res.ok ? await res.json() : { doctors: [] };
      setDoctors(doctors ?? []);
    } catch {
      setDoctors([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    return () => { streamRef.current?.getTracks().forEach((t) => t.stop()); };
  }, []);

  function updateField(key: keyof typeof emptyForm, value: string) {
    setForm((f) => ({
      ...f,
      [key]: value,
      ...(key === "name" ? { slug: slugify(value) } : {}),
    }));
  }

  async function saveDoctor(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/doctors", {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(editingId ? { id: editingId } : {}),
          ...form,
          experience: Number(form.experience),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to save doctor");
      cancelForm();
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  function startEdit(doc: Doctor) {
    setEditingId(doc.id);
    setForm({
      name: doc.name,
      slug: doc.slug,
      specialty: doc.specialty,
      qualifications: doc.qualifications,
      experience: String(doc.experience),
      bio: doc.bio,
      imageUrl: doc.imageUrl,
      phone: doc.phone,
      email: doc.email,
    });
    setError("");
    setShowForm(true);
  }

  function cancelForm() {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(false);
    setError("");
  }

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      const img = await fileToImage(file);
      updateField("imageUrl", resizeImageToDataUrl(img));
    } catch {
      setError("Couldn't read that image. Please try a different file.");
    }
  }

  async function openCamera() {
    setCameraError("");
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch {
      setCameraError("Couldn't access the camera. Check browser permissions and try again.");
    }
  }

  function closeCamera() {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setShowCamera(false);
  }

  function capturePhoto() {
    if (!videoRef.current) return;
    updateField("imageUrl", resizeImageToDataUrl(videoRef.current));
    closeCamera();
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
            onClick={() => (showForm ? cancelForm() : setShowForm(true))}
            className="flex items-center gap-2 rounded-xl bg-[#061822] px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900"
          >
            {showForm ? <X size={14} /> : <Plus size={14} />}
            {showForm ? "Cancel" : "Add Doctor"}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={saveDoctor} className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-black text-[#061822]">{editingId ? "Edit Doctor" : "Add Doctor"}</h2>
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
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Photo</label>
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50">
                  {form.imageUrl ? (
                    <img src={form.imageUrl} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <User size={20} className="text-slate-300" />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  <Upload size={13} /> Upload
                </button>
                <button
                  type="button"
                  onClick={openCamera}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  <CameraIcon size={13} /> Camera
                </button>
                {form.imageUrl && (
                  <button
                    type="button"
                    onClick={() => updateField("imageUrl", "")}
                    className="text-xs font-semibold text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
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
            {saving ? "Saving…" : editingId ? "Update Doctor" : "Save Doctor"}
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
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => startEdit(d)}
                          className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                        >
                          <Pencil size={12} /> Edit
                        </button>
                        <button
                          onClick={() => toggleAvailable(d)}
                          disabled={togglingId === d.id}
                          className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-50"
                        >
                          {d.available ? <EyeOff size={12} /> : <Eye size={12} />}
                          {d.available ? "Deactivate" : "Activate"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showCamera && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-black text-[#061822]">Take Photo</h2>
              <button type="button" onClick={closeCamera} className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100">
                <X size={16} />
              </button>
            </div>
            {cameraError ? (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{cameraError}</p>
            ) : (
              <video ref={videoRef} autoPlay playsInline muted className="aspect-square w-full rounded-xl bg-slate-900 object-cover" />
            )}
            <div className="mt-4 flex gap-2">
              <button type="button" onClick={closeCamera} className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                Cancel
              </button>
              {!cameraError && (
                <button type="button" onClick={capturePhoto} className="flex-1 rounded-xl bg-teal-600 py-2.5 text-sm font-bold text-white hover:bg-teal-700">
                  Capture
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
