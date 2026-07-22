"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Star,
} from "lucide-react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax Effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src="/CoverPhoto.png"
          alt="Mahadev Tours Cover"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </motion.div>

      {/* Floating Blur Shapes */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl mix-blend-screen"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl mix-blend-screen"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto mt-16 flex max-w-5xl flex-col items-center px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl"
        >
          Every Journey A Blessing
          <br />

          <span className="mt-2 block bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl">
            Faith, Comfort &amp; Adventure.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mt-6 max-w-2xl px-2 text-base font-light leading-relaxed text-gray-300 sm:text-lg md:text-xl"
        >
          It&apos;s all About Refreshment and Enjoyment with your Own Soul.
          <br />
          Refresh your Body and Mind...
          <br />
          Get the Best Travel Experience With Us...
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <Link
            href="https://wa.me/917802062340"
            target="_blank"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Book on WhatsApp
          </Link>

          <Link
            href="/packages"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
          >
            View Packages

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="mt-8 flex flex-col items-center gap-4 rounded-full border border-white/10 bg-black/20 px-6 py-3 backdrop-blur-sm sm:flex-row sm:gap-6"
        >
          {/* Travelers */}
          <div className="flex items-center gap-3">
            <div className="-space-x-3 flex">
              <img
                src="https://i.pravatar.cc/100?img=32"
                alt="Traveler"
                className="h-8 w-8 rounded-full border-2 border-black object-cover"
              />
              <img
                src="https://i.pravatar.cc/100?img=47"
                alt="Traveler"
                className="h-8 w-8 rounded-full border-2 border-black object-cover"
              />
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Traveler"
                className="h-8 w-8 rounded-full border-2 border-black object-cover"
              />
            </div>

            <p className="text-sm font-medium text-gray-300">
              Join 1,100+ Happy Travelers
            </p>
          </div>

          {/* Divider */}
          <div className="hidden h-5 w-px bg-white/20 sm:block" />

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="h-4 w-4 fill-current"
                />
              ))}
            </div>

            <p className="text-sm font-medium text-gray-300">
              4.9/5{" "}
              <span className="font-normal text-gray-400">
                Rating
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-8 w-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}