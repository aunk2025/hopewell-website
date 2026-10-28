import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { diabetologyService } from "@/lib/diabetology-content";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

const base = buildProcedureMetadata(diabetologyService, "/services/diabetology");
export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: { "en-IN": "/services/diabetology", "hi-IN": "/hi/services/diabetology" },
  },
};

export default function DiabetologyPage() {
  return (
    <ProcedurePageTemplate
      procedure={diabetologyService}
      categoryHref="/services"
      canonicalPath="/services/diabetology"
      consultationLabel="Book Diabetology Consultation"
      altHref="/hi/services/diabetology"
    />
  );
}
