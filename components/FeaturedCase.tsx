"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, ShieldCheck, Activity, Lock } from "lucide-react";

const FeaturedCase = () => {
  // Smooth Scroll Function for the button
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact-form-section");
    }
  };

  return (
    <section 
      id="featured"
      aria-label="Social Proof" 
      className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
          >
            <Globe size={14} className="text-cyan-400 animate-spin-slow" />
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Global Deployment Portfolio
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Featured <span className="text-cyan-500">Case Study.</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 overflow-hidden"
        >
          <div className="relative z-10 p-8 md:p-16 rounded-[2.4rem] bg-[#0A0A0A] overflow-hidden">
            
            <motion.div 
              animate={{ left: ["-10%", "110%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent z-20 pointer-events-none"
            />

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              
              <div className="w-full lg:w-2/5 flex flex-col items-center">
                <div className="relative w-full aspect-square max-w-[300px] rounded-3xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="text-white font-black text-2xl tracking-tighter text-center px-6 leading-none">
                    CREDIT <br />
                    <span className="text-cyan-500 uppercase">Agricole</span>
                  </span>

                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    <span className="bg-zinc-900 border border-white/10 text-[9px] px-3 py-1 rounded-full text-zinc-400 font-mono">RESTRICTED_ACCESS</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-12 w-full">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-cyan-400 font-black text-xl">85%</div>
                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Efficiency</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-emerald-500 font-black text-xl">100%</div>
                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Compliance</div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-3/5 text-left">
                <div className="flex items-center gap-2 mb-6">
                  <Lock size={16} className="text-cyan-500" />
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">Intellectual Property Protected</span>
                </div>
                
                <h4 className="text-3xl md:text-4xl font-black text-white mb-8 leading-[1.1] uppercase italic tracking-tighter">
                  Automating <span className="text-cyan-500">Complex Routing</span> for Global Banking Operations.
                </h4>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                  We engineered a custom agentic framework to handle multi-layered request routing. Due to NDA restrictions, full technical details are available only upon request for qualified enterprise partners.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <a 
                    href="#contact-form-section" 
                    onClick={scrollToContact}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black text-sm rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-500 transition-all uppercase tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    Request Full Case Study <ArrowUpRight size={18} strokeWidth={3} />
                  </a>
                  <div className="flex items-center gap-2 text-zinc-600 font-mono text-[10px] uppercase">
                    <Activity size={14} className="text-emerald-500" />
                    Status: NDA Protected
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCase;