import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getPaedsProcedure, paedsProcedures } from "@/lib/paeds-procedures";

export function generateStaticParams() {
  return paedsProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getPaedsProcedure(slug);
  if (!procedure) return { title: "Paediatrics & Neonatology | Hopewell Hospital Ranchi" };
  return {
    title: `${procedure.title} | Hopewell Hospital Ranchi`,
    description: procedure.metaDescription,
  };
}

export default async function PaedsProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getPaedsProcedure(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/services"
      consultationLabel="Book Paediatric Consultation"
    />
  );
}
