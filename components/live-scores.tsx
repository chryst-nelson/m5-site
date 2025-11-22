"use client";

import { cn } from "@/lib/utils";
import MatchCard from "./match-card";
import { ArrowRight } from "lucide-react";

export default function LiveScores() {
  const matches = [
    {
      id: 1,
      homeTeam: "Central United",
      awayTeam: "Northern Stars",
      homeScore: 2,
      awayScore: 1,
      status: "Live" as const,
      minute: 78,
      competition: "M5 League",
    },
    {
      id: 2,
      homeTeam: "Eastern FC",
      awayTeam: "Western Alliance",
      homeScore: 1,
      awayScore: 1,
      status: "Live" as const,
      minute: 45 + 3,
      competition: "M5 League",
    },
    {
      id: 3,
      homeTeam: "Southern Pride",
      awayTeam: "Capital Warriors",
      homeScore: 3,
      awayScore: 2,
      status: "Finished" as const,
      minute: 90,
      competition: "M5 Cup • Quarter Final",
    },
    {
      id: 4,
      homeTeam: "M5 U20 Academy",
      awayTeam: "Future Stars",
      homeScore: 4,
      awayScore: 1,
      status: "Finished" as const,
      minute: 90,
      competition: "M5 Youth Championship",
    },
  ];

  const liveMatches = matches.filter((m) => m.status === "Live");

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-3">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Live Scores
            </span>
            {liveMatches.length > 0 && (
              <span className="block sm:inline ml-0 sm:ml-4 text-primary text-3xl sm:text-4xl md:text-5xl">
                • {liveMatches.length} Live Now
              </span>
            )}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            Real-time action from across all M5 competitions
          </p>
        </div>

        {/* Matches Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {matches.map((match) => (
            <div
              key={match.id}
              className={cn(
                "relative rounded-2xl border overflow-hidden backdrop-blur-xl transition-all duration-500 hover:shadow-2xl",
                match.status === "Live"
                  ? "bg-gradient-to-br from-primary/20 via-card/95 to-card/90 border-primary/60 shadow-2xl shadow-primary/30 ring-2 ring-primary/20 scale-100 sm:scale-105"
                  : "bg-card/90 border-border/70 hover:border-primary/40 hover:bg-card"
              )}
            >
              {/* LIVE Badge - Only on live matches */}
              {match.status === "Live" && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping absolute -left-1" />
                  <span className="relative">LIVE • {match.minute}'</span>
                </div>
              )}

              {/* Finished Badge */}
              {match.status === "Finished" && (
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-muted/80 text-muted-foreground text-xs font-semibold rounded-full">
                  Full Time
                </div>
              )}

              <div className="p-5 sm:p-7 lg:p-8">
                {/* Competition Name */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                    {match.competition}
                  </span>
                  {match.status === "Live" && (
                    <span className="text-xl font-bold text-primary animate-pulse">
                      {match.minute}'
                    </span>
                  )}
                </div>

                {/* Match Card */}
                <MatchCard match={match} isLive={match.status === "Live"} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="/live"
            className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-primary text-black font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            View All Live Matches
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
