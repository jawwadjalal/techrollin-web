"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const FeaturedCase = () => {
  return (
    <section 
      aria-label="Social Proof" 
      className="py-24 bg-[#0A0A0A] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Trusted by Global Leaders in Regulated Industries
          </h3>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        {/* Featured Case Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 overflow-hidden"
        >
          {/* Glass Glow Effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-700" />

          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            {/* Case Image/Logo Side */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center space-y-4">
              {/* SVG Placeholder for Credit Agricole */}
              <div className="w-48 h-48 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all">
                <span className="text-white/40 font-bold text-xl tracking-tighter">CRÉDIT AGRICOLE</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SECURE DEPLOYMENT
              </div>
            </div>

            {/* Case Text Side */}
            <div className="w-full md:w-2/3 text-left">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Precision AI for Crédit Agricole: Automating complex request-routing in banking.
              </h4>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We developed a secure, intelligent request-routing system to automate complex workflows within a 
                highly regulated banking environment—increasing operational efficiency while maintaining 
                strict data compliance.
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-cyan-400 transition-colors"
              >
                Read the Crédit Agricole Case Study 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCase;