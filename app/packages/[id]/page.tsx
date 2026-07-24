"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tourPackages } from "@/data/packages";
import { 
  Share, 
  Bus, 
  Bed, 
  Utensils, 
  Map, 
  UserCheck, 
  ChevronDown, 
  ChevronUp,
  MessageCircle,
  FileText,
  Phone,
  Clock,
  MapPin,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  HelpCircle // <-- Added an icon for the FAQ header
} from "lucide-react";

// --- DATA (Generic FAQs) ---
const generalFaqs = [
  {
    question: "How do I confirm my booking?",
    answer: "To confirm your booking, simply click the 'Book Now' or 'Send Enquiry' button to chat with us on WhatsApp. We require a minimal advance payment to secure your seat."
  },
  {
    question: "Are the meals provided pure vegetarian?",
    answer: "Yes! For all our religious and family tour packages that include meals, we provide strictly pure vegetarian food."
  },
  {
    question: "Can I choose my seat on the bus?",
    answer: "Seat numbers are allocated on a first-come, first-served basis once the advance payment is received. Let us know your preference on WhatsApp and we will do our best to accommodate you!"
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 7 days prior to the departure date are eligible for a full refund of the advance. Closer to the trip date, partial deductions may apply to cover pre-booked arrangements."
  }
];

