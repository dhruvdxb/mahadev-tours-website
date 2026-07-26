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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Upcoming Departures
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
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
                className="group bg-card rounded-[2rem] border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Placeholder Container - Switched to Next.js Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                    <Clock className="w-3.5 h-3.5" />
                    {pkg.duration}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-bold uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {pkg.location}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>

                  {/* Optional Description */}
                  {pkg.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {pkg.description}
                    </p>
                  )}

                  {/* Details List */}
                  <div className="space-y-2.5 mb-6 bg-muted/30 p-4 rounded-xl border border-border/50">
                    <div className="flex items-start gap-2.5 text-sm text-foreground">
                      <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium">{pkg.departureDates?.join(", ") || "Contact for dates"}</span>
                    </div>
                    
                    <div className="flex items-start gap-2.5 text-sm text-foreground">
                      <Bus className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{pkg.vehicle}</span>
                    </div>
                    
                    <div className="flex items-start gap-2.5 text-sm text-foreground">
                      <Utensils className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{pkg.inclusions.join(", ")}</span>
                    </div>

                    {/* Optional Notes */}
                    {pkg.notes && (
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground pt-1">
                        <Info className="w-4 h-4 shrink-0" />
                        <span className="italic">{pkg.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* Pricing and CTA */}
                  <div className="mt-auto pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-auto text-center sm:text-left">
                      {/* FIXED FONT SIZES HERE FOR MOBILE */}
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        Starting From
                      </p>
                      <p className="text-2xl font-black text-primary">
                        ₹{pkg.price.startingFrom.toLocaleString("en-IN")}
                      </p>
                      <p className="text-xs text-muted-foreground font-medium mt-1 max-w-[150px] leading-tight mx-auto sm:mx-0">
                        {pkg.price.details}
                      </p>
                    </div>

                    <Link
                      href={whatsappLink}
                      target="_blank"
                      className="w-full sm:w-auto text-center bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 hover:scale-105 transition-all duration-300"
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
            className="group flex items-center gap-2 bg-transparent border-2 border-primary text-primary px-8 py-3.5 rounded-full text-base font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            View All Packages
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}