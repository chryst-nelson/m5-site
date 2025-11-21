"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Globe,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const sponsors = [
  //   { name: "Nike", logo: "/sponsors/nike-white.svg" },
  //   { name: "Adidas", logo: "/sponsors/adidas-white.svg" },
  //   { name: "Puma", logo: "/sponsors/puma-white.svg" },
  //   { name: "Visa", logo: "/sponsors/visa-white.svg" },
  //   { name: "Coca-Cola", logo: "/sponsors/cocacola-white.svg" },
  //   { name: "Qatar Airways", logo: "/sponsors/qatar-white.svg" },
  //   { name: "MTN", logo: "/sponsors/mtn-white.svg" },
  //   { name: "Orange", logo: "/sponsors/orange-white.svg" },
  // ];

  return (
    <footer className="bg-[#0A1E3C] text-white border-t border-white/10">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-4 bg-primary text-black rounded-full shadow-2xl hover:scale-110 transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Sponsors Carousel Section */}
      {/* <div className="bg-black/30 py-10 border-y border-white/10">
        <div className="max-w-screen-2xl mx-auto px-6">
          <p className="text-center text-sm uppercase tracking-wider text-white/70 mb-8">
            Official Partners & Sponsors
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {sponsors.map((sponsor) => (
              <img
                key={sponsor.name}
                src={sponsor.logo}
                alt={`${sponsor.name} - Official Sponsor`}
                className="h-10 md:h-12 object-contain hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Logo + Description */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-yellow-500 rounded-xl flex items-center justify-center font-black text-black text-2xl shadow-xl group-hover:scale-105 transition-transform">
                M5
              </div>
              <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                M5FC
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              The M5 Football Confederation is the governing body of football
              across the continent, organizing premier competitions and
              developing the beautiful game at all levels.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-3 bg-white/10 rounded-lg hover:bg-primary hover:text-black transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-lg hover:bg-primary hover:text-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-lg hover:bg-primary hover:text-black transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-lg hover:bg-primary hover:text-black transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-primary">
              Competitions
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/competitions/m5-league"
                  className="hover:text-primary transition-colors"
                >
                  M5 League
                </Link>
              </li>
              <li>
                <Link
                  href="/competitions/m5-cup"
                  className="hover:text-primary transition-colors"
                >
                  M5 Cup
                </Link>
              </li>
              <li>
                <Link
                  href="/competitions/youth"
                  className="hover:text-primary transition-colors"
                >
                  Youth Championships
                </Link>
              </li>
              <li>
                <Link
                  href="/competitions/women"
                  className="hover:text-primary transition-colors"
                >
                  Women's League
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5 text-primary">About</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About M5FC
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="hover:text-primary transition-colors"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/leadership"
                  className="hover:text-primary transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5 text-primary">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/integrity"
                  className="hover:text-primary transition-colors"
                >
                  Integrity Unit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/40 py-6 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/60">
            © {new Date().getFullYear()} M5 Football Confederation. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              English
            </button>
            <p className="text-white/60">
              Developed with ❤️ for African Football
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
