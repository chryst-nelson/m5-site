"use client";

import { useState, useEffect } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { Bell, Calendar, Clock, Trophy, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Match = {
  date: string; // ISO "2025-11-22T20:00:00"
  homeTeam: string;
  awayTeam: string;
  homeLogo?: string;
  awayLogo?: string;
  time: string; // "20:00"
  competition: string;
  venue?: string;
  broadcast?: string;
};

export default function UpcomingMatches() {
  const [timeLeft, setTimeLeft] = useState<Record<number, string>>({});

  const matches: Match[] = [
    {
      date: "2025-11-22T20:00:00",
      homeTeam: "Southern Pride",
      awayTeam: "Central United",
      time: "20:00",
      competition: "M5 League",
      venue: "Liberty Stadium",
      broadcast: "M5 TV • SuperSport",
    },
    {
      date: "2025-11-23T18:30:00",
      homeTeam: "Northern Stars",
      awayTeam: "Eastern FC",
      time: "18:30",
      competition: "M5 Cup • Round of 16",
      venue: "National Arena",
      broadcast: "M5 TV • beIN Sports",
    },
    {
      date: "2025-11-24T19:00:00",
      homeTeam: "Women's Elite",
      awayTeam: "Northern Warriors",
      time: "19:00",
      competition: "M5 Women's League",
      venue: "Unity Field",
      broadcast: "M5 Women+",
    },
  ];

  // Live countdown update every minute
  useEffect(() => {
    const updateCountdowns = () => {
      const newTimes = {} as Record<number, string>;
      matches.forEach((match, idx) => {
        const distance = formatDistanceToNow(new Date(match.date), {
          addSuffix: true,
        });
        newTimes[idx] = distance.replace("about ", "").replace("in ", "");
      });
      setTimeLeft(newTimes);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const getCompetitionIcon = (comp: string) => {
    if (comp.includes("League")) return <Trophy className="w-5 h-5" />;
    if (comp.includes("Cup"))
      return <Trophy className="w-5 h-5" fill="currentColor" />;
    return <Calendar className="w-5 h-5" />;
  };

  return (
    <section className="py-10 lg:py-1 bg-linear-to-b from-background via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent">
            Upcoming Fixtures
          </h2>
          <p className="text-xl text-muted-foreground">
            Don’t miss a moment of the action
          </p>
        </div>

        {/* Matches List */}
        <div className="space-y-8">
          {matches.map((match, idx) => (
            <div
              key={idx}
              className="group relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Competition Banner */}
              <div className="bg-gradient-to-r from-primary to-yellow-600 px-8 py-4 flex items-center gap-3">
                {getCompetitionIcon(match.competition)}
                <span className="font-bold text-black uppercase tracking-wider">
                  {match.competition}
                </span>
              </div>

              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Teams */}
                  <div className="flex items-center justify-center lg:justify-start gap-8">
                    {/* Home */}
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-700" />
                        <div className="relative w-full h-full bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center font-black text-black text-2xl shadow-2xl">
                          {match.homeTeam.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <p className="font-bold text-lg">{match.homeTeam}</p>
                    </div>

                    <div className="text-4xl font-black text-primary">VS</div>

                    {/* Away */}
                    <div className="y text-center">
                      <div className="w-20 h-20 mx-auto mb-3 relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-700" />
                        <div className="relative w-full h-full bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center font-black text-black text-2xl shadow-2xl">
                          {match.awayTeam.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <p className="font-bold text-lg">{match.awayTeam}</p>
                    </div>
                  </div>

                  {/* Match Info */}
                  <div className="text-center lg:text-left space-y-4">
                    <div>
                      <p className="text-4xl font-black text-primary">
                        {format(new Date(match.date), "EEEE, MMMM d")}
                      </p>
                      <p className="text-muted-foreground">{match.venue}</p>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-lg font-bold">
                      <Clock className="w-5 h-5 text-primary" />
                      {match.time} Local Time
                    </div>
                    <p className="text-sm text-primary font-medium">
                      Starts in {timeLeft[idx] || "..."}
                    </p>
                    {match.broadcast && (
                      <p className="text-xs text-muted-foreground">
                        Live on: {match.broadcast}
                      </p>
                    )}
                  </div>

                  {/* Action */}
                  <div className="text-center lg:text-right">
                    <button className="group/btn inline-flex items-center gap-3 px-8 py-5 bg-primary text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                      <Bell className="w-6 h-6 group-hover/btn:animate-bell-ring" />
                      Set Reminder
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <a
            href="/fixtures"
            className="inline-flex items-center gap-3 text-primary font-bold text-lg hover:gap-5 transition-all duration-300"
          >
            View Full Fixture List
            <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
