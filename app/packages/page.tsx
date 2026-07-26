"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Search, SlidersHorizontal, Bus, Utensils, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { tourPackages } from "@/data/packages"; 

const categoriesList = ["All", "Religious", "Monsoon", "Weekend Trip", "Family"];

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPackages = tourPackages
    .filter((pkg) => {
      const matchesSearch = 
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "All" || pkg.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="min-h-screen bg-gray-50 pt-36 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Explore Packages
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Discover curated journeys crafted for spiritual peace, weekend thrills, and family bonding.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* SIDEBAR FILTERS */}
          <aside className="w-full lg:w-1/4 shrink-0">
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-gray-900" />
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  Search Destination
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. Somnath, Pune..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#137573]/20 focus:border-[#137573] transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-3">
                  Categories
                </label>
                <div className="flex flex-col gap-2">
                  {categoriesList.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        selectedCategory === category
                          ? "bg-[#137573] text-white shadow-md shadow-[#137573]/20"
                          : "bg-white text-gray-600 border border-gray-200 hover:border-[#137573]/50 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN GRID */}
          <div className="w-full lg:w-3/4">
            
            {filteredPackages.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No packages found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="mt-4 text-[#137573] font-bold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPackages.map((pkg, index) => {
                  const whatsappMessage = encodeURIComponent(`Hello Ajay Patel, I want to inquire about the ${pkg.title} package.`);
                  const whatsappLink = `https://wa.me/917802062340?text=${whatsappMessage}`;

                  return (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                    >
                      {/* Image Linked to Dynamic Page */}
                      <Link href={`/packages/${pkg.id}`} className="relative h-56 w-full overflow-hidden bg-gray-100 flex items-center justify-center shrink-0 block">
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
                      </Link>

                      {/* Content Container */}
                      <div className="p-6 flex flex-col flex-grow">
                        
                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2 shrink-0">
                          <MapPin className="w-3.5 h-3.5" />
                          {pkg.location}
                        </div>
                        
                        {/* Title (Forced to min-height so 1-line titles match 2-line titles) */}
                        <Link href={`/packages/${pkg.id}`} className="shrink-0">
                          <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#137573] transition-colors line-clamp-2 min-h-[3.5rem]">
                            {pkg.title}
                          </h3>
                        </Link>

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
            )}
          </div>

        </div>
      </div>
    </main>
  );
}