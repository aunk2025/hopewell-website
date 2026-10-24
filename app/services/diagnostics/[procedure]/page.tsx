import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getDiagnosticsProcedure, diagnosticsProcedures } from "@/lib/diagnostics-procedures";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return diagnosticsProcedures.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getDiagnosticsProcedure(slug);
  if (!procedure) return { title: "Diagnostics | Hopewell Hospital Ranchi" };
  return buildProcedureMetadata(procedure, `/services/diagnostics/${slug}`);
}

export default async function DiagnosticsProcedurePage({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getDiagnosticsProcedure(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/services"
      canonicalPath={`/services/diagnostics/${slug}`}
      consultationLabel="Book This Test"
    />
  );
}
