import type { Metadata } from "next";
import AppointmentPageContent from "@/components/appointment/AppointmentPageContent";

export const metadata: Metadata = {
  title: "अपॉइंटमेंट बुक करें | हॉपवेल हॉस्पिटल रांची",
  description:
    "रांची में हॉपवेल हॉस्पिटल के विशेषज्ञ डॉक्टरों के साथ अपॉइंटमेंट बुक करें। अपना डॉक्टर, पसंदीदा तारीख एवं समय चुनें और तुरंत पुष्टि प्राप्त करें।",
  alternates: {
    languages: { "en-IN": "/appointment", "hi-IN": "/hi/appointment" },
  },
};

export default function AppointmentPageHindi() {
  return <AppointmentPageContent locale="hi" />;
}
