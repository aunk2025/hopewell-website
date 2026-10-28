"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Send, X, Mic, Volume2, VolumeX } from "lucide-react";

const PHONE_NUMBER = "+919199666246";
const WHATSAPP_NUMBER = "919199666246";
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about Hopewell Hospital.";

type ChatMessage = { role: "user" | "assistant"; content: string };
type LanguageCode = "en" | "hi";

// speechLang is the BCP-47 tag the browser's speech-recognition engine
// expects — distinct from the `language` field sent to the chatbot API.
const LANGUAGES: { code: LanguageCode; label: string; speechLang: string }[] = [
  { code: "en", label: "EN", speechLang: "en-IN" },
  { code: "hi", label: "हिं", speechLang: "hi-IN" },
];

const UI_TEXT: Record<LanguageCode, {
  title: string;
  subtitle: string;
  placeholder: string;
  listening: string;
  typing: string;
  greeting: string;
  muteSpeech: string;
  unmuteSpeech: string;
}> = {
  en: {
    title: "Hopewell Assistant",
    subtitle: "Ask about services & doctors",
    placeholder: "Type your question…",
    listening: "Listening…",
    typing: "Typing…",
    greeting: "Hi! I'm the Hopewell Hospital assistant. Ask me about our services, doctors, or how to book an appointment.",
    muteSpeech: "Mute spoken replies",
    unmuteSpeech: "Unmute spoken replies",
  },
  hi: {
    title: "होपवेल सहायक",
    subtitle: "सेवाओं और डॉक्टरों के बारे में पूछें",
    placeholder: "अपना सवाल लिखें…",
    listening: "सुन रहे हैं…",
    typing: "लिख रहे हैं…",
    greeting: "नमस्ते! मैं होपवेल हॉस्पिटल का सहायक हूँ। हमारी सेवाओं, डॉक्टरों या अपॉइंटमेंट बुक करने के बारे में पूछें।",
    muteSpeech: "बोलकर जवाब देना बंद करें",
    unmuteSpeech: "बोलकर जवाब देना शुरू करें",
  },
};

