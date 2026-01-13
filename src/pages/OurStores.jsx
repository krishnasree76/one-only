import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

import storesImage from "@/assets/gallery10.png";

const stores = [
  {
    name: "RENIGUNTA STORE (Head Office)",
    address:
      "10/210, Post Office St, beside HONDA SHOWROOM, Gowri Nagar, Tukivakam, Andhra Pradesh 517520",
    mapUrl: "https://maps.app.goo.gl/MWevTjHxmRk1va1Q7?g_st=aw",
  },
  {
    name: "NAGARI STORE",
    address:
      "Rama Naidu Colony, 10-7-281/1, Prakasam Rd, opposite Reliance Smart bazaar, Thiruthani Road, Nagari, Andhra Pradesh 517590",
    mapUrl: "https://maps.app.goo.gl/xZvjNJAVKnrWf1446?g_st=aw",
  },
  {
    name: "SRIKALAHASTI NTR PARK STORE - 1",
    address:
      "16/523, Panagal Srikalahasti town, district, near NTR park, Tirupati, Andhra Pradesh 517640",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=16/523,+Panagal+Srikalahasti+town,+near+NTR+park,+Andhra+Pradesh+517640",
  },
  {
    name: "SRIKALAHASTI VMC CIRCLE STORE - 2",
    address:
      "DOOR NO. 2065/1, Ground Floor, 1, PV Rd, near VMC CIRCLE, beside RR THEATRE, Srikalahasti, Tirupati, Andhra Pradesh 517644",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=DOOR+NO.+2065/1,+PV+Rd,+near+VMC+CIRCLE,+beside+RR+THEATRE,+Srikalahasti,+Andhra+Pradesh+517644",
  },
];

const OurStores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppFloatButton />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Our Stores
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Visit Our <span className="text-gradient-silver">Locations</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Find THE ONE & ONLY AFFORDABLE MENS SALON outlets and open locations directly in Google Maps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stores */}
      <section className="section-padding pt-6">
        <div className="container-max">
          <SectionTitle
            subtitle="Store Locations"
            title="Our Outlets"
            description="Click on a location to open it in Google Maps."
          />

          {/* ✅ Changed lg to md so image shows */}
          <div className="grid md:grid-cols-2 gap-10 items-start mt-10">
            {/* Left: Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {stores.map((store, index) => (
                <motion.a
                  key={index}
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group block p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-700" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {store.name}
                        </h3>
                        <ExternalLink
                          size={18}
                          className="text-muted-foreground group-hover:text-primary transition-colors"
                        />
                      </div>

                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {store.address}
                      </p>

                      <p className="mt-3 text-sm font-medium text-primary">
                        Open in Google Maps →
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* ✅ Right: Image ALWAYS visible from md */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:sticky md:top-28"
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={storesImage}
                  alt="THE ONE & ONLY stores"
                  className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-5 p-5 bg-card border border-border rounded-xl">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Visit any outlet to experience premium grooming in a clean,
                  comfortable and professional environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStores;
