"use client"; // Animation ke liye client-side zaroori hai

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoWall from "../components/LogoWall";
import FeaturedCase from "../components/FeaturedCase";
import ServicesGrid from "../components/ServicesGrid";
import PerformanceStats from "../components/PerformanceStats";
import ProcessRoadmap from "../components/ProcessRoadmap";
import Architecture from "../components/TechnicalArchitecture";
import SecurityCompliance from "../components/SecurityCompliance";
import TestimonialsUSP from "../components/TestimonialsUSP";
import Footer from "../components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  
  useEffect(() => {
    // Scroll Reveal Logic
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero section foran nazar aana chahiye, is liye is par reveal nahi lagaya */}
      <Hero />

      {/* Baqi saare sections scroll par reveal honge */}
      <div className="reveal-section"><LogoWall /></div>
      <div className="reveal-section"><FeaturedCase /></div>
      <div className="reveal-section"><ServicesGrid /></div>
      <div className="reveal-section"><PerformanceStats /></div>
      <div className="reveal-section"><ProcessRoadmap /></div>
      <div className="reveal-section"><Architecture /></div>
      <div className="reveal-section"><SecurityCompliance /></div>
      <div className="reveal-section"><TestimonialsUSP /></div>
      <div className="reveal-section">
    <ContactForm />
  </div>
      <Footer/>
    </main>
  );
}