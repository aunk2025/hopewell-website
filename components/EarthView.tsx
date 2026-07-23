"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Zoom stages: world → India → Jharkhand → Ranchi ─── */
const STAGES = [
  { zoom: 2,  lat: 23.3441,   lng: 85.3096,  duration: 1800, label: "" },
  { zoom: 5,  lat: 23.3441,   lng: 85.3096,  duration: 1400, label: "India" },
  { zoom: 8,  lat: 23.3441,   lng: 85.3096,  duration: 1400, label: "Jharkhand" },
  { zoom: 12, lat: 23.3441,   lng: 85.3096,  duration: 1600, label: "Ranchi" },
  { zoom: 15, lat: 23.3441,   lng: 85.3096,  duration: 2000, label: "Ranchi, Jharkhand" },
];

declare global {
  interface Window {
    initHeroMap: () => void;
  }
}

export default function EarthView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [stageLabel, setStageLabel] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [pinVisible, setPinVisible] = useState(false);
  const animRunning = useRef(false);

  /* ── Load Google Maps API (satellite) ── */
  useEffect(() => {
    if (document.getElementById("gmap-script")) {
      if (window.google?.maps) initMap();
      return;
    }

    window.initHeroMap = initMap;
    const script = document.createElement("script");
    script.id = "gmap-script";
    /* Using the free Embed-compatible loader – no billing key needed for Maps JS */
    const key = process.env.NEXT_PUBLIC_GMAPS_KEY
      ? `&key=${process.env.NEXT_PUBLIC_GMAPS_KEY}`
      : "";
    script.src =
      `https://maps.googleapis.com/maps/api/js?callback=initHeroMap&v=weekly${key}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      window.initHeroMap = () => {};
    };
  }, []);

  function initMap() {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: STAGES[0].lat, lng: STAGES[0].lng },
      zoom: STAGES[0].zoom,
      mapTypeId: "satellite",
      disableDefaultUI: true,
      gestureHandling: "none",
      keyboardShortcuts: false,
      tilt: 45,
    });

    mapInstanceRef.current = map;
    setIsReady(true);

    /* slight delay so tiles render before animation starts */
    setTimeout(() => runAnimation(map), 900);
  }

  function runAnimation(map: google.maps.Map) {
    if (animRunning.current) return;
    animRunning.current = true;

    let idx = 0;
    const step = () => {
      if (idx >= STAGES.length) {
        setPinVisible(true);
        animRunning.current = false;
        return;
      }
      const s = STAGES[idx];
      setStageLabel(s.label);
      map.panTo({ lat: s.lat, lng: s.lng });
      map.setZoom(s.zoom);
      idx++;
      setTimeout(step, s.duration);
    };
    step();
  }

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl">
      {/* ── Satellite map canvas ── */}
      <div ref={mapRef} className="h-full w-full" />

      {/* ── Vignette: lightened at center so orb glass shines through ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(6,24,34,.08) 0%, rgba(6,24,34,.52) 100%)",
        }}
      />

      {/* ── Subtle cyan glow rim around the map ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          boxShadow: "inset 0 0 60px rgba(87,230,230,.09)",
        }}
      />

      {/* ── Corner brackets ── */}
      {[
        "top-3 left-3 border-t border-l",
        "top-3 right-3 border-t border-r",
        "bottom-3 left-3 border-b border-l",
        "bottom-3 right-3 border-b border-r",
      ].map((cls) => (
        <span
          key={cls}
          className={`pointer-events-none absolute h-5 w-5 ${cls}`}
          style={{ borderColor: "rgba(87,230,230,.65)", borderWidth: "1.5px" }}
        />
      ))}

      {/* ── Location label pill ── */}
      {stageLabel && (
        <div
          key={stageLabel}
          className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full px-4 py-1.5"
          style={{
            background: "rgba(6,24,34,.72)",
            border: "1px solid rgba(87,230,230,.38)",
            backdropFilter: "blur(12px)",
            animation: "fadeUp .45s ease forwards",
            color: "#57e6e6",
            fontSize: ".72rem",
            fontWeight: 800,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          📍 {stageLabel}
        </div>
      )}

      {/* ── Final pin pulse when zoom complete ── */}
      {pinVisible && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {/* Pulse rings */}
          <span
            className="absolute h-16 w-16 rounded-full"
            style={{
              background: "rgba(87,230,230,.25)",
              animation: "pulseRing 2.4s ease-out infinite",
            }}
          />
          <span
            className="absolute h-10 w-10 rounded-full"
            style={{
              background: "rgba(87,230,230,.35)",
              animation: "pulseRing 2.4s ease-out .6s infinite",
            }}
          />
          {/* Center dot */}
          <span
            className="absolute h-3 w-3 rounded-full"
            style={{
              background: "#57e6e6",
              boxShadow: "0 0 12px 4px rgba(87,230,230,.7)",
            }}
          />
        </div>
      )}

      {/* ── Loading skeleton ── */}
      {!isReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[2rem] bg-[#061822]">
          <div
            className="h-16 w-16 rounded-full border-4 border-cyan-400/30"
            style={{
              borderTopColor: "#57e6e6",
              animation: "spin 1s linear infinite",
            }}
          />
          <p style={{ color: "#57e6e6", fontSize: ".78rem", letterSpacing: ".14em" }}>
            LOADING EARTH VIEW…
          </p>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translate(-50%, 6px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
