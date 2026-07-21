"use client";

import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rajesh Desai",
    location: "Surat, Gujarat",
    date: "June 2026",
    text: "Booked a sleeper bus for the Maharashtra Jyotirlinga tour. The bus was exceptionally clean, the seats were comfortable, and Ajaybhai's management was perfect. Highly recommended for family trips!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sneha Patel",
    location: "Ahmedabad, Gujarat",
    date: "July 2026",
    text: "We went on a one-day monsoon picnic to Saputara. The driver was very safe and polite. The entire itinerary was followed perfectly, giving us plenty of time at Gira Waterfall.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Amit Shah",
    location: "Navsari, Gujarat",
    date: "May 2026",
    text: "Hired a 17-seater Tempo Traveller for a corporate offsite to the Statue of Unity. Premium AC, pushback seats, and a very smooth ride. Mahadev Tour & Travels is our go-to from now on.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Reviews() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Loved by Travelers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Don't just take our word for it. Here is what our customers have to say about their journeys with us.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id}
              variants={cardVariants}
              className="bg-background border border-border p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-foreground text-base leading-relaxed mb-8 flex-1">
                "{review.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.location} • {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}