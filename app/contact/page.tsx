"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pt-36 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
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
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Office Address</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Mahadev Tour & Travels<br />
                  Shop No. 2, Darshan Society,<br />
                  Sant Tukaram Society Part 2,<br />
                  Palanpur Jakatnaka, Surat,<br />
                  Gujarat 395005
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Call or WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-2">We are available 24/7 for support.</p>
                <div className="flex flex-col space-y-1">
                  <a href="https://wa.me/917802062340" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">
                    +91 78020 62340
                  </a>
                  <a href="tel:+919998653276" className="text-primary font-bold hover:underline">
                    +91 99986 53276
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-bold text-foreground text-lg mb-1">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-2">Drop us a line anytime.</p>
                <a href="mailto:mahadevtourandtravels.surat@gmail.com" className="text-primary font-bold hover:underline text-sm break-words">
                  mahadevtourandtravels.surat@gmail.com
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Saturday<br />
                  10:00 AM - 8:00 PM<br />
                  <span className="text-xs italic mt-1 block">Sunday: Available on WhatsApp</span>
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
            <div className="w-full h-[350px] bg-muted rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.9664062922468!2d72.77813978638339!3d21.20966645249794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d70f233be9f%3A0x9c6cca38321ca64b!2sMAHADEV%20TOUR%20AND%20TRAVELS!5e0!3m2!1sen!2sin!4v1784701839084!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahadev Tours Office Location"
              ></iframe>
            </div>

            {/* Contact Form (Visual) */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Your Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your travel plans..."></textarea>
                </div>
                <button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
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