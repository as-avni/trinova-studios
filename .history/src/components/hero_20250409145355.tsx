import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative">
      {/* <Image src="/images/decor.png" alt="" fill style={{ objectFit: "fill" }} /> */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Decorative Elements */}
      {/* <div className="absolute top-0 right-0 w-40 h-40 opacity-30">
        <Image src="/images/decor.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-30">
        <Image src="/images/decor.png" alt="" fill style={{ objectFit: "contain" }} />
      </div> */}

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-32 md:h-40 md:w-40">
              <Image
                src="/images/logo-w.png"
                alt="Shiv Ganga Kanha Resort"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          Discover Peace in Nature’s Heart
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Luxury & Wilderness near Kanha&apos;s Mukki Gate</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="#about"
              className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Resort
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
