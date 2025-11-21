"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Zap, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // optional helper

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Preload video + fallback control
    if (videoRef.current) {
      videoRef.current.addEventListener("canplaythrough", () =>
        setIsVideoLoaded(true)
      );
      videoRef.current.addEventListener("error", () => setIsVideoLoaded(false));
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen mt-2 flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Video Background (with graceful fallback) */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={cn(
            "w-full h-full object-cover transition-opacity duration-1000",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
          poster="/hero-fallback.jpg" // Put a high-quality stadium image here
        >
          <source src="/videos/m5-stadium-night.mp4" type="video/mp4" />
          <source src="/videos/m5-stadium-night.webm" type="video/webm" />
        </video>

        {/* Fallback Image if video fails */}
        {!isVideoLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/football-match-trophy.jpg')",
            }}
          />
        )}

        {/* Premium Dark Gradient Overlay (CAF-style) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Subtle moving particles / light rays (optional flair) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-radial from-primary/20 to-transparent blur-3xl animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative mt-2 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live Badge – Animated Pulse */}

        {/* Main Title – Epic Scale */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-6">
          <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
            M5
          </span>
          <span className="block bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            FOOTBALL
          </span>
          <span className="block text-white/95 drop-shadow-2xl mt-2">
            CONFEDERATION
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light mb-12 max-w-4xl mx-auto leading-relaxed">
          Passion • Unity • Excellence – The heartbeat of African continental
          football
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="/watch"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-primary text-background text-lg font-bold rounded-xl overflow-hidden shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Play
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                fill="currentColor"
              />
              Watch Live Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>

          <a
            href="/highlights"
            className="px-10 py-5 border-2 border-white/50 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-primary transition-all duration-300"
          >
            Latest Highlights
          </a>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-16 border-t border-white/20">
          {[
            { number: "156", label: "Clubs Competing" },
            { number: "8", label: "Major Tournaments" },
            { number: "2.8M+", label: "Fans Worldwide" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group cursor-default"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="text-5xl md:text-6xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <p className="text-white/70 text-sm md:text-base font-medium tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
}
