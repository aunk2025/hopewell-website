import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getIvfProcedureHi, ivfProceduresHi } from "@/lib/ivf-procedures-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return ivfProceduresHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getIvfProcedureHi(slug);
  if (!procedure) return { title: "आईवीएफ, स्त्री रोग एवं महिला स्वास्थ्य | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/ivf/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/ivf/${slug}`, "hi-IN": `/hi/services/ivf/${slug}` },
    },
  };
}

export default async function IvfProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getIvfProcedureHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/ivf/${slug}`}
      consultationLabel="फर्टिलिटी कंसल्टेशन बुक करें"
      locale="hi"
      altHref={`/services/ivf/${slug}`}
    />
  );
}
