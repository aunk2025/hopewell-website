import type { Metadata } from "next";
import DoctorsPageContent from "@/components/doctors/DoctorsPageContent";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "Find the Right Specialist Doctor in Ranchi | Hopewell";
const DESCRIPTION =
  "Meet Hopewell Hospital's doctors across surgery, IVF & gynaecology, orthopaedics, paediatrics, medicine, ENT, urology and other specialties in Ranchi.";
const URL = `${SITE_URL}/doctors`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "en-IN": "/doctors", "hi-IN": "/hi/doctors" },
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

export default function DoctorsPage() {
  return <DoctorsPageContent altHref="/hi/doctors" />;
}
