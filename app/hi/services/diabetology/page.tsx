import ProcedurePageTemplate from "@/components/services/ProcedurePageTemplate";
import { diabetologyServiceHi } from "@/lib/diabetology-content-hi";
import { buildProcedureMetadata } from "@/lib/procedure-seo";

const base = buildProcedureMetadata(diabetologyServiceHi, "/hi/services/diabetology");
export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: { "en-IN": "/services/diabetology", "hi-IN": "/hi/services/diabetology" },
  },
};

export default function DiabetologyPageHi() {
  return (
    <ProcedurePageTemplate
      procedure={diabetologyServiceHi}
      categoryHref="/hi/services"
      canonicalPath="/hi/services/diabetology"
      consultationLabel="डायबिटोलॉजी कंसल्टेशन बुक करें"
      locale="hi"
      altHref="/services/diabetology"
    />
  );
}
