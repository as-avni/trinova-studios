import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ChatWidget from "@/components/chatWidget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aquastori - Water Softener Solutions",
  description: "Transform your water quality with Aquastori water softener systems",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <ChatWidget
        <ScrollToTop />
      </body>
    </html>
  )
}
