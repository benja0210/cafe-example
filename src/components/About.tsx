import gallery1 from "@/assets/gallery-1.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-latte">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={gallery1}
                alt="Aroma Café interior"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 rounded-lg z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-lg z-0" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
              Our Story
            </span>
            <h2 className="section-title mb-6">
              A Legacy of <span className="text-gold italic">Excellence</span>
            </h2>
            <div className="w-20 h-0.5 bg-gold mb-8" />

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Since 1985, Aroma Café has been a sanctuary for those who appreciate the finer things in life. 
                What began as a small family-owned coffee house has evolved into an institution of culinary excellence.
              </p>
              <p>
                Our master roasters source the finest beans from sustainable farms across Ethiopia, Colombia, 
                and Guatemala. Each blend is carefully crafted to bring out unique flavor profiles that tell 
                the story of their origin.
              </p>
              <p>
                Beyond coffee, our pastry chefs create edible works of art daily, using time-honored techniques 
                and the finest ingredients. Every visit is an invitation to slow down, savor the moment, 
                and experience true craftsmanship.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <span className="font-display text-4xl text-gold block mb-2">40+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Years</span>
              </div>
              <div className="text-center">
                <span className="font-display text-4xl text-gold block mb-2">3</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Locations</span>
              </div>
              <div className="text-center">
                <span className="font-display text-4xl text-gold block mb-2">50K+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Happy Guests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
