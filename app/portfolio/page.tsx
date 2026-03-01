"use client";
import React from "react";
import { ExternalLink, Cpu, Database, Zap, Bot, Code2, Lock } from "lucide-react";
import { motion } from "framer-motion";

/*
const projects = [
  {
    title: "Nexus-7 Autonomous Agent",
    category: "Enterprise AI",
    description: "Multi-agent system for automated logistics handling and real-time inventory optimization.",
    tech: ["GPT-4o", "Vector DB", "Node.js"],
    color: "from-cyan-500/20 to-blue-500/20",
    icon: <Bot className="text-cyan-400" size={24} />,
  },
  {
    title: "Quantum Ledger Bot",
    category: "FinTech Automation",
    description: "AI-driven financial auditing system that detects anomalies in millions of transactions.",
    tech: ["Claude 3.5", "Python", "PostgreSQL"],
    color: "from-purple-500/20 to-pink-500/20",
    icon: <Cpu className="text-purple-400" size={24} />,
  },
  {
    title: "Cyber-Secure RAG Pipeline",
    category: "Knowledge Systems",
    description: "Self-hosted LLM infrastructure for legal firms with 100% data privacy and offline RAG.",
    tech: ["Llama 3", "Pinecone", "Docker"],
    color: "from-emerald-500/20 to-teal-500/20",
    icon: <Database className="text-emerald-400" size={24} />,
  },
  {
    title: "Sentinel Vision AI",
    category: "Computer Vision",
    description: "Real-time security monitoring system using custom vision models for industrial safety.",
    tech: ["PyTorch", "OpenCV", "AWS"],
    color: "from-orange-500/20 to-yellow-500/20",
    icon: <Zap className="text-orange-400" size={24} />,
  },
];
*/

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 flex items-center justify-center">
      
      {/* --- Coming Soon Placeholder --- */}
      <div className="text-center">
        <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-cyan-500">
          <Lock size={32} />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter uppercase mb-2">
          Project Vault <span className="text-cyan-500">Locked</span>
        </h1>
        <p className="text-zinc-500 max-w-sm mx-auto mb-8">
          Our engineering case studies are currently under technical audit. Full access coming soon.
        </p>
        <a href="/" className="text-sm font-bold text-white hover:text-cyan-500 transition-colors underline underline-offset-4">
          Return to Command Center
        </a>
      </div>

      {/* --- Original Portfolio Code (Commented Out) --- */}
      {/*
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase"
          >
            Engineering <span className="text-cyan-500">Impact.</span>
          </motion.h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Explore our repository of autonomous systems and enterprise AI solutions designed to redefine efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative group p-8 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between h-[380px] hover:border-white/20 transition-all duration-500 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.color} blur-[100px] opacity-30 group-hover:opacity-60 transition-opacity`} />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-zinc-400 border border-white/10 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href="/#contact-form-section" 
                  className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all"
                >
                  View Case Study <ExternalLink size={16} className="text-cyan-500" />
                </a>
              </div>
            </motion.div>
          ))}

          <motion.div 
            className="lg:col-span-3 p-10 rounded-3xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-8 mt-6"
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2 uppercase">Ready to be our next success story?</h2>
              <p className="text-zinc-400">Let&apos;s build an autonomous future together.</p>
            </div>
            <a 
              href="/#contact-form-section" 
              className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-2xl hover:bg-white transition-all whitespace-nowrap"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </div>
      */}
    </main>
  );
}