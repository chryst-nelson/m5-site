"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu on any navigation
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "bg-[#0A1E3C]",
        isScrolled && "bg-[#07152E] shadow-2xl shadow-black/60"
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group"
            aria-label="M5 Football Confederation - Home"
          >
            <div className="relative">
              <div className="w-11 h-11 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-yellow-500 rounded-xl flex items-center justify-center font-black text-background text-lg lg:text-2xl shadow-xl group-hover:scale-105 transition-all duration-300">
                M5
              </div>
              <div className="absolute -inset-1 bg-primary/30 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <span className="hidden lg:inline text-2xl font-bold tracking-wider bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              M55FC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink href="/competitions" onClick={closeMobileMenu}>
              Competitions
            </NavLink>
            <NavLink href="/news" onClick={closeMobileMenu}>
              News
            </NavLink>
            <NavLink href="/live" onClick={closeMobileMenu}>
              Live Scores
            </NavLink>
            <NavLink href="/teams" onClick={closeMobileMenu}>
              Teams
            </NavLink>

            <Link
              href="/watch"
              onClick={closeMobileMenu}
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
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#0A1E3C] border-t border-white/10",
            isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          )}
        >
          <div className="space-y-1">
            <MobileNavLink href="/" onClick={closeMobileMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/competitions" onClick={closeMobileMenu}>
              Competitions
            </MobileNavLink>
            <MobileNavLink href="/news" onClick={closeMobileMenu}>
              News
            </MobileNavLink>
            <MobileNavLink href="/live" onClick={closeMobileMenu}>
              Live Scores
            </MobileNavLink>
            <MobileNavLink href="/teams" onClick={closeMobileMenu}>
              Teams
            </MobileNavLink>

            <div className="px-6 pt-4">
              <Link
                href="/watch"
                onClick={closeMobileMenu}
                className="block w-full text-center py-4 bg-gradient-to-r from-primary to-yellow-600 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                Watch Live Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop Link
function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-3 rounded-lg font-medium text-white hover:bg-white/10 hover:text-primary transition-all duration-200"
    >
      {children}
    </Link>
  );
}

// Mobile Link
function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-6 py-3 text-white/90 hover:bg-white/10 hover:text-primary transition-colors rounded-lg mx-3 font-medium"
    >
      {children}
    </Link>
  );
}
