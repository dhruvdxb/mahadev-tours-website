"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Send, Clock, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "917802062340";

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Whether you need to book a sleeper coach, plan a family trip, or inquire about our monsoon specials, we are here to help.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-6 rounded-3xl border border-border flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Call Us</h3>
                  <p className="text-muted-foreground text-sm mt-1 mb-3">Ajaybhai Patel</p>
                  <a href={`tel:+${whatsappNumber}`} className="text-primary font-semibold hover:underline">
                    +91 78020 62340
                  </a>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-3xl border border-border flex flex-col gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mt-1 mb-3">Available 24/7</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Message Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-3xl border border-border flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Our Office</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Near Jalaram Mandir Parking,<br />
                  Palanpur Jakatnaka,<br />
                  Surat, Gujarat
                </p>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="w-full h-[250px] bg-muted rounded-3xl overflow-hidden border border-border relative">
              {/* Replace the src with your actual Google Maps Embed link */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.4170949015!2d72.7398947!3d21.1593403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-border rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-primary/5"
          >
            <div className="mb-8 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Send an Inquiry</h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Inquiry Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm text-foreground appearance-none">
                  <option value="">Select an option</option>
                  <option value="bus">Bus / Vehicle Booking</option>
                  <option value="package">Tour Package Inquiry</option>
                  <option value="custom">Custom Corporate/Family Trip</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your travel plans..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full group flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-bold shadow-md hover:bg-primary/90 transition-all"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                <Clock className="w-3.5 h-3.5" />
                <span>We typically reply within 1 hour during business hours.</span>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}