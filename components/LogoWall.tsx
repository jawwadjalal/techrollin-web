"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = ["QuantumAI", "NeuralNode", "CyberFlow", "DataStack", "Vertex"];

const LogoWall = () => {
  return (
    <section className="py-20 border-y border-white/5" style={{ backgroundColor: '#050505' }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium mb-10 tracking-[0.3em] uppercase" style={{ color: '#64748b' }}>
          Powering Next-Gen Enterprise Workflows
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {logos.map((logo, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              className="text-white text-xl md:text-2xl font-bold tracking-tighter cursor-default"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;