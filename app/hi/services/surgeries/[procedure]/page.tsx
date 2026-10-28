import { notFound } from "next/navigation";
import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { getSurgeryProcedureHi, surgeryProceduresHi } from "@/lib/surgery-procedures-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export function generateStaticParams() {
  return surgeryProceduresHi.map((p) => ({ procedure: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getSurgeryProcedureHi(slug);
  if (!procedure) return { title: "जनरल, जीआई एवं लेप्रोस्कोपिक सर्जरी | हॉपवेल हॉस्पिटल रांची" };
  const base = buildProcedureMetadata(procedure, `/hi/services/surgeries/${slug}`);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { "en-IN": `/services/surgeries/${slug}`, "hi-IN": `/hi/services/surgeries/${slug}` },
    },
  };
}

export default async function SurgeryProcedurePageHi({ params }: { params: Promise<{ procedure: string }> }) {
  const { procedure: slug } = await params;
  const procedure = getSurgeryProcedureHi(slug);
  if (!procedure) notFound();

  return (
    <ProcedurePageTemplate
      procedure={procedure}
      categoryHref="/hi/services"
      canonicalPath={`/hi/services/surgeries/${slug}`}
      consultationLabel="सर्जिकल कंसल्टेशन बुक करें"
      locale="hi"
      altHref={`/services/surgeries/${slug}`}
    />
  );
}
