"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#137573] text-white pt-10 pb-6 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-10">
          
          {/* Column 1: Logo & Contact Info */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-block">
              <Image
                src="/mahadevlogo.png"
                alt="Mahadev Tours & Travels"
                width={180}
                height={70}
                className="h-35 w-auto object-contain brightness-0 invert opacity-95"
              />
            </Link>

            <div className="flex flex-col gap-2.5 text-sm text-white/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-1 text-white" />
                <p className="leading-snug text-xs sm:text-sm">
                  SHOP NO. 2, MAHADEV TOUR AND TRAVELS,<br />
                  Darshan Society, Palanpur Jakatnaka - Canal Road<br />
                  Surat, Gujarat
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-white" />
                <p className="text-xs sm:text-sm">+91 78020 62340 - Ajay Patel</p>
              </div>
            </div>
          </div>

          {/* Column 2: Explore (Quick Links) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link href="/" className="hover:text-white transition-colors underline-offset-4 hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white transition-colors underline-offset-4 hover:underline">Tour Packages</Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-white transition-colors underline-offset-4 hover:underline">Our Vehicles</Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors underline-offset-4 hover:underline">Reviews</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors underline-offset-4 hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get Updates & more!</h3>
            <p className="text-sm text-white/90 mb-3">
              Subscribe to the free newsletter and stay up to date.
            </p>
            <form className="flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-black/20 border border-white/30 rounded-lg px-3.5 py-2 text-sm text-white placeholder-white/65 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-white text-[#137573] font-bold rounded-lg px-3.5 py-2 text-sm hover:bg-gray-100 transition-colors shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col">
          {/* Centered Copyright Line */}
          <div className="w-full flex items-center justify-center gap-4 text-xs text-white/80 mb-4">
            <div className="h-px bg-white/30 flex-grow"></div>
            <p className="whitespace-nowrap px-2 font-medium">
              &copy; {currentYear} Mahadev Tour & Travels
            </p>
            <div className="h-px bg-white/30 flex-grow"></div>
          </div>

          {/* Made with love right aligned */}
          <div className="w-full flex justify-end text-xs text-white/90 font-medium">
            <p className="flex items-center gap-1.5">
              Made with in India <span className="text-red-400 text-sm"></span>  <span className="text-sm">🇮🇳</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}