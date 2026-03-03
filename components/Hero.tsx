"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MatrixRain from "./MatrixRain";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div style={{ backgroundColor: '#010B12', minHeight: '90vh' }} />;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20" style={{ backgroundColor: '#010B12' }}>
      
      {/* 1. Matrix Rain Background (Sab se peeche) */}
      <MatrixRain />
      
      {/* 2. Background Glows (Matrix ke oopar, content ke peeche) */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 animate-pulse" 
          style={{ backgroundColor: '#0C8900' }} // Deep Green
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" 
          style={{ backgroundColor: '#39FF13' }} // Neon Green
        />
      </div>

      {/* 3. Main Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-10 backdrop-blur-xl" 
               style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(57, 255, 19, 0.2)' }}>
            <ShieldCheck size={16} style={{ color: '#9CFF00' }} />
            <span style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: '500', letterSpacing: '0.05em' }}>
              ISO-READY & SOC2 COMPLIANT FRAMEWORKS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8" style={{ color: '#ffffff' }}>
            Secure Custom <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #9CFF00 0%, #39FF13 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              AI Agent Development
            </span> <br />
            for Enterprise Workflows
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12" style={{ color: '#94a3b8' }}>
            Automate domain-specific tasks with high-precision AI agents built for your unique data. 
            Deploy self-hosted, private solutions that ensure your proprietary information never leaves your infrastructure.
          </p>

          {/* Action Button */}
          <div className="flex justify-center items-center mt-12">
            <a href="/#contact-form-section" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-12 py-5 bg-white text-black font-extrabold rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-neon-green/20 hover:bg-[#39FF13] transition-all text-lg uppercase tracking-tight"
              >
                Let’s Talk Strategy <ArrowUpRight size={22} strokeWidth={3} />
              </motion.button>
            </a>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;