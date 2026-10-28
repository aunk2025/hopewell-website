import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getSpineProcedureHi, spineProceduresHi } from "@/lib/spine-procedures-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return spineProceduresHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getSpineProcedureHi(slug);
  if (!procedure) return { title: "स्पाइन | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/spine/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/spine/${slug}`, "hi-IN": `/hi/services/spine/${slug}` },
    },
  };
}

export default async function SpineProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getSpineProcedureHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/spine/${slug}`}
      consultationLabel="स्पाइन कंसल्टेशन बुक करें"
      locale="hi"
      altHref={`/services/spine/${slug}`}
    />
  );
}
