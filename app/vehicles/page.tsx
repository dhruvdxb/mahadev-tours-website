"use client";

import { motion } from "framer-motion";
import { Bus, Wifi, Zap, Wind, ShieldCheck, MessageCircle } from "lucide-react";
import Link from "next/link";

type Vehicle = {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  features: string[];
  bestFor: string;
};

const fleet: Vehicle[] = [
  {
    id: "sleeper-ac",
    name: "Luxury Sleeper AC Bus",
    type: "Long Distance & Overnight Tours",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    description: "Designed for ultimate comfort on long overnight journeys like our Jyotirlinga or Dwarka spiritual tours. Features individual lower and upper berths with privacy curtains.",
    features: ["Fully Air-Conditioned", "Individual Berths / Beds", "Mobile Charging Points", "Reading Lights", "Ample Luggage Space"],
    bestFor: "Multi-day Spiritual Tours (Ujjain, Somnath, Maharashtra Jyotirlinga)"
  },
  {
    id: "seating-bus",
    name: "Comfortable Seating AC Bus",
    type: "One-Day Picnics & Short Trips",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    description: "Perfect for group day-trips, waterfalls, and nearby nature picnics. Enjoy spacious pushback seating with great window views for sightseeing.",
    features: ["Comfortable Pushback Seats", "Air-Conditioned Cabin", "Clean & Sanitized Interiors", "Experienced Driver", "Great Sightseeing Views"],
    bestFor: "1-Day Monsoon Trips (Saputara, Statue of Unity, Waterfalls)"
  }
];

export default function VehiclesPage() {
  const whatsappMessage = encodeURIComponent("Hello Ajaybhai, I want to inquire about booking a vehicle/bus.");
  const whatsappLink = `https://wa.me/917802062340?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Fleet & Vehicles
          </h1>
          <p className="text-lg text-gray-500">
            Travel in safety and luxury. Our well-maintained coaches ensure a relaxing and comfortable ride for every journey.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="space-y-12">
          {fleet.map((vehicle, index) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f8fafc] rounded-3xl border border-gray-100 overflow-hidden shadow-sm flex flex-col lg:flex-row gap-8 p-6 md:p-8 items-center"
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-72 md:h-80 rounded-2xl overflow-hidden bg-gray-200 relative shrink-0">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                  {vehicle.type}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {vehicle.name}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                      Recommended For
                    </p>
                    <p className="text-sm font-bold text-gray-800">
                      {vehicle.bestFor}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <Link 
                    href={whatsappLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire About This Vehicle
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}