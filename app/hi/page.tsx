import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustRail from "@/components/TrustRail";
import Centres from "@/components/Centres";
import Journey from "@/components/Journey";
import Doctors from "@/components/Doctors";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "रांची में मल्टीस्पेशलिटी हॉस्पिटल | हॉपवेल हॉस्पिटल",
  description:
    "हॉपवेल हॉस्पिटल रांची का एक 70 बेड वाला मल्टीस्पेशलिटी हॉस्पिटल है, जो लेप्रोस्कोपिक सर्जरी, जीआई सर्जरी, स्त्री रोग, ऑर्थोपेडिक्स, गंभीर देखभाल एवं डायग्नोस्टिक्स की सुविधा देता है।",
  alternates: {
    languages: { "en-IN": "/", "hi-IN": "/hi" },
  },
};

export default function HomeHindi() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf5ef] text-ink">
      <Navbar locale="hi" altHref="/" />
      <Hero locale="hi" />
      <TrustRail locale="hi" />
      <Centres locale="hi" />
      <Journey locale="hi" />
      <Doctors locale="hi" />
      <Reviews locale="hi" />
      <Footer locale="hi" />
    </main>
  );
}
