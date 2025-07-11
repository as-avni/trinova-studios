import { LinearScrollSection } from "@/components/linear-scroll-section"

export function Features() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5FAFE] py-24 md:py-32">
      <div className="container mx-auto px-4 bg-[url('/background/Feature.png')] bg-cover bg-no-repeat bg-center min-h-screen flex flex-col justify-center md:flex-row md:items-center">
      <div className="w-full flex flex-col items-start justify-center md:pl-8 max-w-xl space-y-10 md:space-y-6">
          <LinearScrollSection animationType="fade-left" className="space-y-4">
            <h2 className="text-lg font-semibold text-[#0078AA] tracking-wide">Features That Make a Difference</h2>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900">
              Smart. Efficient. Built for <span className="hidden md:inline"><br/></span>Pure Comfort.
            </h1>
            <p className="text-gray-600 text-sm md:text-lg font-extrabold md:font-semibold leading-relaxed">
              Aquastori Softner isn&apos;t just a water softener—it&apos;s a game-changer for your home.
              Designed with cutting-edge technology, it delivers the softest water with effortless efficiency.</p>
          </LinearScrollSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 ">
          <LinearScrollSection
            animationType="fade-in"
            delay={0}
            className="rounded-lg bg-[#0078AA] p-6 text-white transition-all hover:shadow-lg hover:scale-105 mx-auto mt-12 md:mt-0 mr-0 md:mr-4"
          >
            <h3 className="mb-2 text-lg md:text-xl font-semibold">Advanced Ion Exchange</h3>
            <p>Removes minerals, prevents limescale, and delivers silky-smooth water.</p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={150}
            className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg hover:scale-105 mx-auto mr-0 md:mr-4"
          >
            <h3 className="mb-2 text-lg md:text-xl font-semibold">Self-Cleaning System</h3>
            <p>Automatic regeneration keeps the system clean and efficient, no manual effort needed.</p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={300}
            className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg hover:scale-105 mx-auto ml-0 md:ml-4"
          >
            <h3 className="mb-2 text-lg md:text-xl font-semibold">Green & Energy Smart</h3>
            <p>Uses minimal water and energy, reducing waste while protecting your home.</p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={450}
            className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg hover:scale-105 mx-auto ml-0 md:ml-4"
          >
            <h3 className="mb-2 text-lg md:text-xl font-semibold">Smart Digital Controls</h3>
            <p>Monitor and adjust settings with an intuitive digital panel for ultimate convenience.</p>
          </LinearScrollSection>
        </div>
      </div>
    </section>
  )
}
