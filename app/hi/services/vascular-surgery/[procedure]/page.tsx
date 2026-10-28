import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getVascularProcedureHi, vascularProceduresHi } from "@/lib/vascular-procedures-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return vascularProceduresHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getVascularProcedureHi(slug);
  if (!procedure) return { title: "वैस्कुलर सर्जरी | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/vascular-surgery/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/vascular-surgery/${slug}`, "hi-IN": `/hi/services/vascular-surgery/${slug}` },
    },
  };
}

export default async function VascularProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getVascularProcedureHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/vascular-surgery/${slug}`}
      consultationLabel="वैस्कुलर सर्जरी कंसल्टेशन बुक करें"
      locale="hi"
      altHref={`/services/vascular-surgery/${slug}`}
    />
  );
}
