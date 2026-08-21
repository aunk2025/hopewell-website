"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Send, X } from "lucide-react";

const PHONE_NUMBER = "+917281990530";
const WHATSAPP_NUMBER = "917281990530";
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about Hopewell Hospital.";

type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING: ChatMessage = {
  role: "assistant",
  content: "Hi! I'm the Hopewell Hospital assistant. Ask me about our services, doctors, or how to book an appointment.",
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.652 4.47 1.782 6.307L4 29l7.86-1.746A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 16.984c-.297.836-1.47 1.53-2.41 1.727-.64.135-1.474.243-4.29-.92-3.6-1.49-5.916-5.14-6.096-5.377-.173-.238-1.457-1.94-1.457-3.7 0-1.76.92-2.623 1.246-2.984.297-.328.65-.41.867-.41.217 0 .434.002.624.012.2.01.468-.076.732.559.297.712.98 2.472 1.067 2.652.087.18.145.393.029.63-.116.238-.174.386-.348.594-.174.207-.365.463-.522.622-.174.176-.355.367-.153.72.203.352.902 1.487 1.938 2.409 1.332 1.186 2.454 1.552 2.807 1.727.352.174.557.145.762-.09.203-.234.87-1.017 1.102-1.365.232-.348.464-.29.782-.174.319.116 2.02.951 2.367 1.125.348.174.58.26.667.406.087.145.087.842-.21 1.677Z" />
    </svg>
  );
}

export default function ContactFAB() {
  const pathname = usePathname();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  if (pathname?.startsWith("/admin")) return null;

  async function send() {
    const text = input.trim();
    if (!text || sending) return;
    setError("");
    setInput("");
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setSending(true);
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => m !== GREETING) }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      setMessages((m) => [...m, { role: "assistant", content: json.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {chatOpen && (
        <div className="absolute bottom-full right-0 mb-3 flex h-[480px] w-[340px] flex-col overflow-hidden rounded-3xl border border-teal-700 bg-white shadow-2xl">
          <div className="flex items-center gap-2.5 bg-ink px-5 py-4 text-white">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white">
              <img src="/hopewell%20logo%201.jpeg" alt="" className="h-6 w-6 object-contain" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-black">Hopewell Assistant</div>
              <div className="text-[11px] text-white/50">Ask about services & doctors</div>
            </div>
            <button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat" className="grid h-8 w-8 place-items-center rounded-full text-white/60 hover:bg-white/10 hover:text-white">
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-6 ${
                    m.role === "user" ? "bg-ink text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-slate-100 px-4 py-2.5 text-sm text-slate-400">Typing…</div>
              </div>
            )}
            {error && <p className="text-center text-xs text-red-500">{error}</p>}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex items-center gap-2 border-t border-slate-200 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-teal-400"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              aria-label="Send"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white transition disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glass transition hover:-translate-y-1 hover:shadow-xl"
      >
        <WhatsAppIcon />
      </a>

      <button
        type="button"
        onClick={() => setChatOpen((v) => !v)}
        aria-label={chatOpen ? "Close chat" : "Open chat"}
        className="grid h-14 w-14 place-items-center rounded-full bg-ink text-white shadow-glass transition hover:-translate-y-1 hover:shadow-xl"
      >
        {chatOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Hopewell Hospital"
        className="grid h-14 w-14 place-items-center rounded-full bg-ink text-white shadow-glass transition hover:-translate-y-1 hover:shadow-xl"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
