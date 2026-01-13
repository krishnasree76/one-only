import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

// ✅ Import 12 images
import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";
import gallery7 from "@/assets/gallery7.png";
import gallery8 from "@/assets/gallery8.png";
import gallery9 from "@/assets/gallery9.png";
import gallery10 from "@/assets/gallery10.png";
import gallery11 from "@/assets/gallery11.png";
import gallery12 from "@/assets/gallery12.png";
import gallery13 from "@/assets/gallery13.png";
import gallery14 from "@/assets/gallery14.png";
import gallery15 from "@/assets/gallery15.png";
import gallery16 from "@/assets/gallery16.png";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppFloatButton />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Gallery
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-gradient-silver">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our salon ambiance, interiors and grooming experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding pt-6">
        <div className="container-max">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer group overflow-hidden rounded-lg border border-border bg-card"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-44 sm:h-52 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 p-2 text-white hover:text-primary transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              onClick={prevImage}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 md:right-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              onClick={nextImage}
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex]}
                alt={`Gallery Preview ${selectedIndex + 1}`}
                className="w-full max-h-[85vh] object-contain rounded-lg border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding bg-card/50 border-t border-border mt-10">
        <div className="container-max text-center">
          <SectionTitle
            subtitle="Visit Us"
            title="Experience It Yourself"
            description="Visit THE ONE & ONLY salon to enjoy a clean, premium and comfortable grooming experience."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
