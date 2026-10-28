// Groups blog posts by speciality for the /blog and /hi/blog listings.
// Each post's own `category` field is free text written per-article (e.g.
// "GI and Laparoscopic Surgery", "Surgery and Patient Guides") rather than a
// fixed taxonomy, so posts are bucketed by keyword match — the same
// approach lib/doctor-order.ts uses for doctor specialties — instead of
// grouping on the raw strings, which would scatter near-duplicate
// categories across separate sections.
//
// The bucket for each slug is computed once from the ENGLISH category text
// (keywords below are English) and reused for the Hindi listing by slug, so
// grouping stays correct regardless of which language's post object is
// being rendered.

import { blogPosts } from "./blog-content";

export type SpecialityKey = "surgery" | "ivf" | "ortho" | "emergency" | "urology";

export const SPECIALITY_ORDER: SpecialityKey[] = ["surgery", "ivf", "ortho", "emergency", "urology"];

export const SPECIALITY_LABELS: Record<SpecialityKey, { en: string; hi: string }> = {
  surgery: { en: "General, GI & Laparoscopic Surgery", hi: "जनरल, जीआई एवं लेप्रोस्कोपिक सर्जरी" },
  ivf: { en: "IVF, Fertility & Women's Health", hi: "आईवीएफ, फर्टिलिटी एवं महिला स्वास्थ्य" },
  ortho: { en: "Orthopaedics & Joint Replacement", hi: "ऑर्थोपेडिक्स एवं जॉइंट रिप्लेसमेंट" },
  emergency: { en: "Emergency & Critical Care", hi: "आपातकालीन एवं गंभीर रोग सेवा" },
  urology: { en: "Urology & Kidney Care", hi: "यूरोलॉजी एवं किडनी केयर" },
};

const KEYWORDS: Record<SpecialityKey, string[]> = {
  surgery: ["surgery", "laparoscopic", "gi "],
  ivf: ["ivf", "fertility", "women"],
  ortho: ["orthop"],
  emergency: ["emergency", "critical"],
  urology: ["urology", "kidney"],
};

function matchKey(englishCategory: string): SpecialityKey {
  const lower = englishCategory.toLowerCase();
  for (const key of SPECIALITY_ORDER) {
    if (KEYWORDS[key].some((k) => lower.includes(k))) return key;
  }
  return "surgery";
}

export const SPECIALITY_BY_SLUG: Record<string, SpecialityKey> = Object.fromEntries(
  blogPosts.map((p) => [p.slug, matchKey(p.category)])
);

export function groupBySpeciality<T extends { slug: string }>(posts: T[], locale: "en" | "hi") {
  return SPECIALITY_ORDER.map((key) => ({
    key,
    label: SPECIALITY_LABELS[key][locale],
    posts: posts.filter((p) => SPECIALITY_BY_SLUG[p.slug] === key),
  })).filter((g) => g.posts.length > 0);
}
