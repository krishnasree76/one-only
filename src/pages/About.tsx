import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Shield, Star, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We focus on comfort, confidence, and satisfaction in every grooming experience.",
  },
  {
    icon: Shield,
    title: "Hygiene Excellence",
    description:
      "Cleanliness, safety, and sanitization are followed as standard in our salon operations.",
  },
  {
    icon: Users,
    title: "Skilled Professionals",
    description:
      "Our trained team delivers consistent grooming services with care and precision.",
  },
  {
    icon: Star,
    title: "Affordable Premium Experience",
    description:
      "We believe quality grooming should be accessible, reliable, and value-driven.",
  },
];

const About = () => {
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
              About Us
            </p>

            <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-4xl md:text-6xl lg:text-7xl font-pop font-extrabold tracking-[0.06em] text-foreground leading-none mb-4 uppercase"
>
  THE ONE & ONLY
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="font-pop text-sm md:text-base font-semibold uppercase tracking-[0.10em] text-muted-foreground mb-6"
>
  AFFORDABLE MENS SALON
</motion.p>




            <p className="text-muted-foreground text-lg">
              A professionally managed grooming brand built for modern men — delivering consistent quality,
              hygiene, and a premium experience at affordable prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Brand + Founder */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Who We Are
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  THE ONE & ONLY AFFORDABLE MENS SALON
                </span>{" "}
                is a professionally managed men’s grooming brand built to deliver consistent, high-quality
                salon services at affordable prices. Designed to serve the evolving needs of the modern Indian
                man, our brand is centered around efficiency, hygiene, skilled professionals, and standardized
                service delivery.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We believe grooming is not just about appearance — it’s about confidence. Our salons aim to
                provide a clean, comfortable, and professional environment where customers feel relaxed, cared
                for, and satisfied every time.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With well-defined operating systems, trained staff, modern equipment, and a strong brand
                identity, we are positioned for scalable growth and franchise expansion while maintaining
                consistency in service quality across locations.
              </p>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-card border border-border rounded-lg shadow-sm"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-primary" size={26} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest">
                    Founder & CEO
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Vankayalapati Anitha Reddy
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-5">
                Founded by <span className="font-semibold text-foreground">Vankayalapati Anitha Reddy</span>,
                an entrepreneur with a strong understanding of customer-centric business and service excellence,
                the brand was created with a clear vision: to build a trustworthy men’s grooming network that
                balances premium experience with mass affordability.
              </p>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Education:</span>{" "}
                  MSc (Mathematics), B.Ed
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Professional:</span>{" "}
                  Advocate & Entrepreneur
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-card to-secondary/30 border border-border rounded-lg"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to create a nationwide chain of men’s salons that offer professional service,
                reliable operations, and profitable franchise opportunities — while maintaining hygiene,
                consistency, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-card to-secondary/30 border border-border rounded-lg"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To build a scalable and trusted men’s grooming franchise brand across towns and cities,
                setting strong service standards through trained teams, modern systems, and a premium customer
                experience at affordable pricing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <SectionTitle
            subtitle="Our Values"
            title="What Drives Us"
            description="The principles that guide our team, our service, and our franchise growth."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-border rounded-lg text-center"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
