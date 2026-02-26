import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoWall from "../components/LogoWall";
import FeaturedCase from "../components/FeaturedCase";
import ServicesGrid from "../components/ServicesGrid";
import PerformanceStats from "../components/PerformanceStats";
import ProcessRoadmap from "../components/ProcessRoadmap"; // Naya import
import Architecture from "../components/TechnicalArchitecture";
import SecurityCompliance from "../components/SecurityCompliance";
import TestimonialsUSP from "../components/TestimonialsUSP";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoWall />
      <FeaturedCase />
      <ServicesGrid />
      <PerformanceStats />
      <ProcessRoadmap /> 
      <Architecture />
      <SecurityCompliance />
      <TestimonialsUSP />
      <Footer/>
    </main>
  );
}