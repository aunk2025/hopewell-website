import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getDiagnosticsProcedureHi, diagnosticsProceduresHi } from "@/lib/diagnostics-procedures-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return diagnosticsProceduresHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getDiagnosticsProcedureHi(slug);
  if (!procedure) return { title: "डायग्नोस्टिक्स | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/diagnostics/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/diagnostics/${slug}`, "hi-IN": `/hi/services/diagnostics/${slug}` },
    },
  };
}

export default async function DiagnosticsProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getDiagnosticsProcedureHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/diagnostics/${slug}`}
      consultationLabel="यह टेस्ट बुक करें"
      locale="hi"
      altHref={`/services/diagnostics/${slug}`}
    />
  );
}
