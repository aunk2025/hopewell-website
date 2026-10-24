// Shared metadata + structured-data builders for every procedure/service
// detail page (surgery, IVF, orthopaedics, diagnostics, CT Scan, etc.).
// Centralised here so all ~70 procedure pages get a consistent, correct
// canonical URL, Open Graph/Twitter preview and JSON-LD instead of each
// route file re-deriving (or forgetting) them individually.

import type { Metadata } from "next";
import type { ProcedurePage } from "./procedure-content";
import { SITE_URL, DEFAULT_OG_IMAGE } from "./contact-config";

const SITE_NAME = "Hopewell Hospital";

/** Full ProcedurePage-shaped content (surgery, IVF, diagnostics, CT Scan, …). */
export function buildProcedureMetadata(procedure: ProcedurePage, path: string): Metadata {
  const title = procedure.seoTitle ?? `${procedure.title} | Hopewell Hospital Ranchi`;
  const url = `${SITE_URL}${path}`;
  const image = procedure.heroImage ?? DEFAULT_OG_IMAGE;
  const imageAlt = procedure.heroImageCaption ?? procedure.title;

  return {
    title,
    description: procedure.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: procedure.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: procedure.metaDescription,
      images: [image],
    },
  };
}

/** Legacy ({ slug, name, overview }) procedure entries — ortho/ENT fallback pages. */
export function buildLegacyProcedureMetadata(
  procedure: { name: string; overview: string },
  path: string
): Metadata {
  const title = `${procedure.name} | Hopewell Hospital Ranchi`;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description: procedure.overview,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: procedure.overview,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: procedure.overview,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

/** MedicalWebPage + BreadcrumbList + (when present) FAQPage for a rich ProcedurePage. */
export function buildProcedureJsonLd(procedure: ProcedurePage, path: string, categoryLabel: string, categoryHref: string) {
  const url = `${SITE_URL}${path}`;
  const faqs = procedure.sections
    .flatMap((s) => s.blocks)
    .filter((b): b is Extract<typeof b, { kind: "faq" }> => b.kind === "faq")
    .flatMap((b) => b.items);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalWebPage",
      name: procedure.title,
      description: procedure.metaDescription,
      url,
      about: procedure.category,
      isPartOf: { "@type": "Hospital", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: categoryLabel, item: `${SITE_URL}${categoryHref}` },
        { "@type": "ListItem", position: 4, name: procedure.title, item: url },
      ],
    },
  ];

  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Plain { title, description } pages — the 4 hand-written standalone services. */
export function buildStaticMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Hopewell Hospital Ranchi`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

/** Simpler MedicalWebPage + BreadcrumbList for legacy/hand-written pages with no FAQ data. */
export function buildSimpleJsonLd(name: string, description: string, path: string) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name,
        description,
        url,
        isPartOf: { "@type": "Hospital", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
    ],
  };
}
