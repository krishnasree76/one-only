import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Users, TrendingUp, Award, Clock, IndianRupee, HeartHandshake, ChevronRight } from "lucide-react";
import salonInterior from "@/assets/image.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import FranchiseBenefitCard from "@/components/FranchiseBenefitCard";
import TestimonialCard from "@/components/TestimonialCard";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const franchiseBenefits = [
  {
    icon: Shield,
    title: "100% Hygiene Standards",
    description: "Strict sanitization protocols and premium quality products ensure customer safety.",
  },
  {
    icon: Users,
    title: "Trained Staff",
    description: "Complete training program for stylists with ongoing skill development.",
  },
  {
    icon: TrendingUp,
    title: "Proven Business Model",
    description: "Tested and successful operational framework with high profit margins.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Investment",
    description: "Low initial investment with quick ROI and sustainable growth potential.",
  },
  {
    icon: Award,
    title: "Brand Recognition",
    description: "Leverage our established brand presence and marketing support.",
  },
  {
    icon: HeartHandshake,
    title: "Complete Support",
    description: "End-to-end assistance from setup to operations and marketing.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Franchise Owner",
    location: "Tirupati, AP",
    content: "Best decision I made was to partner with THE ONE & ONLY. The support system is incredible and profits exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Venkat Reddy",
    role: "Customer",
    location: "Renigunta",
    content: "Premium grooming at affordable prices. The hygiene standards are exceptional. I've been a loyal customer for over 2 years now.",
    rating: 5,
  },
  {
    name: "Suresh Babu",
    role: "Franchise Owner",
    location: "Chittoor, AP",
    content: "The training and ongoing support helped me run a successful salon even without prior experience. Highly recommended!",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppFloatButton />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview Section */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Redefining Men's Grooming <span className="text-gradient-silver">Standards</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                THE ONE & ONLY Affordable Men's Salon brings premium grooming services at prices everyone can afford. 
                With strict hygiene standards, trained professionals, and a customer-first approach, we've become the 
                trusted choice for men's grooming across India.
              </p>
              <ul className="space-y-3 mb-8">
                {["Premium services at affordable prices", "Trained & certified stylists", "100% hygiene guaranteed", "Open 365 days a year"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Learn More About Us <ChevronRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary to-card rounded-lg border border-border overflow-hidden">
                <img 
                  src={salonInterior} 
                  alt="THE ONE & ONLY Salon" 
                  className="w-full h-full object-cover"
                />
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            subtitle="Why Choose Us"
            title="The ONE & ONLY Difference"
            description="We deliver excellence in every service with our commitment to hygiene, quality, and customer satisfaction."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {franchiseBenefits.map((benefit, index) => (
              <FranchiseBenefitCard key={index} {...benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="section-padding bg-gradient-to-br from-card via-secondary/20 to-card border-y border-border">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Join Our Network
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Start Your <span className="text-gradient-silver">Franchise Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Be a part of India's fastest-growing men's grooming franchise. Low investment, 
              high returns, and complete support system to ensure your success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply-franchise"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover-glow"
              >
                Apply for Franchise
              </Link>
              <Link
                to="/franchise"
                className="px-8 py-4 border border-border text-foreground font-semibold rounded-md hover:border-primary hover:text-primary transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            subtitle="Testimonials"
            title="What People Say"
            description="Hear from our franchise partners and satisfied customers."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;