"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Scale, History, Terminal, Fingerprint } from "lucide-react";

const complianceFeatures = [
  {
    icon: <ShieldCheck size={32} />,
    title: "LLM Guardrails",
    tag: "ACTIVE PROTECTION",
    desc: "Real-time prompt injection filtering and hallucination management.",
    color: "cyan"
  },
  {
    icon: <Lock size={32} />,
    title: "Data Sovereignty",
    tag: "ENCRYPTED",
    desc: "Private VPC deployments. Your data never trains public models.",
    color: "purple"
  },
  {
    icon: <Scale size={32} />,
    title: "Ethical Governance",
    tag: "HUMAN-IN-THE-LOOP",
    desc: "Bias detection and explainable AI decision-making protocols.",
    color: "emerald"
  },
  {
    icon: <History size={32} />,
    title: "Activity Audit",
    tag: "FULL LOGGING",
    desc: "Traceable version control for every single agent interaction.",
    color: "blue"
  }
];

const SecurityCompliance = () => {
  return (
    <section id="compliance" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* 1. Cyber Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with Scanning Line */}
        <div className="relative mb-20 border-l-4 border-cyan-500 pl-8 py-2">
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-[-4px] w-1 h-12 bg-cyan-400 blur-sm z-20"
          />
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">
            Hardened <span className="text-cyan-500 underline decoration-cyan-500/30">Security.</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-lg max-w-xl font-mono uppercase tracking-widest text-xs">
            // Mission Critical Compliance for Regulated Industries
          </p>
        </div>

        {/* 2. Interactive Hex-style Grid or Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceFeatures.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
              className="group relative p-8 rounded-2xl bg-white/[0.01] border border-white/10 flex flex-col justify-between min-h-[320px] transition-all overflow-hidden"
            >
              {/* Scanline Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 -translate-y-full group-hover:translate-y-full transition-transform duration-[2000ms] ease-in-out" />

              <div>
                <div className="mb-6 text-cyan-400 bg-cyan-400/10 w-fit p-3 rounded-xl border border-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyan-500/50 tracking-tighter uppercase font-bold">
                  {item.tag}
                </span>
                <Fingerprint size={14} className="text-zinc-800 group-hover:text-cyan-500/50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. The "Live Status" Bar */}
        <div className="mt-12 p-4 bg-zinc-950 border border-white/5 rounded-xl flex flex-wrap items-center justify-between gap-6 px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase">System: Operational</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/10 pl-6">
              <Terminal size={12} className="text-zinc-500" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Encryption: AES-256</span>
            </div>
          </div>
          
          <div className="flex gap-4 opacity-30 grayscale hover:grayscale-0 transition-all">
             <span className="font-bold text-white text-[10px] tracking-widest uppercase">GDPR</span>
             <span className="font-bold text-white text-[10px] tracking-widest uppercase">SOC2</span>
             <span className="font-bold text-white text-[10px] tracking-widest uppercase">HIPAA</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecurityCompliance;