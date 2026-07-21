"use client";

import { motion } from "framer-motion";

const destinations = [
  {
    id: "dest-1",
    name: "Saurashtra & Dwarka",
    tours: "5+ Packages",
    image: "/dest-1.png", // Local image
    colSpan: "md:col-span-2", // Makes this card wide
  },
  {
    id: "dest-2",
    name: "Somnath & Diu",
    tours: "3 Packages",
    image: "/dest-2.jpg", // Local image
    colSpan: "md:col-span-1", // Standard width
  },
  {
    id: "dest-3",
    name: "Statue of Unity",
    tours: "Daily Departures",
    image: "/dest-3.jpg", // Local image
    colSpan: "md:col-span-1", // Standard width
  },
  {
    id: "dest-4",
    name: "Saputara",
    tours: "Monsoon Specials",
    image: "/dest-4.jpg", // Local image
    colSpan: "md:col-span-2", // Makes this card wide
  },
];

export default function Destinations() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore the most loved locations by our travelers. From divine temples to breathtaking waterfalls.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Explicit heights (h-64/h-80) prevent the collapsing issue you saw!
              className={`group relative rounded-[2rem] overflow-hidden bg-muted shadow-sm hover:shadow-xl transition-all duration-300 h-64 md:h-80 ${dest.colSpan}`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark gradient so the white text is always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{dest.name}</h3>
                <p className="text-white/80 text-sm font-medium tracking-wide">{dest.tours}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}