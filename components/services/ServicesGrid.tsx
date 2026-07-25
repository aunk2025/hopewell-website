"use client";

import { useState } from "react";
import {
  HeartPulse,
  Stethoscope,
  Baby,
  Bone,
  Brain,
  Microscope,
  ChevronRight,
  X,
  type LucideIcon,
} from "lucide-react";

type ServiceDetail = { title: string; text: string; image?: string };

type Service = {
  icon: LucideIcon;
  name: string;
  items: string[];
  color: string;
  bgColor: string;
  image?: string;
  description?: string;
  details?: ServiceDetail[];
  href?: string;
};

const services: Service[] = [
  {
    icon: HeartPulse,
    name: "Cardiac Sciences",
    items: ["Cardiology", "Angioplasty", "Heart Failure Clinic"],
    color: "#ef4444",
    bgColor: "rgba(239,68,68,.08)",
  },
  {
    icon: Stethoscope,
    name: "GI Surgery",
    description:
      "Keyhole procedures across general and gastrointestinal surgery, with smaller incisions, less pain, and a quicker return home than open surgery.",
    image: "/services/laparoscopic-surgery.png",
    items: ["Laparoscopic Surgery", "Bariatric Surgery", "Colo-Rectal Surgery"],
    color: "#0ca8ad",
    bgColor: "rgba(12,168,173,.08)",
    details: [
      {
        title: "Laparoscopic Surgery",
        image: "/services/laparoscopic-surgery.png",
        text: "Laparoscopy has allowed surgeons to perform the same procedures as in traditional open surgery, using small incisions (keyhole surgery) instead of large incisions. Major benefits of these surgeries are no large scars, reduced postoperative pain, reduced hospital stay, quicker return to normal physical activities and early return to work.",
      },
      {
        title: "Bariatric Surgery",
        image: "/services/bariatric-surgery.jpg",
        text: "Obesity is a multifactorial disease due to accumulation of excess fat in the body. It refers to a spectrum of problems of excess weight, ranging from mild overweight to severe obesity. Obese people are more likely to develop reflux disorders and heartburn, high blood pressure, diabetes, arthritis, some cancers including prostate, breast, cervix and ovarian cancer, snoring and suffer sleep disorders, fatty liver disease , menstrual irregularities and infertility, depression and adjustment problems in society. With the epidemic of obesity no longer confined to the west, the demand for bariatric surgery has been on the increase. The focus is on Laparoscopic Roux-en-Y Gastric Bypass and Sleeve Gastrectomy. The benefits of laparoscopic surgery become particularly important as far as bariatric surgery is concerned. Weight loss surgery is almost guaranteed to help you lose weight, but like all good tools, it works best in the hands of a worker who is well trained..",
      },
      {
        title: "Colo-Rectal Surgery",
        text: "The highlights of colo-rectal surgeries are developing newer investigations and therapeutic techniques in the surgeries for piles, fissures, fistulas and carcinoma rectum. Advancing the imaging techniques of defecography and the anal physiology..",
      },
      {
        title: "Minimally Invasive Thoracic & Foregut Surgery",
        text: "Thoracoscopy is a minimally invasive diagnostic technique that provides access to the thoracic cavity for evaluation of intrathoracic pathology without surgical intervention. Intrathoracic structures can be visualized better with thoracoscopy than with an open thoracotomy. Thoracoscopy provides minimally invasive access to important diagnostic information with a very low incidence of complications. Esophageal cancers, lung cancers and stomach cancers can be treated through this technique.",
      },
    ],
  },
  {
    icon: Baby,
    name: "Women & Child Care",
    description:
      "Comprehensive maternity and gynaecological care, from prenatal counselling and high-risk pregnancy management to fertility treatment and family planning.",
    items: ["Maternity", "NICU", "Paediatrics"],
    color: "#ec4899",
    bgColor: "rgba(236,72,153,.08)",
    details: [
      {
        title: "Prenatal Care & Fetal Diagnostics",
        text: "Regular prenatal counselling alongside fetal diagnostic procedures such as amniocentesis and chorionic villus sampling, helping detect and manage conditions early in pregnancy.",
      },
      {
        title: "High-Risk Pregnancy Management",
        text: "Continuous monitoring through labour, including foetal surveillance and epidural pain relief, for both normal and high-risk pregnancies.",
      },
      {
        title: "Family Planning & Preventive Care",
        text: "Contraceptive counselling and preventive screening for women at every life stage, from adolescence through to menopause.",
      },
      {
        title: "Fertility Treatment",
        text: "Assisted reproduction support including IUI, IVF and ICSI for couples facing infertility.",
      },
      {
        title: "Gynaecological Surgery",
        text: "Minimally invasive and endoscopic gynaecological procedures, including surgical management of gynaecological cancers.",
      },
    ],
  },
  {
    icon: Bone,
    name: "Orthopaedics",
    description:
      "Comprehensive bone, joint and spine care, from sports injuries and fractures to joint replacement and long-term mobility restoration.",
    items: ["Joint Replacement", "Sports Injuries", "Trauma Care"],
    color: "#8b5cf6",
    bgColor: "rgba(139,92,246,.08)",
    href: "/services/orthopaedics",
  },
  {
    icon: Brain,
    name: "Neurosciences",
    items: ["Stroke Care", "Neurology", "Neurosurgery"],
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,.08)",
  },
  {
    icon: Microscope,
    name: "Diagnostics",
    items: ["CT Scan", "Pathology", "Digital Imaging"],
    color: "#10b981",
    bgColor: "rgba(16,185,129,.08)",
  },
];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const Icon = service.icon;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
        >
          <X size={16} />
        </button>

        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: service.bgColor }}>
          <Icon size={26} style={{ color: service.color }} />
        </div>
        <h2 className="text-2xl font-black text-ink">{service.name}</h2>
        {service.description && <p className="mt-2 text-slate-500">{service.description}</p>}

        <div className="mt-6 space-y-6">
          {service.details?.map((d) => (
            <div key={d.title}>
              {d.image && (
                <div className="mb-3 h-36 w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={d.image} alt={d.title} className="h-full w-full object-contain p-3" />
                </div>
              )}
              <h3 className="font-black text-ink">{d.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{d.text}</p>
            </div>
          ))}
        </div>

        <a
          href="/appointment"
          className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-ink py-3.5 text-sm font-bold text-white transition hover:bg-teal-900"
        >
          Book an Appointment
        </a>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="section-kicker mb-4">Centres of Excellence</div>
      <h2 className="mb-3 text-4xl font-black tracking-[-.03em] text-ink">
        Specialised care, close to home.
      </h2>
      <p className="mb-12 max-w-xl text-slate-500">
        Simple, premium care across every major speciality, built around the patient.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          const hasDetails = !!s.details;
          const hasLink = !!s.href;
          const isInteractive = hasDetails || hasLink;

          const cardClassName = `group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
            isInteractive ? "cursor-pointer" : "cursor-default"
          }`;

          const cardContent = (
            <>
              {s.image && (
                <div className="h-40 w-full overflow-hidden bg-slate-50">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-7">
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: s.bgColor }}
                >
                  <Icon size={26} style={{ color: s.color }} />
                </div>
                <h3 className="mb-2 text-xl font-black text-ink">{s.name}</h3>
                {s.description && (
                  <p className="mb-4 text-sm leading-6 text-slate-500">{s.description}</p>
                )}
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <ChevronRight size={14} style={{ color: s.color }} className="shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {isInteractive && (
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide"
                    style={{ color: s.color }}
                  >
                    Learn more <ChevronRight size={14} />
                  </span>
                )}
              </div>
            </>
          );

          if (hasLink) {
            return (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={cardClassName}>
                {cardContent}
              </a>
            );
          }

          return (
            <button
              type="button"
              key={s.name}
              onClick={() => hasDetails && setSelected(s)}
              disabled={!hasDetails}
              className={cardClassName}
            >
              {cardContent}
            </button>
          );
        })}
      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
