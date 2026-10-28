import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { buildStaticMetadata, buildSimpleJsonLd } from "@/lib/procedure-seo";
import type { Metadata } from "next";

const keyServices = [
  {
    category: "24×7 इमरजेंसी केयर",
    items: ["चौबीसों घंटे इमरजेंसी डिपार्टमेंट", "तेज़ ट्राइएज एवं मूल्यांकन", "ऑन-साइट इमरजेंसी फिजिशियन्स", "एम्बुलेंस एवं ट्रांसफर समन्वय"],
  },
  {
    category: "ट्रॉमा एवं एक्सीडेंट केयर",
    items: ["रोड ट्रैफिक एक्सीडेंट मैनेजमेंट", "फ्रैक्चर एवं ऑर्थोपेडिक ट्रॉमा स्टेबिलाइज़ेशन", "हेड इंजरी असेसमेंट", "बर्न्स एवं वूंड केयर"],
  },
  {
    category: "क्रिटिकल इमरजेंसी रिस्पॉन्स",
    items: ["कार्डियक इमरजेंसी (हार्ट अटैक, एरिथमिया)", "स्ट्रोक एवं न्यूरोलॉजिकल इमरजेंसी", "रेस्पिरेटरी डिस्ट्रेस एवं एयरवे इमरजेंसी", "शॉक एवं हेमरेज मैनेजमेंट"],
  },
  {
    category: "विशेषीकृत इमरजेंसी सेवाएं",
    items: ["पीडियाट्रिक इमरजेंसी केयर", "ऑब्स्टेट्रिक इमरजेंसी", "पॉइज़निंग एवं ओवरडोज़ मैनेजमेंट", "आईसीयू एवं विशेषज्ञ टीमों को सहज हैंडओवर"],
  },
];

const TITLE = "इमरजेंसी मेडिसिन";
const DESCRIPTION =
  "हॉपवेल हॉस्पिटल में 24x7 आपातकालीन देखभाल: तेज़ ट्रॉमा रिस्पॉन्स, क्रिटिकल इमरजेंसी मैनेजमेंट एवं आईसीयू व विशेषज्ञ देखभाल तक सहज एस्केलेशन।";
const PATH = "/hi/services/emergencymedicine";

const baseMetadata = buildStaticMetadata(TITLE, DESCRIPTION, PATH);
export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    languages: { "en-IN": "/services/emergencymedicine", "hi-IN": "/hi/services/emergencymedicine" },
  },
};

export default function EmergencyMedicinePageHindi() {
  const jsonLd = buildSimpleJsonLd(TITLE, DESCRIPTION, PATH);

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale="hi" altHref="/services/emergencymedicine" />

      {/* Hero banner */}
      <section
        className="relative flex h-80 flex-col items-center justify-center bg-cover px-5 text-center sm:h-[30rem]"
        style={{ backgroundImage: "url(/ememed%20-%20Copy.jfif)", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2119]/88 via-[#2a2119]/75 to-[#2a2119]/88" />
        <h1 className="relative text-4xl font-black tracking-[-.03em] text-white sm:text-6xl">
          इमरजेंसी मेडिसिन
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-3 text-center text-3xl font-black tracking-[-.02em] text-ink">हमारी प्रमुख सेवाएं</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-bold text-slate-500">
          जब हर मिनट महत्वपूर्ण हो, तब अनुभवी इमरजेंसी फिजिशियन्स द्वारा तेज़ मूल्यांकन एवं समन्वित प्रतिक्रिया, तथा क्रिटिकल केयर तक सहज एस्केलेशन।
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
          href="/hi/appointment?specialty=Emergency%20Medicine"
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
