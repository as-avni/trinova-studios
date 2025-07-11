import Image from "next/image"
import { LinearScrollSection } from "@/components/linear-scroll-section"

export function HowItWorks() {
  return (
    <section id="how-it-work" className="w-full py-16 md:py-24 bg-[#F5FAFE] bg-[url('/background/HIW-bg.png')] bg-contain md:bg-cover h-screen">
      <div className="container mx-auto px-4">
        <LinearScrollSection animationType="fade-in" className="mb-12 text-center">
          <h2 className="mb-2 text-xl font-medium text-[#0078AA]">How It Works</h2>
          <h1 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">From Hard Water to Soft Perfection</h1>
          <p className="mx-auto max-w-3xl text-gray-700 md:text-lg">
            How soft water transforms your home, your skin, and your everyday life.
          </p>
        </LinearScrollSection>

        <div className="relative mt-16 flex flex-col items-center">
          {/* <LinearScrollSection animationType="scale" className="relative mb-8 w-full max-w-md float">
            <Image
              src="/placeholder.svg?height=500&width=300"
              alt="Glass of water"
              width={300}
              height={500}
              className="mx-auto h-auto"
            />
          </LinearScrollSection> */}

          <div className="grid w-full grid-cols-3 gap-2">
            <div className="my-auto">
              <LinearScrollSection animationType="fade-left" className="text-center md:text-right">
                <div className="space-y-6 md:space-y-12">
                <h3 className="mb-2 text-lg md:text-xl font-medium text-[#0078AA]">Hard water</h3>
                  <div className="transition-all hover:translate-x-[-5px]">
                    <h4 className="text-sm md:text-lg font-medium">Cause dry skin <span className="hidden md:inline"><br/></span>& dull hair</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[-5px]">
                    <h4 className="text-sm md:text-lg font-medium">Leaves stains on <span className="hidden md:inline"><br/></span>dishes</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[-5px]">
                    <h4 className="text-sm md:text-lg font-medium">Reduce soap lather, <span className="hidden md:inline"><br/></span>easting detergent</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[-5px]">
                    <h4 className="text-sm md:text-lg font-medium">Build up scale in <span className="hidden md:inline"><br/></span>pipes & appliances</h4>
                  </div>
                </div>
              </LinearScrollSection>
            </div>
            <LinearScrollSection animationType="scale" className="relative mb-8 w-full max-w-md float my-auto">
            <Image
              src="/assets/glass.png"
              alt="Glass of water"
              width={300}
              height={500}
              className="mx-auto h-auto my-auto"
            />
          </LinearScrollSection>
            <div className="my-auto">
              <LinearScrollSection animationType="fade-right" className="text-center md:text-left">
                <div className="space-y-6 md:space-y-12">
                <h3 className="mb-2 text-lg md:text-xl font-medium text-[#0078AA]">Soft water</h3>
                  <div className="transition-all hover:translate-x-[5px]">
                    <h4 className="text-sm md:text-lg font-medium">Leaves skin soft & <span className="hidden md:inline"><br/></span>hair sikly</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[5px]">
                    <h4 className="text-sm md:text-lg font-medium">No more stains on <span className="hidden md:inline"><br/></span>glass & fixture</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[5px]">
                    <h4 className="text-sm md:text-lg font-medium">Uses Soap for better <span className="hidden md:inline"><br/></span>cleaning</h4>
                  </div>
                  <div className="transition-all hover:translate-x-[5px]">
                    <h4 className="text-sm md:text-lg font-medium">Protects appliances & <span className="hidden md:inline"><br/></span>extends their life</h4>
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
