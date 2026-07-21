"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // If we are not on the homepage, we always want the "scrolled" (solid) look
  // so the text is readable on the white background of the sub-pages.
  const isHomePage = pathname === "/";
  const isSolid = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isSolid
          ? "bg-background/90 backdrop-blur-xl shadow-sm py-4"
          : "bg-gradient-to-b from-black/50 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span 
            className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
              isSolid ? "text-primary" : "text-white"
            }`}
          >
            Mahadev Tours & Travels<span className={isSolid ? "text-accent" : "text-white"}>.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors duration-300 ${
                  isActive 
                    ? (isSolid ? "text-primary" : "text-white") 
                    : (isSolid ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white")
                }`}
              >
                {link.name}
                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full ${
                      isSolid ? "bg-primary" : "bg-white"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="https://wa.me/917802062340" 
            target="_blank"
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg ${
              isSolid 
                ? "bg-primary text-primary-foreground shadow-primary/20 hover:bg-primary/90" 
                : "bg-white text-primary shadow-black/20 hover:bg-white/90"
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            Book on WhatsApp
          </Link>

          <button
            className={`md:hidden p-2 transition-colors ${
              isSolid ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-background p-4 flex flex-col z-50 md:hidden"
          >
            <div className="flex justify-between items-center mb-8 px-2">
              <span className="text-2xl font-black tracking-tighter text-primary">Mahadev Tour & Travels</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-muted rounded-full">
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-semibold px-4 py-4 rounded-2xl transition-colors ${
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="https://wa.me/917802062340"
                target="_blank"
                className="mt-6 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}