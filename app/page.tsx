"use client";

import { useEffect } from "react";
// Navbar aur Footer yahan se hata diye kyunke wo Layout.tsx mein pehle se hain
import Hero from "../components/Hero";
import LogoWall from "../components/LogoWall";
import FeaturedCase from "../components/FeaturedCase";
import PerformanceStats from "../components/PerformanceStats";
import ProcessRoadmap from "../components/ProcessRoadmap";
import Architecture from "../components/TechnicalArchitecture";
import SecurityCompliance from "../components/SecurityCompliance";
import TestimonialsUSP from "../components/TestimonialsUSP";
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
    <main className="bg-[#050505] text-white overflow-x-hidden">
      {/* Hero section: Navbar layout se aa rahi hai, is liye direct Hero shuru kiya */}
      <Hero />

      {/* Baqi saare sections scroll par reveal honge */}
      <div className="reveal-section"><LogoWall /></div>
      <div className="reveal-section"><FeaturedCase /></div>
      
      {/* Performance aur Roadmap sections */}
      <div className="reveal-section"><PerformanceStats /></div>
      <div className="reveal-section"><ProcessRoadmap /></div>
      
      {/* Technical architecture aur Security */}
      <div className="reveal-section"><Architecture /></div>
      <div className="reveal-section"><SecurityCompliance /></div>
      
      {/* Social Proof */}
      <div className="reveal-section"><TestimonialsUSP /></div>
      
      {/* Contact Form: Is section ki ID ContactForm ke andar honi chahiye */}
      <div className="reveal-section">
        <ContactForm />
      </div>

      {/* Footer yahan se hata diya gaya hai kyunke layout.tsx isay handle kar raha hai */}
    </main>
  );
}