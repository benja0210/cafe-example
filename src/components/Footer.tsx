const Footer = () => {
  return (
    <footer className="bg-espresso py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                <span className="text-gold font-display text-lg font-semibold">A</span>
              </div>
              <span className="font-display text-2xl text-cream">Aroma Café</span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-sm">
              Where every cup tells a story. Join us for an unforgettable coffee experience 
              in an atmosphere of timeless elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-medium mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a href="#menu" className="block text-cream/60 hover:text-gold transition-colors text-sm">
                Menu
              </a>
              <a href="#about" className="block text-cream/60 hover:text-gold transition-colors text-sm">
                About Us
              </a>
              <a href="#locations" className="block text-cream/60 hover:text-gold transition-colors text-sm">
                Locations
              </a>
              <a href="#gallery" className="block text-cream/60 hover:text-gold transition-colors text-sm">
                Gallery
              </a>
              <a href="#contact" className="block text-cream/60 hover:text-gold transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-cream font-medium mb-4 uppercase tracking-wider text-sm">
              Hours
            </h4>
            <div className="space-y-2 text-cream/60 text-sm">
              <p>Monday - Friday</p>
              <p className="text-cream">7:00 AM - 9:00 PM</p>
              <p className="mt-4">Saturday - Sunday</p>
              <p className="text-cream">8:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 text-sm">
              © 2025 Aroma Café. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream/40 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/40 hover:text-gold transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
