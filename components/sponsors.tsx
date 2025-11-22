"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Sponsors() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#0A1E3C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
            Proudly Presented By
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Our Title Partner
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
            Official sponsor of the M5 Football Confederation and all its
            competitions
          </p>
        </div>

        {/* Sponsor Spotlight - Responsive & Touch-Friendly */}
        <div className="relative inline-block group">
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-primary/40 blur-3xl scale-90 sm:scale-75 lg:scale-90 group-hover:scale-110 transition-transform duration-1000 opacity-70" />

          {/* Sponsor Card */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 sm:p-14 lg:p-20 shadow-2xl hover:shadow-primary/40 transition-all duration-700 hover:scale-105">
            <Image
              src="/sponsors/mtn-white.svg" // ← Replace with your actual sponsor
              alt="MTN - Official Title Partner of M5 Football Confederation"
              width={500}
              height={220}
              className="mx-auto w-48 sm:w-64 md:w-80 lg:w-[420px] h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 drop-shadow-2xl"
              priority
            />

            {/* Optional: Add sponsor name below if logo is symbol-only */}
            {/* <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mt-8 tracking-tighter">MTN</h3> */}
          </div>

          {/* Premium Gold Accent Lines */}
          <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-24868 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
          <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 w-48 sm:w-64 lg:w-80 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
        </div>

        {/* CTA - Mobile-friendly */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <a
            href="/partnerships"
            className="group inline-flex items-center gap-3 text-white/80 hover:text-primary font-semibold text-base sm:text-lg lg:text-xl transition-all duration-300 hover:gap-5"
          >
            Learn more about our partnership
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
