// app/teams/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Trophy,
  MapPin,
  Calendar,
  Users,
  Home,
  Medal,
  Star,
  History,
  ArrowRight,
} from "lucide-react";
import { Metadata } from "next";

// Full team data with rich history
const teamsData = [
  {
    slug: "central-united",
    name: "Central United",
    short: "CU",
    city: "Capital City",
    country: "M5 Confederation",
    stadium: "Liberty National Stadium",
    capacity: 85000,
    founded: 1965,
    titles: 12,
    cups: 9,
    supercups: 7,
    logo: "/teams/central-united.png",
    kitHome: "/kits/central-united-home.png",
    kitAway: "/kits/central-united-away.png",
    stadiumImg: "/stadiums/liberty-stadium.jpg",
    colors: { primary: "#FFD700", secondary: "#0A1E3C" },
    nickname: "The Golden Lions",
    manager: "Coach Alexander Mbeki",
    captain: "J. Adebayo",
    description:
      "The most decorated club in M5 history, known for dominance, style, and producing legendary players.",
    history: [
      { year: 1965, event: "Club founded by visionaries in the capital" },
      { year: 1978, event: "Won first M5 League title" },
      { year: 1992, event: "Inauguration of Liberty National Stadium" },
      {
        year: 2005,
        event: "Completed historic treble (League + Cup + Supercup)",
      },
      { year: 2018, event: "Reached 10th league title milestone" },
      { year: 2024, event: "Launched state-of-the-art youth academy" },
    ],
    honors: [
      { title: "M5 League", count: 12, icon: "🏆" },
      { title: "M5 Cup", count: 9, icon: "🥇" },
      { title: "M5 Super Cup", count: 7, icon: "⭐" },
      { title: "Continental Shield", count: 2, icon: "🌍" },
    ],
  },
  // Add the other 5 teams similarly when ready...
] as const;

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const team = teamsData.find((t) => t.slug === slug);
  if (!team) return { title: "Team Not Found" };

  return {
    title: `${team.name} | Official Club Profile - M5 Football Confederation`,
    description: `${team.name} - ${team.nickname}. ${team.titles}× M5 League Champions from ${team.city}.`,
  };
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = teamsData.find((t) => t.slug === slug);

  if (!team) notFound();

  return (
    <>
      {/* Hero with Kit & Stadium Background */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={team.stadiumImg || "/stadiums/default.jpg"}
          alt={team.stadium}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

        <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-16 mb-10">
            <Image
              src={team.kitHome}
              alt="Home Kit"
              width={300}
              height={300}
              className="drop-shadow-2xl"
            />
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse" />
              <Image
                src={team.logo}
                alt={team.name}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <Image
              src={team.kitAway}
              alt="Away Kit"
              width={300}
              height={300}
              className="drop-shadow-2xl"
            />
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-4">{team.name}</h1>
          <p className="text-3xl font-bold text-primary mb-2">
            "{team.nickname}"
          </p>
          <p className="text-xl opacity-90">
            {team.city} • Est. {team.founded}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-background/95">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.honors.map((honor) => (
            <div key={honor.title} className="text-center">
              <div className="text-6xl mb-4">{honor.icon}</div>
              <p className="text-4xl font-black text-primary">{honor.count}×</p>
              <p className="text-muted-foreground font-medium">{honor.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About & History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-8 flex items-center gap-4">
              <History className="w-10 h-10 text-primary" />
              Club History
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {team.description}
            </p>
            <div className="space-y-6">
              {team.history.map((milestone) => (
                <div key={milestone.year} className="flex gap-6 group">
                  <div className="text-2xl font-black text-primary w-20 shrink-0">
                    {milestone.year}
                  </div>
                  <div className="border-l-4 border-primary/30 pl-6 group-hover:border-primary transition-colors">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-8">Home Ground</h2>
            <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src={team.stadiumImg || "/stadiums/default.jpg"}
                alt={team.stadium}
                width={800}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2">{team.stadium}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-3">
                    <MapPin /> {team.city}, {team.country}
                  </p>
                  <p className="flex items-center gap-3">
                    <Users /> Capacity: {team.capacity.toLocaleString()}
                  </p>
                  <p className="flex items-center gap-3">
                    <Calendar /> Opened: 1992
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 text-center border border-border">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center text-6xl font-black text-black">
                AM
              </div>
              <h3 className="text-2xl font-bold">{team.manager}</h3>
              <p className="text-primary font-semibold">Head Coach</p>
            </div>
            <div className="bg-card rounded-3xl p-8 text-center border border-border">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-4 border-primary flex items-center justify-center text-5xl font-black">
                JA
              </div>
              <h3 className="text-2xl font-bold">{team.captain}</h3>
              <p className="text-primary font-semibold">Team Captain</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-black mb-8">Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Full Squad List", "Match Fixtures", "Ticket Information"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-card/50 border border-dashed border-border rounded-3xl p-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-xl font-bold">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
