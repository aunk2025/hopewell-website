import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getUrologyProcedure, urologyProcedures } from "@/lib/urology-procedures";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return urologyProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getUrologyProcedure(slug);
  if (!procedure) return { title: "Urology | Hopewell Hospital Ranchi" };
  const base = buildProcedureMetadata(procedure, `/services/urology/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/urology/${slug}`, "hi-IN": `/hi/services/urology/${slug}` },
    },
  };
}

export default async function UrologyProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getUrologyProcedure(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/services"
      canonicalPath={`/services/urology/${slug}`}
      consultationLabel="Book Urology Consultation"
      altHref={`/hi/services/urology/${slug}`}
    />
  );
}
