import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/services/ServicesGrid";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "सेवाएं | हॉपवेल हॉस्पिटल रांची";
const DESCRIPTION =
  "हॉपवेल हॉस्पिटल, रांची में उत्कृष्टता केंद्रों, उन्नत डायग्नोस्टिक्स एवं रोगी-केंद्रित डिजिटल केयर के साथ एक आधुनिक, प्रीमियम हॉस्पिटल अनुभव।";
const URL = `${SITE_URL}/hi/services`;

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

export default function ServicesPageHindi() {
  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar locale="hi" altHref="/services" />

      <ServicesGrid locale="hi" />

      <Footer locale="hi" />
    </main>
  );
}
