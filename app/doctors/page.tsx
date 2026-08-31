import type { Metadata } from "next";
import DoctorsPageContent from "@/components/doctors/DoctorsPageContent";

export const metadata: Metadata = {
  title: "Our Doctors | Hopewell Hospital Ranchi",
  description:
    "Meet Hopewell Hospital's team of specialist doctors in Ranchi, across cardiology, surgery, orthopaedics, urology, paediatrics, gastroenterology, radiology and more.",
};

export default function DoctorsPage() {
  return <DoctorsPageContent />;
}
