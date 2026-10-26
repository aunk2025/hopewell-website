import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { diabetologyService } from "@/lib/diabetology-content";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

export const metadata = buildProcedureMetadata(diabetologyService, "/services/diabetology");

export default function DiabetologyPage() {
  return (
    <ProcedurePageTemplate
      procedure={diabetologyService}
      categoryHref="/services"
      canonicalPath="/services/diabetology"
      consultationLabel="Book Diabetology Consultation"
    />
  );
}
