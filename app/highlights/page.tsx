// components/latest-highlights.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Clock, Calendar, ChevronRight } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "Central United 4-2 Northern Stars | Match Highlights",
    date: "2025-11-18",
    duration: "8:45",
    thumbnail: "/highlights/cu-vs-ns.jpg",
    videoUrl: "https://www.youtube.com/embed/abc123", // Replace with real embed or your video
    views: "287K",
    featured: true,
  },
  {
    id: 2,
    title: "Southern Pride vs Eastern FC | All Goals & Highlights",
    date: "2025-11-16",
    duration: "6:32",
    thumbnail: "/highlights/sp-vs-efc.jpg",
    videoUrl: "https://www.youtube.com/embed/def456",
    views: "156K",
  },
  {
    id: 3,
    title: "Western Warriors Epic Comeback vs Capital Rangers",
    date: "2025-11-15",
    duration: "10:21",
    thumbnail: "/highlights/ww-vs-cr.jpg",
    videoUrl: "https://www.youtube.com/embed/ghi789",
    views: "423K",
  },
  {
    id: 4,
    title: "Goal of the Week: J. Adebayo Wonder Strike",
    date: "2025-11-14",
    duration: "1:45",
    thumbnail: "/highlights/gotw-adebayo.jpg",
    videoUrl: "https://www.youtube.com/embed/jkl012",
    views: "892K",
  },
  {
    id: 5,
    title: "M5 Cup Round of 16 | Best Saves",
    date: "2025-11-12",
    duration: "4:58",
    thumbnail: "/highlights/best-saves.jpg",
    videoUrl: "https://www.youtube.com/embed/mno345",
    views: "198K",
  },
  {
    id: 6,
    title: "Top 10 Goals So Far This Season",
    date: "2025-11-10",
    duration: "12:10",
    thumbnail: "/highlights/top10-goals.jpg",
    videoUrl: "https://www.youtube.com/embed/pqr678",
    views: "1.2M",
  },
];

export default function LatestHighlights() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const featured = highlights.find((h) => h.featured);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-white">
            Latest Highlights
          </h2>
          <p className="text-xl text-muted-foreground">
            Relive the best moments from M5 competitions
          </p>
        </div>

        {/* Featured Video Hero */}
        {featured && (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group">
            <div className="aspect-video relative">
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                fill
                className="object-cover brightness-75 group-hover:brightness-50 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-28 h-28 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-2xl">
                    <Play
                      className="w-14 h-14 text-black ml-2"
                      fill="currentColor"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping" />
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/70 to-transparent">
                <p className="text-primary font-bold uppercase text-sm mb-2">
                  Featured Highlight
                </p>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-3">
                  {featured.title}
                </h3>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{featured.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{featured.duration}</span>
                  </div>
                  <span>{featured.views} views</span>
                </div>
              </div>
            </div>

            {/* Play Button Link */}
            <Link
              href={featured.videoUrl}
              target="_blank"
              className="absolute inset-0 z-10"
              aria-label={`Watch ${featured.title}`}
            />
          </div>
        )}

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights
            .filter((h) => !h.featured)
            .map((highlight) => (
              <Link
                key={highlight.id}
                href={highlight.videoUrl}
                target="_blank"
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-4"
                onMouseEnter={() => setHoveredId(highlight.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={highlight.thumbnail}
                    alt={highlight.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1.5 rounded-lg text-sm font-bold">
                    {highlight.duration}
                  </div>

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Play
                        className="w-10 h-10 text-black ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {highlight.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>{highlight.date}</span>
                      <span>•</span>
                      <span>{highlight.views} views</span>
                    </div>
                    {hoveredId === highlight.id && (
                      <ChevronRight className="w-5 h-5 text-primary animate-pulse" />
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link
            href="/highlights"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Watch All Highlights
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
