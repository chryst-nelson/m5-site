import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LiveScores from "@/components/live-scores";
import UpcomingMatches from "@/components/upcoming-matches";
import NewsCarousel from "@/components/news-carousel";
import Sponsors from "@/components/sponsors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <LiveScores />
      <UpcomingMatches />
      <NewsCarousel />
      <Sponsors />
    </main>
  );
}
