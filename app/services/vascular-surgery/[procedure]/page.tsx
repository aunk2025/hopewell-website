import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getVascularProcedure, vascularProcedures } from "@/lib/vascular-procedures";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return vascularProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getVascularProcedure(slug);
  if (!procedure) return { title: "Vascular Surgery | Hopewell Hospital Ranchi" };
  return buildProcedureMetadata(procedure, `/services/vascular-surgery/${slug}`);
}

export default async function VascularProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getVascularProcedure(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/services"
      canonicalPath={`/services/vascular-surgery/${slug}`}
      consultationLabel="Book Vascular Surgery Consultation"
    />
  );
}