export default function PackageDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const pkg = tourPackages.find((p) => p.id === parseInt(resolvedParams.id)) || tourPackages[0];
  
  // States
  const [expandedDay, setExpandedDay] = useState<string | null>("Day 1");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0); // Open the first FAQ by default
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const packageGallery = pkg.gallery || [pkg.image];

  // Helper Functions
  const toggleDay = (day: string) => setExpandedDay(expandedDay === day ? null : day);
  const toggleFaq = (index: number) => setExpandedFaq(expandedFaq === index ? null : index);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % packageGallery.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + packageGallery.length) % packageGallery.length);

  // Links & Meta
  const whatsappMessage = encodeURIComponent(`Hello Ajay Patel, I want to book the ${pkg.title} package.`);
  const whatsappLink = `https://wa.me/917802062340?text=${whatsappMessage}`;
  const shareTitle = encodeURIComponent(`Check out this ${pkg.duration} trip to ${pkg.location}: ${pkg.title} for just ₹${pkg.price.startingFrom.toLocaleString("en-IN")}!`);
  const shareUrl = encodeURIComponent(`https://mahadevtours.in/packages/${pkg.id}`);

  // Related Packages Filter
  const relatedPackages = tourPackages
    .filter((p) => p.id !== pkg.id)
    .sort((a, b) => {
      const aMatch = a.categories.some(c => pkg.categories.includes(c)) ? 1 : 0;
      const bMatch = b.categories.some(c => pkg.categories.includes(c)) ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-32 lg:pb-16 text-gray-900 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Navigation Tabs */}
        <div className="flex gap-6 border-b border-gray-200 mb-8 pb-4 text-sm font-semibold text-gray-500 overflow-x-auto whitespace-nowrap">
          <span className="text-emerald-600 border-b-2 border-emerald-600 pb-4 -mb-[18px]">About</span>
          <Link href="/packages"><span className="hover:text-gray-900 cursor-pointer transition-colors">Packages</span></Link>
          <span className="hover:text-gray-900 cursor-pointer transition-colors">Dates</span>
          <span className="hover:text-gray-900 cursor-pointer transition-colors">Itinerary</span>
          <span className="hover:text-gray-900 cursor-pointer transition-colors">Inclusions</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
            {/* Hero Image / Gallery Trigger */}
            <div 
              onClick={() => setIsGalleryOpen(true)}
              className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden shadow-sm group cursor-pointer bg-gray-200"
            >
              <Image 
                src={pkg.image} 
                alt={pkg.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg hover:bg-white transition-colors transform group-hover:-translate-y-1 duration-300">
                <ImageIcon className="w-4 h-4 text-emerald-600" /> 
                View Gallery ({packageGallery.length})
              </div>
            </div>

            {/* Header Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                  {pkg.categories[0]}
                </span>
                <span className="text-gray-500 font-medium text-sm">
                  • {pkg.duration}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {pkg.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg">
                    <Map className="w-4 h-4 text-emerald-600" /> {pkg.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg">
                    <Bus className="w-4 h-4 text-emerald-600" /> {pkg.vehicle}
                  </span>
                </div>
                
                <a 
                  href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 font-medium text-sm transition-colors shadow-sm text-gray-700"
                >
                  <Share className="w-4 h-4" /> Share
                </a>
              </div>
            </div>

            {/* Inclusions Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-gray-900">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
                {pkg.inclusions.map((inclusion, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-medium text-gray-700 text-sm md:text-base">
                    {inclusion.toLowerCase().includes("bus") || inclusion.toLowerCase().includes("travelling") ? <Bus className="w-5 h-5 text-gray-500" /> :
                     inclusion.toLowerCase().includes("stay") ? <Bed className="w-5 h-5 text-gray-500" /> :
                     inclusion.toLowerCase().includes("meal") || inclusion.toLowerCase().includes("breakfast") ? <Utensils className="w-5 h-5 text-gray-500" /> :
                     inclusion.toLowerCase().includes("leader") ? <UserCheck className="w-5 h-5 text-gray-500" /> :
                     <Map className="w-5 h-5 text-gray-500" />}
                    {inclusion} Included
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary Accordion Card */}
            {pkg.itinerary && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Itinerary</h2>
                  <div className="flex gap-2">
                    <button className="text-sm border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors">
                      <FileText className="w-4 h-4 text-gray-500" /> Get PDF
                    </button>
                    <button 
                      onClick={() => setExpandedDay(null)}
                      className="text-sm border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50">
                      <button 
                        onClick={() => toggleDay(day.day)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100/50 transition-colors"
                      >
                        <div className="flex items-center gap-4 font-bold text-gray-900">
                          <span className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm shadow-sm">
                            {day.day}
                          </span>
                          {day.title}
                        </div>
                        {expandedDay === day.day ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                      </button>
                      
                      {expandedDay === day.day && (
                        <div className="p-4 pt-0 pl-20 text-gray-600 text-sm leading-relaxed">
                          {day.details}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEW: FAQs Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <HelpCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              </div>
              
              <div className="flex flex-col gap-3">
                {generalFaqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                        expandedFaq === index ? "bg-emerald-50/50" : "hover:bg-gray-50"
                      }`}
                    >
                      <span className={`font-semibold ${expandedFaq === index ? "text-emerald-700" : "text-gray-900"}`}>
                        {faq.question}
                      </span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    
                    {expandedFaq === index && (
                      <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed bg-emerald-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* RIGHT COLUMN - Sticky Sidebar (Hidden on Mobile) */}
          <div className="hidden lg:block w-full lg:w-1/3">
            <div className="sticky top-28 flex flex-col gap-6">
              
              {/* Pricing & Booking Card */}
              <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                {pkg.price.oldPrice && (
                  <div className="bg-emerald-50 text-emerald-700 text-xs font-bold text-center py-2 flex items-center justify-center gap-1.5 border-b border-emerald-100">
                    <UserCheck className="w-4 h-4" /> Save ₹{(pkg.price.oldPrice - pkg.price.startingFrom).toLocaleString("en-IN")}
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-gray-500 font-medium">Starting from</span>
                    <div className="text-right">
                      <div className="text-3xl font-black text-gray-900">₹ {pkg.price.startingFrom.toLocaleString("en-IN")}</div>
                      {pkg.price.oldPrice && (
                        <div className="text-gray-400 line-through text-sm font-medium">₹ {pkg.price.oldPrice.toLocaleString("en-IN")}</div>
                      )}
                      <div className="text-gray-500 text-xs mt-1">{pkg.price.details}</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mb-6 text-center text-sm text-gray-600 leading-relaxed">
                    {pkg.location} Package with {pkg.vehicle}<br />
                    <span className="font-semibold text-gray-900">{pkg.duration}</span>
                  </div>

                  <Link href={whatsappLink} target="_blank">
                    <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-lg">
                      Send Enquiry
                    </button>
                  </Link>
                </div>
              </div>

              {/* Private Trips & Support Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
                <h3 className="font-bold text-lg text-gray-900 leading-tight">
                  Private Trips Available <br />
                  <span className="text-gray-500 font-medium text-sm">for Group of 2+ Travellers</span>
                </h3>
                
                <button className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                  <Phone className="w-4 h-4 text-gray-500" /> Request a Callback
                </button>

                <div className="grid grid-cols-2 gap-3 mt-2">
                  <Link href={whatsappLink} target="_blank" className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl font-medium text-[#25D366] hover:bg-green-50 transition-colors text-sm shadow-sm">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </Link>
                  <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm shadow-sm">
                    <FileText className="w-4 h-4 text-gray-500" /> Get PDF
                  </button>
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* RELATED PACKAGES SECTION */}
        {relatedPackages.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPackages.map((relatedPkg) => (
                <Link 
                  href={`/packages/${relatedPkg.id}`} 
                  key={relatedPkg.id} 
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image 
                      src={relatedPkg.image} 
                      alt={relatedPkg.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      {relatedPkg.duration}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {relatedPkg.location}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-emerald-600 transition-colors">
                      {relatedPkg.title}
                    </h3>
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Starting From</p>
                        <p className="text-lg font-black text-gray-900">₹{relatedPkg.price.startingFrom.toLocaleString("en-IN")}</p>
                      </div>
                      <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1">
                        View <span className="hidden sm:inline">Package</span> →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* MOBILE STICKY BOTTOM BOOKING BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
          <div>
            <p className="text-xs text-gray-500 font-medium">Starting from</p>
            <p className="text-xl font-bold text-gray-900">₹{pkg.price.startingFrom.toLocaleString("en-IN")}</p>
          </div>
          <Link href={whatsappLink} target="_blank" className="flex-1">
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* FULLSCREEN GALLERY LIGHTBOX */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsGalleryOpen(false)} 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors z-10 bg-white/10 rounded-full hover:bg-white/20"
            >
              <X className="w-8 h-8" />
            </button>

            {packageGallery.length > 1 && (
              <>
                <button 
                  onClick={prevImage} 
                  className="absolute left-4 md:left-10 text-white/70 hover:text-white p-3 transition-colors z-10 bg-white/5 rounded-full hover:bg-white/20"
                >
                  <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-4 md:right-10 text-white/70 hover:text-white p-3 transition-colors z-10 bg-white/5 rounded-full hover:bg-white/20"
                >
                  <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                </button>
              </>
            )}

            <div className="relative w-full max-w-5xl h-[60vh] md:h-[80vh] px-4">
              <Image
                src={packageGallery[currentImageIndex]}
                alt={`${pkg.title} Gallery Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {packageGallery.length > 1 && (
              <div className="absolute bottom-8 text-white font-medium tracking-wide bg-black/50 px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {packageGallery.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}