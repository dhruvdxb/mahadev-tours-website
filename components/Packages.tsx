"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Clock } from "lucide-react";
import Link from "next/link";

type TourPackage = {
  id: string;
  title: string;
  destination: string;
  image: string;
  duration: string;
  price: number;
  departureDate: string;
  seatsAvailable: number;
  isPopular?: boolean;
};

const featuredPackages: TourPackage[] = [
  {
    id: "pkg-1",
    title: "Maharashtra Jyotirlinga Darshan",
    destination: "Maharashtra",
    image: "/pkg-1.png", // Local image
    duration: "3 Days / 2 Nights",
    price: 5001,
    departureDate: "July 23, 2026",
    seatsAvailable: 15,
    isPopular: true,
  },
  {
    id: "pkg-2",
    title: "Ujjain & Omkareshwar Darshan",
    destination: "Madhya Pradesh",
    image: "/pkg-2.png", // Local image
    duration: "3 Days / 2 Nights",
    price: 5100,
    departureDate: "July 9 & 23, 2026",
    seatsAvailable: 12,
  },
  {
    id: "pkg-3",
    title: "Saputara Monsoon Picnic",
    destination: "Saputara, Gujarat",
    image: "/pkg-3.png", // Local image
    duration: "1 Day",
    price: 600,
    departureDate: "July 12 & 25, 2026",
    seatsAvailable: 25,
  },
  {
    id: "pkg-4",
    title: "Statue of Unity & Temples",
    destination: "Kevadia, Gujarat",
    image: "/pkg-4.png", // Local image
    duration: "1 Day",
    price: 600,
    departureDate: "July 26, 2026",
    seatsAvailable: 20,
  },
];

export default function Packages() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Featured Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Handpicked spiritual journeys and monsoon getaways departing this July.
            </p>
          </div>
          <Link 
            href="/packages"
            className="text-primary font-semibold hover:underline flex items-center gap-2 whitespace-nowrap"
          >
            View all packages &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-[2rem] border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-muted">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badges */}
                {pkg.isPopular && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                    Most Popular
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                  <Clock className="w-3.5 h-3.5" />
                  {pkg.duration}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {pkg.destination}
                </div>
                
                <h3 className="text-xl font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{pkg.departureDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{pkg.seatsAvailable} seats available</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Starting From
                    </p>
                    <p className="text-2xl font-black text-foreground">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <Link 
                    href={`https://wa.me/917802062340?text=Hello Ajaybhai, I want to book the ${pkg.title} package.`}
                    target="_blank"
                    className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}