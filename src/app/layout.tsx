import type React from "react"
import type { Metadata } from "next"
import { Poppins, Orbitron, Bungee } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LoadingAnimation from "@/components/loading-animation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
})

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
})

export const metadata: Metadata = {
  title: "Trinova Studio - Gaming & Animation",
  description: "Cutting-edge gaming and animation studio creating immersive experiences",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${orbitron.variable} ${bungee.variable} font-sans bg-black text-white`}>
        <LoadingAnimation />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
