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
      text: "Our entire home benefits from Aquastori Softner. Dishes come out spotless, clothes feel softer. Absolutely love it!",
      image: "/images/testimonial/1.jpg",
    },
    {
      id: 2,
      name: "Mickael Grants",
      rating: 5,
      // highlight: "Highly rated",
      text: "I never realized how much hard water was affecting my skin and hair until I installed Aquastori Softner.",
      image: "/images/testimonial/2.jpg",
    },
    {
      id: 3,
      name: "David M.",
      rating: 5,
      text: "Our faucets and appliances were covered in limescale before we got CleanTech. Now, everything stays clean. Highly recommend!",
      image: "/images/testimonial/3.jpg",
    },
    {
      id: 4,
      name: "Emily R.",
      rating: 5,
      text: "Thanks to Aquastori, our laundry smells fresher and our skin feels amazing! Wish we had installed it sooner!",
      image: "/images/testimonial/4.jpg",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

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
    <section id="testimonial" className="w-full bg-[#F5FAFE] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-32 text-center">
          <h2 className="mb-2 text-xl font-medium text-[#0078AA]">Testimonial</h2>
          <h1 className="mb-4 text-ne text-3xl font-semibold md:text-4xl lg:text-5xl">What Our Customers Are Saying</h1>
          <p className="mx-auto max-w-3xl text-gray-700 md:text-lg">
            See how Aquastori Softner has transformed daily life for our happy <br/>customers.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl p-4 md:p-0">
          {/* Left Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-3/4 md:top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-gray-400 shadow-md hover:bg-gray-100 md:left-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 md:h-6 w-4 md:w-6" />
          </button>

          {/* Testimonials */}
          <div className="flex items-center justify-center space-x-0 md:space-x-8 transition-all duration-700 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isCenter = index === 1
              // Only show the center card on mobile/small screens
              if (typeof window !== "undefined" && window.innerWidth < 768 && !isCenter) return null
              return (
                <div
                  key={testimonial.id}
                  className={`flex flex-col md:flex-col w-full max-w-md md:w-80 md:h-72 md:items-center justify-start rounded-lg bg-white p-6 md:text-center transition-all duration-700 ${
                    isCenter ? "shadow-xl shadow-blue-100 scale-105" : "opacity-70 scale-95"
                  }`}
                >
                  <div className="flex flex-row md:flex-col items-center gap-4 w-full">
                    <div className="flex-shrink-0 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-200 shadow-md">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start md:items-center justify-center">
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <div className="mb-1 flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed text-left md:text-center">
                    {testimonial.text.length > 160 ? testimonial.text.substring(0, 160) + "..." : testimonial.text}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-3/4 md:top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-gray-400 shadow-md hover:bg-gray-100 md:right-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 md:h-6 w-4 md:w-6" />
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
