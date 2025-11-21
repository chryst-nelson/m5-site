"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompetitionsOpen, setIsCompetitionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const desktopDropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  // Scroll effect: fully solid navy after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hover handling for desktop dropdown
  const handleMouseEnter = () => {
    if (desktopDropdownTimeout.current)
      clearTimeout(desktopDropdownTimeout.current);
    setIsCompetitionsOpen(true);
  };

  const handleMouseLeave = () => {
    desktopDropdownTimeout.current = setTimeout(() => {
      setIsCompetitionsOpen(false);
    }, 150);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        // Base: Solid dark navy (your requested background)
        "bg-[#0A1E3C]", // ← CAF/Official dark navy
        // When scrolled → slightly deeper + stronger shadow
        isScrolled && "bg-[#07152E] shadow-2xl shadow-black/50"
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="M5 Football Confederation - Home"
          >
            <div className="relative">
              <div className="w-11 h-11 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-yellow-500 rounded-xl flex items-center justify-center font-black text-background text-lg lg:text-2xl shadow-xl group-hover:scale-105 transition-all duration-300">
                M5
              </div>
              <div className="absolute -inset-1 bg-primary/30 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <span className="hidden lg:inline text-2xl font-bold tracking-wider bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              M5FC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>

            {/* Competitions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-expanded={isCompetitionsOpen}
                className="flex items-center gap-1.5 px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="font-medium text-white">Competitions</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-white transition-transform duration-300",
                    isCompetitionsOpen && "rotate-180 text-primary"
                  )}
                />
              </button>

              {/* Dropdown */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#0A1E3C] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top",
                  isCompetitionsOpen
                    ? "opacity-100 visible scale-100"
                    : "opacity-0 invisible scale-95"
                )}
              >
                <div className="p-4 space-y-1">
                  {[
                    { name: "M5 League", href: "/competitions/m5-league" },
                    { name: "M5 Cup", href: "/competitions/m5-cup" },
                    {
                      name: "Youth Championships",
                      href: "/competitions/youth",
                    },
                    { name: "Women's League", href: "/competitions/women" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-3 rounded-lg hover:bg-primary hover:text-black transition-all font-medium"
                      onClick={() => setIsCompetitionsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-white/10 my-3" />
                  <Link
                    href="/competitions"
                    className="block px-5 py-3 text-primary font-bold hover:bg-white/10 rounded-lg transition-all"
                  >
                    View All Competitions →
                  </Link>
                </div>
              </div>
            </div>

            <NavLink href="/news">News</NavLink>
            <NavLink href="/live">Live Scores</NavLink>
            <NavLink href="/teams">Teams</NavLink>

            {/* CTA */}
            <Link
              href="/watch"
              className="ml-6 px-8 py-3 bg-gradient-to-r from-primary to-yellow-600 text-black font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Watch Live
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-3 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#0A1E3C]",
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="py-4 space-y-1 border-t border-white/10">
            {/* Mobile links same as before... */}
            <MobileNavLink href="/">Home</MobileNavLink>
            <button
              onClick={() => setIsCompetitionsOpen(!isCompetitionsOpen)}
              className="w-full flex items-center justify-between px-6 py-3 hover:bg-secondary transition-colors"
            >
              <span className="font-medium">Competitions</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 transition-transform",
                  isCompetitionsOpen && "rotate-180"
                )}
              />
            </button>
            {isCompetitionsOpen && (
              <div className="bg-secondary/30 space-y-1">
                {[
                  "M5 League",
                  "M5 Cup",
                  "Youth Championships",
                  "Women's League",
                ].map((item) => (
                  <MobileNavLink key={item} href="/competitions">
                    {item}
                  </MobileNavLink>
                ))}
              </div>
            )}
            <MobileNavLink href="/news">News</MobileNavLink>
            <MobileNavLink href="/live">Live Scores</MobileNavLink>
            <MobileNavLink href="/teams">Teams</MobileNavLink>
            <div className="px-6 pt-4">
              <Link
                href="/watch"
                className="block w-full text-center py-4 bg-gradient-to-r from-primary to-yellow-600 text-background font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Watch Live Now
              </Link>
            </div>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper components unchanged
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-3 rounded-lg font-medium text-white hover:bg-white/10 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-6 py-3 hover:bg-secondary hover:text-primary transition-colors rounded-lg mx-3"
      onClick={() => document.getElementById("mobile-menu")?.click()} // close menu
    >
      {children}
    </Link>
  );
}
