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

  // --- Security Logic Start ---
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
  // --- Security Logic End ---

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

    // --- Math Validation Check ---
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
        generateChallenge(); // Naya sawal reset par
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
    <section id="contact-form-section" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text & Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-white uppercase">
            READY TO <span className="text-cyan-400">AUTOMATE?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
            Let's discuss how our autonomous AI agents can scale your enterprise operations.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Email Us</p>
                <p className="text-lg">hello@techrollin.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Jawwad Jalal" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Work Email</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@company.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Interested Service</label>
              <div className="relative">
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white appearance-none cursor-pointer"
                >
                  <option value="AI Agent Development" className="bg-[#050505]">Custom AI Agent & LLM</option>
                  <option value="Self-Hosted LLM" className="bg-[#050505]">Self-Hosted Infrastructure</option>
                  <option value="Conversational AI" className="bg-[#050505]">Conversational AI / Chatbots</option>
                  <option value="ChatGPT Integration" className="bg-[#050505]">ChatGPT Integration</option>
                  <option value="Workflow Automation" className="bg-[#050505]">Business Process Automation</option>
                  <option value="Web App Development" className="bg-[#050505]">Custom Web App Dev</option>
                  <option value="Mobile App Development" className="bg-[#050505]">Mobile App Development</option>
                  <option value="Enterprise Consulting" className="bg-[#050505]">Enterprise AI Consulting</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4} 
                placeholder="Tell us about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white resize-none"
              ></textarea>
            </div>

            {/* --- Math Challenge UI --- */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-1 uppercase tracking-widest text-[10px]">Human Verification</label>
              <div className="flex items-center gap-3">
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl px-4 py-3 text-cyan-400 font-bold font-mono min-w-[100px] text-center">
                  {mathChallenge.num1} + {mathChallenge.num2} =
                </div>
                <input 
                  required
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="?"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white"
                />
              </div>
            </div>

            <button 
              disabled={loading}
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(34,211,238,0.3)] disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SEND MESSAGE"} <Send size={18} />
            </button>

            {status && (
              <p className={`text-center text-sm mt-2 ${status.includes("Success") ? "text-cyan-400" : "text-red-400"}`}>
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
    <Suspense fallback={<div className="py-24 text-center bg-[#050505] text-white">Loading Form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}