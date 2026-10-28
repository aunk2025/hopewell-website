import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { ctScanService } from "@/lib/ct-scan-content";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

const base = buildProcedureMetadata(ctScanService, "/services/ct-scan");
export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: { "en-IN": "/services/ct-scan", "hi-IN": "/hi/services/ct-scan" },
  },
};

export default function CtScanPage() {
  return (
    <ProcedurePageTemplate
      procedure={ctScanService}
      categoryHref="/services"
      canonicalPath="/services/ct-scan"
      consultationLabel="Book This Test"
      altHref="/hi/services/ct-scan"
    />
  );
}
