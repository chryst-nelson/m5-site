// components/news-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  date: string; // ISO string "2025-11-18"
  category: string;
  image: string;
};

interface NewsCardProps {
  article: Article;
}

const categoryColors: Record<string, string> = {
  League: "bg-yellow-500/20 text-yellow-500 border-yellow-500/50",
  Youth: "bg-green-500/20 text-green-500 border-green-500/50",
  Women: "bg-pink-500/20 text-pink-500 border-pink-500/50",
  Cup: "bg-purple-500/20 text-purple-500 border-purple-500/50",
  International: "bg-blue-500/20 text-blue-500 border-blue-500/50",
  Infrastructure: "bg-orange-500/20 text-orange-500 border-orange-500/50",
};

export default function NewsCard({ article }: NewsCardProps) {
  const colorClass =
    categoryColors[article.category] ||
    "bg-primary/20 text-primary border-primary/50";

  return (
    <Link href={`/news/${article.id}`} className="group block h-full">
      <article className="h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Category Badge */}
          <div
            className={`absolute bottom-4 left-4 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider ${colorClass} backdrop-blur-sm`}
          >
            {article.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/50">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {format(new Date(article.date), "dd MMM yyyy")}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />3 min read
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
