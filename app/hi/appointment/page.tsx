import type { Metadata } from "next";
import AppointmentPageContent from "@/components/appointment/AppointmentPageContent";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "अपॉइंटमेंट बुक करें | हॉपवेल हॉस्पिटल रांची";
const DESCRIPTION =
  "रांची में हॉपवेल हॉस्पिटल के विशेषज्ञ डॉक्टरों के साथ अपॉइंटमेंट बुक करें। अपना डॉक्टर, पसंदीदा तारीख एवं समय चुनें और तुरंत पुष्टि प्राप्त करें।";
const URL = `${SITE_URL}/hi/appointment`;

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

export default function AppointmentPageHindi() {
  return <AppointmentPageContent locale="hi" />;
}
