"use client";

import { useState, useEffect, useRef } from "react";
import { Play, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const handleCanPlay = () => setIsVideoLoaded(true);
      const handleError = () => setIsVideoLoaded(false);

      video.addEventListener("canplaythrough", handleCanPlay);
      video.addEventListener("error", handleError);

      return () => {
        video.removeEventListener("canplaythrough", handleCanPlay);
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16 pb-20 lg:pt-20">
      {/* Video Background */}
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
          poster="/hero-fallback.jpg"
        >
          <source src="/videos/m5-stadium-night.mp4" type="video/mp4" />
          <source src="/videos/m5-stadium-night.webm" type="video/webm" />
        </video>

        {/* Fallback Image */}
        {!isVideoLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/football-match-trophy.jpg')" }}
          />
        )}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Subtle Light Flare */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Content - Fully Responsive */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Live Badge (Optional - uncomment if needed) */}
        {/* <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse mb-8">
          <Zap className="w-4 h-4" /> LIVE NOW
        </div> */}

        {/* Epic Title - Responsive Typography */}
        <h1 className="font-black tracking-tighter leading-none mb-6">
          <span className="block text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-[10rem] bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-2xl">
            M5
          </span>
          <span className="block text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            FOOTBALL
          </span>
          <span className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 text-white/95 drop-shadow-2xl">
            CONFEDERATION
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-light mb-10 max-w-4xl mx-auto leading-relaxed px-4">
          Passion • Unity • Excellence – The heartbeat of African continental
          football
        </p>

        {/* CTA Buttons - Stack on mobile */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          <a
            href="/watch"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-primary text-background text-lg sm:text-xl font-bold rounded-xl overflow-hidden shadow-2xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
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
            className="w-full sm:w-auto px-10 py-5 border-2 border-white/50 text-white font-bold rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-primary transition-all duration-300"
          >
            Latest Highlights
          </a>
        </div>

        {/* Stats Bar - Responsive Grid */}
        <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-3xl mx-auto pt-12 border-t border-white/20">
          {[
            { number: "156", label: "Clubs Competing" },
            { number: "8", label: "Major Tournaments" },
            { number: "2.8M+", label: "Fans Worldwide" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white/60" />
      </div>
    </section>
  );
}
