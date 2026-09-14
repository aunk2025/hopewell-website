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
  title: "Looking for Advanced Surgical Care in Ranchi? | Hopewell",
  description:
    "From laparoscopic and GI surgery to IVF, orthopaedics, urology, ENT, spine and diagnostics, discover specialist care under one roof at Hopewell Hospital Ranchi.",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf5ef] text-ink">
      <Navbar />
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
