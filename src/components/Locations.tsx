import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
  {
    name: "Downtown",
    address: "123 Main Street, New York, NY 10001",
    hours: "Mon-Fri: 7am-9pm | Sat-Sun: 8am-10pm",
    phone: "(212) 555-0123",
    mapUrl: "https://maps.google.com/?q=123+Main+Street,+New+York,+NY+10001",
  },
  {
    name: "Upper East Side",
    address: "456 Madison Avenue, New York, NY 10022",
    hours: "Mon-Fri: 6:30am-8pm | Sat-Sun: 7am-9pm",
    phone: "(212) 555-0456",
    mapUrl: "https://maps.google.com/?q=456+Madison+Avenue,+New+York,+NY+10022",
  },
  {
    name: "Brooklyn Heights",
    address: "789 Atlantic Avenue, Brooklyn, NY 11201",
    hours: "Mon-Fri: 7am-10pm | Sat-Sun: 8am-11pm",
    phone: "(718) 555-0789",
    mapUrl: "https://maps.google.com/?q=789+Atlantic+Avenue,+Brooklyn,+NY+11201",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-espresso">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Visit Us
          </span>
          <h2 className="section-title text-cream mb-6">Our Locations</h2>
          <div className="divider-gold mb-6" />
          <p className="section-subtitle text-cream/70 mx-auto">
            Find an Aroma Café near you and experience the warmth of our hospitality.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-mocha/50 backdrop-blur-sm border border-cream/10 rounded-lg p-8 hover:border-gold/30 transition-all duration-500 group"
            >
              {/* Location Name */}
              <h3 className="font-display text-2xl text-cream mb-6 group-hover:text-gold transition-colors">
                {location.name}
              </h3>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-cream/80 text-sm">{location.address}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-cream/80 text-sm">{location.hours}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-cream/80 text-sm">{location.phone}</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-gold text-sm uppercase tracking-wider hover:text-cream transition-colors"
              >
                Get Directions
                <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
