import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getOrthoProcedureHi, orthoProceduresHi } from "@/lib/ortho-procedures-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return orthoProceduresHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getOrthoProcedureHi(slug);
  if (!procedure) return { title: "ऑर्थोपेडिक्स | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/orthopaedics/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/orthopaedics/${slug}`, "hi-IN": `/hi/services/orthopaedics/${slug}` },
    },
  };
}

export default async function OrthopaedicsProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getOrthoProcedureHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/orthopaedics/${slug}`}
      consultationLabel="ऑर्थोपेडिक कंसल्टेशन बुक करें"
      locale="hi"
      altHref={`/services/orthopaedics/${slug}`}
    />
  );
}
