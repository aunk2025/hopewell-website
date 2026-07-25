import type { Metadata } from "next";
import "./globals.css";
import ContactFAB from "@/components/ContactFAB";

export const metadata: Metadata = {
  title: "Hopewell Hospital | Cardiac & Surgical Excellence, Ranchi",
  description:
    "A futuristic digital front door for Hopewell Hospital, Ranchi — advanced cardiac, surgical, emergency and critical care.",
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
