import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";
import { EMERGENCY_PHONE, HOSPITAL_ADDRESS_PARTS, SITE_URL } from "@/lib/contact-config";

export const metadata: Metadata = {
  title: "Contact Hopewell Hospital Ranchi | Appointments, Emergency, TPA & Enquiries",
  description:
    "Contact Hopewell Hospital Ranchi for appointments, emergency assistance, ambulance, directions, insurance and TPA support, corporate enquiries, careers, feedback and other hospital enquiries.",
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
      <Navbar />
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
