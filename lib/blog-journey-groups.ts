// Optional patient-journey sub-grouping for category pages that have enough
// articles to benefit from it (currently only General, GI & Laparoscopic
// Surgery — the other specialities have one article each so far). Add a new
// entry here once another category's article count justifies it.

import type { SpecialityKey } from "./blog-specialities";

export type JourneyStageKey =
  | "understanding"
  | "choosing-care"
  | "preparing"
  | "procedures"
  | "recovery";

export const JOURNEY_STAGE_ORDER: JourneyStageKey[] = [
  "understanding",
  "choosing-care",
  "preparing",
  "procedures",
  "recovery",
];

export const JOURNEY_STAGE_LABELS: Record<JourneyStageKey, string> = {
  understanding: "Understanding Your Condition",
  "choosing-care": "Choosing the Right Care",
  preparing: "Preparing for Surgery",
  procedures: "Procedure Guides",
  recovery: "Recovery & Aftercare",
};

const SURGERY_JOURNEY_BY_SLUG: Record<string, JourneyStageKey> = {
  "gallstones-when-gallbladder-surgery-needed-ranchi": "understanding",
  "hernia-when-surgery-needed-ranchi": "understanding",
  "abdominal-pain-causes-treatment-ranchi": "understanding",
  "general-laparoscopic-gi-surgery-ranchi": "understanding",

  "best-hospital-in-jharkhand-for-surgery": "choosing-care",
  "how-to-choose-general-laparoscopic-surgeon-ranchi": "choosing-care",
  "laparoscopic-vs-open-surgery-ranchi": "choosing-care",
  "laparoscopic-surgery-ranchi-procedures-recovery": "choosing-care",

  "preparing-for-laparoscopic-surgery-ranchi": "preparing",

  "gallbladder-stone-surgery-ranchi": "procedures",
  "hernia-surgery-ranchi-laparoscopic-open-cost-recovery": "procedures",
  "appendix-surgery-ranchi-symptoms-cost-recovery": "procedures",
  "laser-piles-treatment-ranchi-cost-recovery": "procedures",
  "anal-fistula-fissure-treatment-ranchi": "procedures",

  "recovery-after-laparoscopic-surgery-ranchi": "recovery",
};

const JOURNEY_MAPS: Partial<Record<SpecialityKey, Record<string, JourneyStageKey>>> = {
  surgery: SURGERY_JOURNEY_BY_SLUG,
};

export function groupByJourney<T extends { slug: string }>(
  key: SpecialityKey,
  posts: T[]
): { stage: JourneyStageKey; label: string; posts: T[] }[] | null {
  const map = JOURNEY_MAPS[key];
  if (!map) return null;
  const groups = JOURNEY_STAGE_ORDER.map((stage) => ({
    stage,
    label: JOURNEY_STAGE_LABELS[stage],
    posts: posts.filter((p) => map[p.slug] === stage),
  })).filter((g) => g.posts.length > 0);
  return groups.length > 0 ? groups : null;
}
