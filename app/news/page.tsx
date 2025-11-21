import NewsCard from "@/components/news-card";

export const metadata = {
  title: "Latest News | M5 Football Confederation",
  description:
    "Official news and updates from M5 Football Confederation competitions and events.",
};

const news = [
  {
    id: 1,
    title: "M5 League Finals Draw Record Viewership Numbers",
    excerpt:
      "Historic finals match draws unprecedented international attention with record-breaking viewership across all regions.",
    date: "2025-11-18",
    category: "League",
    image: "/news/final-viewership.jpg",
  },
  {
    id: 2,
    title: "Young Talents Selected for M5 Youth Championship Squad",
    excerpt:
      "Confederation announces 25 rising stars for the upcoming youth championship tournament.",
    date: "2025-11-17",
    category: "Youth",
    image: "/news/youth-squad.jpg",
  },
  {
    id: 3,
    title: "Women's League Expansion Announced for Next Season",
    excerpt:
      "Two new teams join the prestigious M5 Women's League, marking significant growth for female football.",
    date: "2025-11-16",
    category: "Women",
    image: "/news/womens-expansion.jpg",
  },
  {
    id: 4,
    title: "International Partnership Strengthens M5 Global Presence",
    excerpt:
      "New agreement signed with continental partners to elevate M5 football standards worldwide.",
    date: "2025-11-15",
    category: "International",
    image: "/news/partnership.jpg",
  },
  {
    id: 5,
    title: "Infrastructure Development Plan Unveiled",
    excerpt:
      "Confederation commits to modernizing stadiums and training facilities across all member regions.",
    date: "2025-11-14",
    category: "Infrastructure",
    image: "/news/stadium-plan.jpg",
  },
  {
    id: 6,
    title: "M5 Cup Draw Produces Mouth-Watering Matchups",
    excerpt:
      "Highly anticipated cup draw sets up spectacular quarterfinal encounters for the season.",
    date: "2025-11-13",
    category: "Cup",
    image: "/news/cup-draw.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative py-32 bg-gradient-to-b from-[#0A1E3C] to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
            Latest <span className="text-primary">News</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Official updates, announcements, and stories from the heart of M5
            Football Confederation
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {news.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load More (Future Pagination) */}
          <div className="text-center mt-16">
            <button className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-black transition-all duration-300 text-lg">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
