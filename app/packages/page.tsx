"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, MapPin, Calendar, Clock, Users, SlidersHorizontal } from "lucide-react";
import { TourPackage } from "@/types";

// Extended Mock Data for the full listing
const allPackages: (TourPackage & { category: string })[] = [
  {
    id: "pkg-1",
    title: "Maharashtra Jyotirlinga Darshan",
    destination: "Maharashtra",
    image: "https://images.unsplash.com/photo-1621323314561-39c43d2c179c?q=80&w=2000&auto=format&fit=crop",
    duration: "3 Days / 2 Nights",
    price: 5001,
    departureDate: "July 23, 2026",
    seatsAvailable: 15,
    isPopular: true,
    category: "Religious",
  },
  {
    id: "pkg-2",
    title: "Ujjain & Omkareshwar Darshan",
    destination: "Madhya Pradesh",
    image: "https://images.unsplash.com/photo-1627883906231-150cc36166e5?q=80&w=2000&auto=format&fit=crop",
    duration: "3 Days / 2 Nights",
    price: 5100,
    departureDate: "July 9 & 23, 2026",
    seatsAvailable: 12,
    category: "Religious",
  },
  {
    id: "pkg-3",
    title: "Saputara Monsoon Picnic",
    destination: "Saputara, Gujarat",
    image: "https://images.unsplash.com/photo-1596885375522-83bce49da8b3?q=80&w=2000&auto=format&fit=crop",
    duration: "1 Day",
    price: 600,
    departureDate: "July 12 & 25, 2026",
    seatsAvailable: 25,
    category: "Monsoon",
  },
  {
    id: "pkg-4",
    title: "Statue of Unity & Temples",
    destination: "Kevadia, Gujarat",
    image: "https://images.unsplash.com/photo-1605648937007-8b0e77478d10?q=80&w=2000&auto=format&fit=crop",
    duration: "1 Day",
    price: 600,
    departureDate: "July 26, 2026",
    seatsAvailable: 20,
    category: "Weekend Trip",
  },
  {
    id: "pkg-5",
    title: "Dwarka Somnath Premium",
    destination: "Saurashtra",
    image: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=2000&auto=format&fit=crop",
    duration: "4 Days / 3 Nights",
    price: 8500,
    departureDate: "Every Friday",
    seatsAvailable: 8,
    category: "Religious",
  },
  {
    id: "pkg-6",
    title: "Padamdungari Nature Trail",
    destination: "Unai, Gujarat",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop", // Placeholder forest
    duration: "1 Day",
    price: 500,
    departureDate: "July 5 & 18, 2026",
    seatsAvailable: 30,
    category: "Monsoon",
  }
];

const categories = ["All", "Religious", "Monsoon", "Weekend Trip", "Family"];

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const whatsappNumber = "917802062340";

  // Filter Logic
  const filteredPackages = allPackages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || pkg.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
        >
          Explore Packages
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Discover curated journeys crafted for spiritual peace, weekend thrills, and family bonding.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar (Sticky Filters) */}
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-32 space-y-8 bg-muted/30 p-6 rounded-[2rem] border border-border">
            <div className="flex items-center gap-2 mb-2">
              <SlidersHorizontal className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Filters</h2>
            </div>

            {/* Search Input */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Search Destination</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="e.g. Somnath, Saputara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-sm"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Categories</label>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      activeCategory === cat 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-background border border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg, index) => (
                <motion.div 
                  key={pkg.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col bg-background border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {pkg.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {pkg.destination}
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
                      {pkg.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">{pkg.departureDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Price</span>
                        <span className="text-lg font-bold text-foreground">₹{pkg.price.toLocaleString('en-IN')}</span>
                      </div>
                      
                      <Link 
                        href={`https://wa.me/${whatsappNumber}?text=Hi Ajaybhai, I want to book the ${pkg.title} package.`}
                        target="_blank"
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-lg text-muted-foreground">No packages found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}