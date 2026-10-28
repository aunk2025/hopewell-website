import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getUrologyProcedureHi, urologyProceduresHi } from "@/lib/urology-procedures-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return urologyProceduresHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getUrologyProcedureHi(slug);
  if (!procedure) return { title: "यूरोलॉजी | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/urology/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/urology/${slug}`, "hi-IN": `/hi/services/urology/${slug}` },
    },
  };
}

export default async function UrologyProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getUrologyProcedureHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/urology/${slug}`}
      consultationLabel="यूरोलॉजी कंसल्टेशन बुक करें"
      locale="hi"
      altHref={`/services/urology/${slug}`}
    />
  );
}
