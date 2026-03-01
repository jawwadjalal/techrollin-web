export default function ServicesPage() {
  const services = [
    {
      title: "Enterprise AI Integration",
      desc: "Custom AI solutions tailored for your business workflow.",
      icon: "🤖"
    },
    {
      title: "Autonomous Agent Systems",
      desc: "Self-operating AI agents that handle repetitive tasks 24/7.",
      icon: "🚀"
    },
    {
      title: "AI-Driven Automation",
      desc: "Replacing manual processes with intelligent automation.",
      icon: "⚙️"
    }
  ];

  return (
    <div className="bg-black text-white py-20 px-10">
      {/* --- Custom AI Agent & LLM Development Service Section --- */}
<section className="py-20 px-6 lg:px-24 bg-black">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Text Content */}
    <div className="flex-1">
      <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
        Core Intelligence
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Custom AI Agent & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          LLM Development
        </span>
      </h3>
      
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Transform your enterprise with autonomous systems that don't just process data—they execute tasks. 
        We build bespoke **Agentic Workflows** and specialized **LLM-driven agents** that integrate 
        deeply with your internal tools, APIs, and databases to automate complex decision-making.
      </p>

      {/* SEO Key Features */}
      <ul className="space-y-4 mb-10 text-zinc-300">
        <li className="flex items-center gap-3">
          <span className="text-blue-500 font-bold">✓</span> 
          Domain-Specific LLM Fine-Tuning
        </li>
        <li className="flex items-center gap-3">
          <span className="text-blue-500 font-bold">✓</span> 
          Autonomous Multi-Agent Systems
        </li>
        <li className="flex items-center gap-3">
          <span className="text-blue-500 font-bold">✓</span> 
          Secure Private RAG (Retrieval-Augmented Generation)
        </li>
      </ul>

      {/* Call to Action */}
      <a 
        href="/contact?service=ai-agents#contact-form-section"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20"
      >
        Build My Agent 🚀
      </a>
    </div>

    {/* Visual Representation */}
    <div className="flex-1 relative">
      <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-2xl"></div>
      <div className="relative border border-zinc-800 bg-zinc-900/50 p-6 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <pre className="text-xs text-blue-300 font-mono overflow-x-hidden">
          {`// Initializing Agent Instance
const agent = new TechRollinAgent({
  model: "Custom-LLM-V1",
  capability: "Autonomous-Decision-Making",
  tools: ["Internal-DB", "CRM-API"]
});

agent.run("Optimize Enterprise Workflow");
// Status: Scaling Operations...`}
        </pre>
      </div>
    </div>
  </div>
</section>
{/* --- Self-Hosted LLM Development Service Section --- */}
<section className="py-20 px-6 lg:px-24 bg-zinc-950 border-t border-zinc-900">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
    
    {/* Text Content */}
    <div className="flex-1">
      <h2 className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4">
        Privacy First
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Self-Hosted <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
          LLM Infrastructure
        </span>
      </h3>
      
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Stop sending your sensitive data to third-party APIs. We deploy powerful, 
        **open-source Large Language Models (LLMs)** like Llama 3, Mistral, or DeepSeek 
        directly on your private servers or local cloud. Full control, zero data leaks.
      </p>

      {/* SEO Key Features */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-zinc-300">
        <li className="flex items-center gap-2">
          <span className="text-purple-500">🛡️</span> 100% Data Privacy
        </li>
        <li className="flex items-center gap-2">
          <span className="text-purple-500">💰</span> No Per-Token Costs
        </li>
        <li className="flex items-center gap-2">
          <span className="text-purple-500">🔌</span> Offline Accessibility
        </li>
        <li className="flex items-center gap-2">
          <span className="text-purple-500">⚡</span> Low Latency Performance
        </li>
      </ul>

      {/* Call to Action */}
      <a 
        href="/contact?service=self-hosted-llm#contact-form-section"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/20"
      >
        Deploy Privately 🔒
      </a>
    </div>

    {/* Visual Representation (With Glow Inside) */}
    <div className="flex-1 relative group">
      {/* --- Glow Effect behind the Box --- */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
      
      <div className="relative p-8 border border-purple-500/20 bg-zinc-900/60 rounded-3xl backdrop-blur-xl overflow-hidden">
        {/* --- Inner Glow (Top Right) --- */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-8">
            <div className="p-3 bg-zinc-800 rounded-lg border border-zinc-700">
              <div className="w-8 h-8 text-purple-400 flex items-center justify-center">🏢</div>
              <span className="text-[10px] text-zinc-500 mt-1 block text-center">Your Server</span>
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500 to-transparent mx-4 relative">
               <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-purple-500 animate-ping"></div>
            </div>
            <div className="p-3 bg-purple-600/20 rounded-lg border border-purple-500/50">
              <div className="w-8 h-8 text-purple-400 flex items-center justify-center">🧠</div>
              <span className="text-[10px] text-purple-300 mt-1 block text-center">Private LLM</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-[85%] animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            </div>
            <p className="text-xs font-mono text-zinc-500 text-center uppercase tracking-tighter">
              Secure Local Inference Active
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* --- Conversational AI Services Section --- */}
<section className="py-20 px-6 lg:px-24 bg-black border-t border-zinc-900">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Text Content */}
    <div className="flex-1">
      <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4">
        Human-Like Interaction
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Conversational <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
          AI Solutions
        </span>
      </h3>
      
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Elevate customer experience with AI that actually understands context. We develop 
        **Omnichannel Chatbots** and **Voice Assistants** that handle inquiries, 
        book appointments, and close sales with natural, human-like fluency—24/7.
      </p>

      {/* SEO Key Features */}
      <ul className="space-y-4 mb-10 text-zinc-300">
        <li className="flex items-center gap-3">
          <span className="text-emerald-500 font-bold">✓</span> 
          Multi-Lingual Support (100+ Languages)
        </li>
        <li className="flex items-center gap-3">
          <span className="text-emerald-500 font-bold">✓</span> 
          Seamless CRM & WhatsApp Integration
        </li>
        <li className="flex items-center gap-3">
          <span className="text-emerald-500 font-bold">✓</span> 
          Emotionally Intelligent Sentiment Analysis
        </li>
      </ul>

      {/* Call to Action */}
      <a 
        href="/contact?service=ai-agents#contact-form-section"
        className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20"
      >
        Deploy Your AI Bot 💬
      </a>
    </div>

    {/* Visual Representation (Chat Interface with Glow) */}
    <div className="flex-1 w-full relative group">
      {/* --- External Ambient Glow --- */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl blur-2xl opacity-10 group-hover:opacity-30 transition duration-500"></div>

      <div className="relative max-w-md mx-auto border border-zinc-800 bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* --- Inner Top Glow --- */}
        <div className="absolute top-0 left-0 w-full h-20 bg-emerald-500/5 blur-2xl pointer-events-none"></div>

        <div className="bg-zinc-900/80 p-4 border-b border-zinc-800 flex items-center gap-3 relative z-10">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-black shadow-[0_0_10px_rgba(16,185,129,0.5)]">TR</div>
          <span className="text-sm font-medium text-white">TechRollin Agent</span>
          <div className="ml-auto flex gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
          </div>
        </div>

        <div className="p-6 space-y-4 relative z-10">
          <div className="bg-zinc-800/80 text-zinc-300 p-3 rounded-lg rounded-tl-none text-sm max-w-[80%] border border-white/5">
            How can I help optimize your customer support today?
          </div>
          <div className="bg-emerald-600/90 text-white p-3 rounded-lg rounded-tr-none text-sm ml-auto max-w-[80%] shadow-lg shadow-emerald-900/20">
            I need an agent that integrates with my Shopify store.
          </div>
          <div className="bg-zinc-800/80 text-zinc-300 p-3 rounded-lg rounded-tl-none text-sm max-w-[85%] border-l-2 border-emerald-500 backdrop-blur-md">
            Absolutely. I can deploy a RAG-based agent that syncs with your inventory in real-time. Shall we proceed?
          </div>
        </div>

        {/* --- Bottom Glow Accent --- */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl pointer-events-none"></div>
      </div>
    </div>
  </div>
</section>
{/* --- ChatGPT Integration Services Section --- */}
<section className="py-20 px-6 lg:px-24 bg-zinc-950 border-t border-zinc-900">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
    
    {/* Text Content */}
    <div className="flex-1">
      <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
        Connect & Amplify
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Professional <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
          ChatGPT Integration
        </span>
      </h3>
      
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Don't just use ChatGPT—embed it into your DNA. We specialize in connecting **OpenAI’s GPT-4o API** into your mobile apps, websites, and internal tools. From custom prompt engineering 
        to seamless API middleware, we make your software smarter.
      </p>

      {/* SEO Key Features */}
      <ul className="grid grid-cols-1 gap-4 mb-10 text-zinc-300">
        <li className="flex items-center gap-3">
          <span className="p-1 bg-orange-500/20 rounded text-orange-500 text-xs">🔗</span> 
          Custom API Connector Development
        </li>
        <li className="flex items-center gap-3">
          <span className="p-1 bg-orange-500/20 rounded text-orange-500 text-xs">🧠</span> 
          Advanced Prompt Engineering & Fine-Tuning
        </li>
        <li className="flex items-center gap-3">
          <span className="p-1 bg-orange-500/20 rounded text-orange-500 text-xs">🛠️</span> 
          SaaS & Internal Tool Integration (Slack, Discord, CRM)
        </li>
      </ul>

      {/* Call to Action */}
      <a 
        href="/contact?service=ai-agents#contact-form-section"
        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20"
      >
        Integrate Now ⚡
      </a>
    </div>

    {/* Visual Representation (API/Node Flow) */}
    <div className="flex-1 relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-zinc-800/50 p-3 rounded-lg border border-zinc-700">
            <span className="text-xs font-mono text-orange-400">YOUR_APP_UI</span>
            <div className="h-px flex-1 bg-zinc-700 mx-4"></div>
            <span className="text-[10px] text-zinc-500">API CALL</span>
          </div>
          <div className="flex items-center justify-center py-4">
             <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center animate-pulse">
                <span className="text-2xl">✨</span>
             </div>
          </div>
          <div className="flex items-center justify-between bg-zinc-800/50 p-3 rounded-lg border border-zinc-700">
            <span className="text-[10px] text-zinc-500">RESPONSE</span>
            <div className="h-px flex-1 bg-zinc-700 mx-4"></div>
            <span className="text-xs font-mono text-green-400">GPT_4o_ENGINE</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* --- Business Process Automation Services Section --- */}
<section className="py-20 px-6 lg:px-24 bg-black border-t border-zinc-900">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Text Content */}
    <div className="flex-1">
      <h2 className="text-pink-500 font-bold tracking-widest uppercase text-sm mb-4">
        Efficiency Reimagined
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Business Process <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">
          AI Automation
        </span>
      </h3>
      
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Stop wasting human potential on manual data entry and repetitive tasks. We design 
        **Intelligent Workflows** that connect your favorite tools—Slack, HubSpot, Shopify, and Google Sheets—to AI brains that handle the heavy lifting for you.
      </p>

      {/* SEO Key Features */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-zinc-300">
        <li className="flex items-center gap-3">
          <span className="text-pink-500 font-bold">●</span> 
          Automated Lead Nurturing
        </li>
        <li className="flex items-center gap-3">
          <span className="text-pink-500 font-bold">●</span> 
          AI-Powered Data Extraction
        </li>
        <li className="flex items-center gap-3">
          <span className="text-pink-500 font-bold">●</span> 
          Custom Zapier/Make Logic
        </li>
        <li className="flex items-center gap-3">
          <span className="text-pink-500 font-bold">●</span> 
          Smart Document Summarization
        </li>
      </ul>

      {/* Call to Action */}
      <a 
        href="/contact?service=automation#contact-form-section"
        className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-pink-500/20"
      >
        Optimize My Business 📈
      </a>
    </div>

    {/* Visual Representation (Workflow Logic with Glow) */}
    <div className="flex-1 w-full flex justify-center relative group">
      
      {/* --- Ambient Glow behind the card --- */}
      <div className="absolute inset-0 bg-pink-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

      <div className="relative p-1 bg-gradient-to-br from-pink-500/20 to-transparent rounded-3xl backdrop-blur-sm">
        <div className="bg-zinc-900/90 border border-zinc-800 p-8 rounded-[22px] w-full max-w-sm relative overflow-hidden">
          
          {/* --- Subtile inner glow --- */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/5 blur-3xl pointer-events-none"></div>

          <div className="space-y-4 relative z-10">
            {/* Step 1 */}
            <div className="flex items-center gap-3 bg-zinc-800/40 p-3 rounded-xl border border-white/5 transition hover:border-white/10">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-xs shadow-[0_0_10px_rgba(59,130,246,0.2)]">📩</div>
              <div className="text-[10px] text-zinc-400">New Email Received</div>
            </div>

            <div className="h-6 w-px bg-zinc-700 mx-auto"></div>

            {/* Step 2 (The AI Part - Enhanced Glow) */}
            <div className="flex items-center gap-3 bg-pink-500/10 p-4 rounded-xl border border-pink-500/40 scale-105 shadow-[0_0_20px_rgba(244,63,94,0.15)] transition-all">
              <div className="w-8 h-8 bg-pink-500/30 rounded-full flex items-center justify-center text-xs animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.5)]">🧠</div>
              <div className="text-xs text-pink-300 font-bold tracking-wide">AI Analyzes & Categorizes</div>
            </div>

            <div className="h-6 w-px bg-zinc-700 mx-auto"></div>

            {/* Step 3 */}
            <div className="flex items-center gap-3 bg-zinc-800/40 p-3 rounded-xl border border-white/5 transition hover:border-white/10">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-xs shadow-[0_0_10px_rgba(34,197,94,0.2)]">✅</div>
              <div className="text-[10px] text-zinc-400">Auto-Reply & Update CRM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* --- Web App Development Services Section --- */}
<section className="py-20 px-6 lg:px-24 bg-zinc-950 border-t border-zinc-900">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
    
    {/* Text Content */}
    <div className="flex-1">
      <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
        Scalable Architecture
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Custom Web <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
          App Development
        </span>
      </h3>
      
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        We don't just build websites; we engineer high-performance **SaaS Platforms** and **Enterprise Portals**. 
        Using modern stacks like **Next.js, React, and Node.js**, we create lightning-fast, 
        mobile-responsive web applications that are ready to scale with your business.
      </p>

      {/* SEO Key Features */}
      <ul className="grid grid-cols-1 gap-4 mb-10 text-zinc-300">
        <li className="flex items-center gap-3">
          <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-[10px]">🚀</span> 
          Full-Stack Development (Next.js & PostgreSQL)
        </li>
        <li className="flex items-center gap-3">
          <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-[10px]">🎨</span> 
          User-Centric UI/UX Design
        </li>
        <li className="flex items-center gap-3">
          <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-[10px]">🛡️</span> 
          Secure API & Database Integration
        </li>
      </ul>

      {/* Call to Action */}
      <a 
        href="/contact?service=web-dev#contact-form-section" 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20"
      >
        Launch Your App 💻
      </a>
    </div>

    {/* Visual Representation (App Dashboard Preview) */}
    <div className="flex-1 w-full">
      <div className="relative group">
        <div className="absolute -inset-1 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition duration-500"></div>
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Browser Top Bar */}
          <div className="bg-zinc-800/50 px-4 py-2 border-b border-zinc-700 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
            </div>
            <div className="mx-auto bg-zinc-950 px-3 py-1 rounded text-[10px] text-zinc-500 w-1/2 text-center">
              app.techrollin.com
            </div>
          </div>
          {/* Dashboard UI Mockup */}
          <div className="p-4 flex gap-4">
            <div className="w-12 space-y-3">
               <div className="h-2 w-full bg-zinc-800 rounded"></div>
               <div className="h-2 w-full bg-zinc-800 rounded"></div>
               <div className="h-2 w-full bg-zinc-800 rounded"></div>
            </div>
            <div className="flex-1 space-y-4">
               <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-blue-500/10 border border-blue-500/20 rounded-lg"></div>
                  <div className="h-16 bg-zinc-800 rounded-lg"></div>
               </div>
               <div className="h-24 bg-zinc-800/50 border border-zinc-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* --- Mobile App Development Services Section --- */}
<section className="py-20 px-6 lg:px-24 bg-black border-t border-zinc-900">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Text Content */}
    <div className="flex-1">
      <h2 className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4">
        Go Everywhere
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Native & Cross-Platform <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Mobile Solutions
        </span>
      </h3>
      
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Put your business in your customers' pockets. We build high-performance, 
        feature-rich mobile applications using **React Native** and **Flutter**. 
        Whether it's a social platform, an AI-powered tool, or an e-commerce app, we deliver 
        a seamless experience across iOS and Android.
      </p>

      {/* SEO Key Features */}
      <ul className="space-y-4 mb-10 text-zinc-300">
        <li className="flex items-center gap-3">
          <span className="text-cyan-500 font-bold">✓</span> 
          Single Codebase for iOS & Android
        </li>
        <li className="flex items-center gap-3">
          <span className="text-cyan-500 font-bold">✓</span> 
          Offline-First Architecture & Sync
        </li>
        <li className="flex items-center gap-3">
          <span className="text-cyan-500 font-bold">✓</span> 
          Push Notifications & Real-time Analytics
        </li>
      </ul>

      {/* Call to Action */}
      <a 
        href="/contact?service=web-dev#contact-form-section" 
        className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
      >
        Start Mobile Project 📱
      </a>
    </div>

    {/* Visual Representation (Mobile Wireframe with Glow) */}
    <div className="flex-1 flex justify-center relative group">
      
      {/* --- Behind the Phone Glow --- */}
      <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

      <div className="relative w-64 h-[500px] border-[8px] border-zinc-800 rounded-[3rem] bg-zinc-950 shadow-2xl overflow-hidden backdrop-blur-md">
        
        {/* --- Screen Inner Top Glow --- */}
        <div className="absolute top-0 left-0 w-full h-32 bg-cyan-500/5 blur-2xl pointer-events-none"></div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-b-2xl z-20"></div>
        
        {/* App Content UI */}
        <div className="p-6 pt-12 space-y-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/5"></div>
            <div className="w-6 h-1 bg-zinc-700 rounded"></div>
          </div>

          {/* Feature Card with Pulse Glow */}
          <div className="h-32 w-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
            <span className="text-cyan-400 text-[10px] font-mono tracking-tighter animate-pulse">Mobile AI Interface</span>
          </div>

          <div className="space-y-2">
            <div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
            <div className="h-2 w-full bg-zinc-800 rounded"></div>
            <div className="h-2 w-1/2 bg-zinc-800 rounded"></div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="h-20 bg-zinc-800/50 rounded-xl border border-white/5"></div>
            <div className="h-20 bg-zinc-800/50 rounded-xl border border-white/5"></div>
          </div>

          {/* Glowing Action Button */}
          <div className="w-full h-10 bg-cyan-600 rounded-xl mt-4 shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center text-[10px] font-bold">
            Processing...
          </div>
        </div>

        {/* --- Screen Inner Bottom Glow --- */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl pointer-events-none"></div>
      </div>
    </div>
  </div>
</section>
{/* --- Custom Software Development Services Section --- */}
<section className="py-20 px-6 lg:px-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
    
    {/* Text Content */}
    <div className="flex-1">
      <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">
        Tailored Excellence
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Custom Software <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
          Engineering
        </span>
      </h3>
      
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Off-the-shelf software often fails to meet unique enterprise demands. We build 
        **Scalable Custom Software** from the ground up, designed to fit your specific 
        business workflows. From complex ERP systems to specialized internal tools, 
        we engineer solutions that grow with you.
      </p>

      {/* SEO Key Features */}
      <ul className="grid grid-cols-1 gap-4 mb-10 text-zinc-300">
        <li className="flex items-center gap-3">
          <span className="p-1 bg-amber-500/20 rounded text-amber-500 text-xs">🏗️</span> 
          Microservices & Modular Architecture
        </li>
        <li className="flex items-center gap-3">
          <span className="p-1 bg-amber-500/20 rounded text-amber-500 text-xs">🔄</span> 
          Legacy System Modernization & Migration
        </li>
        <li className="flex items-center gap-3">
          <span className="p-1 bg-amber-500/20 rounded text-amber-500 text-xs">📊</span> 
          Advanced Data Analytics & Reporting Dashboards
        </li>
      </ul>

      {/* Call to Action */}
      <a 
        href="/#contact-form-section" 
        className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20"
      >
        Consult Our Engineers 🛠️
      </a>
    </div>

    {/* Visual Representation (Abstract Engineering Logic with Glow) */}
    <div className="flex-1 w-full flex justify-center relative group">
      
      {/* --- Behind the Box Amber Glow --- */}
      <div className="absolute inset-0 bg-amber-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

      <div className="relative p-6 border border-amber-500/20 bg-zinc-900/60 rounded-3xl backdrop-blur-md shadow-2xl overflow-hidden">
        
        {/* --- Inner Corner Glow --- */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-3 gap-3 relative z-10">
          {/* Abstract Blocks representing Microservices */}
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`h-16 w-16 rounded-lg border transition-all duration-500 flex items-center justify-center 
                ${i === 4 
                  ? 'bg-amber-500/20 border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                  : 'border-zinc-700 bg-zinc-800/50 group-hover:border-amber-500/30'
                }`}
            >
              <div className={`w-4 h-4 rounded-sm 
                ${i === 4 
                  ? 'bg-amber-500 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.8)]' 
                  : 'bg-zinc-600'
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center px-2 relative z-10">
          <div className="h-1.5 w-1/3 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 w-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
          </div>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">Architecture: Scalable</span>
          <div className="h-1.5 w-1/4 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 w-1/2 animate-pulse"></div>
          </div>
        </div>

        {/* --- Inner Bottom Glow --- */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/5 blur-3xl pointer-events-none"></div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}