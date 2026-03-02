/*
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Database, Cpu, Code2, ShieldAlert, Rocket, Activity } from "lucide-react";

const steps = [
  { icon: <Search size={24} />, title: "Discovery", desc: "Auditing workflows and identifying high-ROI AI opportunities.", color: "cyan" },
  { icon: <PenTool size={24} />, title: "Architecture", desc: "Defining tech stack, model logic, and integration points.", color: "purple" },
  { icon: <Database size={24} />, title: "Data Prep", desc: "Structuring proprietary data for high-accuracy RAG pipelines.", color: "emerald" },
  { icon: <Cpu size={24} />, title: "Model Tuning", desc: "Selecting and fine-tuning LLMs (Llama 3, Claude, GPT-4).", color: "orange" },
  { icon: <Code2 size={24} />, title: "Development", desc: "Building agentic loops and testing real-world edge cases.", color: "blue" },
  { icon: <ShieldAlert size={24} />, title: "Guardrails", desc: "Implementing PII masking and enterprise access controls.", color: "red" },
  { icon: <Rocket size={24} />, title: "Deployment", desc: "Seamless integration into your VPC or on-premise servers.", color: "emerald" },
  { icon: <Activity size={24} />, title: "Optimization", desc: "Continuous monitoring and iterative performance updates.", color: "cyan" },
];

const ProcessRoadmap = () => {
  return (
    <section id="process" className="py-24 bg-[#050505] text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decorative Grid Effect }
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-28">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 mb-4 rounded-full border border-white/5 bg-white/5 text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]"
          >
            System Status: READY_FOR_DEPLOYMENT // Phase-Gate Methodology
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase italic">
            Deployment <span className="text-cyan-500">Pipeline.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            From initial audit to autonomous execution—our systematic framework ensures enterprise-grade reliability.
          </p>
        </div>

        {/* The Roadmap Grid with Circuit Connections }
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
          
          {/* Desktop Connecting Line (Subtle Grid) }
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-white/0 via-white/5 to-white/0 hidden lg:block -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group p-8 rounded-[40px] border border-white/5 bg-white/[0.01] hover:border-${step.color}-500/20 transition-all duration-500 flex flex-col items-center lg:items-start text-center lg:text-left min-h-[380px]`}
            >
              
              {/* Dynamic Step Icon with Unique Glow }
              <div className="relative mb-8">
                {/* 1. Behind Icon Glow (Pulsing) }
                <div className={`absolute inset-0 rounded-full bg-${step.color}-500/20 blur-2xl animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                {/* 2. Number Box (The Gate) }
                <div className={`absolute -top-3 -right-3 w-7 h-7 rounded-full bg-zinc-950 border border-${step.color}-500 text-${step.color}-500 text-xs font-black flex items-center justify-center`}>
                  0{index + 1}
                </div>
                
                {/* 3. Icon Box }
                <div className={`w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-${step.color}-400 group-hover:border-${step.color}-500/50 group-hover:text-white transition-all duration-500 relative z-10`}>
                  {step.icon}
                </div>
              </div>

              {/* Dynamic Glow Strip behind title }
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                   style={{ background: `radial-gradient(circle at top right, ${step.color === 'cyan' ? '#22d3ee' : step.color === 'purple' ? '#a855f7' : step.color === 'emerald' ? '#10b981' : step.color === 'orange' ? '#f59e0b' : step.color === 'red' ? '#ef4444' : '#2563eb'}33, transparent 70%)` }} />

              {/* Title & Description with Color Accents }
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-4 tracking-tight uppercase italic group-hover:text-${step.color}-400 transition-colors`}>
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                  {step.desc}
                </p>
              </div>

              {/* Unique Circuit Particle (Decorative) }
              <div className={`absolute -bottom-1 -right-1 opacity-10 group-hover:opacity-100 transition-opacity`}>
                 <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} style={{ color: step.color === 'cyan' ? '#22d3ee' : step.color === 'purple' ? '#a855f7' : step.color === 'emerald' ? '#10b981' : step.color === 'orange' ? '#f59e0b' : step.color === 'red' ? '#ef4444' : '#2563eb' }}>
                    <Activity size={12} />
                 </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Trust/Timeline Banner }
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-28 p-8 rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6 px-12"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <Rocket size={32} className="text-emerald-500" />
            <div>
               <h4 className="text-xl font-bold">Accelerated Production Flow</h4>
               <p className="text-slate-500 text-sm font-medium">From blueprint to active execution. Estimated Timeline: 4–12 Weeks.</p>
            </div>
          </div>
          <a href="/#contact-form-section" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-500 transition-all whitespace-nowrap">
            Schedule a Process Audit
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ProcessRoadmap;
*/