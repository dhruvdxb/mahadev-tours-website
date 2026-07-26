"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";

// Vehicle Data mapped to match your rich layout
const fleet = [
  {
    id: 1,
    name: "Luxury Sleeper AC Bus",
    badge: "Long Distance & Overnight Tours",
    description: "Designed for ultimate comfort on long overnight journeys like our Jyotirlinga or Dwarka spiritual tours. Features individual lower and upper berths with privacy curtains.",
    image: "/vehicles/Luxury Sleeper AC Bus.png",
    features: [
      "Fully Air-Conditioned",
      "Individual Berths / Beds",
      "Mobile Charging Points",
      "Reading Lights",
      "Ample Luggage Space",
      "Professional Driver"
    ],
    recommended: "Multi-day Spiritual Tours (Ujjain, Somnath, Maharashtra Jyotirlinga)"
  },
  {
    id: 2,
    name: "Premium AC Seater Bus",
    badge: "Group Tours & Picnics",
    description: "Spacious pushback seating for comfortable group journeys. Perfect for day trips, school outings, corporate travel, and short-distance pilgrimage tours.",
    image: "/vehicles/Premium AC Seater Bus.png",
    features: [
      "Fully Air-Conditioned",
      "Pushback Reclining Seats",
      "Entertainment/Music System",
      "Ample Leg Room",
      "Overhead Luggage Racks",
      "Smooth Suspension"
    ],
    recommended: "Day Trips, Picnics, Corporate Outings (Statue of Unity, Saputara)"
  },
  {
    id: 3,
    name: "Innova / Ertiga Premium MUV",
    badge: "Family & Private Travel",
    description: "Premium SUVs and MUVs for private, comfortable family travel. Enjoy a personalized itinerary with top-tier comfort and a dedicated, experienced chauffeur.",
    image: "/vehicles/Innova-Ertiga.png",
    features: [
      "Fully Air-Conditioned",
      "Plush Captain Seating",
      "Maximum Privacy",
      "Smooth & Quiet Ride",
      "Door-to-Door Service",
      "Flexible Routing"
    ],
    recommended: "Airport Transfers, Family Outstation Trips, Business Travel"
  },
  {
    id: 4,
    name: "15–26 Seater Mini Bus",
    badge: "Mid-sized Groups",
    description: "Versatile and comfortable mini buses tailored for mid-sized groups. The perfect balance between a large coach and a personal car, ideal for family functions.",
    image: "/vehicles/urbania.jpg",
    features: [
      "Comfortable Seating",
      "AC / Non-AC Options Available",
      "Compact & Agile for City Roads",
      "Roof Luggage Carrier",
      "PA / Mic System",
      "Ideal for Narrow Routes"
    ],
    recommended: "Pilgrimage Tours, Family Weddings, Local Sightseeing"
  }
];

const WHATSAPP_NUMBER = "917802062340";

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Our Fleet & Vehicles
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Travel in safety and luxury. Our well-maintained coaches ensure a relaxing and comfortable ride for every journey.
          </motion.p>
        </div>

        {/* Fleet List */}
        <div className="space-y-12">
          {fleet.map((vehicle, index) => {
            const whatsappMessage = encodeURIComponent(`Hello Ajay Patel, I want to inquire about renting the ${vehicle.name}.`);
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

            return (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group"
              >
                
                {/* Left Side: Image */}
                <div className="relative w-full lg:w-5/12 h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-gray-100 shrink-0">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                    {vehicle.badge}
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-7/12 flex flex-col h-full justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {vehicle.name}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {vehicle.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommended For Box */}
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-8">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Recommended For
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {vehicle.recommended}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <Link
                      href={whatsappLink}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Inquire About This Vehicle
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </main>
  );
}