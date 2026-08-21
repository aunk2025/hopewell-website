"use client";

import { useState } from "react";
import { Quote, Star } from "lucide-react";

type Review = { name: string; meta: string; text: string };

const reviews: Review[] = [
  {
    name: "Umar Farooque",
    meta: "Local Guide · 15 reviews · 4 photos",
    text: "The operation was successfully... Had a great experience always here ... Well satisfied with the doctors and team always....",
  },
  {
    name: "Shaban Anjum Sheikh",
    meta: "Local Guide · 332 reviews · 1,337 photos",
    text: "Hopewell Hospital truly stands out as a place where compassion meets professionalism. From the moment you step inside, there is a warm and reassuring atmosphere that instantly makes patients and their families feel at ease. The staff here deserves special appreciation for their dedication, kindness, and patience. The doctors are highly knowledgeable and take the time to explain every detail clearly, ensuring that patients understand their treatment and feel confident about their care. Cleanliness and hygiene are maintained exceptionally well throughout the hospital, which adds to the trust and confidence one feels while being treated here. Truly, Hopewell Hospital sets a standard for quality healthcare and heartfelt service.",
  },
  {
    name: "Eram Azim",
    meta: "1 review",
    text: "We are very thankful to Shahbaz sir and Neha Ali ma'am. They are very cooperative and they totally make us feel like home. My mom had a uterus problem and the operation was successful, all thanks to Neha Ali ma'am and Shahbaz sir. Neha ma'am explains everything very kindly, and my whole family felt reassured. Neha ma'am and Shahbaz sir always check on the patient every day, twice or thrice. My mom was confused about the uterus operation, but Neha ma'am assured her that laparoscopy was best, and she was correct, my mom could walk in just one day. Lastly, I would thank all the members of Hopewell Hospital, Neha ma'am and Shahbaz sir for their cooperation for my mom's successful operation.",
  },
  {
    name: "Gudar Ansari",
    meta: "1 review",
    text: "It was good experience in this hospital, all staff good in behavior.",
  },
  {
    name: "Sarfaraz Ahamed",
    meta: "1 review",
    text: "The behaviour and support of doctors as well as staff are very satisfactory, I'll recommend to others.",
  },
  {
    name: "Soni Khan",
    meta: "1 review",
    text: "Operation doing very well. Very good experience.",
  },
  {
    name: "Alina Shekh",
    meta: "1 review",
    text: "Doctor Shahbaz Alam is the best laparoscopic surgeon all over Ranchi, and also very humble and polite in behavior. Hospital management is also good and all staff are helpful. I appreciate Dr Shahbaz Alam and the whole Hopewell team.",
  },
  {
    name: "Shahnaz Akhtar",
    meta: "1 review",
    text: "Excellent service and such a clean hospital. Dr Neha Ali is one of the best gynaecologists in Ranchi. Her behaviour is also very good with her patients. Simply awesome hospital and I like it the most.",
  },
  {
    name: "Azra Tahsin",
    meta: "1 review",
    text: "The hospital is well managed with quality staff. I am happy with the hospitality. Doctors are amazing here.",
  },
  {
    name: "Jawed Barki",
    meta: "2 reviews",
    text: "Excellent service. All staff are well behaved and sincere in their duties. Thank you Dr Shahbaz Alam, you are great. I strongly recommend Hopewell Hospital.",
  },
  {
    name: "Naushad Alam",
    meta: "2 reviews",
    text: "Good experience. Facilities are also very good.... patient care was excellent.",
  },
];

const VISIBLE_COUNT = 10;

function initials(name: string) {
  return name.trim().split(/\s+/).map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, VISIBLE_COUNT);

  return (
    <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-kicker before:content-none">Patient Voices</div>
        <h2 className="text-balance mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl">
          What our patients say.
        </h2>
        <p className="mx-auto mt-6 max-w-md leading-7 text-slate-600">
          Real reviews from patients and families cared for at Hopewell Hospital.
        </p>
      </div>

      <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {visible.map((r) => (
          <div
            key={r.name}
            className="glass flex w-[320px] shrink-0 snap-start flex-col rounded-[2rem] border border-teal-700 p-6 shadow-glass transition hover:-translate-y-1 hover:shadow-glow"
          >
            <Quote className="text-cyan" size={22} />
            <p className="mt-4 line-clamp-6 flex-1 text-sm leading-6 text-slate-600">{r.text}</p>
            <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-100 text-sm font-black text-teal-800">
                {initials(r.name)}
              </div>
              <div className="min-w-0">
                <div className="truncate font-black text-ink">{r.name}</div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="truncate">{r.meta}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && reviews.length > VISIBLE_COUNT && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="rounded-full bg-slate-100 px-6 py-3 text-sm font-bold transition hover:bg-ink hover:text-white"
          >
            Load more reviews
          </button>
        </div>
      )}
    </section>
  );
}
