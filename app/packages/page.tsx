"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

// 1. Define the type with the categories array
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
};

// 2. The JSON data (self-contained)
const tourPackages: TourPackage[] = [
  { "id": 1, "title": "Maharashtra Jyotirlinga (Grishneshwar, Bhimashankar & Trimbakeshwar)", "duration": "3 Days", "departureDates": ["July 23 (Thursday Night)"], "vehicle": "Sleeper AC Bus", "inclusions": ["Meals", "Stay"], "price": { "startingFrom": 5001, "details": "₹5,001 (Upper Berth) / ₹5,501 (Lower Berth)" }, "location": "Maharashtra", "categories": ["Religious"] },
  { "id": 2, "title": "Mayadevi Waterfall Monsoon Special", "duration": "1 Day", "departureDates": ["July 4 (Saturday)", "July 19 (Sunday)"], "vehicle": "Seating Bus", "inclusions": ["Tea", "Breakfast", "Meals"], "price": { "startingFrom": 900, "details": "₹900 (All Inclusive)" }, "location": "Gujarat", "categories": ["Monsoon", "Weekend Trip"] },
  { "id": 3, "title": "Padamdungari & Unai Nature Tour", "duration": "1 Day", "departureDates": ["July 5 (Sunday)", "July 18 (Saturday)"], "vehicle": "Seating Bus", "inclusions": ["Transportation Only"], "price": { "startingFrom": 500, "details": "₹500 (Fare Only)" }, "location": "Gujarat", "categories": ["Monsoon", "Family"] },
  { "id": 4, "title": "Vangan-Ankda Waterfall Tour", "duration": "1 Day", "departureDates": ["July 11 (Saturday)", "July 26 (Sunday)"], "vehicle": "Seating Bus", "inclusions": ["Tea", "Breakfast", "Meals"], "price": { "startingFrom": 900, "details": "₹900 (All Inclusive)" }, "location": "Gujarat", "categories": ["Monsoon", "Weekend Trip"] },
  { "id": 5, "title": "Saputara, Gira Waterfall & Waghai Garden One-Day Picnic", "duration": "1 Day", "departureDates": ["July 12 (Sunday)", "July 25 (Saturday)"], "vehicle": "Seating Bus", "inclusions": ["Transportation Only"], "price": { "startingFrom": 600, "details": "₹600 (Fare Only)" }, "location": "Saputara, Gujarat", "categories": ["Monsoon", "Family"] },
  { "id": 6, "title": "Statue of Unity, Harsiddhi Mata & Gumandev Darshan", "duration": "1 Day", "departureDates": ["July 26 (Sunday)"], "vehicle": "Seating Bus", "inclusions": ["Transportation Only"], "price": { "startingFrom": 600, "details": "₹600 (Fare Only)" }, "location": "Kevadia, Gujarat", "categories": ["Family", "Religious"] },
  { "id": 7, "title": "Ujjain & Omkareshwar Spiritual Tour", "duration": "3 Days (1 Night Ujjain)", "departureDates": ["July 9 (Thursday)", "July 23 (Thursday)"], "vehicle": "Sleeper AC Bus", "inclusions": ["1-time Tea/Breakfast", "2-time Meals", "4-Person Room Stay"], "price": { "startingFrom": 5100, "details": "₹5,100 (Upper Berth) / ₹5,600 (Lower Berth)" }, "location": "Madhya Pradesh", "categories": ["Religious"] },
  { "id": 8, "title": "Diu, Somnath & Dwarka Spiritual Tour", "duration": "3 Days", "departureDates": ["July 9 (Thursday)", "July 23 (Thursday)"], "vehicle": "Sleeper AC Bus", "inclusions": ["1-time Tea/Breakfast", "2-time Meals", "4-Person Room Stay"], "price": { "startingFrom": 5100, "details": "₹5,100 (Upper Berth) / ₹5,600 (Lower Berth)" }, "location": "Gujarat / Diu", "categories": ["Religious"] }
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
    <main className="min-h-screen bg-white pt-24 pb-16">
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
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-gray-700" />
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Destination
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. Somnath, Saputara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Categories
                </label>
                <div className="flex flex-col gap-2">
                  {categoriesList.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "bg-white text-gray-600 border border-gray-200 hover:border-primary/50 hover:bg-gray-50"
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
              <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <p className="text-gray-500 text-lg">No packages found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map((pkg, index) => {
                  const whatsappMessage = encodeURIComponent(`Hello Ajaybhai, I want to book the ${pkg.title} package.`);
                  const whatsappLink = `https://wa.me/917802062340?text=${whatsappMessage}`;

                  return (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                    >
                      {/* Image Area */}
                      <div className="relative h-48 bg-gray-100 overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80&sig=${pkg.id}`}
                          alt={pkg.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                          {pkg.categories[0]}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium mb-2 uppercase tracking-wider">
                          <MapPin className="w-3.5 h-3.5" />
                          {pkg.location}
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {pkg.title}
                        </h3>

                        <div className="space-y-2 mb-6">
                          <div className="flex items-start gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{pkg.departureDates.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4 text-primary shrink-0" />
                            <span>{pkg.duration}</span>
                          </div>
                        </div>

                        {/* Footer (Price & CTA) */}
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">
                              Price
                            </p>
                            <p className="text-xl font-black text-gray-900">
                              ₹{pkg.price.startingFrom.toLocaleString("en-IN")}
                            </p>
                          </div>
                          
                          <Link 
                            href={whatsappLink}
                            target="_blank"
                            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-primary/90 hover:scale-105 transition-all"
                          >
                            Book Now
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