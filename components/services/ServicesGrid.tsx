"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  Baby,
  Bone,
  Dna,
  Activity,
  Microscope,
  Ear,
  Waves,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

type ServiceItem = string | { label: string; href: string };

type Service = {
  icon: LucideIcon;
  name: string;
  slug: string;
  items: ServiceItem[];
  color: string;
  bgColor: string;
  image?: string;
  imageScaleClass?: string;
  description?: string;
  learnMore: string;
};

const services: Service[] = [
  {
    icon: Stethoscope,
    name: "General, GI & Laparoscopic Surgery",
    slug: "surgeries",
    description:
      "Keyhole procedures across general and gastrointestinal surgery, with smaller incisions, less pain, and a quicker return home than open surgery.",
    learnMore:
      "Comprehensive surgical care for abdominal, gastrointestinal and common general surgical conditions. The department focuses on minimally invasive and laparoscopic techniques wherever appropriate, helping reduce pain, scars and recovery time. Services include gallbladder, hernia, appendix, colorectal and GI surgery, along with laser treatment for piles, fissure and fistula and advanced procedures such as ERCP.",
    image: "/GI%20surgery.png",
    imageScaleClass: "scale-[1.08] group-hover:scale-[1.13]",
    items: [
      { label: "Gallbladder Surgery", href: "/services/surgeries/gallbladder-surgery" },
      { label: "Hernia Surgery", href: "/services/surgeries/hernia-surgery" },
      { label: "Appendix Surgery", href: "/services/surgeries/appendix-surgery" },
      { label: "Laser Piles Treatment", href: "/services/surgeries/laser-piles-treatment" },
      { label: "Fistula Treatment", href: "/services/surgeries/fistula-treatment" },
      { label: "Fissure Treatment", href: "/services/surgeries/fissure-treatment" },
      { label: "ERCP", href: "/services/surgeries/ercp" },
      { label: "GI Surgery", href: "/services/surgeries/gi-surgery" },
      { label: "Colorectal Surgery", href: "/services/surgeries/colorectal-surgery" },
      { label: "Varicose Vein Treatment", href: "/services/surgeries/varicose-vein-treatment" },
    ],
    color: "#0ca8ad",
    bgColor: "rgba(12,168,173,.08)",
  },
  {
    icon: Bone,
    name: "Orthopaedics & Joint Replacement",
    slug: "orthopaedics",
    description:
      "Comprehensive bone and joint care, from sports injuries and fractures to joint replacement and long-term mobility restoration.",
    learnMore:
      "Specialised care for bone, joint, ligament and musculoskeletal conditions—from everyday injuries to advanced reconstructive surgery. Services include knee and hip replacement, arthroscopy, ACL reconstruction, fracture surgery and sports injury treatment. Our approach combines accurate diagnosis, modern surgical techniques and structured rehabilitation to help patients return to mobility and independence.",
    image: "/orthopaedicsnew.png",
    imageScaleClass: "scale-[1.07] group-hover:scale-[1.12]",
    items: [
      { label: "Knee Replacement", href: "/services/orthopaedics/knee-replacement" },
      { label: "Hip Replacement", href: "/services/orthopaedics/hip-replacement" },
      { label: "Arthroscopy", href: "/services/orthopaedics/arthroscopy" },
      { label: "ACL Reconstruction", href: "/services/orthopaedics/acl-reconstruction" },
      { label: "Fracture Surgery", href: "/services/orthopaedics/fracture-surgery" },
      { label: "Sports Injury Treatment", href: "/services/orthopaedics/sports-injury-treatment" },
      { label: "Spine Procedures", href: "/services/orthopaedics/spine-surgery" },
    ],
    color: "#8b5cf6",
    bgColor: "rgba(139,92,246,.08)",
  },
  {
    icon: Dna,
    name: "IVF, Gynaecology & Women's Health",
    slug: "ivf",
    description:
      "Personalized fertility evaluation, gynaecological care and assisted reproduction for couples building their family.",
    learnMore:
      "Comprehensive women's healthcare covering fertility, pregnancy, gynaecological disorders and minimally invasive surgery. Services include IVF and infertility treatment, laparoscopic gynaecology, fibroid treatment, hysterectomy and high-risk pregnancy care. The focus is on personalised treatment, reproductive health and supporting women through every stage of life.",
    image: "/ivfhome.png",
    imageScaleClass: "scale-[1.02] group-hover:scale-[1.07]",
    items: [
      { label: "IVF", href: "/services/ivf/ivf-treatment" },
      { label: "Infertility Treatment", href: "/services/ivf/infertility-treatment" },
      { label: "Laparoscopic Gynaecology", href: "/services/ivf/laparoscopic-gynaecology" },
      { label: "Hysterectomy", href: "/services/ivf/hysterectomy" },
      { label: "Fibroid Treatment", href: "/services/ivf/fibroid-treatment" },
      { label: "High-Risk Pregnancy", href: "/services/ivf/high-risk-pregnancy" },
    ],
    color: "#ec4899",
    bgColor: "rgba(236,72,153,.08)",
  },
  {
    icon: Baby,
    name: "Paediatrics & Neonatology",
    slug: "motherchild",
    description:
      "Sensitive newborn, infant and child care, including NICU support.",
    learnMore:
      "Specialised healthcare for newborns, infants, children and adolescents, with dedicated neonatal support for babies requiring closer monitoring. Services include newborn care, NICU, child immunisation and paediatric emergency care. The department focuses on safe treatment, growth, nutrition, development and family-centred care.",
    image: "/paed%20nd%20neo%20new.png",
    imageScaleClass: "scale-[1.06] group-hover:scale-[1.11]",
    items: [
      { label: "Newborn Care", href: "/services/motherchild/newborn-care" },
      { label: "NICU", href: "/services/motherchild/nicu" },
      { label: "Child Immunization", href: "/services/motherchild/child-immunization" },
      { label: "Paediatric Emergency", href: "/services/motherchild/paediatric-emergency" },
    ],
    color: "#f97316",
    bgColor: "rgba(249,115,22,.08)",
  },
  {
    icon: Activity,
    name: "Urology",
    slug: "urology",
    description:
      "Diagnosis and treatment of urinary tract and prostate conditions, from kidney stones to transplant evaluation.",
    learnMore:
      "Comprehensive diagnosis and treatment of conditions affecting the kidneys, urinary tract, bladder and prostate. Services include kidney stone treatment, prostate surgery, urinary tract infection management and kidney transplant evaluation. Minimally invasive and endoscopic treatment options are considered wherever clinically appropriate.",
    image: "/urology%20new.png",
    imageScaleClass: "scale-[1.04] group-hover:scale-[1.09]",
    items: [
      { label: "Kidney Stone Treatment", href: "/services/urology/kidney-stone-treatment" },
      { label: "Prostate Surgery", href: "/services/urology/prostate-surgery" },
      { label: "Urinary Tract Infection Treatment", href: "/services/urology/urinary-tract-infection-treatment" },
      { label: "Kidney Transplant Evaluation", href: "/services/urology/kidney-transplant-evaluation" },
    ],
    color: "#0ea5e9",
    bgColor: "rgba(14,165,233,.08)",
  },
  {
    icon: Waves,
    name: "Vascular Surgery",
    slug: "vascular-surgery",
    description:
      "Surgical and minimally invasive treatment for blood vessel conditions affecting circulation throughout the body.",
    learnMore:
      "Specialised treatment for diseases affecting arteries, veins and blood circulation. Services include dialysis access surgery, peripheral vascular disease treatment, aneurysm repair and deep vein thrombosis management, along with evaluation of varicose veins and diabetic vascular complications. The emphasis is on early detection, limb preservation and restoring healthy circulation.",
    image: "/Vascular%20surgery.png",
    imageScaleClass: "scale-[1.04] group-hover:scale-[1.09]",
    items: [
      { label: "Dialysis Access Surgery", href: "/services/vascular-surgery/dialysis-access-surgery" },
      { label: "Peripheral Vascular Disease Treatment", href: "/services/vascular-surgery/peripheral-vascular-disease" },
      { label: "Aneurysm Repair", href: "/services/vascular-surgery/aneurysm-repair" },
      { label: "Deep Vein Thrombosis Treatment", href: "/services/vascular-surgery/deep-vein-thrombosis-treatment" },
    ],
    color: "#0891b2",
    bgColor: "rgba(8,145,178,.08)",
  },
  {
    icon: Ear,
    name: "ENT",
    slug: "ent",
    learnMore:
      "Medical and surgical care for conditions affecting the ear, nose, throat, sinuses and related structures. Services include mastoidectomy, tympanoplasty, Functional Endoscopic Sinus Surgery (FESS), septoplasty, tonsillectomy and grommet insertion. Treatment focuses on improving hearing, breathing, sinus health and overall quality of life.",
    image: "/ent%20new.png",
    items: [
      { label: "Tympanoplasty", href: "/services/ent/tympanoplasty" },
      { label: "Functional Endoscopic Sinus Surgery (FESS)", href: "/services/ent/fess-sinus-surgery" },
      { label: "Mastoidectomy", href: "/services/ent/mastoidectomy" },
      { label: "Septoplasty", href: "/services/ent/septoplasty" },
      { label: "Tonsillectomy", href: "/services/ent/tonsillectomy" },
      { label: "Grommet Insertion (Myringotomy)", href: "/services/ent/grommet-insertion-myringotomy" },
    ],
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,.08)",
  },
  {
    icon: Bone,
    name: "Spine",
    slug: "spine",
    description:
      "Surgical and non-surgical treatment for conditions affecting the spine, aimed at relieving pain and restoring function.",
    learnMore:
      "Comprehensive evaluation and treatment for back pain, neck pain and disorders affecting the spine, discs and nerves. Services include slip disc treatment, minimally invasive spine surgery, spinal fusion and scoliosis correction. Treatment is individualised, with surgery considered when clinically necessary to relieve pain, protect neurological function and restore mobility.",
    image: "/spineimage.png",
    imageScaleClass: "scale-[1.09] group-hover:scale-[1.14]",
    items: [
      { label: "Slip Disc Treatment", href: "/services/spine/slip-disc-treatment" },
      { label: "Spinal Fusion", href: "/services/spine/spinal-fusion" },
      { label: "Minimally Invasive Spine Surgery", href: "/services/spine/minimally-invasive-spine-surgery" },
      { label: "Scoliosis Correction", href: "/services/spine/scoliosis-correction" },
    ],
    color: "#7c3aed",
    bgColor: "rgba(124,58,237,.08)",
  },
  {
    icon: Microscope,
    name: "Diagnostics",
    slug: "diagnostics",
    learnMore:
      "Integrated diagnostic services supporting faster and more accurate clinical decision-making across the hospital. The department includes CT Scan, MRI, Digital X-Ray and Pathology Laboratory, along with diagnostic support for preventive health check-ups. By bringing imaging, laboratory testing and specialist care together, patients can move more efficiently from investigation to diagnosis and treatment.",
    image: "/diagnostics%20new.png",
    imageScaleClass: "scale-[1.12] group-hover:scale-[1.18]",
    items: [
      { label: "CT Scan", href: "/services/diagnostics/ct-scan" },
      { label: "MRI", href: "/services/diagnostics/mri" },
      { label: "Pathology Lab", href: "/services/diagnostics/pathology-lab" },
      { label: "Digital X-Ray", href: "/services/diagnostics/digital-xray" },
    ],
    color: "#10b981",
    bgColor: "rgba(16,185,129,.08)",
  },
  {
    icon: HeartPulse,
    name: "General Medicine",
    slug: "general-medicine",
    description:
      "Everyday medical care for common illnesses, chronic conditions and preventive health check-ups.",
    learnMore:
      "Comprehensive physician-led care for adult medical conditions, preventive healthcare and long-term disease management. Services include preventive health check-ups, chronic disease management, diabetes and hypertension care, and fever and infection treatment. The department focuses strongly on early diagnosis, prevention of complications and continuous management of lifestyle-related diseases.",
    image: "/gem%20medicine.png",
    imageScaleClass: "scale-[1.04] group-hover:scale-[1.09]",
    items: [
      { label: "Preventive Health Checkups", href: "/services/general-medicine/preventive-health-checkups" },
      { label: "Chronic Disease Management", href: "/services/general-medicine/chronic-disease-management" },
      { label: "Diabetes & Hypertension Care", href: "/services/general-medicine/diabetes-hypertension-care" },
      { label: "Fever & Infection Care", href: "/services/general-medicine/fever-infection-care" },
    ],
    color: "#ef4444",
    bgColor: "rgba(239,68,68,.08)",
  },
];

