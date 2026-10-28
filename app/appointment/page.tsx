import type { Metadata } from "next";
import AppointmentPageContent from "@/components/appointment/AppointmentPageContent";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "Book an Appointment | Hopewell Hospital Ranchi";
const DESCRIPTION =
  "Book an appointment with Hopewell Hospital's specialist doctors in Ranchi. Choose your doctor, preferred date and time, and get instant confirmation.";
const URL = `${SITE_URL}/appointment`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "en-IN": "/appointment", "hi-IN": "/hi/appointment" },
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

export default function AppointmentPage() {
  return <AppointmentPageContent />;
}
