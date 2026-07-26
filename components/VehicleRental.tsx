"use client";

import { motion } from "framer-motion";
import { 
  Bus, Car, Users, Snowflake, ShieldCheck, 
  MapPinned, Luggage, Clock, Phone, MessageCircle,
  Briefcase, Plane
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <-- Added Next.js Image component

// 1. Vehicle Data Structure
const vehicles = [
  {
    id: 1,
    name: "AC Sleeper Bus",
    description: "Luxury overnight travel experience with private luxury berths.",
    image: "/vehicles/Luxury Sleeper AC Bus.png",
    features: [
      { icon: <Luggage className="w-4 h-4" />, text: "Luxury reclining sleeper berths" },
      { icon: <Snowflake className="w-4 h-4" />, text: "Fully Air Conditioned" },
      { icon: <MapPinned className="w-4 h-4" />, text: "Ideal for long-distance tours" },
      { icon: <Clock className="w-4 h-4" />, text: "Comfortable overnight travel" },
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Professional driver" },
    ],
  },
  {
    id: 2,
    name: "AC Seater Bus",
    description: "Spacious pushback seating for comfortable group journeys.",
    image: "/vehicles/Premium AC Seater Bus.png",
    features: [
      { icon: <Bus className="w-4 h-4" />, text: "Pushback seats" },
      { icon: <Snowflake className="w-4 h-4" />, text: "Fully Air Conditioned" },
      { icon: <Users className="w-4 h-4" />, text: "Perfect for group tours" },
      { icon: <Briefcase className="w-4 h-4" />, text: "School & Corporate Trips" },
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Comfortable journey" },
    ],
  },
  {
    id: 3,
    name: "Innova / Ertiga",
    description: "Premium SUVs and MUVs for private, comfortable family travel.",
    image: "/vehicles/Innova-Ertiga.png",
    features: [
      { icon: <Car className="w-4 h-4" />, text: "Premium SUV & MUV" },
      { icon: <Users className="w-4 h-4" />, text: "Family Trips" },
      { icon: <Plane className="w-4 h-4" />, text: "Airport Transfers" },
      { icon: <Briefcase className="w-4 h-4" />, text: "Business Travel" },
      { icon: <MapPinned className="w-4 h-4" />, text: "Outstation Tours" },
    ],
  },
  {
    id: 4,
    name: "Mini Bus / Urbania / Tempo Traveler",
    description: "Versatile 25–33 seater mini buses for mid-sized groups.",
    image: "/vehicles/urbania.jpg",
    features: [
      { icon: <Users className="w-4 h-4" />, text: "25–33 Seater" },
      { icon: <Users className="w-4 h-4" />, text: "Family Functions" },
      { icon: <MapPinned className="w-4 h-4" />, text: "Pilgrimage Tours" },
      { icon: <Briefcase className="w-4 h-4" />, text: "Corporate Outings" },
      { icon: <MapPinned className="w-4 h-4" />, text: "Local & Outstation Travel" },
    ],
  },
];

// WhatsApp & Contact details
const WHATSAPP_NUMBER = "917802062340";
const PHONE_NUMBER = "+917802062340";

export default function VehicleRental() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-[90rem]">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Luxury Vehicle Rental Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Travel comfortably with our well-maintained fleet available for tours, family trips, corporate travel, pilgrimages, weddings, airport transfers, and group transportation across Gujarat and India.
          </p>
        </motion.div>

        {/* Vehicles Grid: 1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {vehicles.map((vehicle, index) => {
            const whatsappMessage = encodeURIComponent(`Hello Ajay Patel, I want to inquire about renting the ${vehicle.name}.`);
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

            return (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-[2rem] border border-border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Vehicle Image Container - Upgraded to Next.js Image */}
                <div className="relative h-56 w-full overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glassmorphism Badge */}
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    Verified Fleet
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                    {vehicle.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {vehicle.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 flex-grow bg-muted/30 p-4 rounded-xl border border-border/50">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-foreground">
                        <div className="text-primary mt-0.5 shrink-0">
                          {feature.icon}
                        </div>
                        <span className="font-medium leading-tight">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book Now Button */}
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="mt-auto w-full text-center bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    Book {vehicle.name}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-primary/20 p-8 md:p-16 overflow-hidden text-center"
        >
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Need a Vehicle for Your Next Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              From luxury buses to comfortable family cars, we provide reliable rental vehicles with experienced drivers for every travel requirement.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Call Button */}
              <Link
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-bold hover:bg-foreground/90 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Link>
              
              {/* WhatsApp Button */}
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Ajay Patel, I am looking to rent a vehicle. Can you provide more details?")}`}
                target="_blank"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Booking
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}