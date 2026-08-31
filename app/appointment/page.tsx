import type { Metadata } from "next";
import AppointmentPageContent from "@/components/appointment/AppointmentPageContent";

export const metadata: Metadata = {
  title: "Book an Appointment | Hopewell Hospital Ranchi",
  description:
    "Book an appointment with Hopewell Hospital's specialist doctors in Ranchi. Choose your doctor, preferred date and time, and get instant confirmation.",
};

export default function AppointmentPage() {
  return <AppointmentPageContent />;
}
