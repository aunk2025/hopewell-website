import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getEntTreatmentHi, entTreatmentsHi } from "@/lib/ent-treatments-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return entTreatmentsHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getEntTreatmentHi(slug);
  if (!procedure) return { title: "ईएनटी | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/ent/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/ent/${slug}`, "hi-IN": `/hi/services/ent/${slug}` },
    },
  };
}

export default async function EntProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getEntTreatmentHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/ent/${slug}`}
      consultationLabel="ईएनटी कंसल्टेशन बुक करें"
      locale="hi"
      altHref={`/services/ent/${slug}`}
    />
  );
}
