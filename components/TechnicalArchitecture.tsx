"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Layers, Workflow, Code } from "lucide-react";

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      {/* Blueprint Grid Background Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            The Architecture of an Autonomous Agent
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Built on a modular framework designed for reasoning, memory, and tool integration.
          </p>
        </div>

        <figure className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Technical Explanation */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 text-purple-500"><Brain size={28} /></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">1. Core Execution Engine</h3>
                <p className="text-slate-400">The "Brain" (LLM) that handles complex reasoning and autonomous decision-making logic.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 text-cyan-500"><Database size={28} /></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">2. Long-Term & Short-Term Memory</h3>
                <p className="text-slate-400">Context retention using vector databases (Pinecone/Milvus) for persistent user and task awareness.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 text-emerald-500"><Layers size={28} /></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">3. Integrated Toolsets (RAG)</h3>
                <p className="text-slate-400">Custom APIs and Retrieval-Augmented Generation pipelines to access enterprise data in real-time.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 text-amber-500"><Workflow size={28} /></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">4. Task Planning & Decomposition</h3>
                <p className="text-slate-400">Breaking down complex goals into executable sub-steps without human intervention.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Technical "Blueprint" Card */}
          <div className="relative p-6 rounded-2xl bg-black border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">agent_runtime_v4.py</span>
            </div>
            
            <pre className="font-mono text-[13px] text-cyan-400/80 leading-relaxed overflow-x-auto">
              <code>{`class AutonomousAgent:
  def __init__(self, core_llm, memory_vdb):
    self.brain = core_llm
    self.memory = memory_vdb
    self.tools = [RAG_Pipeline, API_Connector]

  async def execute_task(self, objective):
    plan = await self.brain.decompose(objective)
    for step in plan:
      context = self.memory.query(step)
      result = await self.tools.execute(step, context)
      self.memory.save(result)`}
              </code>
            </pre>
            <figcaption className="mt-4 text-[10px] text-slate-600 text-center uppercase tracking-tighter">
              Diagram of AI Agent Architecture: Core Reasoning, Vector Memory, RAG Tools, and Planning
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Architecture;