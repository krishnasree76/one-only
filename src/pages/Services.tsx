// import { motion } from "framer-motion";
// import { Scissors, Sparkles, Brush, Droplets, Crown, Palette, Smile, Zap } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import SectionTitle from "@/components/SectionTitle";
// import ServiceCard from "@/components/ServiceCard";
// import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
// import { Link } from "react-router-dom";

// const services = [
//   {
//     icon: Scissors,
//     title: "Hair Cutting",
//     description:
//       "Expert haircuts tailored to your style. From classic cuts to modern trends, our stylists deliver perfection.",
//   },
//   {
//     icon: Brush,
//     title: "Beard Styling",
//     description:
//       "Professional beard grooming including trimming, shaping, and styling for the perfect look.",
//   },
//   {
//     icon: Sparkles,
//     title: "Head Massage",
//     description:
//       "Relaxing head massage using premium oils to rejuvenate your scalp and relieve stress.",
//   },
//   {
//     icon: Droplets,
//     title: "Hair Wash & Treatment",
//     description:
//       "Deep cleansing hair wash with conditioning treatment for healthy, shiny hair.",
//   },
//   {
//     icon: Crown,
//     title: "Royal Shave",
//     description:
//       "Traditional hot towel shave experience with premium products for the smoothest finish.",
//   },
//   {
//     icon: Palette,
//     title: "Hair Coloring",
//     description:
//       "Professional hair coloring services with quality products and expert application.",
//   },
//   {
//     icon: Smile,
//     title: "Facial Treatment",
//     description:
//       "Rejuvenating facial treatments for men to cleanse, exfoliate, and refresh your skin.",
//   },
//   {
//     icon: Zap,
//     title: "Express Services",
//     description:
//       "Quick grooming services for busy professionals. In and out in 15 minutes!",
//   },
// ];



// const Services = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <WhatsAppFloatButton />

//       {/* Hero */}
//       <section className="pt-32 pb-16 px-4 md:px-8">
//         <div className="container-max">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
//               Our Services
//             </p>
//             <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
//               Premium Grooming <span className="text-gradient-silver">Services</span>
//             </h1>
//             <p className="text-muted-foreground text-lg">
//               Experience top-quality men's grooming services at prices that won't break the bank.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="section-padding bg-card/50">
//         <div className="container-max">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service, index) => (
//               <ServiceCard key={index} {...service} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Hygiene Standards */}
//       <section className="section-padding">
//         <div className="container-max">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <SectionTitle
//                 subtitle="Our Standards"
//                 title="100% Hygiene Guaranteed"
//                 align="left"
//               />
//               <ul className="space-y-4">
//                 {[
//                   "Fresh disposable towels for every customer",
//                   "Sterilized tools after each use",
//                   "Premium quality grooming products",
//                   "Trained staff following strict protocols",
//                   "Regular deep cleaning of all equipment",
//                   "Sanitized stations before each service",
//                 ].map((item, index) => (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-center gap-3 text-foreground"
//                   >
//                     <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
//                     {item}
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="p-8 bg-gradient-to-br from-card to-secondary/30 border border-border rounded-lg text-center"
//             >
//               <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Sparkles className="text-primary" size={40} />
//               </div>
//               <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
//                 Customer Satisfaction
//               </h3>
//               <p className="text-4xl font-bold text-primary mb-2">98%</p>
//               <p className="text-muted-foreground">
//                 of our customers rate their experience as excellent
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="section-padding bg-gradient-to-br from-card via-secondary/20 to-card border-t border-border">
//         <div className="container-max text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
//               Ready to Experience the <span className="text-gradient-silver">Difference</span>?
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
//               Visit your nearest THE ONE & ONLY salon or contact us for franchise opportunities.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Link
//                 to="/contact"
//                 className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover-glow"
//               >
//                 Find Nearest Salon
//               </Link>
//               <Link
//                 to="/franchise"
//                 className="px-8 py-4 border border-border text-foreground font-semibold rounded-md hover:border-primary hover:text-primary transition-all duration-300"
//               >
//                 Franchise Opportunities
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Services;
import { motion } from "framer-motion";
import {
  Scissors,
  Palette,
  Sparkles,
  Hand,
  Smile,
  ShieldCheck,
  Zap,
  CheckCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    icon: Scissors,
    title: "Hair Services",
    items: [
      "Haircut",
      "Shave",
      "Beard Trim",
      "Kids Cut",
      "Kids Change of Style",
      "Beard Design",
      "Head Shave",
      "Change of Style",
    ],
  },
  {
    icon: Palette,
    title: "Colours",
    items: [
      "Fashion Colour (Per Streak)",
      "Hair Dye",
      "Global Hair Dye",
      "Fashion Global Hair Colour",
      "Cap Highlights",
      "Beard Colour",
    ],
  },
  {
    icon: Sparkles,
    title: "Hair Spa",
    items: [
      "Dry Hair Spa",
      "Damage Hair Spa",
      "Dandruff Hair Spa",
      "Hair Loss Spa",
      "Hair Straightening",
      "Hair Setting & Makeup",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Head Massage",
    items: ["Coconut Oil Massage", "Almond Oil Massage", "Olive Oil Massage"],
  },
  {
    icon: Smile,
    title: "Facial",
    items: [
      "De-Tan",
      "Peel Off Mask",
      "Cleanup",
      "Fruit Facial",
      "Mini Facial",
      "Chocolate Facial",
      "Gold Facial",
      "Diamond Facial",
      "Skin Lightening",
      "Skin Brightening",
      "Skin Whitening",
      "O3+ Facial",
    ],
  },
  {
    icon: Hand,
    title: "Manicure & Pedicure",
    items: ["Manicure", "Pedicure", "Crack Removal", "Crack Removal Pedicure"],
  },
  {
    icon: Zap,
    title: "Special Services",
    items: ["Hydra Facial", "Botox Hair Service", "Heel Peel Pedicure", "Body Massage"],
  },
];

const packages = [
  {
    title: "Pre Bridegroom - Premium Package",
    points: [
      "Gold Facial",
      "Regular Shave",
      "Half Hand Bleach / Pedicure",
      "Global Colour / Hair Spa",
      "Haircut & Styling",
    ],
  },
  {
    title: "Pre Bridegroom - Deluxe Package",
    points: [
      "Diamond Facial",
      "Regular Shave",
      "Full Hand Bleach / Pedicure",
      "Global Colour / Hair Spa",
      "Haircut & Styling",
    ],
  },
  {
    title: "Pre Bridegroom - Luxury Package",
    points: [
      "Skin Brightening / Lightening Facial",
      "Beard Design",
      "Crack Removal Pedicure",
      "Half Hand Bleach",
      "Global Colour / Hair Spa",
      "Change of Style",
    ],
  },
];

const Services = () => {
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
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Premium Grooming <span className="text-gradient-silver">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Professional grooming services with premium hygiene and experienced staff.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <SectionTitle
            subtitle="Service Categories"
            title="Everything You Need"
            description="Explore our complete list of men’s grooming services."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* shine */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <cat.icon className="text-primary" size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {cat.title}
                  </h3>

                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            subtitle="Packages"
            title="Pre Bridegroom Services"
            description="Complete grooming packages for a premium look."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {pkg.title}
                </h3>
                <ul className="space-y-2">
                  {pkg.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle subtitle="Our Standards" title="Hygiene & Quality" align="left" />
              <ul className="space-y-4 mt-6">
                {[
                  "Fresh disposable towels for every customer",
                  "Sterilized tools after each use",
                  "Premium quality grooming products",
                  "Trained staff following strict protocols",
                  "Regular deep cleaning of all equipment",
                  "Sanitized stations before each service",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-10 bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Premium Grooming
              </h3>
              <p className="text-muted-foreground">
                Comfortable ambience, skilled professionals, and consistent service standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Ready to Experience the <span className="text-gradient-silver">Difference</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Visit your nearest THE ONE & ONLY salon or contact us for franchise opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/our-stores"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover-glow"
              >
                Find Nearest Salon
              </Link>

              <Link
                to="/franchise"
                className="px-8 py-4 border border-border text-foreground font-semibold rounded-md hover:border-primary hover:text-primary transition-all duration-300"
              >
                Franchise Opportunities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
