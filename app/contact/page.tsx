"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format the message for WhatsApp from the form inputs
    const text = encodeURIComponent(
      `Hello Ajaybhai, my name is ${formData.name} (${formData.phone}). Message: ${formData.message}`
    );
    window.open(`https://wa.me/917802062340?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Simple Minimal Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-4xl font-black text-gray-900 mt-4 mb-3 tracking-tight">
            We'd Love to Hear From You
          </h1>
          <p className="text-gray-500 text-base">
            Have questions about departures or custom bookings? Drop a message below or chat with Ajaybhai directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Quick Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Direct Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Call / WhatsApp</p>
                    <a href="tel:+917802062340" className="text-gray-900 font-bold text-base hover:text-primary transition-colors">
                      +91 78020 62340
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Boarding Point</p>
                    <p className="text-gray-900 font-bold text-sm">
                      Lal Ganapati Mandir, Surat, Gujarat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Timing</p>
                    <p className="text-gray-900 font-bold text-sm">
                      Mon - Sun: 8:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Button inside card */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="https://wa.me/917802062340?text=Hello%20Ajaybhai,%20I%20have%20an%20inquiry."
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl font-bold text-sm hover:bg-[#20bd5a] transition-all shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Instant WhatsApp Chat
                </Link>
              </div>

            </div>
          </div>

          {/* Right Side: Interactive Form that triggers WhatsApp (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send an Inquiry</h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill this out and it will automatically open WhatsApp with your details ready to send.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">Your Message or Query</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Which tour or date are you looking for?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-sm shadow-md hover:bg-primary/90 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}