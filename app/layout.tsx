import type { Metadata } from "next";
import "./globals.css";
import ContactFAB from "@/components/ContactFAB";
import { SITE_URL } from "@/lib/contact-config";

const SITE_NAME = "Hopewell Hospital";
const DEFAULT_TITLE = "Hopewell Hospital | Cardiac & Surgical Excellence, Ranchi";
const DEFAULT_DESCRIPTION =
  "A futuristic digital front door for Hopewell Hospital, Ranchi — advanced cardiac, surgical, emergency and critical care.";
// Used as the fallback preview image for any page that doesn't set its own
// Open Graph image — the hospital's own logo, since no dedicated banner
// photo exists yet in the project.
const DEFAULT_OG_IMAGE = "/hopewell%20logo%202.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ContactFAB />
      </body>
    </html>
  );
}
