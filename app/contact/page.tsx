"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tighter mb-12 text-center">Global Presence. Local Support.</h1>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Karachi Branch */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="text-cyan-500 mb-4"><MapPin size={32} /></div>
            <h3 className="text-xl font-bold mb-2">Karachi, Pakistan</h3>
            <p className="text-slate-400 text-sm mb-4">Operations & Development Hub</p>
            <div className="flex items-center gap-2 text-white font-mono">
              <Phone size={16} className="text-cyan-500" /> +92 326 2020480
            </div>
          </div>

          {/* Wyoming Branch */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="text-purple-500 mb-4"><Globe size={32} /></div>
            <h3 className="text-xl font-bold mb-2">Wyoming, USA</h3>
            <p className="text-slate-400 text-sm mb-4">Corporate Headquarters</p>
            <div className="text-slate-500 italic text-sm">Phone number coming soon</div>
          </div>

          {/* General Inquiries */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="text-emerald-500 mb-4"><Mail size={32} /></div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-slate-400 text-sm mb-4">For partnerships & demos</p>
            <p className="font-bold">hello@techrollin.com</p>
          </div>
        </div>

        {/* Contact Form as before... */}
      </section>
      <Footer />
    </main>
  );
}