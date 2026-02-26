import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tighter mb-8">About TechRollin</h1>
        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
          <p>
            TechRollin was founded on the belief that the next generation of enterprise efficiency won't come from simple chatbots, but from <span className="text-white font-bold">Autonomous Agentic Systems</span>.
          </p>
          <p>
            We are a team of AI architects, data scientists, and security engineers dedicated to bridging the gap between raw LLM capabilities and production-ready business logic.
          </p>
          <div className="grid grid-cols-2 gap-8 py-10">
            <div><h3 className="text-cyan-500 text-4xl font-bold">99%</h3><p className="text-sm">Accuracy in RAG Retrieval</p></div>
            <div><h3 className="text-purple-500 text-4xl font-bold">ISO</h3><p className="text-sm">Standard Compliance</p></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}