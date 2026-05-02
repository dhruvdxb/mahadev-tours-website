"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <span className="text-yellow-400 font-bold text-lg">
            Mahadev Tours
          </span>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/vehicles">Vehicles</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919XXXXXXXXX"
          target="_blank"
          className="bg-green-500 px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}