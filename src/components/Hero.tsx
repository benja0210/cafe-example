import heroBg from "@/assets/hero-cafe.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Badge */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-gold/50 mb-4">
            <span className="text-gold font-display text-3xl font-semibold">A</span>
          </div>
        </div>

        {/* Title */}
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-medium tracking-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Aroma <span className="text-gold italic">Café</span>
        </h1>

        {/* Divider */}
        <div 
          className="flex items-center justify-center gap-4 mb-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="w-16 h-px bg-gold/50" />
          <span className="text-gold">✦</span>
          <span className="w-16 h-px bg-gold/50" />
        </div>

        {/* Subtitle */}
        <p 
          className="text-cream/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Where every cup tells a story. Experience the art of coffee in an atmosphere of timeless elegance.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a href="#menu" className="btn-primary">
            Explore Menu
          </a>
          <a href="#locations" className="btn-outline-hero">
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
