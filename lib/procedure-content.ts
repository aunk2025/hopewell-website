// Shared content model for the rich procedure-detail pages (surgery, IVF,
// and future specialities). A page is an ordered list of sections, each
// made of one or more typed blocks so the same renderer can display any
// combination faithfully (text, bullets, two-column info boxes, grids,
// timelines, cost/insurance, doctor, FAQ and cross-links).

export type ContentBlock =
  | { kind: "text"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "warning"; text: string }
  | { kind: "twocol"; boxes: { title: string; text?: string; items?: string[] }[] }
  | { kind: "grid"; items: { title: string; text: string }[] }
  | { kind: "timeline"; steps: { num: string; title: string; text: string }[] }
  | { kind: "cost"; range: string; note: string; insuranceTitle: string; insuranceNote: string }
  | { kind: "doctor"; name: string; specialty: string; focus: string }
  | { kind: "faq"; items: { q: string; a: string }[] }
  | { kind: "links"; items: { title: string; text: string; href: string }[] };

export type ContentSection = { id: string | null; kicker: string; heading: string; blocks: ContentBlock[] };

export type ProcedurePage = {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  eyebrow: string;
  heroTitle: string;
  heroCopy: string;
  heroCardKicker: string;
  heroCardTitle: string;
  heroCardText: string;
  heroImage?: string;
  heroImageCaption?: string;
  doctorName: string;
  doctorSpecialtyMini: string;
  heroTags: string[];
  facts: { label: string; value: string }[];
  sections: ContentSection[];
  finalCta: { heading: string; text: string };
};
