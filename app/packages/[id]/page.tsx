"use client";

import { useState, use } from "react"; // <-- Added 'use' here
import Link from "next/link";
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
  Phone
} from "lucide-react";

// Bringing in the data here so the dynamic page can find the specific package
const tourPackages = [
  {
    id: 1,
    title: "Maharashtra Jyotirlinga (Grishneshwar, Bhimashankar & Trimbakeshwar)",
    duration: "3 Days",
    vehicle: "Sleeper AC Bus",
    inclusions: ["Meals", "Stay", "Sightseeing"],
    price: { startingFrom: 5001, details: "per person + taxes", oldPrice: 6500 },
    location: "Maharashtra",
    categories: ["Religious"],
    image: "/Images/Maharashtra Jyotirlinga.png",
    itinerary: [
      { day: "Day 0", title: "Overnight journey from Surat", details: "Board the sleeper AC bus at night and begin your spiritual journey towards Maharashtra." },
      { day: "Day 1", title: "Trimbakeshwar Darshan & Transfer", details: "Morning arrival, freshen up, and proceed for Trimbakeshwar Jyotirlinga darshan. Later, travel to the next destination and check-in to the hotel." },
      { day: "Day 2", title: "Grishneshwar & Bhimashankar", details: "Visit the remaining two holy Jyotirlingas. Evening return journey back to Surat." }
    ]
  },
  {
    id: 2,
    title: "Mayadevi Waterfall Monsoon Special",
    duration: "1 Day",
    vehicle: "Seating Bus",
    inclusions: ["Tea", "Breakfast", "Meals"],
    price: { startingFrom: 900, details: "All Inclusive" },
    location: "Gujarat",
    categories: ["Monsoon", "Weekend Trip"],
    image: "/Images/Mayadevi Waterfall.png",
    itinerary: [
      { day: "Day 1", title: "Morning Departure & Waterfall Visit", details: "Early morning departure. Enjoy breakfast on the way. Spend the day enjoying the lush green monsoon views and the majestic Mayadevi Waterfall. Return by evening." }
    ]
  },
  {
    id: 3,
    title: "Padamdungari & Unai Nature Tour",
    duration: "1 Day",
    vehicle: "Seating Bus",
    inclusions: ["Transportation Only"],
    price: { startingFrom: 500, details: "Fare Only" },
    location: "Gujarat",
    categories: ["Monsoon", "Family"],
    image: "/Images/Padamdungari & Unai Nature Tour.png",
    itinerary: [
      { day: "Day 1", title: "Nature Tour", details: "Explore the beautiful natural surroundings of Padamdungari and take a dip in the Unai hot springs." }
    ]
  },
  {
    id: 4,
    title: "Vangan-Ankda Waterfall Tour",
    duration: "1 Day",
    vehicle: "Seating Bus",
    inclusions: ["Tea", "Breakfast", "Meals"],
    price: { startingFrom: 900, details: "All Inclusive" },
    location: "Gujarat",
    categories: ["Monsoon", "Weekend Trip"],
    image: "/Images/Vangan-Ankda Waterfall Tour.png",
    itinerary: [
      { day: "Day 1", title: "Waterfall Exploration", details: "A full day of fun and trekking near the Vangan-Ankda waterfalls." }
    ]
  },
  {
    id: 5,
    title: "Saputara, Gira Waterfall & Waghai Garden One-Day Picnic",
    duration: "1 Day",
    vehicle: "Seating Bus",
    inclusions: ["Transportation Only"],
    price: { startingFrom: 600, details: "Fare Only" },
    location: "Saputara, Gujarat",
    categories: ["Monsoon", "Family"],
    image: "/Images/Saputara, Gira Waterfall.png",
    itinerary: [
      { day: "Day 1", title: "Saputara Sightseeing", details: "Visit Waghai Botanical Garden, witness the massive Gira Waterfall, and enjoy the hill station vibes at Saputara lake." }
    ]
  },
  {
    id: 6,
    title: "Statue of Unity, Harsiddhi Mata & Gumandev Darshan",
    duration: "1 Day",
    vehicle: "Seating Bus",
    inclusions: ["Transportation Only"],
    price: { startingFrom: 600, details: "Fare Only" },
    location: "Kevadia, Gujarat",
    categories: ["Family", "Religious"],
    image: "/Images/Statue of Unity.png",
    itinerary: [
      { day: "Day 1", title: "SOU & Temples", details: "Morning darshan at Gumandev and Harsiddhi Mata. Afternoon visit to the world's tallest statue, the Statue of Unity." }
    ]
  },
  {
    id: 7,
    title: "Ujjain & Omkareshwar Spiritual Tour",
    duration: "3 Days (1 Night Ujjain)",
    vehicle: "Sleeper AC Bus",
    inclusions: ["Tea/Breakfast", "Meals", "Stay"],
    price: { startingFrom: 5100, details: "Upper Berth" },
    location: "Madhya Pradesh",
    categories: ["Religious"],
    image: "/Images/Ujjain-Omkareshwer.png",
    itinerary: [
      { day: "Day 1", title: "Journey to Ujjain", details: "Overnight journey from Surat." },
      { day: "Day 2", title: "Mahakaleshwar & Local Temples", details: "Visit Mahakaleshwar Jyotirlinga, Kal Bhairav, and Harsiddhi Mata. Night stay in Ujjain." },
      { day: "Day 3", title: "Omkareshwar & Return", details: "Travel to Omkareshwar for Jyotirlinga darshan. Evening departure for Surat." }
    ]
  },
  {
    id: 8,
    title: "Diu, Somnath & Dwarka Spiritual Tour",
    duration: "3 Days",
    vehicle: "Sleeper AC Bus",
    inclusions: ["Tea/Breakfast", "Meals", "Stay"],
    price: { startingFrom: 5100, details: "Upper Berth" },
    location: "Gujarat / Diu",
    categories: ["Religious"],
    image: "/Images/Saurastra.png",
    itinerary: [
      { day: "Day 1", title: "Somnath Darshan", details: "Arrival in Somnath. Jyotirlinga darshan and night stay." },
      { day: "Day 2", title: "Dwarka", details: "Travel to Dwarka. Visit Dwarkadhish Temple and local sightseeing. Night Stay." },
      { day: "Day 3", title: "Bet Dwarka & Return", details: "Visit Nageshwar Jyotirlinga, Rukmini Temple, and Bet Dwarka. Evening return journey." }
    ]
  }
];

