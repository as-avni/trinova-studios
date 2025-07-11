"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <Image
            src="/images/trinova-logo.png"
            alt="Trinova Studio"
            width={200}
            height={80}
            className="animate-pulse max-w-full h-auto"
          />
        </div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
          <div className="w-full h-full border-4 border-transparent border-t-purple-500 border-r-pink-500 rounded-full loading-spinner"></div>
        </div>
      </div>
    </div>
  )
}
