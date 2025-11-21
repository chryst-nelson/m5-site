// components/match-card.tsx
import { Trophy, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type Match = {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: string;
  minute?: number;
};

interface MatchCardProps {
  match: Match;
  isLive?: boolean;
}

export default function MatchCard({ match, isLive = false }: MatchCardProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Home Team */}
      <div className="flex items-center gap-4 flex-1">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center font-bold text-primary border border-primary/30">
          {match.homeTeam.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-lg">{match.homeTeam}</p>
        </div>
      </div>

      {/* Center Score / Time */}
      <div className="text-center px-6">
        {match.status === "Live" &&
        match.homeScore !== undefined &&
        match.awayScore !== undefined ? (
          <div>
            <div className="text-4xl font-black tabular-nums">
              <span className={cn(isLive && "text-primary")}>
                {match.homeScore}
              </span>
              <span className="mx-3 text-muted-foreground">-</span>
              <span className={cn(isLive && "text-primary")}>
                {match.awayScore}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 mt-2 text-xs font-bold text-red-500 animate-pulse">
              <Clock className="w-4 h-4" />
              {match.minute}'
            </div>
          </div>
        ) : match.status === "Finished" ? (
          <div className="text-3xl font-black">
            {match.homeScore ?? 0} - {match.awayScore ?? 0}
            <div className="text-xs text-muted-foreground mt-1">FT</div>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">VS</div>
        )}
      </div>

      {/* Away Team */}
      <div className="flex items-center gap-4 flex-1 justify-end text-right">
        <div>
          <p className="font-semibold text-lg">{match.awayTeam}</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center font-bold text-primary border border-primary/30">
          {match.awayTeam.slice(0, 2).toUpperCase()}
        </div>
      </div>
    </div>
  );
}
