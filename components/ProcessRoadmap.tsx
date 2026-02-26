"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Database, Cpu, Code2, ShieldAlert, Rocket, Activity } from "lucide-react";

const steps = [
  { icon: <Search size={24} />, title: "Discovery & Strategy", desc: "We audit your existing workflows and identify high-ROI AI opportunities." },
  { icon: <PenTool size={24} />, title: "Architecture Design", desc: "Defining the tech stack, model logic, and integration points for your ecosystem." },
  { icon: <Database size={24} />, title: "Data Curation & Prep", desc: "Structuring your proprietary data for high-accuracy RAG (Retrieval-Augmented Generation)." },
  { icon: <Cpu size={24} />, title: "Model Selection & Tuning", desc: "Choosing the optimal LLM (Llama 3, Claude, GPT-4) and fine-tuning for your domain." },
  { icon: <Code2 size={24} />, title: "Development & Iteration", desc: "Building the agentic loops and testing against real-world edge cases." },
  { icon: <ShieldAlert size={24} />, title: "Security & Guardrails", desc: "Implementing PII masking, safety filters, and enterprise-grade access controls." },
  { icon: <Rocket size={24} />, title: "Production Deployment", desc: "Seamless integration into your VPC or on-premise servers with zero downtime." },
  { icon: <Activity size={24} />, title: "Optimization & Support", desc: "Continuous monitoring and iterative model updates to maintain peak performance." },
];

const ProcessRoadmap = () => {
  return (
    <section id="process" className="py-24 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Your Enterprise AI Roadmap
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A structured, security-first approach to building high-performance AI agents.
          </p>
        </div>

        {/* Semantic Ordered List for SEO */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center font-bold text-sm shadow-lg shadow-cyan-900/20">
                {index + 1}
              </div>
              
              <div className="mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessRoadmap;