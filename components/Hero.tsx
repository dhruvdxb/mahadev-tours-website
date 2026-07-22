"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, ChevronDown, Star } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={ref} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Parallax - Upgraded to Next.js Image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/CoverPhoto.png"
          alt="Mahadev Tours Cover"
          fill
          priority // Forces the browser to load this immediately for better mobile speed scores
          sizes="100vw"
          className="object-cover scale-105"
        />
        {/* Strictly black gradient so the text is readable but the image shines through */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
      </motion.div>

      {/* Floating Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl mix-blend-screen"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl mix-blend-screen"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide mb-6">
            Premium Travel Experiences Since 2016
          </span>
        </motion.div>

        {/* Scaled down text-5xl to text-4xl on base mobile to prevent overflow */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
        >
          Epic Journeys. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-accent">
            Divine Destinations.
          </span>
        </motion.h1>

        {/* Adjusted padding and font sizes for mobile reading */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-2xl text-gray-300 font-light max-w-2xl px-2"
        >
          Experience the soul of India with Mahadev Tours. Premium sleeper coaches, expertly curated itineraries, and moments that last a lifetime.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link 
            href="https://wa.me/917802062340" 
            target="_blank"
            className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </Link>
          
          <Link 
            href="/packages"
            className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-white/20 w-full sm:w-auto"
          >
            View Packages
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10"
        >
          {/* Overlapping Avatars & Text */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=32" alt="Traveler" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
              <img src="https://i.pravatar.cc/100?img=47" alt="Traveler" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
              <img src="https://i.pravatar.cc/100?img=12" alt="Traveler" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
            </div>
            <p className="text-sm text-gray-300 font-medium">Join 10,000+ Happy Travelers</p>
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden sm:block w-px h-5 bg-white/20"></div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-300 font-medium">
              4.9/5 <span className="text-gray-400 font-normal">Rating</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}