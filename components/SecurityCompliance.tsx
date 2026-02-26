"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Scale, History, FileCheck } from "lucide-react";

const complianceFeatures = [
  {
    icon: <ShieldCheck className="text-emerald-600" size={32} />,
    title: "LLM Guardrails & Safety",
    desc: "We implement real-time filtering to prevent hallucinations, jailbreaking, and unauthorized model behavior, ensuring every output aligns with your corporate policies."
  },
  {
    icon: <Lock className="text-blue-600" size={32} />,
    title: "Data Sovereignty & Privacy",
    desc: "Your data is never used to train public models. We deploy via Private VPC or On-Premise, ensuring full compliance with GDPR, HIPAA, and SOC2 standards."
  },
  {
    icon: <Scale className="text-purple-600" size={32} />,
    title: "Ethical AI Governance",
    desc: "Our 'Human-in-the-loop' (HITL) architectures and bias-detection protocols ensure transparent, explainable, and ethical decision-making."
  },
  {
    icon: <History className="text-amber-600" size={32} />,
    title: "Auditability & Logging",
    desc: "Complete transparency with comprehensive activity logs and version control for every agent action and model interaction."
  }
];

const SecurityCompliance = () => {
  return (
    <section 
      id="compliance" 
      className="py-24 bg-white" // White Section Background
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            {/* Heading color set to Slate-900 for maximum visibility on white */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Enterprise-Grade AI Security <br />& Ethical Guardrails
            </h2>
            <p className="text-slate-600 text-lg">
              We eliminate the risks of AI adoption with a multi-layered security framework designed for the most regulated environments.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
             {["SOC2 READY", "GDPR", "HIPAA", "ISO 27001"].map(tag => (
               <span key={tag} className="border-2 border-slate-200 px-3 py-1 rounded font-bold text-[10px] text-slate-500">{tag}</span>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {complianceFeatures.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group"
            >
              <div className="mb-6 transition-transform group-hover:scale-110 duration-300">
                {item.icon}
              </div>
              {/* Title and Description in dark colors */}
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors">
            <FileCheck size={18} />
            Download AI Ethics & Security Whitepaper (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;