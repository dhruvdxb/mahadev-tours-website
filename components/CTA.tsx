"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function CTA() {
  const whatsappNumber = "917802062340";

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with primary brand color and glowing effect */}
      <div className="absolute inset-0 bg-primary z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight mb-6"
        >
          Ready to Start Your Journey?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-light"
        >
          Book your premium sleeper coach, family picnic, or religious tour today. Ajaybhai and our team are ready to assist you 24/7.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href={`https://wa.me/${whatsappNumber}?text=Hi Ajaybhai, I want to inquire about a tour package.`}
            target="_blank"
            className="flex items-center justify-center gap-2 bg-background text-primary px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </Link>

          <Link 
            href={`tel:+${whatsappNumber}`}
            className="flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 backdrop-blur-md px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-foreground/20 transition-colors duration-300 w-full sm:w-auto"
          >
            <PhoneCall className="w-5 h-5" />
            Call Us Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}