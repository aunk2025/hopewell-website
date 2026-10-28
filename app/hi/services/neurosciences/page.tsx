import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { buildStaticMetadata, buildSimpleJsonLd } from "@/lib/procedure-seo";
import type { Metadata } from "next";

const keyServices = [
  {
    category: "स्ट्रोक केयर",
    items: ["24×7 स्ट्रोक इमरजेंसी रिस्पॉन्स", "क्लॉट-डिज़ॉल्विंग (थ्रोम्बोलिसिस) थेरेपी", "पोस्ट-स्ट्रोक रिहैबिलिटेशन", "स्ट्रोक रिस्क असेसमेंट"],
  },
  {
    category: "न्यूरोलॉजी",
    items: ["एपिलेप्सी एवं सीज़र मैनेजमेंट", "हेडेक एवं माइग्रेन क्लिनिक", "पार्किंसंस एवं मूवमेंट डिसऑर्डर", "नर्व एवं मसल डिसऑर्डर"],
  },
  {
    category: "न्यूरोसर्जरी",
    items: ["ब्रेन ट्यूमर सर्जरी", "स्पाइन सर्जरी", "हेड इंजरी एवं ट्रॉमा सर्जरी", "मिनिमली इनवेसिव न्यूरोसर्जरी"],
  },
  {
    category: "डायग्नोस्टिक्स एवं सपोर्ट",
    items: ["सीटी एवं एमआरआई ब्रेन इमेजिंग", "ईईजी एवं नर्व कंडक्शन स्टडीज़", "न्यूरो-क्रिटिकल केयर (आईसीयू)", "लंबे समय तक चलने वाला न्यूरो-रिहैबिलिटेशन"],
  },
];

const TITLE = "न्यूरोसाइंसेज़";
const DESCRIPTION =
  "हॉपवेल हॉस्पिटल में व्यापक न्यूरोसाइंसेज़ केयर: स्ट्रोक केयर, न्यूरोलॉजी, न्यूरोसर्जरी एवं एडवांस्ड न्यूरो-डायग्नोस्टिक्स।";
const PATH = "/hi/services/neurosciences";

const baseMetadata = buildStaticMetadata(TITLE, DESCRIPTION, PATH);
export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    languages: { "en-IN": "/services/neurosciences", "hi-IN": "/hi/services/neurosciences" },
  },
};

export default function NeurosciencesPageHindi() {
  const jsonLd = buildSimpleJsonLd(TITLE, DESCRIPTION, PATH);

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale="hi" altHref="/services/neurosciences" />

      {/* Hero banner */}
      <section
        className="relative flex h-80 flex-col items-center justify-center bg-cover bg-center px-5 text-center sm:h-[30rem]"
        style={{ backgroundImage: "url(/neuro.png)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2119]/80 via-[#2a2119]/60 to-[#2a2119]/80" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          न्यूरोसाइंसेज़
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-3 text-center text-3xl font-black tracking-[-.02em] text-ink">हमारी प्रमुख सेवाएं</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-bold text-slate-500">
          इमरजेंसी स्ट्रोक रिस्पॉन्स से लेकर न्यूरोसर्जरी एवं लंबे समय तक चलने वाले पुनर्वसन तक, व्यापक ब्रेन, स्पाइन एवं नर्व केयर।
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {keyServices.map((group) => (
            <div key={group.category} className="rounded-3xl border border-teal-700 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-lg font-black text-ink">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <ChevronRight size={14} className="shrink-0 text-violet-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a
          href="/hi/appointment?specialty=Neurology"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 flex items-center justify-center gap-2 rounded-2xl bg-ink py-4 text-sm font-bold text-white transition hover:bg-teal-900 sm:mx-auto sm:w-80"
        >
          अपॉइंटमेंट बुक करें
        </a>
      </section>

      <Footer locale="hi" />
    </main>
  );
}