// Note the updated type: params is now a Promise
export default function PackageDetail({ params }: { params: Promise<{ id: string }> }) {
  // 1. Unwrap the params using React.use()
  const resolvedParams = use(params);

  // 2. Find the specific package based on the unwrapped URL ID
  const pkg = tourPackages.find((p) => p.id === parseInt(resolvedParams.id)) || tourPackages[0];

  // State to handle which itinerary day is expanded
  const [expandedDay, setExpandedDay] = useState<string | null>("Day 1");

  const toggleDay = (day: string) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const whatsappMessage = encodeURIComponent(`Hello Ajay Patel, I want to book the ${pkg.title} package.`);
  const whatsappLink = `https://wa.me/917802062340?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-16 text-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Navigation Tabs */}
        <div className="flex gap-6 border-b border-gray-200 mb-8 pb-4 text-sm font-semibold text-gray-500 overflow-x-auto whitespace-nowrap">
          <span className="text-emerald-600 border-b-2 border-emerald-600 pb-4 -mb-[18px]">About</span>
          <span className="hover:text-gray-900 cursor-pointer transition-colors">Packages</span>
          <span className="hover:text-gray-900 cursor-pointer transition-colors">Dates</span>
          <span className="hover:text-gray-900 cursor-pointer transition-colors">Itinerary</span>
          <span className="hover:text-gray-900 cursor-pointer transition-colors">Inclusions</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
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
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <Map className="w-4 h-4 text-emerald-600" /> {pkg.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <Bus className="w-4 h-4 text-emerald-600" /> {pkg.vehicle}
                  </span>
                </div>
                
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 font-medium text-sm transition-colors shadow-sm">
                  <Share className="w-4 h-4" /> Share
                </button>
              </div>
            </div>

            {/* Inclusions Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
                {pkg.inclusions.map((inclusion, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-medium text-gray-800 text-sm md:text-base">
                    {/* Render different icons based on text */}
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
                  <h2 className="text-2xl font-bold">Itinerary</h2>
                  <div className="flex gap-2">
                    <button className="text-sm border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors">
                      <FileText className="w-4 h-4 text-gray-500" /> Get PDF
                    </button>
                    <button 
                      onClick={() => setExpandedDay(null)}
                      className="text-sm border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50/50">
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
                      
                      {/* Accordion Content */}
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
          </div>

          {/* RIGHT COLUMN - Sticky Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28 flex flex-col gap-6">
              
              {/* Pricing & Booking Card */}
              <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                {pkg.price.oldPrice && (
                  <div className="bg-green-50 text-green-700 text-xs font-bold text-center py-2 flex items-center justify-center gap-1.5 border-b border-green-100">
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

                  {/* Button color updated to match primary theme */}
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
      </div>
    </main>
  );
}