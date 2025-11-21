import MatchCard from "@/components/match-card";

export default function Live() {
  const liveMatches = [
    {
      id: 1,
      homeTeam: "Central United",
      awayTeam: "Northern Stars",
      homeScore: 2,
      awayScore: 1,
      status: "Live",
      minute: 67,
      competition: "M5 League",
    },
    {
      id: 2,
      homeTeam: "Eastern FC",
      awayTeam: "Western Alliance",
      homeScore: 1,
      awayScore: 1,
      status: "Live",
      minute: 45,
      competition: "M5 League",
    },
    {
      id: 3,
      homeTeam: "Youth Academy",
      awayTeam: "Youth Champions",
      homeScore: 3,
      awayScore: 0,
      status: "Live",
      minute: 38,
      competition: "M5 Youth Championship",
    },
  ];

  const upcomingMatches = [
    {
      id: 4,
      homeTeam: "Southern Pride",
      awayTeam: "Central United",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      minute: 0,
      competition: "M5 League",
      kickoffTime: "2025-11-22 20:00",
    },
    {
      id: 5,
      homeTeam: "Northern Stars",
      awayTeam: "Eastern FC",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      minute: 0,
      competition: "M5 Cup",
      kickoffTime: "2025-11-23 18:30",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Live Matches Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-primary">
              Live Matches
            </h1>
            <p className="text-muted-foreground mb-8">Now playing</p>

            <div className="grid md:grid-cols-2 gap-6">
              {liveMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-card border-2 border-primary rounded-lg p-6 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-500 text-sm font-bold">LIVE</span>
                  </div>
                  <MatchCard match={match} isLive={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Matches Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">
              Upcoming Matches
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {upcomingMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <MatchCard match={match} isLive={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
