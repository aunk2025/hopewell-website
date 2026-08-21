import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata = {
  title: "Services | Hopewell Hospital Ranchi",
  description:
    "A modern, premium hospital experience with Centres of Excellence, advanced diagnostics and patient-first digital care at Hopewell Hospital, Ranchi.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar />

      <ServicesGrid />

      <Footer />
    </main>
  );
}
