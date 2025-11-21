"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import NewsCard from "./news-card"

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else setItemsPerView(3)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const news = [
    {
      id: 1,
      title: "M5 League Finals Draw Record Viewership",
      excerpt:
        "Historic finals match draws unprecedented international attention with record-breaking viewership across all regions.",
      date: "2025-11-18",
      category: "League",
      image: "/football-stadium-final-match.jpg",
    },
    {
      id: 2,
      title: "Young Talents Selected for M5 Youth Championship",
      excerpt: "Confederation announces 25 rising stars for the upcoming youth championship tournament.",
      date: "2025-11-17",
      category: "Youth",
      image: "/young-football-players-training.jpg",
    },
    {
      id: 3,
      title: "Women's League Expansion Announced",
      excerpt: "Two new teams join the prestigious M5 Women's League, marking significant growth for female football.",
      date: "2025-11-16",
      category: "Women",
      image: "/women-football-players-celebration.jpg",
    },
    {
      id: 4,
      title: "International Partnership Strengthens M5",
      excerpt: "New agreement signed with continental partners to elevate M5 football standards worldwide.",
      date: "2025-11-15",
      category: "International",
      image: "/international-football-confederation-meeting.jpg",
    },
  ]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(news.length - itemsPerView + 1, 1))
  }

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.max(news.length - itemsPerView + 1, 1)) % Math.max(news.length - itemsPerView + 1, 1),
    )
  }

  return (
    <section className="py-20 bg-secondary/5 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Latest News</h2>
            <p className="text-muted-foreground">Stay updated with M5 football developments</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {news.map((article) => (
              <div key={article.id} className="flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden gap-2 mt-8 justify-center">
          <button
            onClick={prev}
            className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-3 text-primary font-bold hover:text-foreground transition-colors border border-primary rounded-lg hover:bg-primary/10"
          >
            View All News →
          </a>
        </div>
      </div>
    </section>
  )
}
