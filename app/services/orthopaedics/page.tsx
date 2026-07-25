import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bone, ChevronRight } from "lucide-react";
import { procedures } from "@/lib/orthopaedics-procedures";

const keyServices = [
  {
    category: "Joint Replacement Surgeries",
    items: ["Total Knee Replacement (TKR)", "Unicondylar Knee replacement (UKA)", "Total Hip Replacement (THR)"],
  },
  {
    category: "Arthroscopy & Sports Injury Care",
    items: [
      "Shoulder Arthroscopy",
      "Bankart's Repair",
      "ACL Reconstruction",
      "PCL Reconstruction",
      "Meniscus Repair and Reconstruction",
      "MCL and LCL reconstruction",
      "MPFL reconstruction",
      "Rotator Cuff Repair",
    ],
  },
  {
    category: "Spine Surgery",
    items: [
      "Minimally Invasive Spine Surgery (MISS)",
      "Discectomy",
      "Laminectomy",
      "Spinal Fusion",
      "Kyphoplasty / Vertebroplasty",
      "Slip Disc Treatment",
    ],
  },
  {
    category: "Trauma & Fracture Care",
    items: ["Emergency trauma care", "Fracture management", "Head injury management", "Joint dislocation management"],
  },
  {
    category: "Hand & Wrist Conditions",
    items: ["Trigger Finger Release", "Carpal Tunnel Syndrome", "Tenosynovitis", "Tendon injuries", "Small-joint arthritis"],
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
              <Bone size={14} />
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
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <ChevronRight size={14} className="shrink-0 text-violet-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
