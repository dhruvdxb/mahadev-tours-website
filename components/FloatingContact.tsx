"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function FloatingContact() {
  const PHONE_NUMBER = "+917802062340";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={`tel:${PHONE_NUMBER}`}
        className="flex items-center justify-center w-14 h-14 bg-[#111111] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Call Us"
      >
        <Phone className="w-7 h-7 fill-white" />
      </Link>
    </motion.div>
  );
}