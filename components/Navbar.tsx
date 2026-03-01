"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link"; 
import TechLogo from './TechLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Scroll Logic Inject Start ---
  const handleContactClick = (e: React.MouseEvent) => {
    // Agar hum Home page par hain toh smooth scroll force karein
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById("contact-form-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#contact-form-section");
      }
      setMobileMenuOpen(false); // Mobile menu close karne ke liye
    }
  };
  // --- Scroll Logic Inject End ---

  const navLinks = [
    { name: "Services", href: "/services" }, 
    { name: "Process", href: "/#process" },
    { name: "About", href: "/about" },
    { name: "Security", href: "/#compliance" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            <div className="flex items-center">
              <TechLogo />
            </div>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link 
              key={`${link.name}-${index}`}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/#contact-form-section" onClick={handleContactClick}>
            <button className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-cyan-500 transition-all flex items-center gap-2">
              Contact Us <ArrowUpRight size={16} />
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
        >
          {navLinks.map((link, index) => (
            <Link 
              key={`${link.name}-mobile-${index}`}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-400"
            >
              {link.name}
            </Link>
          ))}
          {/* CTA Button - Mobile */}
          <Link href="/#contact-form-section" onClick={handleContactClick}>
            <button className="w-full py-4 bg-white text-black font-bold rounded-xl">
              Contact Us
            </button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;