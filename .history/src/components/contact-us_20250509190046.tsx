"use client"

import type React from "react"

import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contactMessages"), formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#F5FAFE] py-16 md:py-24">
      <div className="container mx-auo px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center fade-in">
            <h2 className="mb-2 text-xl font-medium text-[#0078AA]">Contact Us</h2>
            <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl">
              We&apos;re Here to Help – Get in Touch Today!
            </h1>
            <p className="text-gray-700 md:text-lg">
              Have questions or need assistance? Our team is ready <br/>to provide expert support and guide you to the
              perfect<br/> water softening solution.
            </p>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
          <form onSubmit={handleSubmit} className="flex flex-col items-end space-y-4">
            <div className="w-[80%]">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-[80%] rounded-xl border border-gray-400 p-3 transition-all focus:border-[#0078AA] focus:outline-none focus:ring-1 focus:ring-[#0078AA] hover:border-[#0078AA]/50"
                required
              />
            </div>
            <div className="w-[80%]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-[80%] rounded-xl border border-gray-400 p-3 transition-all focus:border-[#0078AA] focus:outline-none focus:ring-1 focus:ring-[#0078AA] hover:border-[#0078AA]/50"
                required
              />
            </div>
            <div className="w-[80%]">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-[80%] rounded-xl border border-gray-400 p-3 transition-all focus:border-[#0078AA] focus:outline-none focus:ring-1 focus:ring-[#0078AA] hover:border-[#0078AA]/50"
                required
              />
            </div>
            <div className="w-[80%]">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className="w-[80%] rounded-xl border border-gray-400 p-3 transition-all focus:border-[#0078AA] focus:outline-none focus:ring-1 focus:ring-[#0078AA] hover:border-[#0078AA]/50"
                required
              ></textarea>
            </div>
            <div className="flex w-full justify-center pt-4">
              <button
                type="submit"
                className="rounded-xl bg-[#FF7A45] px-8 py-3 text-white transition-all hover:bg-[#FF7A45]/90 hover:shadow-md hover:-translate-y-0.5"
              >
                Submit
              </button>
            </div>
          </form>
          {submitted && (
            <p className="mt-4 text-green-600 font-medium">Submitted successfully!</p>
          )}
        </div>

        </div>
      </div>
    </section>
  )
}
