"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Logo */}
          <div className="text-center sm:text-left">
            <Image
              src="/images/trinova-logo.png"
              alt="Trinova Studio"
              width={150}
              height={50}
              className="h-20 w-14 sm:h-12 mx-auto sm:mx-0"
            />
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://instagram.com/trinovastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://linkedin.com/company/trinova-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-gray-400 text-sm sm:text-base">© 2024 Trinova Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
