"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "benefits", "how-it-work", "testimonial", "faqs", "contact"];
      let currentSection = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);

      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full py-4 transition-all duration-300 ${
        scrolled ? "bg-[#c6dce7] shadow-md" : "bg-[#c0ddec]"
      }`}
    >
      <div className="container mx-auto flex justify-between px-4">
        <Link href="/" className="">
          <Image 
            src="/assets/aquastori-logo.png" 
            alt="Aquastori Logo" 
            width={160} 
            height={40} 
            className="object-contain h-6 md:h-8"
          />
        </Link>

        <nav className="hidden md:flex place-items-start space-x-8 text-base/6">
          <Link
            href="#home"
            className={`text-black transition-all ${
              activeSection === "home" ? "border-b-2 border-black pb-1" : "hover:border-b-2 hover:border-black hover:pb-1"
            } hover:text-[#0078AA]`}
          >
            Home
          </Link>
          <Link
            href="#benefits"
            className={`text-black transition-all ${
              activeSection === "benefits" ? "border-b-2 border-black pb-1" : "hover:border-b-2 hover:border-black hover:pb-1"
            } hover:text-[#0078AA]`}
          >
            Benefits
          </Link>
          <Link
            href="#how-it-work"
            className={`text-black transition-all ${
              activeSection === "how-it-work" ? "border-b-2 border-black pb-1" : "hover:border-b-2 hover:border-black hover:pb-1"
            } hover:text-[#0078AA]`}
          >
            How it work
          </Link>
          <Link
            href="#testimonial"
            className={`text-black transition-all ${
              activeSection === "testimonial" ? "border-b-2 border-black pb-1" : "hover:border-b-2 hover:border-black hover:pb-1"
            } hover:text-[#0078AA]`}
          >
            Testimonial
          </Link>
          <Link
            href="/faqs"
            className={`text-black transition-all ${
              activeSection === "faqs" ? "border-b-2 border-black pb-1" : "hover:border-b-2 hover:border-black hover:pb-1"
            } hover:text-[#0078AA]`}
          >
            FAQs
          </Link>
        </nav>

        <Link
          href="#contact"
          className="hidden sm:inline-block rounded-md bg-[#FF7A45] px-4 py-1 text-white transition-all hover:bg-[#FF7A45]/90 hover:shadow-md"
        >
          Contact Us
        </Link>

        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#c0ddec] px-4 py-2 space-y-2">
          <Link href="#home" onClick={() => setMenuOpen(false)} className="block text-black hover:text-[#0078AA]">Home</Link>
          <Link href="#benefits" onClick={() => setMenuOpen(false)} className="block text-black hover:text-[#0078AA]">Benefits</Link>
          <Link href="#how-it-work" onClick={() => setMenuOpen(false)} className="block text-black hover:text-[#0078AA]">How it work</Link>
          <Link href="#testimonial" onClick={() => setMenuOpen(false)} className="block text-black hover:text-[#0078AA]">Testimonial</Link>
          <Link href="/faqs" onClick={() => setMenuOpen(false)} className="block text-black hover:text-[#0078AA]">FAQs</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="block bg-[#FF7A45] text-white px-3 py-1 rounded-md hover:bg-[#FF7A45]/90">Contact Us</Link>
        </nav>
      )}
    </header>
  )
}
