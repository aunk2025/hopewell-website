import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { procedures } from "@/lib/orthopaedics-procedures";

const keyServices = [
  {
    category: "Joint Replacement Surgeries",
    items: [
      { label: "Total Knee Replacement (TKR)", href: "/services/orthopaedics/tkr" },
      { label: "Unicondylar Knee replacement (UKA)", href: "/services/orthopaedics/tkr" },
      { label: "Total Hip Replacement (THR)", href: "/services/orthopaedics/thr" },
    ],
  },
  {
    category: "Arthroscopy & Sports Injury Care",
    items: [
      { label: "Shoulder Arthroscopy", href: "/services/orthopaedics/shoulder-arthroscopy" },
      { label: "Bankart's Repair", href: "/services/orthopaedics/bankart-repair" },
      { label: "ACL Reconstruction", href: "/services/orthopaedics/acl-reconstruction" },
      { label: "PCL Reconstruction", href: "/services/orthopaedics/pcl-reconstruction" },
      { label: "Meniscus Repair and Reconstruction", href: "/services/orthopaedics/meniscus-repair" },
      { label: "MCL and LCL reconstruction", href: "/services/orthopaedics/acl-reconstruction" },
      { label: "MPFL reconstruction", href: "/services/orthopaedics/pcl-reconstruction" },
      { label: "Rotator Cuff Repair", href: "/services/orthopaedics/shoulder-arthroscopy" },
    ],
  },
  {
    category: "Spine Surgery",
    items: [
      { label: "Minimally Invasive Spine Surgery (MISS)", href: "/services/orthopaedics/spine-surgery" },
      { label: "Discectomy", href: "/services/orthopaedics/spine-surgery" },
      { label: "Laminectomy", href: "/services/orthopaedics/spine-surgery" },
      { label: "Spinal Fusion", href: "/services/orthopaedics/spine-surgery" },
      { label: "Kyphoplasty / Vertebroplasty", href: "/services/orthopaedics/spine-surgery" },
      { label: "Slip Disc Treatment", href: "/services/orthopaedics/spine-surgery" },
    ],
  },
  {
    category: "Trauma & Fracture Care",
    items: [
      { label: "Emergency trauma care", href: "/services/orthopaedics/trauma-fracture" },
      { label: "Fracture management", href: "/services/orthopaedics/trauma-fracture" },
      { label: "Head injury management", href: "/services/orthopaedics/trauma-fracture" },
      { label: "Joint dislocation management", href: "/services/orthopaedics/trauma-fracture" },
    ],
  },
  {
    category: "Hand & Wrist Conditions",
    items: [
      { label: "Trigger Finger Release", href: "/services/orthopaedics/trigger-finger-release" },
      { label: "Carpal Tunnel Syndrome", href: "/services/orthopaedics/trigger-finger-release" },
      { label: "Tenosynovitis", href: "/services/orthopaedics/trigger-finger-release" },
      { label: "Tendon injuries", href: "/services/orthopaedics/trigger-finger-release" },
      { label: "Small-joint arthritis", href: "/services/orthopaedics/trigger-finger-release" },
    ],
  },
];

export const metadata = {
  title: "Orthopaedics | Hopewell Hospital Ranchi",
  description:
    "Comprehensive orthopedic care at Hopewell Hospital: joint replacement, arthroscopy, spine surgery, trauma care and hand & wrist conditions.",
};

export default function OrthopaedicsPage() {
  return (
    <main className="min-h-screen bg-[#edf9f8]">
      <Navbar />

      {/* Hero banner */}
      <section
        className="relative flex h-72 flex-col items-center justify-center bg-cover bg-center px-5 text-center sm:h-96"
        style={{ backgroundImage: "url(/orthopaedics.jfif)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#061822]/70 via-[#061822]/50 to-[#061822]/70" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          Orthopaedics
        </h1>
        <p className="relative mt-5 max-w-2xl text-white/80 sm:text-lg">
          Comprehensive bone, joint and spine care, from sports injuries and fractures to joint
          replacement and long-term mobility restoration.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

        {/* Procedure labels */}
        <div className="mb-16 flex flex-wrap gap-3">
          {procedures.map((p) => (
            <a
              key={p.slug}
              href={`/services/orthopaedics/${p.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800 transition hover:bg-violet-100 hover:border-violet-300"
            >
              <img src="/orthoinsidelables.jfif" alt="" className="h-4 w-4 rounded-full object-cover" />
              {p.name}
            </a>
          ))}
        </div>

        {/* Our Key Services */}
        <h2 className="mb-3 text-3xl font-black tracking-[-.02em] text-ink">Our Key Services</h2>
        <p className="mb-10 max-w-2xl text-slate-500">
          Comprehensive orthopedic care with advanced surgical techniques and personalized treatment plans.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {keyServices.map((group) => (
            <div key={group.category} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-lg font-black text-ink">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => {
                  const label = typeof item === "string" ? item : item.label;
                  const href = typeof item === "string" ? undefined : item.href;
                  return (
                    <li key={label} className="flex items-center gap-2 text-sm text-slate-600">
                      <ChevronRight size={14} className="shrink-0 text-violet-600" />
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-violet-800 underline decoration-violet-300 underline-offset-2 hover:text-violet-900"
                        >
                          {label}
                        </a>
                      ) : (
                        label
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
