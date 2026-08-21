import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getGeneralMedicineProcedure, generalMedicineProcedures } from "@/lib/general-medicine-procedures";

export function generateStaticParams() {
  return generalMedicineProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getGeneralMedicineProcedure(slug);
  if (!procedure) return { title: "General Medicine | Hopewell Hospital Ranchi" };
  return {
    title: `${procedure.title} | Hopewell Hospital Ranchi`,
    description: procedure.metaDescription,
  };
}

export default async function GeneralMedicineProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getGeneralMedicineProcedure(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/services"
      consultationLabel="Book General Medicine Consultation"
    />
  );
}
