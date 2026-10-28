import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getSpineProcedure, spineProcedures } from "@/lib/spine-procedures";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return spineProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getSpineProcedure(slug);
  if (!procedure) return { title: "Spine | Hopewell Hospital Ranchi" };
  const base = buildProcedureMetadata(procedure, `/services/spine/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/spine/${slug}`, "hi-IN": `/hi/services/spine/${slug}` },
    },
  };
}

export default async function SpineProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getSpineProcedure(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/services"
      canonicalPath={`/services/spine/${slug}`}
      consultationLabel="Book Spine Consultation"
      altHref={`/hi/services/spine/${slug}`}
    />
  );
}
