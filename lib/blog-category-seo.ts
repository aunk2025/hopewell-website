import type { Metadata } from "next";
import { SPECIALITY_LABELS, SPECIALITY_DESCRIPTIONS, specialityHref, type SpecialityKey } from "./blog-specialities";
import { SITE_URL, DEFAULT_OG_IMAGE } from "./contact-config";

export function buildCategoryMetadata(key: SpecialityKey): Metadata {
  const label = SPECIALITY_LABELS[key].en;
  const description = SPECIALITY_DESCRIPTIONS[key];
  const href = specialityHref(key);
  const url = `${SITE_URL}${href}`;
  const title = `${label} — Patient Guides | Hopewell Health Library`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Hopewell Hospital",
      type: "website",
      locale: "en_IN",
      images: [{ url: DEFAULT_OG_IMAGE, alt: "Hopewell Hospital" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
