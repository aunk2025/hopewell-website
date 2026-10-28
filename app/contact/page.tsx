import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";
import { EMERGENCY_PHONE, HOSPITAL_ADDRESS_PARTS, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "Need an Appointment or Hospital Help? | Hopewell Ranchi";
const DESCRIPTION =
  "Book an appointment, find Hopewell Hospital, get directions or contact us for emergency, ambulance, TPA, insurance, corporate, career and other enquiries.";
const URL = `${SITE_URL}/contact`;

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
    locale: "en_IN",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Hopewell Hospital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ContactPage() {
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
    mainEntityOfPage: `${SITE_URL}/contact`,
  };

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar altHref="/hi/contact" />
      <ContactPageContent />
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
