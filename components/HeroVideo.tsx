"use client";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="relative rounded-full overflow-hidden shadow-glow"
        style={{ height: "100%", aspectRatio: "1 / 1" }}
      >
        <video
          src="/videos/hero-globe.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
