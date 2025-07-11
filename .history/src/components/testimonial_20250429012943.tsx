"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  rating: number
  highlight?: string
  text: string
  image: string
}

export function Testimonial() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jason P",
      rating: 5,
      text: "Our entire home benefits from Aquastori Softner. Dishes come out spotless, clothes feel softer, and even coffee tastes better. Absolutely love it!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Mickael Grants",
      rating: 5,
      highlight: "Highly rated",
      text: "I never realized how much hard water was affecting my skin and hair until I installed Aquastori Softner. Now, my showers feel luxurious, my skin is softer, and my hair is shinier than ever!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "David M.",
      rating: 5,
      text: "Our faucets and appliances were covered in limescale before we got CleanTech. Now, everything stays clean, and our water heater works more efficiently. Highly recommend!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Emily R.",
      rating: 5,
      text: "Thanks to Aquastori, our laundry smells fresher and our skin feels amazing! Wish we had installed it sooner!",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length
    const nextIndex = (activeIndex + 1) % testimonials.length
    return [testimonials[prevIndex], testimonials[activeIndex], testimonials[nextIndex]]
  }

  return (
    <section id="testimonial" className="w-full bg-[#f8fbfd] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-xl font-medium text-[#0078AA]">Testimonial</h2>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">What Our Customers Are Saying</h1>
          <p className="mx-auto max-w-3xl text-gray-700 md:text-lg">
            See how Aquastori Softner has transformed daily life for our happy customers.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Left Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-gray-400 shadow-md hover:bg-gray-100 md:left-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Testimonials */}
          <div className="flex items-center justify-center space-x-8 transition-all duration-700 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isCenter = index === 1
              return (
                <div
                  key={testimonial.id}
                  className={`flex w-72 h-72 flex-col items-center justify-center rounded-3xl p-6 text-center transition-all duration-700 ${
                    isCenter
                      ? "bg-white shadow-lg shadow-blue-100 scale-105"
                      : "bg-[#f8fbfd] opacity-70 scale-95"
                  }`}
                >
                  <div className="mb-4 h-20 w-20 overflow-hidden rounded-full transition-transform hover:scale-110">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{testimonial.name}</h3>
                  <div className="mb-2 flex items-center justify-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {testimonial.highlight && (
                    <p className="mb-2 text-sm font-semibold text-[#0078AA]">{testimonial.highlight}</p>
                  )}
                  <p className="mt-2 text-gray-700 text-sm">{testimonial.text}</p>
                </div>
              )
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-gray-400 shadow-md hover:bg-gray-100 md:right-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all hover:scale-150 ${
                  activeIndex === index ? "bg-[#0078AA]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
