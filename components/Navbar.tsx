"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check if we are on the homepage
  const isHomePage = pathname === "/";
  
  // Show the dark glass background if we scroll down, OR if we are NOT on the homepage
  const showGlass = scrolled || !isHomePage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          showGlass
            ? "bg-[#0B0F14]/80 backdrop-blur-md border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Updated code */}
        <div className="mx-auto flex h-22 md:h-26 max-w-7xl items-center justify-between px-6 md:px-10">
          
          {/* Logo (Image-based) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/mahadevlogo.png"
              alt="Mahadev Tours & Travels"
              width={200}
              height={120}
              priority
              className="h-20 md:h-25 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-[15px] font-medium text-gray-300 transition hover:text-white"
                >
                  {item.name}

                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-emerald-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="https://wa.me/917802062340"
              target="_blank"
              className="
              hidden
              md:flex
              items-center
              gap-2
              rounded-full
              bg-emerald-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-emerald-500
              hover:shadow-lg
              "
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="
              fixed
              right-0
              top-0
              z-50
              h-full
              w-80
              bg-[#08111d]
              border-l
              border-white/10
              p-8
              "
            >
              <div className="flex justify-between items-center mb-8">
                 <Image
                  src="/mahadevlogo.png"
                  alt="Mahadev Tours & Travels"
                  width={150}
                  height={80}
                  className="h-10 w-auto object-contain"
                />
                <button onClick={() => setMobileOpen(false)}>
                  <X className="text-white" size={28} />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-8">
                {links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-xl ${
                      pathname === item.href
                        ? "text-emerald-400"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="https://wa.me/917802062340"
                  className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-emerald-600
                  py-3
                  text-white
                  "
                >
                  <MessageCircle size={18} />
                  Book on WhatsApp
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}