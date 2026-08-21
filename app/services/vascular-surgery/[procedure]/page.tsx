import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getVascularProcedure, vascularProcedures } from "@/lib/vascular-procedures";

export function generateStaticParams() {
  return vascularProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getVascularProcedure(slug);
  if (!procedure) return { title: "Vascular Surgery | Hopewell Hospital Ranchi" };
  return {
    title: `${procedure.title} | Hopewell Hospital Ranchi`,
    description: procedure.metaDescription,
  };
}

export default async function VascularProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getVascularProcedure(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/services"
      consultationLabel="Book Vascular Surgery Consultation"
    />
  );
}