// Vendor-prefixed in most browsers that support it at all (Chrome/Edge/
// Safari); unsupported entirely in Firefox, so the mic button only
// renders once this is confirmed present on the client.
function getSpeechRecognition(): any {
  if (typeof window === "undefined") return null;
  return (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition ?? null;
}

// Browser speech synthesis reads a long digit run as a quantity — e.g.
// "+91 91996 66246" comes out as some number of lakhs and thousands —
// instead of a phone number. Spacing every digit out forces it to read
// each one individually instead. Only digit runs of phone-number length
// (10+ digits) are touched, so ordinary numbers in a reply (bed counts,
// percentages, "24x7", pin codes) are still read naturally.
function makeNumbersSpeakable(text: string): string {
  return text.replace(/\+?\d[\d\s-]{6,}\d/g, (match) => {
    const digitCount = (match.match(/\d/g) || []).length;
    if (digitCount < 10) return match;
    const hasPlus = match.trimStart().startsWith("+");
    const digits = match.replace(/\D/g, "");
    return (hasPlus ? "+ " : "") + digits.split("").join(" ");
  });
}

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
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "assistant", content: UI_TEXT.en.greeting }]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [listening, setListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [ttsSupported, setTtsSupported] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(true);
  // Measured, not assumed: see the effect below for why this can't be a
  // `vh`/`dvh` CSS calc.
  const [panelMaxHeight, setPanelMaxHeight] = useState<number | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Tracks whether the text currently in the input box came from dictation
  // (vs. the visitor typing) so a reply is only read aloud when the
  // question that prompted it was actually asked by voice.
  const lastInputWasVoiceRef = useRef(false);
  const t = UI_TEXT[language];

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  // The chat panel pops up `bottom-full` above the fixed FAB stack, so the
  // room available for it is "distance from the top of that stack up to
  // the top of the screen". CSS `vh`/`dvh` keep proving unreliable for
  // this across real devices — `vh` is the viewport as if a mobile
  // browser's address bar were hidden (not the space actually visible
  // while it's shown), and `dvh` still came up short on an Android Chrome
  // variant with on-screen navigation, apparently not fully accounted for
  // either. Measuring the actual rendered position of the fixed-positioned
  // wrapper sidesteps both: `getBoundingClientRect()` reflects reality
  // regardless of how any given browser's chrome affects viewport units.
  useEffect(() => {
    if (!chatOpen) return;
    function updateMaxHeight() {
      if (!wrapperRef.current) return;
      const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
      // 12px = the panel's own mb-3 gap above the FAB stack; 16px = a
      // small margin so the header never sits flush against the very top
      // of the screen.
      const available = wrapperTop - 12 - 16;
      setPanelMaxHeight(Math.max(200, Math.min(480, available)));
    }
    updateMaxHeight();
    const vv = window.visualViewport;
    vv?.addEventListener("resize", updateMaxHeight);
    window.addEventListener("resize", updateMaxHeight);
    return () => {
      vv?.removeEventListener("resize", updateMaxHeight);
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, [chatOpen]);

  useEffect(() => {
    setSpeechSupported(!!getSpeechRecognition());
    setTtsSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      recognitionRef.current?.stop();
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  // Stop any reply still being read aloud once the chat is closed or
  // spoken replies are muted mid-utterance.
  useEffect(() => {
    if ((!chatOpen || !speechEnabled) && ttsSupported) window.speechSynthesis.cancel();
  }, [chatOpen, speechEnabled, ttsSupported]);

  if (pathname?.startsWith("/admin")) return null;

  function speak(text: string) {
    if (!ttsSupported || !speechEnabled) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(makeNumbersSpeakable(text));
    utterance.lang = LANGUAGES.find((l) => l.code === language)?.speechLang ?? "en-IN";
    window.speechSynthesis.speak(utterance);
  }

  // Switching language only resets the greeting while the conversation
  // hasn't actually started yet — real history is left alone so a mid-chat
  // switch doesn't erase what the visitor already said.
  function changeLanguage(next: LanguageCode) {
    setLanguage(next);
    setMessages((m) => (m.length === 1 ? [{ role: "assistant", content: UI_TEXT[next].greeting }] : m));
  }

  function toggleListening() {
    const SpeechRecognition = getSpeechRecognition();
    if (!SpeechRecognition) return;
    if (listening) {
      recognitionRef.current?.stop();
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = LANGUAGES.find((l) => l.code === language)?.speechLang ?? "en-IN";
    recognition.interimResults = true;
    recognition.continuous = false;
    // Local to this listening session (not component state) so `onend`
    // always sees the latest dictated text without a stale-closure risk.
    let finalTranscript = "";
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results as any)
        .map((r: any) => r[0].transcript)
        .join("");
      setInput(transcript);
      finalTranscript = transcript;
      lastInputWasVoiceRef.current = true;
    };
    // Speech recognition stops itself once it detects the visitor has
    // finished speaking — send the question automatically at that point
    // instead of making them tap Send after dictating.
    recognition.onend = () => {
      setListening(false);
      if (finalTranscript.trim()) send(finalTranscript);
    };
    recognition.onerror = (event: any) => {
      setListening(false);
      const reason = event?.error;
      if (reason === "not-allowed" || reason === "service-not-allowed") {
        setError("Microphone access was blocked. Please allow microphone permission in your browser and try again.");
      } else if (reason === "no-speech") {
        setError("No speech detected. Please try again.");
      } else if (reason === "audio-capture") {
        setError("No microphone was found on this device.");
      } else if (reason === "network") {
        setError("Voice input needs an internet connection to reach the browser's speech service.");
      } else {
        setError(`Voice input failed (${reason ?? "unknown error"}). Please try again or type your message.`);
      }
    };
    try {
      recognitionRef.current = recognition;
      recognition.start();
      setListening(true);
    } catch {
      setListening(false);
      setError("Could not start voice input. Please try again.");
    }
  }

  async function send(overrideText?: string) {
    const text = (overrideText ?? input).trim();
    if (!text || sending) return;
    const askedByVoice = lastInputWasVoiceRef.current;
    lastInputWasVoiceRef.current = false;
    setError("");
    setInput("");
    const isGreeting = (m: ChatMessage) => Object.values(UI_TEXT).some((u) => u.greeting === m.content);
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setSending(true);
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => !isGreeting(m)), language }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      setMessages((m) => [...m, { role: "assistant", content: json.reply }]);
      if (askedByVoice) speak(json.reply);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSending(false);
    }
  }

  return (
    <div ref={wrapperRef} className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {chatOpen && (
        <div
          className="absolute bottom-full right-0 mb-3 flex h-[min(480px,calc(100dvh-250px))] w-[340px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-teal-700 bg-white shadow-2xl"
          style={panelMaxHeight !== null ? { height: panelMaxHeight } : undefined}
        >
          <div className="flex items-center gap-1.5 bg-ink px-3.5 py-3.5 text-white sm:gap-2.5 sm:px-5 sm:py-4">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white">
              <img src="/hopewell%20logo2.png" alt="" className="h-6 w-6 object-contain" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-black">{t.title}</div>
              <div className="truncate text-[11px] text-white/50">{t.subtitle}</div>
            </div>
            <div className="flex shrink-0 overflow-hidden rounded-full border border-white/20 text-[11px] font-bold">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => changeLanguage(l.code)}
                  aria-pressed={language === l.code}
                  className={`px-2 py-1 transition ${language === l.code ? "bg-white text-ink" : "text-white/60 hover:text-white"}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            {ttsSupported && (
              <button
                type="button"
                onClick={() => setSpeechEnabled((v) => !v)}
                aria-pressed={speechEnabled}
                aria-label={speechEnabled ? t.muteSpeech : t.unmuteSpeech}
                title={speechEnabled ? t.muteSpeech : t.unmuteSpeech}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white/60 hover:bg-white/10 hover:text-white sm:h-8 sm:w-8"
              >
                {speechEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
              </button>
            )}
            <button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat" className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white/60 hover:bg-white/10 hover:text-white sm:h-8 sm:w-8">
              <X size={15} />
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
                <div className="rounded-2xl bg-slate-100 px-4 py-2.5 text-sm text-slate-400">{t.typing}</div>
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
              onChange={(e) => { setInput(e.target.value); lastInputWasVoiceRef.current = false; }}
              placeholder={listening ? t.listening : t.placeholder}
              className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-teal-400"
            />
            {speechSupported && (
              <button
                type="button"
                onClick={toggleListening}
                aria-pressed={listening}
                aria-label={listening ? "Stop voice input" : "Start voice input"}
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition ${
                  listening ? "animate-pulse bg-red-500 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                <Mic size={16} />
              </button>
            )}
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
