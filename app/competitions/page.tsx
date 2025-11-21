import { Trophy, Users, Heart, Globe } from "lucide-react";

export default function Competitions() {
  const competitions = [
    {
      id: 1,
      name: "M5 League",
      icon: Trophy,
      description:
        "Premier professional football league featuring the best teams from across the confederation.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 2,
      name: "M5 Cup",
      icon: Trophy,
      description:
        "Knockout tournament providing teams with the ultimate prize and continental recognition.",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      name: "M5 Youth Championship",
      icon: Users,
      description:
        "Development platform for emerging talent and future stars of football.",
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      name: "M5 Women's League",
      icon: Heart,
      description:
        "Empowering female athletes and promoting gender equality in professional football.",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 5,
      name: "Inter-confederation Series",
      icon: Globe,
      description:
        "International matches showcasing the best of M5 football on the global stage.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
              Competitions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the prestigious competitions that define excellence in M5
              football
            </p>
          </div>

          {/* Competition Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((competition) => {
              const Icon = competition.icon;
              return (
                <div
                  key={competition.id}
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 group cursor-pointer hover:shadow-xl"
                >
                  <div
                    className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${competition.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {competition.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {competition.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
