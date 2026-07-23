"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, X } from "lucide-react";

// Define the type for our reviews
type Review = {
  id: number;
  name: string;
  initial: string;
  avatarBg: string;
  tripName: string;
  rating: number;
  text: string;
  image: string;
};

// The combined array with 8 reviews
const combinedReviews: Review[] = [
  {
    id: 1,
    name: "Usha Moradia",
    initial: "U",
    avatarBg: "bg-purple-600",
    tripName: "Maharashtra Jyotirlinga",
    rating: 5,
    text: "Excellent trip! Well planned trip by ajaybhai and given quality food. All darshan done in morning session and feel very blessed. Enjoyable trip with my family. Go for mahadev tour and travels.",
    image: "/Images/Maharashtra Jyotirlinga.png"
  },
  {
    id: 2,
    name: "Henali Patel",
    initial: "H",
    avatarBg: "bg-green-700",
    tripName: "Statue of Unity Trip",
    rating: 5,
    text: "Well planned trip, enjoying a lot and blessed from mahadev.providing  All facility like 1st grade : Accommodation, food, planned trip with accurate time, fun activity and transporting via AC bus. Very enjoyable and blessed trip with my parents. Go for mahadev tour and travel without second thought.",
    image: "/Images/Statue of Unity.png"
  },
  {
    id: 3,
    name: "Raju Trivedi",
    initial: "R",
    avatarBg: "bg-blue-500",
    tripName: "Mayadevi Waterfall Picnic",
    rating: 5,
    text: "Very Nice service service provide. Good choice of Destination. Good Healthy food provided during ture. Good Condition bus. stey in Hotel Room Very Nice Friendly Behaviour. Safe journey. I'm Happy For Your Tour Journey.",
    image: "/Images/Mayadevi Waterfall.png"
  },
  {
    id: 4,
    name: "Riddhi Patel",
    initial: "R",
    avatarBg: "bg-slate-800",
    tripName: "Saurashtra Tour",
    rating: 4,
    text: "Very well planned trip by Mahadev tours & travels. The same trip was cancelled twice on account of unavoidable external circumstances and then executed successfully the third time (even though there were many risks). Stay was good. Food was awesome. Good management and fair services. Thanks to Mahadev tours & travels.",
    image: "/Images/Saurastra.png"
  },
  {
    id: 5,
    name: "Amit Desai",
    initial: "A",
    avatarBg: "bg-orange-500",
    tripName: "Ujjain Spiritual Tour",
    rating: 5,
    text: "The Ujjain tour was perfectly organized. They took care of everything from the stay to the meals. We had a great darshan at Mahakaleshwar. Best travel agency in Surat for family trips!",
    image: "/Images/Ujjain-Omkareshwer.png"
  },
  {
    id: 6,
    name: "Priya Sharma",
    initial: "P",
    avatarBg: "bg-pink-600",
    tripName: "Saputara Weekend Picnic",
    rating: 5,
    text: "Amazing monsoon getaway! The bus was very comfortable, and the timing was perfect to see the Gira Waterfall at its best. Highly recommend this package for a quick weekend refresh.",
    image: "/Images/Saputara, Gira Waterfall.png"
  },
  {
    id: 7,
    name: "Vikram Singh",
    initial: "V",
    avatarBg: "bg-teal-600",
    tripName: "Padamdungari Nature Tour",
    rating: 4,
    text: "Great experience overall. The natural beauty of Padamdungari was breathtaking. The travel arrangements were smooth and on time. Would definitely book another trip with Ajaybhai.",
    image: "/Images/Padamdungari & Unai Nature Tour.png"
  },
  {
    id: 8,
    name: "Neha Gupta",
    initial: "N",
    avatarBg: "bg-red-500",
    tripName: "Vangan-Ankda Waterfall",
    rating: 5,
    text: "Very affordable packages with premium service. We covered all the promised locations without rushing, and the food provided was absolutely delicious. 10/10 experience!",
    image: "/Images/Vangan-Ankda Waterfall Tour.png"
  }
];

export default function ReviewsPage() {
  // State to track which review is currently open in the modal
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <main className="min-h-screen bg-background pt-36 pb-24 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Reviews
          </motion.h1>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-bold text-foreground hover:text-emerald-500 transition-colors flex items-center gap-1"
          >
            View All <span className="text-lg leading-none">›</span>
          </motion.button>
        </div>

        {/* Combined Review Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {combinedReviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Top Photo */}
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src={review.image}
                  alt={review.tripName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Star Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30 fill-transparent"}`} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <div className="mb-4 flex-grow">
                  <p className="text-sm text-foreground leading-relaxed line-clamp-4">
                    {review.text}
                  </p>
                  <button 
                    // Open the modal when clicked
                    onClick={() => setSelectedReview(review)}
                    className="text-xs text-muted-foreground font-medium mt-1 hover:text-emerald-500 transition-colors"
                  >
                    Read more...
                  </button>
                </div>

                {/* User Profile Footer */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/40">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${review.avatarBg}`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm leading-tight">
                      {review.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {review.tripName}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL OVERLAY --- */}
      <AnimatePresence>
        {selectedReview && (
          <>
            {/* Dark Background Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReview(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4 md:p-6"
            >
              {/* Modal Box (Forced Light Theme) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-xl max-h-[85vh] rounded-[2rem] p-6 md:p-8 shadow-2xl relative flex flex-col"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedReview(null)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 transition-colors bg-slate-100 hover:bg-slate-200 p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header: User Info */}
                <div className="flex items-center gap-4 mb-6 pr-12">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 ${selectedReview.avatarBg}`}>
                    {selectedReview.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">
                      {selectedReview.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {selectedReview.tripName}
                    </p>
                  </div>
                </div>

                {/* Modal Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < selectedReview.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}`} 
                    />
                  ))}
                </div>

                {/* Scrollable Full Review Text */}
                <div className="overflow-y-auto pr-2 custom-scrollbar">
                  <p className="text-slate-700 leading-relaxed text-[15px]">
                    {selectedReview.text}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}