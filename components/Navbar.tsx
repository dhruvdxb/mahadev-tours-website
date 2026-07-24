'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

// ────────────────────────────────────────────────────────────
// Brand tokens
// ────────────────────────────────────────────────────────────
const BRAND = {
  primary: '#137573',
  primaryDark: '#0f5e5c',
  accent: '#10B981',
  textDark: '#1F2937',
} as const;

const PHONE_NUMBER = '+917802062340';
const WHATSAPP_NUMBER = '917802062340';
const WHATSAPP_MESSAGE =
  'Hi, I would like to know more about Mahadev Tours & Travels packages.';
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Tour Packages', href: '/packages' },
  { name: 'Vehicles', href: '/vehicles' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

const SCROLL_THRESHOLD = 40;
const HIDE_THRESHOLD = 120;

export default function Navbar() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  // Check if we are on the home page for background logic
  const isHomePage = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Scroll behavior: glass-card transform + hide-on-scroll-down / reveal-on-scroll-up
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        setIsScrolled(currentScrollY > SCROLL_THRESHOLD);

        if (currentScrollY > lastScrollY.current && currentScrollY > HIDE_THRESHOLD) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close drawer on Escape for keyboard users
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const headerTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <motion.header
      className={`fixed left-0 right-0 z-50 flex justify-center transition-[top,background-color] duration-500 ${
        isScrolled
          ? 'top-4'
          : `top-0 ${isHomePage ? 'bg-transparent' : 'bg-[#137573]'}` // <-- Changed to your primary brand/footer color!
      }`}
      animate={{
        y: isHidden ? -120 : 0,
        opacity: isHidden ? 0 : 1,
      }}
      transition={headerTransition}
    >
      <div
        className={`w-full max-w-[1280px] h-20 flex items-center justify-between transition-all duration-500 px-6 md:px-8 ${
          isScrolled
            ? 'w-[92%] rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
            : 'w-full bg-transparent border-b border-white/10 py-0'
        }`}
      >
        {/* ── LEFT: Logo ── */}
        <Link href="/" className="flex items-center group" aria-label="Mahadev Tours & Travels — Home">
          <div className="relative flex items-center h-12 sm:h-16 w-[200px] sm:w-[240px] transition-all duration-300">
            <Image
              src="/mahadevlogo.png"
              alt="Mahadev Tours and Travels"
              fill
              priority
              className={`object-contain object-left transition-transform duration-300 group-hover:scale-105 origin-left ${
                isScrolled ? 'brightness-0' : 'brightness-100'
              }`}
            />
          </div>
        </Link>

        {/* ── CENTER: Desktop navigation ── */}
        <nav
          aria-label="Primary"
          className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-sm transition-colors duration-300 ${
            isScrolled ? 'bg-neutral-500/10' : 'bg-white/5'
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  isScrolled
                    ? 'focus-visible:ring-[#137573] focus-visible:ring-offset-white'
                    : 'focus-visible:ring-white focus-visible:ring-offset-transparent'
                } ${
                  isActive
                    ? isScrolled
                      ? 'text-[#137573]'
                      : 'text-white'
                    : isScrolled
                    ? 'text-[#1F2937] hover:text-[#137573]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isScrolled ? 'bg-[#137573]/10' : 'bg-white/15'
                    }`}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 30 }
                    }
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* ── RIGHT: CTAs ── */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className={`p-2.5 rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isScrolled
                ? 'text-[#1F2937] hover:bg-neutral-100 border border-neutral-200/60 focus-visible:ring-[#137573] focus-visible:ring-offset-white'
                : 'text-white hover:bg-white/10 border border-white/20 focus-visible:ring-white'
            }`}
            aria-label="Call Mahadev Tours & Travels"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isScrolled
                ? 'bg-[#137573] text-white hover:bg-[#0f5e5c] focus-visible:ring-[#137573] focus-visible:ring-offset-white'
                : 'bg-white text-[#137573] hover:bg-white/90 focus-visible:ring-white' // Updated CTA text color to match the theme
            }`}
            aria-label="Chat with us on WhatsApp"
          >
            <MessageSquare
              className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-12 ${
                isScrolled ? 'text-white fill-white/20' : 'text-[#137573] fill-[#137573]/20'
              }`}
              aria-hidden="true"
            />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* ── MOBILE: Hamburger trigger ── */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={`lg:hidden p-2 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isScrolled
              ? 'text-[#1F2937] hover:bg-neutral-100 focus-visible:ring-[#137573] focus-visible:ring-offset-white'
              : 'text-white hover:bg-white/10 focus-visible:ring-white'
          }`}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── MOBILE: Slide-in drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
              aria-hidden="true"
            />

            <motion.div
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { type: 'spring', damping: 28, stiffness: 260 }
              }
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-white/95 backdrop-blur-2xl border-l border-neutral-200/60 shadow-2xl z-50 flex flex-col justify-between p-6 sm:p-8 lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                  <div className="relative w-32 h-10">
                    <Image
                      src="/mahadevlogo.png"
                      alt="Mahadev Tours and Travels"
                      fill
                      className="object-contain object-left brightness-0"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137573]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav aria-label="Mobile primary" className="flex flex-col gap-2 pt-6">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: prefersReducedMotion ? 0 : index * 0.06 + 0.1,
                          duration: prefersReducedMotion ? 0 : undefined,
                        }}
                      >
                        <Link
                          href={item.href}
                          aria-current={isActive ? 'page' : undefined}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137573] ${
                            isActive
                              ? 'bg-[#137573]/10 text-[#137573]'
                              : 'text-neutral-700 hover:bg-neutral-50 hover:text-[#137573]'
                          }`}
                        >
                          <span>{item.name}</span>
                          <span className="text-xs text-neutral-400" aria-hidden="true">
                            →
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
                className="pt-6 border-t border-neutral-100 flex flex-col gap-3"
              >
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-neutral-200 text-neutral-800 font-medium text-sm hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137573]"
                >
                  <Phone className="w-4 h-4 text-[#137573]" aria-hidden="true" />
                  <span>Call +91 78020 62340</span>
                </a>

                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#137573] text-white font-medium text-sm shadow-lg shadow-[#137573]/20 hover:bg-[#0f5e5c] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137573] focus-visible:ring-offset-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#10B981] fill-[#10B981]/30" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}