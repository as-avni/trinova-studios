import Image from "next/image"
import { LinearScrollSection } from "@/components/linear-scroll-section"

export function HowItWorks() {
  return (
    <section id="how-it-work" className="w-full bg-[#f8fbfd] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <LinearScrollSection animationType="fade-in" className="mb-12 text-center">
          <h2 className="mb-2 text-xl font-medium text-[#0078AA]">How It Works</h2>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">From Hard Water to Soft Perfection</h1>
          <p className="mx-auto max-w-3xl text-gray-700 md:text-lg">
            How soft water transforms your home, your skin, and your everyday life.
          </p>
        </LinearScrollSection>

        <div className="relative mt-16 flex flex-col items-center">
          <LinearScrollSection animationType="scale" className="relative mb-8 w-full max-w-md float">
            <Image
              src="/placeholder.svg?height=500&width=300"
              alt="Glass of water"
              width={300}
              height={500}
              className="mx-auto h-auto"
            />
          </LinearScrollSection>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-8">
              <LinearScrollSection animationType="fade-left" className="text-center md:text-right">
                <h3 className="mb-2 text-xl font-medium text-[#0078AA]">Hard water</h3>
                <div className="space-y-6">
                  <div className="transition-all hover:translate-x-[-5px]">
                    <h4 className="text-lg font-medium">Cause dry skin & dull hair</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[-5px]">
                    <h4 className="text-lg font-medium">Leaves stains on dishes</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[-5px]">
                    <h4 className="text-lg font-medium">Reduce soap lather, easting detergent</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[-5px]">
                    <h4 className="text-lg font-medium">Build up scale in pipes & appliances</h4>
                  </div>
                </div>
              </LinearScrollSection>
            </div>
            <LinearScrollSection animationType="scale" className="relative mb-8 w-full max-w-md float">
            <Image
              src="/assets/glass.png"
              alt="Glass of water"
              width={300}
              height={500}
              className="mx-auto h-auto my-auto"
            />
          </LinearScrollSection>
            <div className="space-y-8">
              <LinearScrollSection animationType="fade-right" className="text-center md:text-left">
                <h3 className="mb-2 text-xl font-medium text-[#0078AA]">Soft water</h3>
                <div className="space-y-6">
                  <div className="transition-all hover:translate-x-[5px]">
                    <h4 className="text-lg font-medium">Leaves skin soft & hair sikly</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[5px]">
                    <h4 className="text-lg font-medium">No more stains on glass & fixture</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[5px]">
                    <h4 className="text-lg font-medium">Uses Soap for better cleaning</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[5px]">
                    <h4 className="text-lg font-medium">Protects appliances & extends their life</h4>
                  </div>
                </div>
              </LinearScrollSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
