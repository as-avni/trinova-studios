import { LinearScrollSection } from "@/components/linear-scroll-section"

export function Features() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5FAFE] py-24 md:py-32">
      <div className="container mx-auto px-4 bg-[url('/background/Feature.png')] bg-cover bg-no-repeat bg-center min-h-screen flex flex-col justify-center md:flex-row md:items-center gap-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <LinearScrollSection animationType="fade-left" className="space-y-6 my-auto">
            <h2 className="text-lg font-semibold text-[#0078AA] tracking-wide">Features That Make a Difference</h2>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight md:text-6xl">Smart. Efficient. Built for <br/>Pure Comfort.</h1>
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Aquastori Softner isn&apos;t just a water softener—it&apos;s a game-changer for your home. Designed with
              cutting-edge technology, it delivers the softest water with effortless efficiency.
            </p>
          </LinearScrollSection>

          {/* <LinearScrollSection animationType="fade-right" className="relative water-ripple">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Water splash background"
              width={600}
              height={400}
              className="h-auto w-full"
            />
          </LinearScrollSection> */}
        </div>

        <div className="relative w-full h-[500px] mt-10 md:mt-0">
          <LinearScrollSection 
            animationType="fade-in"
            delay={0}
            className="absolute top-0 left-[40%] w-72 bg-[#0078AA] text-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="mb-2 text-xl font-semibold">Advanced Ion Exchange</h3>
            <p>Removes minerals, prevents limescale, and delivers silky-smooth water.</p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={150}
            className="absolute top-0 right-0 w-72 bg-white text-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold">Self-Cleaning System</h3>
            <p>Automatic regeneration keeps the system clean and efficient, no manual effort needed.</p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={300}
            className="absolute bottom-[120px] left-[28%] w-72 bg-white text-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold">Green & Energy Smart</h3>
            <p>Uses minimal water and energy, reducing waste while protecting your home.</p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={450}
            className="absolute bottom-0 right-8 w-72 bg-white text-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold">Smart Digital Controls</h3>
            <p>Monitor and adjust settings with an intuitive digital panel for ultimate convenience.</p>
          </LinearScrollSection>
        </div>
      </div>
    </section>
  )
}