export default function ServicesGrid() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-kicker mb-4 before:content-none">Centres of Excellence</div>
        <h2 className="mb-3 text-4xl font-black tracking-[-.03em] text-ink">
          Specialised care, close to home.
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-slate-500">
          Simple, premium care across every major speciality, built around the patient.
        </p>
      </div>

      <div className="flex flex-col gap-16 lg:gap-20">
        {services.map((s, index) => {
          const Icon = s.icon;
          const reverse = index % 2 === 1;
          const isOpen = expanded.has(index);

          return (
            <motion.div
              key={s.name}
              id={s.slug}
              className={`scroll-mt-28 flex flex-col items-center gap-10 text-left lg:flex-row lg:gap-16 ${
                reverse ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ x: reverse ? 60 : -60 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full shrink-0 lg:w-2/5">
                <div
                  className="mx-auto flex aspect-[4/3] w-full max-w-md items-center justify-center overflow-hidden rounded-[2.5rem] shadow-xl"
                  style={{ background: s.bgColor }}
                >
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.name}
                      className={`h-3/4 w-3/4 object-contain ${s.imageScaleClass ?? ""}`}
                    />
                  ) : (
                    <Icon size={96} style={{ color: s.color }} />
                  )}
                </div>
              </div>

              <div className="w-full lg:w-3/5">
                <h3 className="text-2xl font-black text-ink sm:text-3xl">{s.name}</h3>
                {s.description && (
                  <p className="mt-4 leading-7 text-slate-600">{s.description}</p>
                )}
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {s.items.map((item) => {
                    const label = typeof item === "string" ? item : item.label;
                    const href = typeof item === "string" ? undefined : item.href;
                    return (
                      <li key={label} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: s.color }}
                        />
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                            style={{ color: s.color }}
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

                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide"
                  style={{ color: s.color }}
                >
                  {isOpen ? "Show less" : "Learn more"}
                  <ChevronDown size={15} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                    {s.learnMore}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
