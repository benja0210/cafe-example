import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Elegant café interior with leather seating" },
  { src: gallery2, alt: "Barista crafting latte art" },
  { src: gallery3, alt: "Fresh pastry display" },
  { src: gallery4, alt: "Charming outdoor terrace" },
  { src: gallery5, alt: "Freshly roasted coffee beans" },
  { src: gallery6, alt: "Professional coffee bar" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Gallery
          </span>
          <h2 className="section-title mb-6">Moments at Aroma</h2>
          <div className="divider-gold mb-6" />
          <p className="section-subtitle mx-auto">
            Glimpses of the experiences that await you at our cafés.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 || index === 5 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 || index === 5 ? "h-full min-h-[400px]" : "h-64"
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-cream text-sm font-light">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
