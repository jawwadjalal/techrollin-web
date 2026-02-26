"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Briefcase } from "lucide-react";

const usps = [
  {
    icon: <Cpu className="text-cyan-500" size={32} />,
    title: "Advanced AI Architecture",
    desc: "We move beyond basic prompts. Our systems utilize autonomous agentic loops and self-correcting RAG pipelines."
  },
  {
    icon: <ShieldCheck className="text-emerald-500" size={32} />,
    title: "Gold-Standard Compliance",
    desc: "Security is baked into our DNA. Fully compliant with ISO 27001, GDPR, and SOC2 Type II standards."
  },
  {
    icon: <Briefcase className="text-purple-500" size={32} />,
    title: "Deep Domain Expertise",
    desc: "We bridge the gap between 'Code' and 'Business' with decades of experience in Fintech and Logistics."
  }
];

const TestimonialsUSP = () => {
  return (
    <section className="py-24 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32 text-center max-w-4xl mx-auto">
          <motion.blockquote 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-medium italic text-slate-200"
          >
            "In a landscape of AI 'wrappers,' this team stands out for their deep architectural expertise."
          </motion.blockquote>
          <cite className="block mt-8 not-italic font-bold text-white text-lg">
            Director of Digital Transformation — Tier-1 Global Bank
          </cite>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {usps.map((usp, index) => (
            <div key={index} className="group">
              <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                {usp.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{usp.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsUSP;