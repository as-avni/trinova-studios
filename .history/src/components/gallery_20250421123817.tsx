import Image from "next/image"

const galleryImages = [
  { id: 1, src: "/images/gallery/resort-exterior.png", alt: "Resort Exterior" },
  { id: 2, src: "/images/gallery/luxury-room.png", alt: "Luxury Room" },
  { id: 3, src: "/images/gallery/restaurant.png", alt: "Restaurant" },
  { id: 4, src: "/images/gallery/tiger-sighting.png", alt: "Tiger Sighting" },
  { id: 5, src: "/images/gallery/tree-house.png", alt: "Tree House" },
  { id: 6, src: "/images/gallery/safari-vehicle.png", alt: "Safari Vehicle" },
  { id: 7, src: "/images/gallery/pool-area.png", alt: "Pool Area" },
  { id: 8, src: "/images/gallery/dining-experience.png", alt: "Dining Experience" },
  { id: 9, src: "/images/gallery/dining-experience.png", alt: "Dining Experience" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white relative">
      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
        <Image src="/images/decorative-elements.png" alt="" fill style={{ objectFit: "contain" }} />
      </div> */}

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our resort and the surrounding wilderness through our gallery.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-full w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
