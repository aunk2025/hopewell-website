import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getIvfProcedure, ivfProcedures } from "@/lib/ivf-procedures";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return ivfProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getIvfProcedure(slug);
  if (!procedure) return { title: "IVF, Gynaecology & Women's Health | Hopewell Hospital Ranchi" };
  return buildProcedureMetadata(procedure, `/services/ivf/${slug}`);
}

export default async function IvfProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getIvfProcedure(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/services"
      canonicalPath={`/services/ivf/${slug}`}
      consultationLabel="Book Fertility Consultation"
    />
  );
}
