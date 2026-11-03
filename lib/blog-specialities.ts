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

import { blogPosts, type BlogPost } from "./blog-content";

export type SpecialityKey = "surgery" | "ivf" | "ortho" | "emergency" | "urology";

export const SPECIALITY_ORDER: SpecialityKey[] = ["surgery", "ivf", "ortho", "emergency", "urology"];

export const SPECIALITY_LABELS: Record<SpecialityKey, { en: string; hi: string }> = {
  surgery: { en: "General, GI & Laparoscopic Surgery", hi: "जनरल, जीआई एवं लेप्रोस्कोपिक सर्जरी" },
  ivf: { en: "IVF, Fertility & Women's Care", hi: "आईवीएफ, फर्टिलिटी एवं महिला स्वास्थ्य" },
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

// Health Library category pages (app/blog/<slug>) — one per speciality that
// currently has published articles. A category is only wired up here once
// it has real content; see CATEGORY_HAS_CONTENT below.
export const SPECIALITY_ROUTE_SLUG: Record<SpecialityKey, string> = {
  surgery: "general-gi-laparoscopic-surgery",
  ortho: "orthopaedics-joint-replacement",
  ivf: "gynaecology-ivf",
  urology: "urology-kidney-care",
  emergency: "emergency-critical-care",
};

export const SPECIALITY_ROUTE_KEY: Record<string, SpecialityKey> = Object.fromEntries(
  SPECIALITY_ORDER.map((key) => [SPECIALITY_ROUTE_SLUG[key], key])
) as Record<string, SpecialityKey>;

export function specialityHref(key: SpecialityKey, locale: "en" | "hi" = "en") {
  const base = locale === "hi" ? "/hi/blog" : "/blog";
  return `${base}/${SPECIALITY_ROUTE_SLUG[key]}`;
}

export const SPECIALITY_DESCRIPTIONS: Record<SpecialityKey, string> = {
  surgery:
    "Patient guides on gallbladder, hernia, appendix, piles, fistula and other general, GI and laparoscopic surgical conditions — from recognising symptoms through preparation and recovery.",
  ortho:
    "Guidance on joint pain, arthritis and orthopaedic surgical options, including when joint replacement may be worth discussing with a specialist.",
  ivf:
    "Patient guides on fertility evaluation, IVF and related women's health topics to help you understand when and how to consult a specialist.",
  urology:
    "Guidance on kidney stones and other urological conditions, including when surgery may be needed and what to expect.",
  emergency:
    "What to know about recognising a medical emergency and the critical care response patients can expect at a hospital.",
};

export const SPECIALITY_SERVICE_HREF: Record<SpecialityKey, string> = {
  surgery: "/services/surgeries/gi-surgery",
  ortho: "/services/orthopaedics/knee-replacement",
  ivf: "/services/ivf/ivf-treatment",
  urology: "/services/urology/kidney-stone-treatment",
  emergency: "/services/emergencymedicine",
};

// Reuses each speciality's most representative existing article hero image
// rather than commissioning new artwork for the category cards.
export const SPECIALITY_CARD_IMAGE: Record<SpecialityKey, { src: string; alt: string }> = {
  surgery: {
    src: "/general-laparoscopic-gi-surgery-ranchi-hopewell.webp",
    alt: "General, GI and laparoscopic surgery patient guides at Hopewell Hospital, Ranchi.",
  },
  ortho: {
    src: "/knee-arthritis-replacement-ranchi-hopewell.webp",
    alt: "Orthopaedics and joint replacement patient guides at Hopewell Hospital, Ranchi.",
  },
  ivf: {
    src: "/when-to-consult-ivf-specialist-jharkhand.webp",
    alt: "Gynaecology, IVF and fertility patient guides at Hopewell Hospital, Ranchi.",
  },
  urology: {
    src: "/kidney-stone-treatment-ranchi-hopewell.webp",
    alt: "Urology and kidney care patient guides at Hopewell Hospital, Ranchi.",
  },
  emergency: {
    src: "/chest-pain-emergency-hospital-ranchi.webp",
    alt: "Emergency and critical care patient guides at Hopewell Hospital, Ranchi.",
  },
};

// Only specialities with at least one published article get a live category
// page and sitemap entry — avoids publishing an empty/thin page. Update this
// (and the taxonomy above) as new specialities gain their first article.
export const CATEGORY_HAS_CONTENT: Record<SpecialityKey, boolean> = {
  surgery: true,
  ortho: true,
  ivf: true,
  urology: true,
  emergency: true,
};

export const LIVE_SPECIALITY_ORDER = SPECIALITY_ORDER.filter((key) => CATEGORY_HAS_CONTENT[key]);

// Related-articles picks: prefer same-speciality posts first (most relevant
// to the reader), then fill any remaining slots from the rest of the
// library so a post in a small category still gets `count` suggestions.
export function getRelatedPostsBySpeciality(slug: string, count = 3): BlogPost[] {
  const key = SPECIALITY_BY_SLUG[slug];
  const others = blogPosts.filter((p) => p.slug !== slug);
  const sameSpeciality = others.filter((p) => SPECIALITY_BY_SLUG[p.slug] === key);
  const rest = others.filter((p) => SPECIALITY_BY_SLUG[p.slug] !== key);
  return [...sameSpeciality, ...rest].slice(0, count);
}
