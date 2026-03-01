

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans">
    
      <article className="pt-32 pb-20 px-6 max-w-3xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-400 mb-6">Last Updated: February 2026</p>
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Data Sovereignty</h2>
            <p className="text-slate-400">At TechRollin, we prioritize your data privacy. Any data processed through our custom agentic systems remains your property and is never used to train public LLMs.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">2. Information Collection</h2>
            <p className="text-slate-400">We only collect information necessary to provide our services, including contact details and technical logs for optimization.</p>
          </div>
        </section>
      </article>
    
    </main>
  );
}