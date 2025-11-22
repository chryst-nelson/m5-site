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
      {/* Hero Section - Full width, responsive height */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Live Scores - Card-like section with padding */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <LiveScores />
        </div>
      </section>

      {/* Upcoming Matches - Responsive grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <UpcomingMatches />
        </div>
      </section>

      {/* News Carousel - Full bleed on mobile, contained on larger screens */}
      <section className="w-full py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsCarousel />
        </div>
      </section>

      {/* Sponsors - Responsive horizontal scroll on mobile, grid on larger screens */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <Sponsors />
        </div>
      </section>
    </main>
  );
}
