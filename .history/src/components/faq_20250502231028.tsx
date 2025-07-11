"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
  isOpen?: boolean
}

export function Faq() {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: "How does Aquastori Softner work?",
      answer:
        "Aquastori Softner uses ion exchange technology to remove hard minerals like calcium and magnesium, replacing them with sodium or potassium ions. This prevents limescale buildup, protects your appliances, and gives you softer water for daily use.",
      isOpen: true,
    },
    {
      question: "Will it remove all minerals from my water?",
      answer:
        "No, Aquastori Softner selectively removes the minerals that cause hardness while maintaining beneficial minerals. It's designed to give you the perfect balance for healthy, great-tasting water.",
      isOpen: false,
    },
    {
      question: "Is the system difficult to maintain?",
      answer:
        "Not at all! Aquastori Softner features an automated self-cleaning system that requires minimal maintenance. Most users only need to add salt every few months, and our digital control panel makes it easy to monitor system status.",
      isOpen: false,
    },
    {
      question: "How long does the water softener last?",
      answer:
        "With proper maintenance, Aquastori Softner systems typically last 15-20 years. We back our products with up to 24 months warranty and offer extended service plans for additional peace of mind.",
      isOpen: false,
    },
  ])

  const toggleFaq = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen }
        }
        return faq
      }),
    )
  }

  return (
    <section id="faqs" className="w-full bg-[#F5FAFE] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center fade-in">
          <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">Frequently Asking Questions</h1>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {faq.isOpen ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 transition-transform" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  faq.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="border-t border-gray-100 p-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
