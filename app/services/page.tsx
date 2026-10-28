import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/services/ServicesGrid";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "Services | Hopewell Hospital Ranchi";
const DESCRIPTION =
  "A modern, premium hospital experience with Centres of Excellence, advanced diagnostics and patient-first digital care at Hopewell Hospital, Ranchi.";
const URL = `${SITE_URL}/services`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "en-IN": "/services", "hi-IN": "/hi/services" },
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar altHref="/hi/services" />

      <ServicesGrid />

      <Footer />
    </main>
  );
}
