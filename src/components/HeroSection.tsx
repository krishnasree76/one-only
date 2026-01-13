import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import salonInterior from "@/assets/salon-interior.png";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";

const slides = [
  {
    image: salonInterior,
    showText: true, // ✅ only first slide has text overlay
  },
  {
    image: hero1,
    showText: false,
  },
  {
    image: hero2,
    showText: false,
  },
  {
    image: hero3,
    showText: false,
  },
];

const HeroSection = () => {
  const phoneNumber = "917893398534";
  const message = encodeURIComponent(
    "Hello! I'm interested in THE ONE & ONLY franchise opportunity. Please share more details."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const [current, setCurrent] = useState(0);

  // ✅ Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Manual scroll
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const isFirstSlide = slides[current].showText;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].image}
            alt="THE ONE & ONLY Hero Slide"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* ✅ Overlay ONLY for first slide */}
        {isFirstSlide && (
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        )}
      </div>

      {/* ✅ Manual Buttons (Always visible) */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-20">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-background/40 border border-border backdrop-blur flex items-center justify-center hover:bg-background/60 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-foreground" />
        </button>

        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-background/40 border border-border backdrop-blur flex items-center justify-center hover:bg-background/60 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="text-foreground" />
        </button>
      </div>

      {/* ✅ Text Content ONLY on slide 1 */}
      {isFirstSlide && (
        <div className="container-max px-4 md:px-8 relative z-30 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-muted-foreground font-medium tracking-widest uppercase text-sm mb-6"
            >
              Franchise Opportunity
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6"
            >
              THE ONE & ONLY
              <span className="block text-gradient-silver mt-2">
                Affordable Men's Salon
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Join India's fastest-growing men's grooming franchise. Premium services,
              proven business model, and a complete support system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/apply-franchise"
                className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-md hover:bg-foreground/90 transition-all duration-300 hover-glow"
              >
                Apply for Franchise
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-md hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      )}

      {/* ✅ Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all ${
              current === index ? "w-10 bg-primary" : "w-2.5 bg-muted"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
