import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { ctScanService } from "@/lib/ct-scan-content";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export const metadata = buildProcedureMetadata(ctScanService, "/services/ct-scan");

export default function CtScanPage() {
  return (
    <ProcedurePageTemplate
      procedure={ctScanService}
      categoryHref="/services"
      canonicalPath="/services/ct-scan"
      consultationLabel="Book This Test"
    />
  );
}
