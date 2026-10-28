import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustRail from "@/components/TrustRail";
import Centres from "@/components/Centres";
import Journey from "@/components/Journey";
import Doctors from "@/components/Doctors";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "Multispeciality Hospital in Ranchi | Hopewell Hospital";
const DESCRIPTION =
  "Hopewell Hospital is a 70 bed multispeciality hospital in Ranchi offering laparoscopic surgery, GI surgery, gynaecology, orthopaedics, critical care and diagnostics.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
    languages: { "en-IN": "/", "hi-IN": "/hi" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf5ef] text-ink">
      <Navbar altHref="/hi" />
      <Hero />
      <TrustRail />
      <Centres />
      <Journey />
      <Doctors />
      <Reviews />
      <Footer />
    </main>
  );
}
