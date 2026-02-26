"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, ArrowUpRight, Shield, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 uppercase">
              Ready to <span className="text-cyan-500 text-glow">Techrollin?</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Book a strategy call with our lead architects to discuss your custom agentic roadmap.
            </p>
          </div>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black font-bold rounded-2xl flex items-center gap-2 text-lg shadow-xl shadow-white/5 hover:bg-cyan-500 transition-colors"
            >
              Start Your Project <ArrowUpRight size={20} />
            </motion.button>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-2 uppercase">
              <div className="w-6 h-6 bg-cyan-500 rounded-sm" />
              Techrollin
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leading the shift from simple LLM wrappers to autonomous, secure enterprise agent systems. 
              Engineering the future of work with high-precision AI.
            </p>
            <div className="flex gap-4">
              <Linkedin className="text-slate-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <Twitter className="text-slate-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <Mail className="text-slate-400 hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          {/* Business Branches */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-300">Global Offices</h4>
            <ul className="space-y-6">
              <li className="space-y-1">
                <span className="block text-white font-bold text-sm">Karachi, Pakistan</span>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Phone size={14} className="text-cyan-500" /> +92 326 2020480
                </div>
              </li>
              <li className="space-y-1">
                <span className="block text-white font-bold text-sm">Wyoming, USA</span>
                <div className="flex items-center gap-2 text-slate-500 text-sm italic">
                  <MapPin size={14} className="text-purple-500" /> Phone provided later
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-300">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/#services" className="hover:text-cyan-400 transition-colors">AI Services</Link></li>
              <li><Link href="/#process" className="hover:text-cyan-400 transition-colors">Our Process</Link></li>
            </ul>
          </div>

          {/* Trust/Compliance */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-300">Compliance</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Shield size={14} className="text-emerald-500" /> ISO 27001 AUDITED
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Shield size={14} className="text-emerald-500" /> SOC2 TYPE II READY
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Shield size={14} className="text-emerald-500" /> GDPR COMPLIANT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-slate-600 text-[10px] uppercase tracking-widest font-bold">
          <p>© {currentYear} TECHROLLIN SOLUTIONS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;