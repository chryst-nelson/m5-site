// components/news-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  date: string; // "2025-11-18"
  category: string;
  image?: string;
};

interface NewsCardProps {
  article: Article;
}

// Dynamic category badge colors (matches real confederation style)
const categoryStyles: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  League: {
    bg: "bg-yellow-500/15",
    text: "text-yellow-500",
    border: "border-yellow-500/40",
  },
  Youth: {
    bg: "bg-green-500/15",
    text: "text-green-500",
    border: "border-green-500/40",
  },
  Women: {
    bg: "bg-pink-500/15",
    text: "text-pink-500",
    border: "border-pink-500/40",
  },
  Cup: {
    bg: "bg-purple-500/15",
    text: "text-purple-500",
    border: "border-purple-500/40",
  },
  International: {
    bg: "bg-blue-500/15",
    text: "text-blue-500",
    border: "border-blue-500/40",
  },
  Infrastructure: {
    bg: "bg-orange-500/15",
    text: "text-orange-500",
    border: "border-orange-500/40",
  },
  default: {
    bg: "bg-primary/15",
    text: "text-primary",
    border: "border-primary/40",
  },
};

export default function NewsCard({ article }: NewsCardProps) {
  const { bg, text, border } =
    categoryStyles[article.category] || categoryStyles.default;

  return (
    <Link
      href={`/news/${article.id}`}
      className="group block h-full transform-gpu"
      aria-label={`Read article: ${article.title}`}
    >
      <article className="h-full bg-card/90 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-4 flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-muted to-background">
          <Image
            src={
              article.image ||
              "/placeholder.svg?height=600&width=800&text=M5+News"
            }
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
          />

          {/* Dark overlay + Category Badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div
            className={`absolute bottom-4 left-4 px-4 py-2 rounded-full border ${bg} ${text} ${border} text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg`}
          >
            {article.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-5">
              {article.excerpt}
            </p>
          </div>

          {/* Footer: Date + Read More */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <time dateTime={article.date}>
                {format(new Date(article.date), "dd MMM yyyy")}
              </time>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4" />
              <span>3 min read</span>
            </div>

            <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300">
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
