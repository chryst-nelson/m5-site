"use client";

import { Medal, Trophy, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Team {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

const mockData: Team[] = [
  {
    position: 1,
    name: "Central United",
    played: 10,
    won: 8,
    drawn: 1,
    lost: 1,
    goalsFor: 28,
    goalsAgainst: 9,
    goalDifference: 19,
    points: 25,
  },
  {
    position: 2,
    name: "Northern Stars",
    played: 10,
    won: 7,
    drawn: 2,
    lost: 1,
    goalsFor: 24,
    goalsAgainst: 12,
    goalDifference: 12,
    points: 23,
  },
  {
    position: 3,
    name: "Eastern FC",
    played: 10,
    won: 5,
    drawn: 3,
    lost: 2,
    goalsFor: 19,
    goalsAgainst: 14,
    goalDifference: 5,
    points: 18,
  },
  {
    position: 4,
    name: "Western Alliance",
    played: 10,
    won: 3,
    drawn: 4,
    lost: 3,
    goalsFor: 16,
    goalsAgainst: 17,
    goalDifference: -1,
    points: 13,
  },
  {
    position: 5,
    name: "Southern Pride",
    played: 10,
    won: 1,
    drawn: 2,
    lost: 7,
    goalsFor: 10,
    goalsAgainst: 25,
    goalDifference: -15,
    points: 5,
  },
  {
    position: 6,
    name: "Capital Warriors",
    played: 10,
    won: 0,
    drawn: 2,
    lost: 8,
    goalsFor: 8,
    goalsAgainst: 28,
    goalDifference: -20,
    points: 2,
  },
];

export default function CompetitionTable({
  title = "M5 League Standings",
  season = "2025 Season",
  data = mockData,
}: {
  title?: string;
  season?: string;
  data?: Team[];
}) {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3">
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">{season}</p>
        </div>

        {/* Desktop + Tablet Table */}
        <div className="hidden sm:block overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur shadow-2xl">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-primary/10 to-primary/5 text-left">
                <th className="px-6 py-5 font-bold text-primary uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-5 font-bold text-primary uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-5 text-center font-bold text-primary uppercase tracking-wider">
                  P
                </th>
                <th className="px-6 py-5 text-center font-bold text-primary uppercase tracking-wider">
                  W
                </th>
                <th className="px-6 py-5 text-center font-bold text-primary uppercase tracking-wider">
                  D
                </th>
                <th className="px-6 py-5 text-center font-bold text-primary uppercase tracking-wider">
                  L
                </th>
                <th className="px-6 py-5 text-center font-bold text-primary uppercase tracking-wider">
                  GD
                </th>
                <th className="px-6 py-5 text-right font-bold text-primary uppercase tracking-wider pr-8">
                  Pts
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map((team) => (
                <tr
                  key={team.position}
                  className={cn(
                    "hover:bg-white/5 transition-colors",
                    team.position === 1 && "bg-yellow-500/5",
                    team.position <= 1 && "border-l-4 border-l-yellow-500",
                    team.position >= data.length - 1 && "text-red-400"
                  )}
                >
                  <td className="px-6 py-5 font-bold text-xl">
                    {team.position === 1 && (
                      <Trophy className="w-5 h-5 inline text-yellow-500 mr-2" />
                    )}
                    {team.position}
                  </td>
                  <td className="px-6 py-5 font-semibold flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center text-white font-black text-sm">
                      {team.name.charAt(0)}
                    </div>
                    {team.name}
                  </td>
                  <td className="px-6 py-5 text-center">{team.played}</td>
                  <td className="px-6 py-5 text-center text-green-400 font-bold">
                    {team.won}
                  </td>
                  <td className="px-6 py-5 text-center text-yellow-400">
                    {team.drawn}
                  </td>
                  <td className="px-6 py-5 text-center text-red-400">
                    {team.lost}
                  </td>
                  <td className="px-6 py-5 text-center font-medium">
                    {team.goalDifference > 0 ? "+" : ""}
                    {team.goalDifference}
                  </td>
                  <td className="px-6 py-5 text-right pr-8 font-black text-2xl text-primary">
                    {team.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4">
          {data.map((team) => (
            <div
              key={team.position}
              className={cn(
                "rounded-2xl border bg-card/95 backdrop-blur p-5 shadow-lg",
                team.position === 1 && "border-yellow-500/50 bg-yellow-500/5",
                team.position >= data.length - 1 && "border-red-500/30"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-primary">
                    #{team.position}
                    {team.position === 1 && (
                      <Trophy className="w-6 h-6 inline ml-1 text-yellow-500" />
                    )}
                  </span>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center text-white font-black">
                    {team.name.charAt(0)}
                  </div>
                </div>
                <span className="text-3xl font-black text-primary">
                  {team.points}
                </span>
              </div>

              <h3 className="font-bold text-lg mb-4">{team.name}</h3>

              <div className="grid grid-cols-4 gap-3 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">Played</p>
                  <p className="text-xl font-bold">{team.played}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Win</p>
                  <p className="text-xl font-bold text-green-400">{team.won}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Draw</p>
                  <p className="text-xl font-bold text-yellow-400">
                    {team.drawn}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Loss</p>
                  <p className="text-xl font-bold text-red-400">{team.lost}</p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">Goal Difference</p>
                <p
                  className={cn(
                    "text-2xl font-black",
                    team.goalDifference > 0 ? "text-green-400" : "text-red-400"
                  )}
                >
                  {team.goalDifference > 0 ? "+" : ""}
                  {team.goalDifference}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <span className="inline-block w-4 h-4 bg-yellow-500/20 rounded mr-2"></span>{" "}
          Champions •
          <span className="inline-block w-4 h-4 bg-red-500/20 rounded mx-2"></span>{" "}
          Relegation Zone
        </div>
      </div>
    </section>
  );
}
