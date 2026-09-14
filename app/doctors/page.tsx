import type { Metadata } from "next";
import DoctorsPageContent from "@/components/doctors/DoctorsPageContent";

export const metadata: Metadata = {
  title: "Find the Right Specialist Doctor in Ranchi | Hopewell",
  description:
    "Meet Hopewell Hospital's doctors across surgery, IVF & gynaecology, orthopaedics, paediatrics, medicine, ENT, urology and other specialties in Ranchi.",
};

export default function DoctorsPage() {
  return <DoctorsPageContent />;
}
