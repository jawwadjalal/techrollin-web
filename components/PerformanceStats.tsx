"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// --- Number Counter Component ---
const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2000,
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
      className="py-24 relative overflow-hidden" 
      style={{ backgroundColor: '#f8fafc', color: '#0f172a' }} 
      role="region" 
      aria-label="Key Performance Indicators"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0891b2 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-4" 
            style={{ color: '#0f172a' }}
          >
            Enterprise-Grade AI at Scale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Validated expertise through a decade of digital transformation and high-stakes AI implementation.
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
              className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 flex items-baseline" style={{ color: '#0f172a' }}>
                <Counter value={stat.target} />
                <span className="text-cyan-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.suffix}
                </span>
              </div>
              
              <div className="h-1 w-12 bg-cyan-600/20 rounded-full mb-6 group-hover:w-20 transition-all duration-500" />
              
              <h3 className="text-xl font-bold mb-3">{stat.label}</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
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