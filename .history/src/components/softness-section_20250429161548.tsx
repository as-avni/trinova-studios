import Image from "next/image"

export function SoftnessSection() {
  return (
    <section className="w-full bg-[#f8fbfd] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center fade-in">
          <h2 className="mb-2 text-xl font-medium text-[#0078AA]">Softness Starts Here</h2>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Water That Cares For Every Moment</h1>
          <p className="mx-auto max-w-3xl text-gray-700 md:text-lg">
            From bath time to play time — experience the joy of soft, clean water your whole family can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg transition-all hover:shadow-xl hover:scale-105">
            <div className="relative h-80 w-full">
              <Image
                src="/assets/child.png"
                alt="Child enjoying soft water"
                fill
                className="object-cover transition-transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="mb-2 text-xl font-semibold">Gentle on Skin</h3>
                <p className="text-sm">Soft water that&apos;s safe and soothing, even for the little ones.</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg transition-all hover:shadow-xl hover:scale-105">
            <div className="relative h- w-full">
              <Image
                src="/assets/dishes.png"
                alt="Clean dishes with soft water"
                fill
                className="object-cover transition-transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="mb-2 text-xl font-semibold">Sparkling Clean, Every Time</h3>
                <p className="text-sm">No stains, no spots, just naturally clean dishes and surfaces.</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg transition-all hover:shadow-xl hover:scale-105">
            <div className="relative h-80 w-full">
              <Image
                src="/assets/family.png"
                alt="Family enjoying soft water benefits"
                fill
                className="object-cover transition-transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="mb-2 text-xl font-semibold">Sparkling Clean, Every Time</h3>
                <p className="text-sm">No stains, no spots, just naturally clean dishes and surfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
