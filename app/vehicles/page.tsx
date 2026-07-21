"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Wind, ShieldCheck, BatteryCharging, MessageCircle, CheckCircle2 } from "lucide-react";

// Mock Data for Vehicles
const vehicles = [
  {
    id: "veh-1",
    name: "Premium AC Sleeper Coach",
    category: "Luxury Bus",
    capacity: "36 Berths",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop", // Placeholder for bus interior/exterior
    description: "Experience ultimate comfort for long overnight journeys. Fully air-conditioned sleeper berths with privacy curtains and smooth suspension.",
    features: ["Air Conditioning", "Individual Reading Lights", "Charging Ports", "GPS Tracking", "Blankets Provided"],
  },
  {
    id: "veh-2",
    name: "Non-AC Seating / Sleeper",
    category: "Standard Bus",
    capacity: "45 Seats / 30 Berths",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2000&auto=format&fit=crop", 
    description: "Cost-effective and comfortable travel for daytime trips and shorter overnight journeys. Well-maintained seating with ample legroom.",
    features: ["Pushback Seats", "Wide Windows", "Ample Luggage Space", "Experienced Drivers", "First Aid Kit"],
  },
  {
    id: "veh-3",
    name: "Luxury Tempo Traveller",
    category: "Mini Coach",
    capacity: "14 to 17 Seats",
    image: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=2000&auto=format&fit=crop", 
    description: "Perfect for family trips, weekend getaways, and corporate offsites. Enjoy a private, plush ride with your group.",
    features: ["Premium AC", "Reclining Sofa Seats", "Music System", "LED TV", "Curtains for Privacy"],
  },
  {
    id: "veh-4",
    name: "Mini Bus (AC / Non-AC)",
    category: "Mini Bus",
    capacity: "21 to 25 Seats",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2000&auto=format&fit=crop", 
    description: "Ideal for medium-sized groups attending weddings, picnics, or short religious tours. Flexible AC options available.",
    features: ["Comfortable Seating", "Clean Interiors", "Overhead Storage", "PA System", "Professional Staff"],
  }
];

export default function VehiclesPage() {
  const whatsappNumber = "917802062340";

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
        >
          Our Premium Fleet
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          From luxury AC sleepers for overnight comfort to Tempo Travellers for family picnics, we have the perfect vehicle for every journey.
        </motion.p>
      </div>

      {/* Vehicles List */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-12 md:space-y-24">
        {vehicles.map((vehicle, index) => (
          <motion.div 
            key={vehicle.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-sm text-foreground shadow-lg flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  {vehicle.capacity}
                </div>
              </div>
              {/* Decorative block behind image */}
              <div className={`absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10 transition-transform duration-500 group-hover:scale-105 ${index % 2 !== 0 ? '-translate-x-4' : 'translate-x-4'} translate-y-4`} />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                {vehicle.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {vehicle.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {vehicle.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {vehicle.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  href={`https://wa.me/${whatsappNumber}?text=Hi Ajaybhai, I want to inquire about renting the ${vehicle.name}.`}
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 hover:bg-primary/90 transition-all w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book on WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}