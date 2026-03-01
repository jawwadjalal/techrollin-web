"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div style={{ backgroundColor: '#050505', minHeight: '90vh' }} />;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20" style={{ backgroundColor: '#050505' }}>
      
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 animate-pulse" 
          style={{ backgroundColor: '#9333ea' }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30" 
          style={{ backgroundColor: '#06b6d4' }} 
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-10 backdrop-blur-xl" 
               style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <ShieldCheck size={16} style={{ color: '#22d3ee' }} />
            <span style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: '500', letterSpacing: '0.05em' }}>
              ISO-READY & SOC2 COMPLIANT FRAMEWORKS
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8" style={{ color: '#ffffff' }}>
            Secure Custom <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
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

          {/* Centered Action Button */}
          <div className="flex justify-center items-center mt-12">
            <a href="/#contact-form-section" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-12 py-5 bg-white text-black font-extrabold rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-cyan-500/20 hover:bg-cyan-500 transition-all text-lg uppercase tracking-tight"
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