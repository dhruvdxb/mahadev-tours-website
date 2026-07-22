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
        className="text-4xl md:text-5xl font-bold text-primary mb-2 flex items-center justify-center"
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-widest"
      >
        {label}
      </motion.div>
    </div>
  );
};

export default function StatsBanner() {
  return (
    <section className="w-full bg-primary/5 py-16 border-y border-primary/10 relative overflow-hidden">
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* FIXED: Changed to md:grid-cols-3 so the 3 items share the space perfectly evenly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem 
            endValue={1100} 
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