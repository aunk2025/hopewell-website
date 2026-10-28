import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getGeneralMedicineProcedureHi, generalMedicineProceduresHi } from "@/lib/general-medicine-procedures-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return generalMedicineProceduresHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getGeneralMedicineProcedureHi(slug);
  if (!procedure) return { title: "जनरल मेडिसिन | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/general-medicine/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/general-medicine/${slug}`, "hi-IN": `/hi/services/general-medicine/${slug}` },
    },
  };
}

export default async function GeneralMedicineProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getGeneralMedicineProcedureHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/general-medicine/${slug}`}
      consultationLabel="जनरल मेडिसिन कंसल्टेशन बुक करें"
      locale="hi"
      altHref={`/services/general-medicine/${slug}`}
    />
  );
}
