"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Search, SlidersHorizontal, Bus, Utensils, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <-- Added Next.js Image component

// 1. Define the type combining categories and image/details
type TourPackage = {
  id: number;
  title: string;
  duration: string;
  departureDates: string[];
  vehicle: string;
  inclusions: string[];
  price: {
    startingFrom: number;
    details: string;
  };
  location: string;
  categories: string[];
  description?: string;
  notes?: string;
  image: string;
};

// 2. The JSON data (Merged with local images and categories)
const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: "Maharashtra Jyotirlinga (Grishneshwar, Bhimashankar & Trimbakeshwar)",
    duration: "3 Days",
    departureDates: ["July 23 (Thursday Night)"],
    vehicle: "Sleeper AC Bus",
    inclusions: ["Meals", "Stay"],
    price: { startingFrom: 5001, details: "₹5,001 (Upper Berth) / ₹5,501 (Lower Berth)" },
    location: "Maharashtra",
    categories: ["Religious"],
    image: "/Images/Maharashtra Jyotirlinga.png"
  },
  {
    id: 2,
    title: "Mayadevi Waterfall Monsoon Special",
    duration: "1 Day",
    departureDates: ["July 4 (Saturday)", "July 19 (Sunday)"],
    vehicle: "Seating Bus",
    inclusions: ["Tea", "Breakfast", "Meals"],
    price: { startingFrom: 900, details: "₹900 (All Inclusive)" },
    location: "Gujarat",
    categories: ["Monsoon", "Weekend Trip"],
    image: "/Images/Mayadevi Waterfall.png"
  },
  {
    id: 3,
    title: "Padamdungari & Unai Nature Tour",
    duration: "1 Day",
    departureDates: ["July 5 (Sunday)", "July 18 (Saturday)"],
    vehicle: "Seating Bus",
    inclusions: ["Transportation Only"],
    price: { startingFrom: 500, details: "₹500 (Fare Only)" },
    location: "Gujarat",
    categories: ["Monsoon", "Family"],
    image: "/Images/Padamdungari & Unai Nature Tour.png"
  },
  {
    id: 4,
    title: "Vangan-Ankda Waterfall Tour",
    duration: "1 Day",
    departureDates: ["July 11 (Saturday)", "July 26 (Sunday)"],
    vehicle: "Seating Bus",
    inclusions: ["Tea", "Breakfast", "Meals"],
    price: { startingFrom: 900, details: "₹900 (All Inclusive)" },
    location: "Gujarat",
    categories: ["Monsoon", "Weekend Trip"],
    image: "/Images/Vangan-Ankda Waterfall Tour.png"
  },
  {
    id: 5,
    title: "Saputara, Gira Waterfall & Waghai Garden One-Day Picnic",
    duration: "1 Day",
    departureDates: ["July 12 (Sunday)", "July 25 (Saturday)"],
    vehicle: "Seating Bus",
    inclusions: ["Transportation Only"],
    price: { startingFrom: 600, details: "₹600 (Fare Only)" },
    location: "Saputara, Gujarat",
    categories: ["Monsoon", "Family"],
    image: "/Images/Saputara, Gira Waterfall.png"
  },
  {
    id: 6,
    title: "Statue of Unity, Harsiddhi Mata & Gumandev Darshan",
    duration: "1 Day",
    departureDates: ["July 26 (Sunday)"],
    vehicle: "Seating Bus",
    inclusions: ["Transportation Only"],
    price: { startingFrom: 600, details: "₹600 (Fare Only)" },
    location: "Kevadia, Gujarat",
    categories: ["Family", "Religious"],
    image: "/Images/Statue of Unity.png"
  },
  {
    id: 7,
    title: "Ujjain & Omkareshwar Spiritual Tour",
    description: "Includes Mahakaleshwar, Kal Bhairav, Harsiddhi Ma, Baglamukhi, Sehore Kubereshwar Dham, Omkareshwar, and Mamleshwar.",
    duration: "3 Days (1 Night Ujjain)",
    departureDates: ["July 9 (Thursday)", "July 23 (Thursday)"],
    vehicle: "Sleeper AC Bus",
    inclusions: ["1-time Tea/Breakfast", "2-time Meals", "4-Person Room Stay"],
    price: { startingFrom: 5100, details: "₹5,100 (Upper Berth) / ₹5,600 (Lower Berth)" },
    notes: "Sightseeing at own cost.",
    location: "Madhya Pradesh",
    categories: ["Religious"],
    image: "/Images/Ujjain-Omkareshwer.png" // Ensured leading slash here
  },
  {
    id: 8,
    title: "Diu, Somnath & Dwarka Spiritual Tour",
    description: "Includes Somnath (1 Night), Dwarka (1 Night), Rukmini Temple, Bet Dwarka, Gopi Talav, Nageshwar.",
    duration: "3 Days",
    departureDates: ["July 9 (Thursday)", "July 23 (Thursday)"],
    vehicle: "Sleeper AC Bus",
    inclusions: ["1-time Tea/Breakfast", "2-time Meals", "4-Person Room Stay"],
    price: { startingFrom: 5100, details: "₹5,100 (Upper Berth) / ₹5,600 (Lower Berth)" },
    notes: "Sightseeing at own cost.",
    location: "Gujarat / Diu",
    categories: ["Religious"],
    image: "/Images/Saurastra.png" 
  }
];

const categoriesList = ["All", "Religious", "Monsoon", "Weekend Trip", "Family"];

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesSearch = 
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || pkg.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Explore Packages
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover curated journeys crafted for spiritual peace, weekend thrills, and family bonding.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* SIDEBAR FILTERS */}
          <aside className="w-full lg:w-1/4 shrink-0">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-bold text-foreground">Filters</h3>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-muted-foreground mb-2">
                  Search Destination
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="e.g. Somnath, Saputara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-semibold text-muted-foreground mb-3">
                  Categories
                </label>
                <div className="flex flex-col gap-2">
                  {categoriesList.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                          : "bg-background text-muted-foreground border border-border hover:border-primary/50 hover:bg-muted/50"
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
              <div className="text-center py-20 bg-card rounded-2xl border border-dashed border-border">
                <p className="text-muted-foreground text-lg">No packages found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="mt-4 text-primary font-semibold hover:underline"
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
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10">
                          {pkg.categories[0]}
                        </div>

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
                            <span className="font-medium">{pkg.departureDates.join(", ")}</span>
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
                        <div className="mt-auto pt-2 flex flex-col xl:flex-row items-center justify-between gap-4">
                          <div className="w-full xl:w-auto text-center xl:text-left">
                            {/* FIXED FONT SIZES HERE FOR MOBILE */}
                            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                              Starting From
                            </p>
                            <p className="text-2xl font-black text-primary">
                              ₹{pkg.price.startingFrom.toLocaleString("en-IN")}
                            </p>
                            <p className="text-xs text-muted-foreground font-medium mt-1 max-w-[150px] leading-tight mx-auto xl:mx-0">
                              {pkg.price.details}
                            </p>
                          </div>

                          <Link
                            href={whatsappLink}
                            target="_blank"
                            className="w-full xl:w-auto text-center bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 hover:scale-105 transition-all duration-300"
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