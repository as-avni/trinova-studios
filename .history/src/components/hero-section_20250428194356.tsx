import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="w-full bg-[#d9eaf3] bg-[url('/background/hero-bg-1.png')] bg-cover bg-center py-16 md:py-24">      
      <div id="text" className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center space-y-6 fade-in mt-10">
          <div className="space-y-2">
            <h2 className="text-[#0078AA] text-xl font-medium slide-in-left">Aquastori Softner</h2>
            <h1
              className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl slide-in-left"
              style={{ animationDelay: "0.1s" }}
            >
              Say Goodbye to Hard Water, Forever!
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg slide-in-left" style={{ animationDelay: "0.2s" }}>
              Protect your home, skin, and appliances with the power of pure, softened water.
            </p>
          </div>
          <div className="slide-in-left" style={{ animationDelay: "0.3s" }}>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-md bg-[#FF7A45] px-6 py-3 text-white transition-all hover:bg-[#FF7A45]/90 hover:shadow-lg hover:translate-y-[-2px]"
            >
              Get Softer Water Today
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 float">
            <Image
              src="/assets/softner.png"
              alt="Aquastori Water Softener"
              width={400}
              height={600}
              className="h-auto max-w-full"
              priority
            />
          </div>/
        </div>
      </div>
    </section>
  )
}
