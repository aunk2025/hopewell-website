import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getPaedsProcedureHi, paedsProceduresHi } from "@/lib/paeds-procedures-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return paedsProceduresHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getPaedsProcedureHi(slug);
  if (!procedure) return { title: "पीडियाट्रिक्स एवं नियोनेटोलॉजी | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/motherchild/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/motherchild/${slug}`, "hi-IN": `/hi/services/motherchild/${slug}` },
    },
  };
}

export default async function PaedsProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getPaedsProcedureHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/motherchild/${slug}`}
      consultationLabel="पीडियाट्रिक कंसल्टेशन बुक करें"
      locale="hi"
      altHref={`/services/motherchild/${slug}`}
    />
  );
}
