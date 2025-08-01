"use client"

import type React from "react"

import { useState } from "react"

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <section id="contact" className="w-full bg-[#f8fbfd] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center fade-in">
            <h2 className="mb-2 text-xl font-medium text-[#0078AA]">Contact Us</h2>
            <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl">
              We're Here to Help – Get in Touch Today!
            </h1>
            <p className="text-gray-700 md:text-lg">
              Have questions or need assistance? Our team is ready to provide expert support and guide you to the
              perfect water softening solution.
            </p>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full rounded-md border border-gray-200 p-3 transition-all focus:border-[#0078AA] focus:outline-none focus:ring-1 focus:ring-[#0078AA] hover:border-[#0078AA]/50"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full rounded-md border border-gray-200 p-3 transition-all focus:border-[#0078AA] focus:outline-none focus:ring-1 focus:ring-[#0078AA] hover:border-[#0078AA]/50"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full rounded-md border border-gray-200 p-3 transition-all focus:border-[#0078AA] focus:outline-none focus:ring-1 focus:ring-[#0078AA] hover:border-[#0078AA]/50"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-md border border-gray-200 p-3 transition-all focus:border-[#0078AA] focus:outline-none focus:ring-1 focus:ring-[#0078AA] hover:border-[#0078AA]/50"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-md bg-[#FF7A45] px-8 py-3 text-white transition-all hover:bg-[#FF7A45]/90 hover:shadow-md hover:translate-y-[-2px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
