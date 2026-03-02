"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Briefcase, Quote } from "lucide-react";

const usps = [
  {
    icon: <Cpu size={32} />,
    title: "Advanced AI Architecture",
    desc: "We move beyond basic prompts. Our systems utilize autonomous agentic loops and self-correcting RAG pipelines.",
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Gold-Standard Compliance",
    desc: "Security is baked into our DNA. Fully compliant with ISO 27001, GDPR, and SOC2 Type II standards.",
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    icon: <Briefcase size={32} />,
    title: "Deep Domain Expertise",
    desc: "We bridge the gap between 'Code' and 'Business' with decades of experience in Fintech and Logistics.",
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20"
  }
];

const TestimonialsUSP = () => {
  return (
    <section className="py-32 bg-[#050505] text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Testimonial Quote Section */}
        <div className="mb-32 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10 p-12 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-md"
          >
            {/* Quote Icon Background */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#050505] border border-white/10 rounded-3xl flex items-center justify-center text-cyan-500 shadow-2xl">
              <Quote size={40} fill="currentColor" className="opacity-20" />
            </div>

            <motion.blockquote 
              className="text-2xl md:text-4xl font-medium italic text-slate-200 leading-snug tracking-tight"
            >
              "In a landscape of AI <span className="text-cyan-400 not-italic font-bold tracking-tighter">'wrappers,'</span> this team stands out for their deep <span className="underline decoration-cyan-500/30">architectural expertise</span>."
            </motion.blockquote>
            
            <div className="mt-10 flex flex-col items-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6" />
              <cite className="not-italic">
                <span className="block font-black uppercase tracking-[0.2em] text-sm text-white mb-1">Director of Digital Transformation</span>
                <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest">Tier-1 Global Bank</span>
              </cite>
            </div>
          </motion.div>
        </div>

        {/* USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[32px] bg-white/[0.01] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Corner Accent Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${usp.color} blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className={`mb-8 p-4 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 ${usp.shadow}`}>
                {usp.icon}
              </div>

              <h3 className="text-xl font-black mb-4 tracking-tight uppercase italic group-hover:text-cyan-400 transition-colors">
                {usp.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                {usp.desc}
              </p>

              {/* Decorative Corner Line */}
              <div className="absolute bottom-6 right-8 w-8 h-[2px] bg-white/5 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsUSP;