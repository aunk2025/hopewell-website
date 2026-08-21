import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getUrologyProcedure, urologyProcedures } from "@/lib/urology-procedures";

export function generateStaticParams() {
  return urologyProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getUrologyProcedure(slug);
  if (!procedure) return { title: "Urology | Hopewell Hospital Ranchi" };
  return {
    title: `${procedure.title} | Hopewell Hospital Ranchi`,
    description: procedure.metaDescription,
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
      consultationLabel="Book Urology Consultation"
    />
  );
}
