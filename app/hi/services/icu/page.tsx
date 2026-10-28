import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { buildStaticMetadata, buildSimpleJsonLd } from "@/lib/procedure-seo";
import type { Metadata } from "next";

const keyServices = [
  {
    category: "क्रिटिकल केयर मॉनिटरिंग",
    items: ["24×7 निरंतर वाइटल साइन मॉनिटरिंग", "मल्टी-पैरामीटर बेडसाइड मॉनिटर्स", "चौबीसों घंटे इंटेंसिविस्ट एवं नर्सिंग कवरेज", "बिगड़ती स्थिति वाले रोगियों के लिए तेज़ प्रतिक्रिया"],
  },
  {
    category: "रेस्पिरेटरी एवं वेंटिलेटर सपोर्ट",
    items: ["इनवेसिव एवं नॉन-इनवेसिव वेंटिलेशन", "एडवांस्ड एयरवे मैनेजमेंट", "वीनिंग एवं एक्सट्यूबेशन प्रोटोकॉल", "एक्यूट रेस्पिरेटरी फेल्योर का मैनेजमेंट"],
  },
  {
    category: "ऑर्गन सपोर्ट एवं लाइफ सपोर्ट",
    items: ["हीमोडायनामिक एवं कार्डियक सपोर्ट", "रीनल रिप्लेसमेंट थेरेपी / डायलिसिस सपोर्ट", "न्यूट्रिशनल एवं मेटाबॉलिक सपोर्ट", "सेप्सिस एवं मल्टी-ऑर्गन डिसफंक्शन मैनेजमेंट"],
  },
  {
    category: "विशेषीकृत क्रिटिकल केयर",
    items: ["पोस्ट-ऑपरेटिव क्रिटिकल केयर", "न्यूरो-क्रिटिकल केयर", "कार्डियक क्रिटिकल केयर", "ट्रॉमा एवं इमरजेंसी क्रिटिकल केयर"],
  },
];

const TITLE = "आईसीयू";
const DESCRIPTION =
  "हॉपवेल हॉस्पिटल में व्यापक क्रिटिकल केयर: 24x7 आईसीयू मॉनिटरिंग, वेंटिलेटर एवं ऑर्गन सपोर्ट, तथा गंभीर रूप से बीमार रोगियों के लिए विशेषीकृत इंटेंसिव केयर।";
const PATH = "/hi/services/icu";

const baseMetadata = buildStaticMetadata(TITLE, DESCRIPTION, PATH);
export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    languages: { "en-IN": "/services/icu", "hi-IN": "/hi/services/icu" },
  },
};

export default function IcuPageHindi() {
  const jsonLd = buildSimpleJsonLd(TITLE, DESCRIPTION, PATH);

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale="hi" altHref="/services/icu" />

      {/* Hero banner */}
      <section
        className="relative flex h-80 flex-col items-center justify-center bg-cover px-5 text-center sm:h-[30rem]"
        style={{ backgroundImage: "url(/icu1.jfif)", backgroundPosition: "center 45%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2119]/88 via-[#2a2119]/72 to-[#2a2119]/88" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-black sm:text-6xl">
          आईसीयू / क्रिटिकल केयर
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-3 text-center text-3xl font-black tracking-[-.02em] text-ink">हमारी प्रमुख सेवाएं</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-bold text-slate-500">
          हमारे सबसे गंभीर रूप से बीमार रोगियों के लिए निरंतर मॉनिटरिंग, तेज़ एस्केलेशन एवं विशेषज्ञ-नेतृत्व वाली इंटेंसिव केयर, दिन के 24 घंटे।
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
          href="/hi/appointment?specialty=Critical%20Care"
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
