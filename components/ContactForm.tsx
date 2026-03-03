"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Mail, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ContactFormInner() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "AI Agent Development", 
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [mathChallenge, setMathChallenge] = useState({ num1: 0, num2: 0 });
  const [userAnswer, setUserAnswer] = useState("");

  const generateChallenge = () => {
    setMathChallenge({
      num1: Math.floor(Math.random() * 9) + 1,
      num2: Math.floor(Math.random() * 5) + 1
    });
    setUserAnswer("");
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      const serviceMap: { [key: string]: string } = {
        "ai-agents": "AI Agent Development",
        "self-hosted-llm": "Self-Hosted LLM",
        "conversational-ai": "Conversational AI",
        "chatgpt": "ChatGPT Integration",
        "automation": "Workflow Automation",
        "web-dev": "Web App Development",
        "mobile-dev": "Mobile App Development",
        "consulting": "Enterprise Consulting"
      };

      if (serviceMap[service]) {
        setFormData((prev) => ({ ...prev, subject: serviceMap[service] }));
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer) !== mathChallenge.num1 + mathChallenge.num2) {
      setStatus("Error: Incorrect math answer.");
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Success! Email sent.");
        setFormData({ name: "", email: "", subject: "AI Agent Development", message: "" });
        generateChallenge();
      } else {
        setStatus("Error: Could not send.");
      }
    } catch (error) {
      setStatus("Error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form-section" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#010B12' }}>
      {/* Background Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#39FF13]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text & Info */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase italic">
            WANT A FREE <br /><span style={{ color: '#39FF13' }}>CONSULTATION?</span>
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-md leading-relaxed font-medium">
            Let's discuss how our autonomous AI agents can scale your enterprise operations.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#9CFF00]">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black italic">Email Us</p>
                <p className="text-xl font-bold tracking-tight">hello@techrollin.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest ml-1 italic">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Name Here" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#39FF13]/50 transition-all text-white placeholder:text-zinc-700" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest ml-1 italic">Work Email</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@company.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#39FF13]/50 transition-all text-white placeholder:text-zinc-700" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest ml-1 italic">Interested Service</label>
              <div className="relative">
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#39FF13]/50 transition-all text-white appearance-none cursor-pointer"
                >
                  <option value="AI Agent Development" className="bg-[#010B12]">Custom AI Agent & LLM</option>
                  <option value="Self-Hosted LLM" className="bg-[#010B12]">Self-Hosted Infrastructure</option>
                  <option value="Conversational AI" className="bg-[#010B12]">Conversational AI / Chatbots</option>
                  <option value="ChatGPT Integration" className="bg-[#010B12]">ChatGPT Integration</option>
                  <option value="Workflow Automation" className="bg-[#010B12]">Business Process Automation</option>
                  <option value="Web App Development" className="bg-[#010B12]">Custom Web App Dev</option>
                  <option value="Mobile App Development" className="bg-[#010B12]">Mobile App Development</option>
                  <option value="Enterprise Consulting" className="bg-[#010B12]">Enterprise AI Consulting</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">▼</div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest ml-1 italic">Message</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4} 
                placeholder="Tell us about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#39FF13]/50 transition-all text-white resize-none placeholder:text-zinc-700"
              ></textarea>
            </div>

            {/* --- Math Challenge UI Updated --- */}
            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest ml-1 italic">Human Verification</label>
              <div className="flex items-center gap-3">
                <div className="bg-[#39FF13]/10 border border-[#39FF13]/20 rounded-2xl px-6 py-4 text-[#39FF13] font-black font-mono min-w-[120px] text-center italic">
                  {mathChallenge.num1} + {mathChallenge.num2} =
                </div>
                <input 
                  required
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="?"
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#39FF13]/50 transition-all text-white font-black"
                />
              </div>
            </div>

            <button 
              disabled={loading}
              type="submit"
              style={{ backgroundColor: '#39FF13' }}
              className="w-full text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(57,255,19,0.2)] disabled:opacity-50 uppercase tracking-tight"
            >
              {loading ? "SENDING..." : "DEPLOY INQUIRY"} <Send size={18} strokeWidth={3} />
            </button>

            {status && (
              <p className={`text-center text-xs font-bold uppercase tracking-widest mt-4 ${status.includes("Success") ? "text-[#39FF13]" : "text-red-500"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="py-24 text-center bg-[#010B12] text-white">Loading Verification...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}