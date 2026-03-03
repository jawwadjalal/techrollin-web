"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// --- Number Counter Component ---
const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, {
    stiffness: 60,  // Thora smooth count ke liye
    damping: 20,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const stats = [
  { target: 330, suffix: "+", label: "Dedicated IT Experts", context: "Senior engineers, data scientists, and AI architects ready to scale your vision." },
  { target: 236, suffix: "+", label: "Global Clients Served", context: "Delivering high-impact solutions across fintech, healthcare, and logistics." },
  { target: 11, suffix: "", label: "Industry Awards", context: "Recognized for excellence in innovation, security, and technical execution." },
];

const PerformanceStats = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden border-b border-white/5" 
      style={{ backgroundColor: '#010B12', color: '#ffffff' }} 
      role="region" 
      aria-label="Key Performance Indicators"
    >
      {/* Background Decorative Element (Neon Dots) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#39FF13 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase italic" 
          >
            Enterprise-Grade <span style={{ color: '#39FF13' }}>AI at Scale</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto font-medium"
          >
            Validated expertise through high-stakes AI implementation and digital transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group flex flex-col items-center text-center p-8 rounded-[40px] transition-all border border-white/5 bg-white/[0.01] hover:border-neon-green/20"
            >
              {/* Number with Neon Glow */}
              <div className="text-6xl md:text-7xl font-black tracking-tighter mb-4 flex items-baseline text-white group-hover:text-electric-lime transition-colors">
                <Counter value={stat.target} />
                <span style={{ color: '#39FF13' }} className="group-hover:scale-125 transition-transform duration-300 ml-1">
                    {stat.suffix}
                </span>
              </div>
              
              {/* Animated Progress Bar */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                className="h-1 bg-neon-green/40 rounded-full mb-6 group-hover:w-20 group-hover:bg-neon-green transition-all duration-500" 
              />
              
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{stat.label}</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;