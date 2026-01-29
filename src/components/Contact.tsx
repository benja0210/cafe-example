import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-latte">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
              Get in Touch
            </span>
            <h2 className="section-title mb-6">
              We'd Love to <span className="text-gold italic">Hear</span> from You
            </h2>
            <div className="w-20 h-0.5 bg-gold mb-8" />

            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you have a question about our menu, want to book a private event, 
              or simply wish to share your experience, we're here to listen.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hello@aromacafe.com"
                className="flex items-center gap-4 text-foreground hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Email</span>
                  <span className="font-medium">hello@aromacafe.com</span>
                </div>
              </a>

              <a
                href="tel:+12125550100"
                className="flex items-center gap-4 text-foreground hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Phone</span>
                  <span className="font-medium">(212) 555-0100</span>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">
                Follow Us
              </span>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all"
                >
                  <Instagram className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all"
                >
                  <Facebook className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <h3 className="font-display text-2xl mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm text-muted-foreground mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
