"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  X,
  Film,
  Palette,
  Gamepad2,
  CuboidIcon as Cube,
  Lightbulb,
  Users,
  Cpu,
  Zap,
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import type React from "react"

export default function HomePage() {
  const fadeRefs = useRef<(HTMLElement | null)[]>([])
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitMessage("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    setTimeout(() => setSubmitMessage(""), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const services = [
    {
      icon: <Film size={40} />,
      title: "Advanced CGI & Cinematic Content",
      description: "Cinematic trailers, VFX for OTT, crowd simulations",
      details:
        "We create stunning cinematic content using industry-leading tools like Blender, Unreal Engine, and Nuke. Our expertise includes cinematic trailers that captivate audiences, visual effects for OTT platforms, and complex crowd simulations that bring scenes to life with realistic human behavior and movement.",
      tools: "Tools: Blender, Unreal Engine, Nuke",
    },
    {
      icon: <Palette size={40} />,
      title: "3D Animation & Concept Development",
      description: "Stylized/hyper-real animations, mocap, creature design",
      details:
        "From stylized animations to hyper-realistic character movements, we bring concepts to life through advanced 3D animation techniques. Our services include motion capture integration, detailed creature design, and concept development that transforms ideas into visually stunning animated sequences.",
    },
    {
      icon: <Gamepad2 size={40} />,
      title: "Game Mechanics & Core Systems Design",
      description: "Combat/AI systems, open-world logic (no full dev)",
      details:
        "We specialize in designing robust game mechanics and core systems that form the foundation of engaging gameplay. Our expertise includes combat system design, AI behavior programming, and open-world logic architecture. We focus on system design rather than full game development.",
    },
    {
      icon: <Cube size={40} />,
      title: "Virtual Prototyping",
      description: "3D mockups, AR/VR demos for products/architecture",
      details:
        "Transform your ideas into interactive 3D prototypes before full production. We create detailed 3D mockups and immersive AR/VR demonstrations for products, architectural projects, and concept validation. Perfect for presentations, client approvals, and design iteration.",
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Tech Consulting for IPs",
      description: "Story/world-building, merch planning, monetization",
      details:
        "Comprehensive consulting services for intellectual properties, including story development and world-building that creates compelling narratives. We also provide strategic guidance on merchandise planning and monetization strategies to maximize the value of your creative assets.",
    },
  ]

  const futureServices = [
    {
      icon: <Users size={40} />,
      title: "Virtual Influencers",
      description: "AI-powered digital personalities for brand engagement",
      details:
        "Create compelling virtual influencers that engage audiences across social media platforms. Our digital personalities are designed to build authentic connections and drive brand awareness through AI-powered interactions and content creation.",
    },
    {
      icon: <Cpu size={40} />,
      title: "Digital Twins",
      description: "Revolutionary digital twin technology solutions",
      details:
        "Develop sophisticated digital twins that mirror real-world entities with precision. Perfect for training simulations, product demonstrations, and immersive brand experiences that bridge the gap between physical and digital worlds.",
    },
    {
      icon: <Zap size={40} />,
      title: "AI-Assisted Animation",
      description: "Next-generation animation powered by artificial intelligence",
      details:
        "Leverage cutting-edge AI technology to streamline animation workflows and create more efficient production pipelines. Our AI-assisted animation tools help reduce production time while maintaining high-quality output.",
    },
    {
      icon: <Film size={40} />,
      title: "Virtual Production",
      description: "Real-time filmmaking with virtual environments",
      details:
        "Revolutionary virtual production techniques that combine real-time rendering with traditional filmmaking. Create immersive environments and scenes without the constraints of physical locations or weather conditions.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://player.vimeo.com/video/1100634686?autoplay=1&loop=1&muted=1&background=1"
            className="w-full h-full object-cover"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
        <div className="absolute inset-0 hero-overlay z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="hero-title font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 uppercase tracking-wider fade-in font-smoochsans"
            ref={(el) => { fadeRefs.current[0] = el }}
          >
            A STORY IN MOTION
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed fade-in px-4 max-w-2xl mx-auto"
            ref={(el) => { fadeRefs.current[1] = el }}
          >
            We don't just build games—we craft experiences. From heart-pounding action to immersive worlds, every pixel,
            animation, and mechanic is designed to pull you in and keep you hooked.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#6a0dad" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in order-2 lg:order-1" ref={el => { fadeRefs.current[2] = el }}>
              <iframe
                src="https://player.vimeo.com/video/1100639212"
                className="w-full h-64 md:h-80 rounded-lg shadow-2xl"
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
            <div
              className="text-center lg:text-left fade-in order-1 lg:order-2"
              ref={el => { fadeRefs.current[3] = el }}
            >
              <h2 className="coming-soon-text text-4xl sm:text-5xl md:text-6xl mb-8 text-white">COMING SOON</h2>
              <div className="flex justify-center lg:justify-start mb-8">
                <Image
                  src="/images/rivals-logo.png"
                  alt="Rivals of Water"
                  width={350}
                  height={175}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Description Section with Wolf Background */}
      <section id="project" className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/wolf-picture.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <div className="fade-in" ref={el => { fadeRefs.current[4] = el }}>
            <div className=" backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                Rivals of Water is a story-driven 3D platformer where nature fights back. Set in a fading world where
                water is stolen and jungles cry for help, you play as Ayoun—a brave kid on a mission to restore balance
                by defeating shadow creatures and unlocking ancient animal powers. Each level tells a piece of the
                story, blending gameplay with emotion, adventure, and a deep connection to nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="section-title text-3xl sm:text-4xl md:text-6xl font-bold mb-6 gradient-text fade-in"
              ref={el => { fadeRefs.current[5] = el }}
            >
              SERVICES
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto fade-in"
              ref={(el) => { fadeRefs.current[6] = el }}
            >
              Comprehensive gaming and animation solutions for your digital needs
            </p>
          </div>

          {/* Current Services */}
          <div className="mb-16">
            <h2
              className="section-title text-xl sm:text-2xl md:text-3xl font-bold text-center mb-12 fade-in"
              ref={(el) => { fadeRefs.current[7] = el }}
            >
              Current Services
            </h2>
            <div className="service-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card bg-gray-800 p-6 rounded-lg border border-gray-700 cursor-pointer fade-in"
                  ref={el => { fadeRefs.current[index + 8] = el }}
                  onClick={() => setSelectedService(index)}
                >
                  <div className="text-purple-400 mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">{service.description}</p>
                  {service.tools && <p className="text-xs sm:text-sm text-purple-300">{service.tools}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Future Add-ons */}
          <div>
            <h2
              className="section-title text-xl sm:text-2xl md:text-3xl font-bold text-center mb-12 fade-in"
              ref={el => { fadeRefs.current[13] = el }}
            >
              Future Add-ons
            </h2>
            <div className="service-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {futureServices.map((service, index) => (
                <div
                  key={index + 100}
                  className="service-card bg-gray-800 p-6 rounded-lg border border-gray-600 cursor-pointer opacity-75 fade-in"
                  ref={el => { fadeRefs.current[index + 14] = el }}
                  onClick={() => setSelectedService(index + 100)}
                >
                  <div className="text-pink-400 mb-4">{service.icon}</div>
                  <h3 className="text-base sm:text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{service.description}</p>
                  <div className="mt-3">
                    <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full">Coming Soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="section-title text-3xl sm:text-4xl md:text-6xl font-bold mb-6 gradient-text fade-in"
              ref={el => { fadeRefs.current[18] = el }}
            >
              CONTACT US
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto fade-in"
              ref={el => { fadeRefs.current[19] = el }}
            >
              Ready to bring your vision to life? Let's start the conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info & Form */}
            <div className="fade-in" ref={el => { fadeRefs.current[20] = el }}>
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm sm:text-base">Malakpet, Hyderabad, Telangana 500036</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-purple-400 flex-shrink-0" size={20} />
                    <a
                      href="mailto:orbit@trinovastudio.in"
                      className="hover:text-purple-400 transition-colors text-sm sm:text-base break-all"
                    >
                      orbit@trinovastudio.in
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-purple-400 flex-shrink-0" size={20} />
                    <a
                      href="tel:+919876543210"
                      className="hover:text-purple-400 transition-colors text-sm sm:text-base"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mb-8">
                  <h3 className="text-base sm:text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Link
                      href="https://instagram.com/trinovastudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
                    >
                      <Instagram size={20} />
                      <span>Instagram</span>
                    </Link>
                    <Link
                      href="https://linkedin.com/company/trinova-studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
                    >
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-sm sm:text-base"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-sm sm:text-base"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none resize-none text-sm sm:text-base"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50 text-sm sm:text-base"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
                {submitMessage && <p className="text-green-400 text-center text-sm sm:text-base">{submitMessage}</p>}
              </form>
            </div>

            {/* Map */}
            <div className="fade-in" ref={el => { fadeRefs.current[21] = el }}>
              <div className="h-64 sm:h-96 lg:h-full bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6234567890123!2d78.375279!3d17.455736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzIwLjYiTiA3OMKwMjInMzEuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/80 modal-overlay flex items-center justify-center z-50 p-4">
          <div className="modal-content bg-gray-900 rounded-lg max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedService(null)}
            >
              <X size={24} />
            </button>
            {selectedService < 100 ? (
              <>
                <div className="text-purple-400 mb-4">{services[selectedService].icon}</div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">{services[selectedService].title}</h2>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                  {services[selectedService].details}
                </p>
                {services[selectedService].tools && (
                  <p className="text-purple-300 font-semibold text-sm sm:text-base">
                    {services[selectedService].tools}
                  </p>
                )}
              </>
            ) : (
              <>
                <div className="text-pink-400 mb-4">{futureServices[selectedService - 100].icon}</div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">{futureServices[selectedService - 100].title}</h2>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                  {futureServices[selectedService - 100].details}
                </p>
                <div className="bg-pink-500/20 border border-pink-500 rounded-lg p-4">
                  <p className="text-pink-300 font-semibold text-sm sm:text-base">
                    🚀 Coming Soon - Stay tuned for updates!
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
