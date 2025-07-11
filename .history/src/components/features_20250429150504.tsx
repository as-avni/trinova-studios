import { LinearScrollSection } from "@/components/linear-scroll-section"

export function Features() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5FAFE] py-16 md:py-24">
      <div className="container mx-auto px-4 bg-[url('/background/Feature.png')] bg-cover h-screen my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <LinearScrollSection animationType="fade-left" className="space-y-6 my-auto">
            <h2 className="text-xl font-medium text-[#0078AA]">Features That Make a Difference</h2>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Smart. Efficient. Built for Pure Comfort.</h1>
            <p className="text-gray-700 md:text-lg">
              Aquastori Softner isn't just a water softener—it's a game-changer for your home. Designed with
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <LinearScrollSection
            animationType="fade-in"
            delay={0}
            className="rounded-lg bg-[#0078AA] p-6 text-white transition-all hover:shadow-lg hover:scale-105"
          >
            <h3 className="mb-2 text-xl font-semibold">Advanced Ion Exchange</h3>
            <p>Removes minerals, prevents limescale, and delivers silky-smooth water.</p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={150}
            className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg hover:scale-105"
          >
            <h3 className="mb-2 text-xl font-semibold">Self-Cleaning System</h3>
            <p>Automatic regeneration keeps the system clean and efficient, no manual effort needed.</p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={300}
            className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg hover:scale-105"
          >
            <h3 className="mb-2 text-xl font-semibold">Green & Energy Smart</h3>
            <p>Uses minimal water and energy, reducing waste while protecting your home.</p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={450}
            className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg hover:scale-105"
          >
            <h3 className="mb-2 text-xl font-semibold">Smart Digital Controls</h3>
            <p>Monitor and adjust settings with an intuitive digital panel for ultimate convenience.</p>
          </LinearScrollSection>
        </div>
      </div>
    </section>
  )
}
