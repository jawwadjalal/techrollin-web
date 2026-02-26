"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { target: "330", suffix: "+", label: "Dedicated IT Experts", context: "Senior engineers, data scientists, and AI architects ready to scale your vision." },
  { target: "236", suffix: "+", label: "Global Clients Served", context: "Delivering high-impact solutions across fintech, healthcare, and logistics." },
  { target: "11", suffix: "", label: "Industry Awards", context: "Recognized for excellence in innovation, security, and technical execution." },
];

const PerformanceStats = () => {
  return (
    <section 
      className="py-24" 
      style={{ backgroundColor: '#f8fafc', color: '#0f172a' }} // Forced Light Background
      role="region" 
      aria-label="Key Performance Indicators"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4" style={{ color: '#0f172a' }}>
            Enterprise-Grade AI at Scale
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Validated expertise through a decade of digital transformation and high-stakes AI implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 flex" style={{ color: '#0f172a' }}>
                <span>{stat.target}</span>
                <span style={{ color: '#0891b2' }}>{stat.suffix}</span>
              </div>
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