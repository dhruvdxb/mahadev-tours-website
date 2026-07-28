"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Bus, Utensils, Info, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 
import { tourPackages } from "@/data/packages"; // <-- Imported centralized data

export default function Packages() {
  // Specifically select Maharashtra Jyotirlinga (1), Ashtavinayak (9), and Saputara (5)
  const targetIds = [1, 9, 5];
  const displayedPackages = tourPackages
    .filter(pkg => targetIds.includes(pkg.id))
    .sort((a, b) => targetIds.indexOf(a.id) - targetIds.indexOf(b.id));

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Upcoming Departures
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              Explore our handpicked spiritual journeys and monsoon getaways.
            </p>
          </div>
        </div>

        {/* Dynamic Grid: Maps through the 3 specific packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPackages.map((pkg, index) => {
            const whatsappMessage = encodeURIComponent(`Hello Ajay Patel, I want to inquire about the ${pkg.title} package.`);
            const whatsappLink = `https://wa.me/917802062340?text=${whatsappMessage}`;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Placeholder Container */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100 flex items-center justify-center shrink-0 block">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                    <Clock className="w-3.5 h-3.5 text-gray-700" />
                    {pkg.duration}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                    {pkg.location}
                  </div>
                  
                  {/* Title (Forced to min-height so 1-line titles match 2-line titles) */}
                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#137573] transition-colors line-clamp-2 min-h-[3.5rem] shrink-0">
                    {pkg.title}
                  </h3>

                  {/* Optional Description (Forced to 2 lines max) */}
                  {pkg.description && (
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 shrink-0">
                      {pkg.description}
                    </p>
                  )}

                  {/* Details List */}
                  <div className="space-y-2.5 mb-6 bg-gray-50/80 p-4 rounded-2xl border border-gray-100 shrink-0">
                    <div className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Calendar className="w-4 h-4 text-[#137573] shrink-0 mt-0.5" />
                      <span className="font-medium line-clamp-1" title={pkg.departureDates?.join(", ")}>
                        {pkg.departureDates?.join(", ") || "Contact for dates"}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Bus className="w-4 h-4 text-[#137573] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{pkg.vehicle}</span>
                    </div>
                    
                    <div className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Utensils className="w-4 h-4 text-[#137573] shrink-0 mt-0.5" />
                      <span className="line-clamp-1" title={pkg.inclusions.join(", ")}>{pkg.inclusions.join(", ")}</span>
                    </div>

                    {/* Optional Notes */}
                    {pkg.notes && (
                      <div className="flex items-start gap-2.5 text-xs text-gray-400 pt-1">
                        <Info className="w-4 h-4 shrink-0" />
                        <span className="italic line-clamp-1" title={pkg.notes}>{pkg.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* Pricing and CTA (Forced to bottom, properly aligned) */}
                  <div className="mt-auto pt-2 flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-0.5">
                        Starting From
                      </p>
                      <p className="text-2xl font-black text-[#137573]">
                        ₹{pkg.price.startingFrom.toLocaleString("en-IN")}
                      </p>
                      {/* Truncated price details so it stays on one line */}
                      <p className="text-xs text-gray-400 font-medium mt-0.5 truncate pr-2" title={pkg.price.details}>
                        {pkg.price.details}
                      </p>
                    </div>

                    <Link
                      href={whatsappLink}
                      target="_blank"
                      className="shrink-0 bg-[#137573] text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#0f5e5c] transition-colors whitespace-nowrap"
                    >
                      Book on WhatsApp
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Packages Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/packages"
            className="group flex items-center gap-2 bg-transparent border-2 border-[#137573] text-[#137573] px-8 py-3.5 rounded-full text-base font-bold hover:bg-[#137573] hover:text-white transition-all duration-300 hover:scale-105"
          >
            View All Packages
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}