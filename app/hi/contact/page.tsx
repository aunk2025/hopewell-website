import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";
import { EMERGENCY_PHONE, HOSPITAL_ADDRESS_PARTS, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "अपॉइंटमेंट या हॉस्पिटल सहायता चाहिए? | हॉपवेल रांची";
const DESCRIPTION =
  "अपॉइंटमेंट बुक करें, हॉपवेल हॉस्पिटल खोजें, दिशा-निर्देश प्राप्त करें या आपातकाल, एम्बुलेंस, टीपीए, बीमा, कॉर्पोरेट, करियर एवं अन्य पूछताछ के लिए हमसे संपर्क करें।";
const URL = `${SITE_URL}/hi/contact`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "en-IN": "/contact", "hi-IN": "/hi/contact" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Hopewell Hospital",
    type: "website",
    locale: "hi_IN",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Hopewell Hospital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ContactPageHindi() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Hopewell Hospital",
    url: SITE_URL,
    telephone: EMERGENCY_PHONE,
    address: {
      "@type": "PostalAddress",
      ...HOSPITAL_ADDRESS_PARTS,
    },
    mainEntityOfPage: `${SITE_URL}/hi/contact`,
  };

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar locale="hi" altHref="/contact" />
      <ContactPageContent locale="hi" />
      <Footer locale="hi" />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
