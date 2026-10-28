import type { Metadata } from "next";
import DoctorsPageContent from "@/components/doctors/DoctorsPageContent";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "रांची में सही विशेषज्ञ डॉक्टर खोजें | हॉपवेल";
const DESCRIPTION =
  "सर्जरी, आईवीएफ एवं स्त्री रोग, ऑर्थोपेडिक्स, पीडियाट्रिक्स, मेडिसिन, ईएनटी, यूरोलॉजी एवं अन्य विशेषताओं में हॉपवेल हॉस्पिटल के डॉक्टरों से मिलें।";
const URL = `${SITE_URL}/hi/doctors`;

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

export default function DoctorsPageHindi() {
  return <DoctorsPageContent locale="hi" altHref="/doctors" />;
}
