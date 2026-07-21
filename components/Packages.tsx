"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Bus, Utensils, Info } from "lucide-react";
import Link from "next/link";

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
  description?: string;
  notes?: string;
};

const tourPackages: TourPackage[] = [
  { "id": 1, "title": "Maharashtra Jyotirlinga (Grishneshwar, Bhimashankar & Trimbakeshwar)", "duration": "3 Days", "departureDates": ["July 23 (Thursday Night)"], "vehicle": "Sleeper AC Bus", "inclusions": ["Meals", "Stay"], "price": { "startingFrom": 5001, "details": "₹5,001 (Upper Berth) / ₹5,501 (Lower Berth)" }, "location": "Maharashtra" },
  { "id": 2, "title": "Mayadevi Waterfall Monsoon Special", "duration": "1 Day", "departureDates": ["July 4 (Saturday)", "July 19 (Sunday)"], "vehicle": "Seating Bus", "inclusions": ["Tea", "Breakfast", "Meals"], "price": { "startingFrom": 900, "details": "₹900 (All Inclusive)" }, "location": "Gujarat" },
  { "id": 3, "title": "Padamdungari & Unai Nature Tour", "duration": "1 Day", "departureDates": ["July 5 (Sunday)", "July 18 (Saturday)"], "vehicle": "Seating Bus", "inclusions": ["Transportation Only"], "price": { "startingFrom": 500, "details": "₹500 (Fare Only)" }, "location": "Gujarat" },
  { "id": 4, "title": "Vangan-Ankda Waterfall Tour", "duration": "1 Day", "departureDates": ["July 11 (Saturday)", "July 26 (Sunday)"], "vehicle": "Seating Bus", "inclusions": ["Tea", "Breakfast", "Meals"], "price": { "startingFrom": 900, "details": "₹900 (All Inclusive)" }, "location": "Gujarat" },
  { "id": 5, "title": "Saputara, Gira Waterfall & Waghai Garden One-Day Picnic", "duration": "1 Day", "departureDates": ["July 12 (Sunday)", "July 25 (Saturday)"], "vehicle": "Seating Bus", "inclusions": ["Transportation Only"], "price": { "startingFrom": 600, "details": "₹600 (Fare Only)" }, "location": "Saputara, Gujarat" },
  { "id": 6, "title": "Statue of Unity, Harsiddhi Mata & Gumandev Darshan", "duration": "1 Day", "departureDates": ["July 26 (Sunday)"], "vehicle": "Seating Bus", "inclusions": ["Transportation Only"], "price": { "startingFrom": 600, "details": "₹600 (Fare Only)" }, "location": "Kevadia, Gujarat" },
  { "id": 7, "title": "Ujjain & Omkareshwar Spiritual Tour", "description": "Includes Mahakaleshwar, Kal Bhairav, Harsiddhi Ma, Baglamukhi, Sehore Kubereshwar Dham, Omkareshwar, and Mamleshwar.", "duration": "3 Days (1 Night Ujjain)", "departureDates": ["July 9 (Thursday)", "July 23 (Thursday)"], "vehicle": "Sleeper AC Bus", "inclusions": ["1-time Tea/Breakfast", "2-time Meals", "4-Person Room Stay"], "price": { "startingFrom": 5100, "details": "₹5,100 (Upper Berth) / ₹5,600 (Lower Berth)" }, "notes": "Sightseeing at own cost.", "location": "Madhya Pradesh" },
  { "id": 8, "title": "Diu, Somnath & Dwarka Spiritual Tour", "description": "Includes Somnath (1 Night), Dwarka (1 Night), Rukmini Temple, Bet Dwarka, Gopi Talav, Nageshwar.", "duration": "3 Days", "departureDates": ["July 9 (Thursday)", "July 23 (Thursday)"], "vehicle": "Sleeper AC Bus", "inclusions": ["1-time Tea/Breakfast", "2-time Meals", "4-Person Room Stay"], "price": { "startingFrom": 5100, "details": "₹5,100 (Upper Berth) / ₹5,600 (Lower Berth)" }, "notes": "Sightseeing at own cost.", "location": "Gujarat / Diu" }
];

export default function Packages() {
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

        {/* Dynamic Grid: 1 col mobile, 2 tablet, 3 large desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg, index) => {
            // Encode the WhatsApp message so spaces and special characters don't break the URL
            const whatsappMessage = encodeURIComponent(`Hello Ajaybhai, I want to inquire about the ${pkg.title} package.`);
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
                {/* Image Placeholder Container */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  {/* Using a generic Unsplash travel placeholder image */}
                  <img 
                    src={`https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80&sig=${pkg.id}`} 
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

                  {/* Pricing and CTA (Forced to bottom using mt-auto) */}
                  <div className="mt-auto pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-auto text-center sm:text-left">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                        Starting From
                      </p>
                      <p className="text-2xl font-black text-primary">
                        ₹{pkg.price.startingFrom.toLocaleString("en-IN")}
                      </p>
                      <p className="text-[11px] text-muted-foreground font-medium mt-0.5 max-w-[150px] leading-tight mx-auto sm:mx-0">
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

      </div>
    </section>
  );
}