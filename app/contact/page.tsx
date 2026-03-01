"use client";
import React, { Suspense } from "react";

import ContactForm from "@/components/ContactForm"; // Check karein ke path sahi ho
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      
      
      {/* 1. Global Presence Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-16 text-center">
          Global Presence. <span className="text-cyan-500">Local Support.</span>
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {/* Karachi Branch */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group">
            <div className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform"><MapPin size={32} /></div>
            <h3 className="text-xl font-bold mb-2">Karachi, Pakistan</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Operations & Development Hub</p>
            <div className="flex items-center gap-2 text-white font-mono bg-black/40 p-3 rounded-xl border border-white/5">
              <Phone size={16} className="text-cyan-500" /> +92 326 2020480
            </div>
          </div>

          {/* Wyoming Branch */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-500 group">
            <div className="text-purple-500 mb-6 group-hover:scale-110 transition-transform"><Globe size={32} /></div>
            <h3 className="text-xl font-bold mb-2">Wyoming, USA</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Corporate Headquarters</p>
            <div className="text-slate-500 italic text-sm bg-black/40 p-3 rounded-xl border border-white/5 text-center">
              Phone number coming soon
            </div>
          </div>

          {/* General Inquiries */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform"><Mail size={32} /></div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">For partnerships & demos</p>
            <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-center">
              <p className="font-bold text-white">hello@techrollin.com</p>
            </div>
          </div>
        </div>

        {/* 2. Actual Contact Form Section (Connects with Services) */}
        <div id="contact-form-section" className="relative mt-20">
          {/* Background Glow for Form Area */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <Suspense fallback={<div className="text-center py-20 text-zinc-500">Loading Intelligence Form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      
    </main>
  );
}