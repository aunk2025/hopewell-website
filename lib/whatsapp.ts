// WhatsApp notification to the hospital's own number via CallMeBot — a
// free, instant-setup WhatsApp sender. It only works for a number that has
// personally opted in (see setup steps), so this is for notifying the
// hospital team, not for messaging arbitrary enquirers.
const PHONE = process.env.CALLMEBOT_WHATSAPP_PHONE;
const API_KEY = process.env.CALLMEBOT_API_KEY;

const whatsappEnabled = !!(
  PHONE &&
  API_KEY &&
  !PHONE.startsWith("your-") &&
  !API_KEY.startsWith("your-")
);

export async function sendContactWhatsAppAlert(data: {
  name: string;
  phone: string;
  enquiryType: string;
  message: string;
}) {
  if (!whatsappEnabled) {
    console.log("[whatsapp] Not configured — skipping alert for:", data.name);
    return;
  }

  try {
    const text =
      `New Hopewell website enquiry\n` +
      `Type: ${data.enquiryType}\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Message: ${data.message.slice(0, 300)}`;

    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(PHONE!)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(API_KEY!)}`;
    const res = await fetch(url);

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`CallMeBot responded ${res.status}: ${body.slice(0, 200)}`);
    }
  } catch (err) {
    // Never let a WhatsApp outage break the actual enquiry submission —
    // it's already saved to the database and emailed by this point.
    console.error("[whatsapp] Failed to send alert:", err);
  }
}
