import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { ctScanServiceHi } from "@/lib/ct-scan-content-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

const base = buildProcedureMetadata(ctScanServiceHi, "/hi/services/ct-scan");
export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: { "en-IN": "/services/ct-scan", "hi-IN": "/hi/services/ct-scan" },
  },
};

export default function CtScanPageHi() {
  return (
    <ProcedurePageTemplate
      procedure={ctScanServiceHi}
      categoryHref="/hi/services"
      canonicalPath="/hi/services/ct-scan"
      consultationLabel="यह टेस्ट बुक करें"
      locale="hi"
      altHref="/services/ct-scan"
    />
  );
}
