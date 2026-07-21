"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

interface StatItemProps {
  endValue: number;
  suffix: string;
  label: string;
  delay?: number;
}

const StatItem = ({ endValue, suffix, label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, endValue, {
        duration: 2, 
        delay: delay,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, endValue, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: delay }}
        // Changed to text-primary to use your brand color
        className="text-4xl md:text-5xl font-bold text-primary mb-2 flex items-center justify-center"
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        // Changed to muted-foreground for a softer, readable grey
        className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-widest"
      >
        {label}
      </motion.div>
    </div>
  );
};

export default function StatsBanner() {
  return (
    // Changed background to bg-primary/5 (a 5% tint of your brand color) and added a subtle border
    <section className="w-full bg-primary/5 py-16 border-y border-primary/10 relative overflow-hidden">
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem 
            endValue={5000} 
            suffix="+" 
            label="Happy Travelers" 
            delay={0} 
          />
          <StatItem 
            endValue={100} 
            suffix="+" 
            label="Tours Completed" 
            delay={0.1} 
          />
          <StatItem 
            endValue={15} 
            suffix="+" 
            label="Sacred Destinations" 
            delay={0.2} 
          />
          <StatItem 
            endValue={10} 
            suffix="+" 
            label="Years Experience" 
            delay={0.3} 
          />
        </div>
      </div>
    </section>
  );
}