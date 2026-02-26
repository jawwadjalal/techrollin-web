"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Database, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    icon: <Cpu className="text-purple-400" size={28} />,
    title: "Autonomous Multi-Agent Systems",
    desc: "Orchestrate sophisticated workflows with custom AI agents designed for complex, multi-step tasks. We build collaborative agent frameworks that communicate, execute code, and integrate with your stack.",
  },
  {
    icon: <Database className="text-cyan-400" size={28} />,
    title: "Industry-Specific Model Optimization",
    desc: "Move beyond generic outputs. We fine-tune Large Language Models (LLMs) on your proprietary data to ensure domain-specific accuracy, reduced hallucinations, and brand-aligned tone.",
  },
  {
    icon: <ShieldCheck className="text-emerald-400" size={28} />,
    title: "Private & On-Premise AI Infrastructure",
    desc: "Maintain total data sovereignty. We specialize in deploying models within your own VPC or on-premise hardware, ensuring 100% privacy and compliance for sensitive enterprise data.",
  },
  {
    icon: <Zap className="text-amber-400" size={28} />,
    title: "Rapid AI Proof-of-Concept (PoC)",
    desc: "Validate your AI use case in weeks, not months. Our MVP approach focuses on high-impact features, allowing you to test feasibility and ROI before scaling to full production.",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Service Capabilities
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            End-to-end AI engineering to solve complex business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle Card Glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-base">
                  {service.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;