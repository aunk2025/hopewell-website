import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { buildStaticMetadata, buildSimpleJsonLd } from "@/lib/procedure-seo";
import type { Metadata } from "next";

const keyServices = [
  {
    category: "डायग्नोस्टिक कार्डियोलॉजी",
    items: ["ईसीजी एवं इकोकार्डियोग्राफी", "ट्रेडमिल (स्ट्रेस) टेस्टिंग", "होल्टर एवं एम्बुलेटरी बीपी मॉनिटरिंग", "कार्डियक सीटी एवं कैल्शियम स्कोरिंग"],
  },
  {
    category: "इंटरवेंशनल कार्डियोलॉजी",
    items: ["कोरोनरी एंजियोग्राफी", "एंजियोप्लास्टी एवं स्टेंटिंग", "पेसमेकर इंप्लांटेशन", "बैलून वाल्वुलोप्लास्टी"],
  },
  {
    category: "कार्डियक सर्जरी",
    items: ["कोरोनरी आर्टरी बाईपास ग्राफ्टिंग (CABG)", "वाल्व रिपेयर एवं रिप्लेसमेंट", "कॉन्जेनिटल हार्ट सर्जरी", "मिनिमली इनवेसिव कार्डियक सर्जरी"],
  },
  {
    category: "प्रिवेंटिव एवं क्रिटिकल कार्डियक केयर",
    items: ["कार्डियक रिस्क असेसमेंट", "हार्ट फेल्योर मैनेजमेंट", "कार्डियक रिहैबिलिटेशन", "24×7 कार्डियक इमरजेंसी एवं सीसीयू केयर"],
  },
];

const TITLE = "कार्डियक साइंसेज़";
const DESCRIPTION =
  "हॉपवेल हॉस्पिटल में एकीकृत कार्डियोलॉजी, कार्डियक डायग्नोस्टिक्स, इंटरवेंशनल प्रक्रियाएं एवं कार्डियक सर्जरी, 24x7 क्रिटिकल कार्डियक सहायता के साथ।";
const PATH = "/hi/services/cardiac";

const baseMetadata = buildStaticMetadata(TITLE, DESCRIPTION, PATH);
export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    languages: { "en-IN": "/services/cardiac", "hi-IN": "/hi/services/cardiac" },
  },
};

export default function CardiacPageHindi() {
  const jsonLd = buildSimpleJsonLd(TITLE, DESCRIPTION, PATH);

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale="hi" altHref="/services/cardiac" />

      {/* Hero banner */}
      <section
        className="relative flex h-80 flex-col items-center justify-center bg-cover bg-center px-5 text-center sm:h-[30rem]"
        style={{ backgroundImage: "url(/cardiac.jfif)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2119]/70 via-[#2a2119]/50 to-[#2a2119]/70" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          कार्डियक साइंसेज़
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-3 text-center text-3xl font-black tracking-[-.02em] text-ink">हमारी प्रमुख सेवाएं</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-bold text-slate-500">
          अनुभवी कार्डियोलॉजिस्ट्स एवं कार्डियक सर्जन्स द्वारा चौबीसों घंटे प्रदान की जाने वाली एकीकृत कार्डियोलॉजी, कार्डियक डायग्नोस्टिक्स एवं क्रिटिकल कार्डियक सहायता।
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
          href="/hi/appointment?specialty=Cardiology"
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
