import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getSurgeryProcedure, surgeryProcedures } from "@/lib/surgery-procedures";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return surgeryProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getSurgeryProcedure(slug);
  if (!procedure) return { title: "General, GI & Laparoscopic Surgery | Hopewell Hospital Ranchi" };
  const base = buildProcedureMetadata(procedure, `/services/surgeries/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/surgeries/${slug}`, "hi-IN": `/hi/services/surgeries/${slug}` },
    },
  };
}

export default async function SurgeryProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getSurgeryProcedure(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/services"
      canonicalPath={`/services/surgeries/${slug}`}
      consultationLabel="Book Surgical Consultation"
      altHref={`/hi/services/surgeries/${slug}`}
    />
  );
}
