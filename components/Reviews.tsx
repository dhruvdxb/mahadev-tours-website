"use client";

import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Usha Moradia",
    initial: "U",
    avatarBg: "bg-purple-600",
    tripName: "Maharashtra Jyotirlinga",
    rating: 5,
    text: "Excellent trip! Well planned trip by ajaybhai and given quality food. All darshan done in morning session and feel very blessed. Enjoyable trip with my family. Go for mahadev tour and travels.",
    image: "/Images/Maharashtra Jyotirlinga.png",
  },
  {
    id: 2,
    name: "Henali Patel",
    initial: "H",
    avatarBg: "bg-green-700",
    tripName: "Statue of Unity Trip",
    rating: 5,
    text: "Well planned trip, enjoying a lot and blessed from mahadev.providing  All facility like 1st grade : Accommodation, food, planned trip with accurate time, fun activity and transporting via AC bus. Very enjoyable and blessed trip with my parents. Go for mahadev tour and travel without second thought.",
    image: "/Images/Statue of Unity.png",
  },
  {
    id: 3,
    name: "Raju Trivedi",
    initial: "R",
    avatarBg: "bg-blue-500",
    tripName: "Mayadevi Waterfall Picnic",
    rating: 5,
    text: "Very Nice service service provide. Good choice of Destination. Good Healthy food provided during ture. Good Condition bus. stey in Hotel Room Very Nice Friendly Behaviour. Safe journey. I'm Happy For Your Tour Journey.",
    image: "/Images/Mayadevi Waterfall.png",
  },
  {
    id: 4,
    name: "Riddhi Patel",
    initial: "R",
    avatarBg: "bg-slate-800",
    tripName: "Saurashtra Tour",
    rating: 4,
    text: "Very well planned trip by Mahadev tours & travels. The same trip was cancelled twice on account of unavoidable external circumstance...",
    image: "/Images/Saurastra.png",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Reviews() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            Reviews
          </motion.h2>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="/reviews"
            className="text-sm font-semibold text-foreground hover:underline flex items-center mb-1"
          >
            View All <span className="ml-1 text-lg leading-none">›</span>
          </motion.a>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              className="bg-background border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden h-full"
            >
              {/* Trip Image */}
              <div className="w-full h-44 relative bg-muted">
                {/* Fallback color while image loads or if it's missing */}
                <img
                  src={review.image}
                  alt={review.tripName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <div className="mb-6 flex-1">
                  <p className="text-foreground text-sm leading-relaxed line-clamp-4 mb-1">
                    {review.text}
                  </p>
                  <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Read more...
                  </button>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-base shadow-sm shrink-0 ${review.avatarBg}`}
                  >
                    {review.initial}
                  </div>

                  <div className="overflow-hidden">
                    <h4 className="font-bold text-foreground text-sm truncate">
                      {review.name}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">
                      {review.tripName}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}