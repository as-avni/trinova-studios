import Image from "next/image"
import { LinearScrollSection } from "@/components/linear-scroll-section"

export function WhyYouNeed() {
  return (
    <section id="benefits" className="w-full bg-[#f8fbfd] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <LinearScrollSection animationType="fade-in" className="mb-12 text-center">
          <h2 className="mb-2 text-xl font-medium text-[#0078AA]">Why You Need?</h2>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Hard Water? We've Got the Fix!</h1>
          <p className="mx-auto max-w-3xl text-gray-700 md:text-lg">
            Say goodbye to limescale, dull hair, and costly repairs. Aquastori Softner <br/>transforms your water for a
            cleaner, healthier home.
          </p>
        </LinearScrollSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <LinearScrollSection
            animationType="fade-left"
            className="flex flex-col items-center space-y-4 text-center transition-all hover:translate-y-[-5px] hover:shadow-lg rounded-lg p-6"
          >
            <div className="h-24 w-24 transition-transform hover:scale-110">
              <Image
                src="/assets/stains.png"
                alt="Pipe icon"
                width={96}
                height={96}
                className="h-auto w-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Say Goodbye to Clogs & Stains</h3>
            <p className="text-gray-700">
              Hard water causes buildup, damaging<br/> pipes. Our softener prevents limescale for<br/> a smooth-running home.
            </p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-in"
            delay={200}
            className="flex flex-col items-center space-y-4 text-center transition-all hover:translate-y-[-5px] hover:shadow-lg rounded-lg p-6"
          >
            <div className="h-24 w-24 transition-transform hover:scale-110">
              <Image
                src="/assets/shower.png"
                alt="Hair icon"
                width={96}
                height={96}
                className="h-auto w-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Every Shower, a Fresh Start</h3>
            <p className="text-gray-700">
              Hard water dries skin and brittles hair.<br/> Aquastori Softner restores moisture for glowing skin and silky
              hair.
            </p>
          </LinearScrollSection>

          <LinearScrollSection
            animationType="fade-right"
            delay={400}
            className="flex flex-col items-center space-y-4 text-center transition-all hover:translate-y-[-5px] hover:shadow-lg rounded-lg p-6"
          >
            <div className="h-24 w-24 transition-transform hover:scale-110">
              <Image
                src="/assets/appliances.png"
                alt="Appliance icon"
                width={96}
                height={96}
                className="h-auto w-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Make Appliances Last Longer</h3>
            <p className="text-gray-700">
              Hard water wears down appliances. Our system prevents damage, boosting efficiency and cutting repair
              costs.
            </p>
          </LinearScrollSection>
        </div>
      </div>
    </section>
  )
}
