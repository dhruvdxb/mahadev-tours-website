"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-36 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            Have a question about our packages or need to plan a custom trip? We are here to help you every step of the way.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Address Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow group">
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Office Address</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Mahadev Tour & Travels<br />
                  Shop No. 2, Darshan Society,<br />
                  Sant Tukaram Society Part 2,<br />
                  Palanpur Jakatnaka, Surat,<br />
                  Gujarat 395005
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow group">
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Call or WhatsApp</h3>
                <p className="text-gray-500 text-sm mb-3">We are available 24/7 for support.</p>
                <div className="flex flex-col space-y-1.5">
                  <a href="https://wa.me/917802062340" target="_blank" rel="noreferrer" className="text-[#137573] font-bold hover:underline truncate block">
                    +91 78020 62340
                  </a>
                  <a href="tel:+919998653276" className="text-[#137573] font-bold hover:underline truncate block">
                    +91 99986 53276
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card (FIXED: Reduced font size so whole email fits on one line without truncation) */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow group">
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Email Us</h3>
                <p className="text-gray-500 text-sm mb-2">Drop us a line anytime.</p>
                <a 
                  href="mailto:mahadevtourandtravels.surat@gmail.com" 
                  className="text-[#137573] font-bold hover:underline text-xs sm:text-[13px] block whitespace-nowrap"
                >
                  mahadevtourandtravels.surat@gmail.com
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow group">
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Business Hours</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Monday - Saturday<br />
                  10:00 AM - 8:00 PM<br />
                  <span className="text-xs font-semibold text-emerald-600 mt-1.5 inline-block bg-emerald-50 px-2 py-1 rounded">Sunday: Available on WhatsApp</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map and Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Google Maps Embed */}
            <div className="w-full h-[350px] bg-gray-200 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.9664062922468!2d72.77813978638339!3d21.20966645249794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d70f233be9f%3A0x9c6cca38321ca64b!2sMAHADEV%20TOUR%20AND%20TRAVELS!5e0!3m2!1sen!2sin!4v1784701839084!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahadev Tours Office Location"
                className="absolute inset-0 transition-opacity duration-300"
              ></iframe>
            </div>

            {/* Contact Form (Visual) */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#137573]/30 focus:border-[#137573] transition-all placeholder:text-gray-400" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#137573]/30 focus:border-[#137573] transition-all placeholder:text-gray-400" 
                      placeholder="+91 00000 00000" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#137573]/30 focus:border-[#137573] transition-all resize-none placeholder:text-gray-400" 
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full sm:w-auto bg-[#137573] text-white px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0f5e5c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}