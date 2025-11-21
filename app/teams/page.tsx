// components/registered-teams.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, MapPin } from "lucide-react";

export const registeredTeams = [
  {
    id: "1",
    slug: "central-united",
    name: "Central United",
    short: "CU",
    city: "Capital City",
    titles: 12,
    logo: "/teams/central-united.png",
    colors: ["#FFD700", "#0A1E3C"],
  },
  {
    id: "2",
    slug: "northern-stars",
    name: "Northern Stars",
    short: "NS",
    city: "Northgate",
    titles: 8,
    logo: "/teams/northern-stars.png",
    colors: ["#FFFFFF", "#001F3F"],
  },
  {
    id: "3",
    slug: "southern-pride",
    name: "Southern Pride",
    short: "SP",
    city: "Port South",
    titles: 5,
    logo: "/teams/southern-pride.png",
    colors: ["#FF4500", "#000000"],
  },
  {
    id: "4",
    slug: "eastern-fc",
    name: "Eastern FC",
    short: "EFC",
    city: "Eastport",
    titles: 3,
    logo: "/teams/eastern-fc.png",
    colors: ["#00CED1", "#FFFFFF"],
  },
  {
    id: "5",
    slug: "western-warriors",
    name: "Western Warriors",
    short: "WW",
    city: "Westland",
    titles: 6,
    logo: "/teams/western-warriors.png",
    colors: ["#228B22", "#000000"],
  },
  {
    id: "6",
    slug: "capital-rangers",
    name: "Capital Rangers",
    short: "CR",
    city: "Capital City",
    titles: 4,
    logo: "/teams/capital-rangers.png",
    colors: ["#DC143C", "#FFFFFF"],
  },
];

export default function RegisteredTeams() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Registered Teams{" "}
            <span className="text-primary">(Season 2025/26)</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Six elite clubs officially registered and ready to compete
          </p>
        </div>

        {/* 6-Team Grid – Perfectly balanced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {registeredTeams.map((team) => (
            <Link
              key={team.id}
              href={`/teams/${team.slug}`}
              className="group relative bg-card/95 backdrop-blur-sm border border-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-6"
            >
              {/* Team Colors Strip */}
              <div className="h-3 flex">
                {team.colors.map((color, i) => (
                  <div
                    key={i}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="p-10 text-center space-y-8">
                {/* Logo */}
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-0 group-hover:scale-110 transition-transform duration-700" />
                  {team.logo ? (
                    <Image
                      src={team.logo}
                      alt={`${team.name} logo`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center font-black text-black text-5xl shadow-2xl">
                      {team.short}
                    </div>
                  )}
                </div>

                {/* Team Info */}
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {team.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-3 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{team.city}</span>
                  </div>
                </div>

                {/* Titles */}
                <div className="flex items-center justify-center gap-3 text-primary font-bold">
                  <Trophy className="w-6 h-6" />
                  <span className="text-3xl">{team.titles}</span>
                  <span className="text-sm text-muted,foreground">Titles</span>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-8 h-8 text-primary mx-auto opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-4 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            Click any team to view squad, fixtures, history & more
          </p>
        </div>
      </div>
    </section>
  );
}
