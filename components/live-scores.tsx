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
    <section className="py-10 lg:py-18 bg-linear-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent">
            Live Scores{" "}
            {liveMatches.length > 0 && `• ${liveMatches.length} Live Now`}
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time action from across all M5 competitions
          </p>
        </div>

        {/* Live Matches Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {matches.map((match) => (
            <div
              key={match.id}
              className={cn(
                "relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500",
                match.status === "Live"
                  ? "bg-gradient-to-br from-primary/10 via-card to-card border-primary/50 shadow-2xl shadow-primary/20 scale-105"
                  : "bg-card/80 border-border hover:border-primary/30 hover:shadow-xl"
              )}
            >
              {/* Live Badge */}
              {match.status === "Live" && (
                <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-xs font-bold animate-pulse shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                  LIVE
                </div>
              )}

              <div className="p-8">
                {/* Competition */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">
                    {match.competition}
                  </span>
                  {match.status === "Finished" && (
                    <span className="text-xs text-muted-foreground">
                      Full Time
                    </span>
                  )}
                </div>

                <MatchCard match={match} isLive={match.status === "Live"} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/live"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Live Matches
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
