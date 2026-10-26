import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";
import { EMERGENCY_PHONE, HOSPITAL_ADDRESS_PARTS, SITE_URL } from "@/lib/contact-config";

export const metadata: Metadata = {
  title: "अपॉइंटमेंट या हॉस्पिटल सहायता चाहिए? | हॉपवेल रांची",
  description:
    "अपॉइंटमेंट बुक करें, हॉपवेल हॉस्पिटल खोजें, दिशा-निर्देश प्राप्त करें या आपातकाल, एम्बुलेंस, टीपीए, बीमा, कॉर्पोरेट, करियर एवं अन्य पूछताछ के लिए हमसे संपर्क करें।",
  alternates: {
    languages: { "en-IN": "/contact", "hi-IN": "/hi/contact" },
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
