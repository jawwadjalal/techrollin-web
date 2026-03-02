"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, ArrowUpRight, Shield, MapPin, Phone, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ✅ Horizontal Logo import kiya
import HorizontalLogo from "../assets/logo-horizontal.png"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToContact = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById("contact-form-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#contact-form-section");
      }
    }
  };

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12 text-center lg:text-left p-12 rounded-[40px] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
          <motion.div 
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-0 pointer-events-none"
          />

          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase italic">
              Ready to <span className="text-cyan-500">Techrollin?</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              Book a strategy call with our lead architects to discuss your custom agentic roadmap.
            </p>
          </div>

          <Link href="/#contact-form-section" onClick={scrollToContact}>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#22d3ee", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-black font-black rounded-2xl flex items-center gap-3 text-lg uppercase tracking-tight transition-all shadow-[0_20px_50px_rgba(255,255,255,0.05)] relative z-10"
            >
              Start Your Project <ArrowUpRight size={22} strokeWidth={3} />
            </motion.button>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-16">
          
          {/* Brand Info */}
          <div className="space-y-8">
            {/* ✅ Updated Logo + Text Combo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src={HorizontalLogo} 
                  alt="TechRollin Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase group-hover:text-cyan-400 transition-colors">
                Techrollin
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Leading the shift from simple LLM wrappers to autonomous, secure enterprise agent systems. 
              Engineering the future of work with high-precision AI.
            </p>
            <div className="flex gap-5">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <motion.div key={i} whileHover={{ y: -3, color: "#22d3ee" }} className="text-slate-400 cursor-pointer transition-colors">
                  <Icon size={20} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Business Branches */}
          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-white italic">Global Offices</h4>
            <ul className="space-y-6">
              <li className="space-y-1 group">
                <span className="block text-slate-300 font-bold text-sm group-hover:text-cyan-400 transition-colors">Karachi, Pakistan</span>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                  <Phone size={14} className="text-cyan-500" /> +92 326 2020480
                </div>
              </li>
              <li className="space-y-1 group">
                <span className="block text-slate-300 font-bold text-sm group-hover:text-purple-400 transition-colors">Wyoming, USA</span>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono italic">
                  <Globe size={14} className="text-purple-500" /> Registered Agent
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-white italic">Navigation</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li>
                <Link 
                  href="/#contact-form-section" 
                  onClick={scrollToContact}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-zinc-800 rounded-full group-hover:bg-cyan-500 transition-all" />
                  Contact Us
                </Link>
              </li>

              {[
                { name: "Services", href: "/services" },
                { name: "Our Process", href: "/#process" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-zinc-800 rounded-full group-hover:bg-cyan-500 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust/Compliance */}
          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-white italic">System Compliance</h4>
            <div className="space-y-4">
              {[
                { label: "ISO 27001 AUDITED", color: "text-emerald-500" },
                { label: "SOC2 TYPE II READY", color: "text-cyan-500" },
                { label: "GDPR COMPLIANT", color: "text-blue-500" }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-[10px] text-slate-500 font-black tracking-widest bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:border-white/10 transition-all">
                  <Shield size={14} className={item.color} /> {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-slate-600 text-[9px] uppercase tracking-[0.3em] font-black">
          <p>© {currentYear} TECHROLLIN SOLUTIONS. OPERATING AT SCALE.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Protocol</Link>
            <span className="opacity-20">|</span>
            <span className="text-zinc-800">v4.0.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;