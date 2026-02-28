"use client";
import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactForm() {
  // --- Backend Logic Start ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "AI Agent Development",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      } else {
        setStatus("Error: Could not send.");
      }
    } catch (error) {
      setStatus("Error occurred.");
    } finally {
      setLoading(false);
    }
  };
  // --- Backend Logic End ---

  return (
    <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text & Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
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
              <label className="text-sm text-gray-400 font-medium ml-1">Subject</label>
              <select 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white appearance-none"
              >
                <option value="AI Agent Development" className="bg-[#050505]">AI Agent Development</option>
                <option value="Workflow Automation" className="bg-[#050505]">Workflow Automation</option>
                <option value="Enterprise Consulting" className="bg-[#050505]">Enterprise Consulting</option>
              </select>
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