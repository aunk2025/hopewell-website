import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/contact-config";

// Legacy (pre-restructure) procedure sets — same merge rule the ortho/ent
// pages themselves use (rich entries win; legacy fills in any slug the
// rich set doesn't cover), so the sitemap never lists a dead or duplicate URL.
import { procedures as orthoLegacy } from "@/lib/orthopaedics-procedures";
import { procedures as entLegacy } from "@/lib/ent-procedures";

import { orthoProcedures } from "@/lib/ortho-procedures";
import { entTreatments } from "@/lib/ent-treatments";
import { diagnosticsProcedures } from "@/lib/diagnostics-procedures";
import { generalMedicineProcedures } from "@/lib/general-medicine-procedures";
import { ivfProcedures } from "@/lib/ivf-procedures";
import { paedsProcedures } from "@/lib/paeds-procedures";
import { spineProcedures } from "@/lib/spine-procedures";
import { surgeryProcedures } from "@/lib/surgery-procedures";
import { urologyProcedures } from "@/lib/urology-procedures";
import { vascularProcedures } from "@/lib/vascular-procedures";

function mergedSlugs(rich: { slug: string }[], legacy: { slug: string }[]) {
  const richSlugs = new Set(rich.map((p) => p.slug));
  return [...rich, ...legacy.filter((p) => !richSlugs.has(p.slug))].map((p) => p.slug);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/services/cardiac",
    "/services/emergencymedicine",
    "/services/icu",
    "/services/neurosciences",
    "/centres",
    "/health-packages",
    "/contact",
    "/appointment",
    "/doctors",
  ];

  const procedureGroups: { basePath: string; slugs: string[] }[] = [
    { basePath: "/services/orthopaedics", slugs: mergedSlugs(orthoProcedures, orthoLegacy) },
    { basePath: "/services/ent", slugs: mergedSlugs(entTreatments, entLegacy) },
    { basePath: "/services/diagnostics", slugs: diagnosticsProcedures.map((p) => p.slug) },
    { basePath: "/services/general-medicine", slugs: generalMedicineProcedures.map((p) => p.slug) },
    { basePath: "/services/ivf", slugs: ivfProcedures.map((p) => p.slug) },
    { basePath: "/services/motherchild", slugs: paedsProcedures.map((p) => p.slug) },
    { basePath: "/services/spine", slugs: spineProcedures.map((p) => p.slug) },
    { basePath: "/services/surgeries", slugs: surgeryProcedures.map((p) => p.slug) },
    { basePath: "/services/urology", slugs: urologyProcedures.map((p) => p.slug) },
    { basePath: "/services/vascular-surgery", slugs: vascularProcedures.map((p) => p.slug) },
  ];

  // No page here tracks a real "last updated" date, so `lastModified` is
  // intentionally omitted rather than stamped with the build/request time —
  // claiming every page just changed on every rebuild is worse for SEO
  // than not sending the field at all (Google mostly ignores an
  // untrustworthy lastmod signal anyway).
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const procedureEntries: MetadataRoute.Sitemap = procedureGroups.flatMap(({ basePath, slugs }) =>
    slugs.map((slug) => ({
      url: `${SITE_URL}${basePath}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...procedureEntries];
}
