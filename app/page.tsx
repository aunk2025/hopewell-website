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
  title: "Multispeciality Hospital in Ranchi | Hopewell Hospital",
  description:
    "Hopewell Hospital is a 70 bed multispeciality hospital in Ranchi offering laparoscopic surgery, GI surgery, gynaecology, orthopaedics, critical care and diagnostics.",
  alternates: {
    languages: { "en-IN": "/", "hi-IN": "/hi" },
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
