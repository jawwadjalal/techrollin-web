"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react"; 
import Link from "next/link"; 
import Image from "next/image";

import HorizontalLogo from "../assets/logo-horizontal.svg";

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

  const handleContactClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById("contact-form-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#contact-form-section");
      }
      setMobileMenuOpen(false); 
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/#contact-form-section" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-4 cursor-pointer group"> 
          {/* Logo Size fixed for visibility */}
          <div className="relative w-36 h-10 md:w-48 md:h-12 group-hover:scale-105 transition-transform duration-300">
            <Image 
              src={HorizontalLogo} 
              alt="TechRollin Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link 
              key={`${link.name}-${index}`}
              href={link.href}
              onClick={link.name === "Contact" ? handleContactClick : undefined}
              className="text-sm font-bold text-slate-400 hover:text-[#39FF13] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/#contact-form-section" onClick={handleContactClick}>
            <button className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-[#39FF13] transition-all flex items-center gap-2">
              Contact Us <ArrowUpRight size={16} />
            </button>
          </Link>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

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
              onClick={(e) => {
                if (link.name === "Contact") handleContactClick(e);
                else setMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-slate-400 hover:text-[#39FF13]"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#contact-form-section" onClick={handleContactClick}>
            <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-[#39FF13]">
              Contact Us
            </button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;