"use client";

import { motion, Variants } from "framer-motion";
import { 
  Bus, 
  BedDouble, 
  Briefcase, 
  Map, 
  Users, 
  Flame,
  ShieldCheck,
  Clock,
  HeartHandshake
} from "lucide-react";

const services = [
  {
    title: "Premium Bus Booking",
    description: "AC & Non-AC Sleeper, Seating, and Mini buses for all your travel needs.",
    icon: Bus,
  },
  {
    title: "Pilgrimage Tours",
    description: "Carefully curated religious tours including Jyotirlinga and Chardham yatra.",
    icon: Flame,
  },
  {
    title: "Family & Monsoon Trips",
    description: "Safe and enjoyable weekend getaways and scenic monsoon picnics.",
    icon: Users,
  },
  {
    title: "Hotel Booking",
    description: "Comfortable and verified stays at the best rates across all destinations.",
    icon: BedDouble,
  },
  {
    title: "Corporate Tours",
    description: "Professional transport and itinerary management for team offsites.",
    icon: Briefcase,
  },
  {
    title: "Custom Itineraries",
    description: "Personalized travel plans tailored exactly to your preferences and schedule.",
    icon: Map,
  },
];

const features = [
  {
    title: "10+ Years Experience",
    description: "Trusted by thousands of travelers since 2016.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    description: "We are always here to help you during your journey.",
    icon: Clock,
  },
  {
    title: "Personalized Service",
    description: "Treating every customer like family with dedicated care.",
    icon: HeartHandshake,
  },
];

// Explicitly typing this as 'Variants' fixes the Vercel error permanently
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function Services() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Why Choose Us - Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 pb-12 border-b border-border/50">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Comprehensive Travel Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From booking a luxury sleeper coach to planning a complete family vacation, we handle every detail with precision.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-[2rem] bg-muted/30 border border-border/50 hover:bg-background hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="mb-6 p-4 rounded-2xl bg-background shadow-sm w-fit group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}