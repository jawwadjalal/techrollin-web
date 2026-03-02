"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Database, Layers, Workflow, ChevronRight } from "lucide-react";

const Architecture = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Core Execution Engine",
      desc: "The 'Brain' (LLM) that handles complex reasoning and autonomous decision-making logic.",
      icon: <Brain size={28} />,
      color: "#a855f7",
      codeLine: "self.brain = core_llm"
    },
    {
      id: 2,
      title: "Long-Term & Short-Term Memory",
      desc: "Context retention using vector databases (Pinecone/Milvus) for persistent awareness.",
      icon: <Database size={28} />,
      color: "#06b6d4",
      codeLine: "self.memory = memory_vdb"
    },
    {
      id: 3,
      title: "Integrated Toolsets (RAG)",
      desc: "Custom APIs and RAG pipelines to access enterprise data in real-time.",
      icon: <Layers size={28} />,
      color: "#10b981",
      codeLine: "self.tools = [RAG_Pipeline, API_Connector]"
    },
    {
      id: 4,
      title: "Task Planning & Decomposition",
      desc: "Breaking down complex goals into executable sub-steps without human intervention.",
      icon: <Workflow size={28} />,
      color: "#f59e0b",
      codeLine: "plan = await self.brain.decompose(objective)"
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4"
          >
            Agent <span className="text-cyan-400">Architecture</span> Flow
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Hover over the modules to see the autonomous data execution flow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Interaction Points */}
          <div className="relative space-y-6">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative p-6 rounded-2xl border transition-all duration-500 flex items-center gap-6 group cursor-crosshair ${
                  activeStep === step.id ? "bg-white/[0.04] border-white/20 shadow-2xl" : "bg-transparent border-white/5 opacity-60"
                }`}
              >
                {/* Data Flow Line (Animated) */}
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div 
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="absolute left-full top-1/2 h-[2px] -translate-y-1/2 z-0 hidden lg:block pointer-events-none"
                      style={{ 
                        background: `linear-gradient(90deg, ${step.color}, transparent)`,
                        width: "80px", // Length of the connecting line
                        left: "100%"
                      }}
                    >
                      {/* Pulse Particle */}
                      <motion.div 
                        animate={{ x: [0, 80], opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="w-2 h-2 rounded-full blur-[2px] bg-white"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10" style={{ color: step.color }}>
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    {step.title} {activeStep === step.id && <ChevronRight size={16} className="text-cyan-400 animate-bounce-x" />}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Execution Terminal */}
          <div className="relative">
            {/* Main Terminal Box */}
            <motion.div 
              animate={{ 
                borderColor: activeStep ? steps[activeStep - 1].color + "44" : "rgba(255,255,255,0.1)",
                boxShadow: activeStep ? `0 0 50px ${steps[activeStep - 1].color}22` : "0 0 0px transparent"
              }}
              className="bg-[#0c0c0c] border rounded-3xl p-8 font-mono text-sm relative overflow-hidden transition-all duration-500"
            >
              {/* Terminal Header */}
              <div className="flex justify-between items-center mb-8 opacity-40">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-[10px] tracking-widest uppercase">
                  {activeStep ? `ACTIVE: MODULE_0${activeStep}` : "LISTENING_FOR_INPUT"}
                </span>
              </div>

              {/* Animated Code Flow */}
              <div className="space-y-3 relative z-10">
                <div className="text-slate-500">class TechRollinAgent:</div>
                <div className="pl-4 text-slate-500">def run_process(objective):</div>
                <div className="pl-8 space-y-2">
                  {steps.map((s) => (
                    <div 
                      key={s.id} 
                      className={`transition-all duration-300 ${activeStep === s.id ? "text-white opacity-100 translate-x-2" : "opacity-20"}`}
                    >
                      <span style={{ color: s.color }}>▶</span> {s.codeLine}
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Processing Glow */}
              <AnimatePresence>
                {activeStep && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1.2 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${steps[activeStep-1].color}, transparent 70%)` }}
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* Status Bar */}
            <div className="mt-6 flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${activeStep ? "bg-emerald-500 animate-pulse" : "bg-zinc-700"}`} />
                <span className="text-[10px] text-zinc-500 font-mono tracking-tighter uppercase">
                  {activeStep ? "Data Stream: 4.2 Gbps" : "Standby Mode"}
                </span>
              </div>
              <span className="text-[10px] text-zinc-700 font-mono">NODE_TX_v4.2</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Architecture;