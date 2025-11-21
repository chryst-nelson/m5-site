"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Sponsors() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A1E3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
            Proudly Presented By
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our Title Partner
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Official sponsor of the M5 Football Confederation and all its
            competitions
          </p>
        </div>

        {/* Single Sponsor Spotlight */}
        <div className="relative inline-block group">
          {/* Glow Background */}
          <div className="absolute inset-0 bg-primary/30 blur-3xl scale-75 group-hover:scale-100 transition-transform duration-1000" />

          {/* Sponsor Card */}
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 lg:p-20 shadow-2xl hover:shadow-primary/30 transition-all duration-700 hover:scale-105">
            {/* Replace with your actual sponsor logo */}
            <Image
              src="/sponsors/mtn-white.svg" // ← Change to your sponsor
              alt="MTN - Title Partner of M5 Football Confederation"
              width={420}
              height={180}
              className="mx-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
              priority
            />

            {/* Optional Sponsor Name (if logo doesn't include text) */}
            {/* <h3 className="text-6xl font-black text-white mt-8">MTN</h3> */}
          </div>

          {/* Decorative Gold Accents */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Subtle CTA */}
        <div className="mt-20">
          <a
            href="/partnerships"
            className="inline-flex items-center gap-3 text-white/80 hover:text-primary font-semibold text-lg transition-colors"
          >
            Learn more about our partnership.
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
