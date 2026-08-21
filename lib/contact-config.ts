// Central configuration for the Contact page (and anything else that needs
// the hospital's address/phone). Every value here already exists elsewhere
// in the project (Navbar, Footer, lib/email.ts) — nothing is invented.
//
// TODO items mark values the hospital hasn't provided yet. Fill them in
// here once available; nothing else needs to change.

export const SITE_URL = "https://www.hopewellhospital.in";

// The 24×7 number already used site-wide (Navbar top bar, Footer).
export const EMERGENCY_PHONE = "+917281990530";

// TODO: replace with a dedicated ambulance line once the hospital assigns
// one — until then this intentionally reuses the main emergency number
// rather than inventing a separate one.
export const AMBULANCE_PHONE = EMERGENCY_PHONE;

export const CONTACT_EMAIL = "hopewellranchi@gmail.com";

// Matches components/Footer.tsx exactly.
export const HOSPITAL_ADDRESS =
  "New Hopewell Hospital, Hazari Baug Road, Tharpakna, Ranchi, Jharkhand 834001";

export const HOSPITAL_ADDRESS_PARTS = {
  streetAddress: "Hazari Baug Road, Tharpakna",
  addressLocality: "Ranchi",
  addressRegion: "Jharkhand",
  postalCode: "834001",
  addressCountry: "IN",
};

// TODO: once the hospital shares its verified Google Business Place ID or
// confirmed coordinates, swap this address-based query for that embed —
// don't hand-enter lat/lng without confirming them against the real listing.
export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(HOSPITAL_ADDRESS)}&output=embed`;
export const MAPS_VIEW_URL = `https://maps.google.com/?q=${encodeURIComponent(HOSPITAL_ADDRESS)}`;
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(HOSPITAL_ADDRESS)}`;

// Shared between the API route and the contact form UI. Kept out of
// app/api/contact/route.ts because Next.js route files may only export
// HTTP method handlers (and a handful of special names) — any other
// named export fails the route's type check.
export const ENQUIRY_TYPES = [
  "Appointment",
  "Emergency",
  "Ambulance",
  "Feedback",
  "Corporate Enquiry",
  "TPA / Insurance Enquiry",
  "Career Enquiry",
  "Media Enquiry",
  "General Enquiry",
] as const;
