import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="The One & Only" className="h-20 w-auto" />
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed">
              THE ONE & ONLY Affordable Men's Salon - Your trusted partner for premium grooming services and
              franchise opportunities.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/theoneandonlysalon.india"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-2 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors overflow-hidden"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-700" />
                <Instagram size={20} className="relative z-10" />
              </a>

              <a
                href="https://www.facebook.com/share/1A1QKDQDno/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-2 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors overflow-hidden"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-700" />
                <Facebook size={20} className="relative z-10" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Franchise", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="inline-flex items-center gap-1 text-muted-foreground text-sm hover:text-primary transition-colors group"
                  >
                    {link}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground space-y-1">
                  <a
                    href="tel:+917893398534"
                    className="relative group inline-block hover:text-primary transition-colors"
                  >
                    +91 7893398534
                    <span className="block h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-300" />
                  </a>
                  <a
                    href="tel:+918978108180"
                    className="relative group inline-block hover:text-primary transition-colors"
                  >
                    +91 8978108180
                    <span className="block h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-300" />
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:theoneandonlyindia1@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  theoneandonlyindia1@gmail.com
                  <span className="block h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-300" />
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10-419,+G+M+Street,+Beside+Honda+Showroom,+Renigunta,+Tirupati,+AP,+517520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  10-419, G M Street, Beside Honda Showroom, Renigunta, Tirupati, AP, 517520
                  <span className="block h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Business Hours</h4>

            <div className="flex items-start gap-3">
              <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Open 365 Days</p>
                <p>Sunday – Saturday</p>
                <p>07:00 AM – 10:00 PM</p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/apply-franchise"
                className="relative inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-all overflow-hidden group"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full duration-700" />
                <span className="relative z-10">Start Your Franchise</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} THE ONE & ONLY Affordable Men's Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
