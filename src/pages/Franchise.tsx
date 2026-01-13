import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  IndianRupee,
  Users,
  Shield,
  HeartHandshake,
  BookOpen,
  MapPin,
  Phone,
  CheckCircle,
  FileText,
  Building2,
  ClipboardList,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import FranchiseBenefitCard from "@/components/FranchiseBenefitCard";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const benefits = [
  {
    icon: Shield,
    title: "Standard Hygiene & SOP",
    description:
      "Strong systems, hygiene protocols and standardized service delivery to maintain brand quality.",
  },
  {
    icon: Users,
    title: "Staff Recruitment & Training",
    description:
      "Professional, well-trained staff model with ongoing guidance for smooth operations.",
  },
  {
    icon: HeartHandshake,
    title: "Marketing & Social Support",
    description:
      "Digital promotions, social media support and influencer promotions to support your outlet.",
  },
  {
    icon: BookOpen,
    title: "Ongoing Support",
    description:
      "Continuous operational support from setup stage to day-to-day running and improvements.",
  },
  {
    icon: TrendingUp,
    title: "High Demand Business",
    description:
      "Men’s grooming has strong repeat demand, easy operations and a premium brand look.",
  },
  {
    icon: IndianRupee,
    title: "Strong Unit Economics",
    description:
      "Affordable pricing model designed for repeat customers and sustainable profitability.",
  },
  {
    icon: MapPin,
    title: "Outlet Setup Guidance",
    description:
      "Support for location planning and salon design to match the brand standards.",
  },
  {
    icon: ClipboardList,
    title: "Structured Franchise System",
    description:
      "A proven franchise model built for scalable expansion across towns and cities.",
  },
];

const setupIncludes = [
  "Complete wood work & ceiling design",
  "Full electrical setup",
  "Mirror setup & toughened glass",
  "Premium paints & finishing",
  "CCTV cameras",
  "Audio theater system",
  "A/C",
];



const furnitureEquipment = [
  "Branded Marc Haircut Chairs",
  "Pedicure & Manicure Chairs and furniture",
  "Branded Products and Kits",
  "Billing Software support",
];

const franchiseSupport = [
  "Branding support",
  "Interior setup guidance",
  "Electricity, plumbing, painting guidance",
  "Furniture & A/C support",
  "Name board + lollipop board",
  "Brand stickering",
  "Staff recruitment and training",
  "Product supply support",
  "Marketing & social media support",
  "Influencer promotions",
  "Ongoing support",
];

const steps = [
  { step: 1, title: "Apply", description: "Fill out the franchise application form" },
  { step: 2, title: "Review", description: "Our team reviews your details" },
  { step: 3, title: "Discussion", description: "Call/meeting with franchise team" },
  { step: 4, title: "Agreement", description: "Confirm commercial terms & agreement" },
  { step: 5, title: "Setup", description: "Outlet setup, interiors & staff onboarding" },
  { step: 6, title: "Launch", description: "Grand opening with marketing support" },
];

const Franchise = () => {
  const phoneNumber = "917893398534";
  const message = encodeURIComponent(
    "Hello! I'm interested in THE ONE & ONLY AFFORDABLE MENS SALON franchise opportunity. Please share quotation & details."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppFloatButton />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Franchise Opportunity
            </p>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Start Your Own <span className="text-gradient-silver">Men’s Salon Franchise</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              THE ONE & ONLY AFFORDABLE MENS SALON is built on delivering high-quality,
              trend-focused grooming services at affordable pricing with strong systems,
              hygiene, trained professionals and scalable franchise support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply-franchise"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover-glow"
              >
                Apply Now
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-md hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Phone size={18} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <SectionTitle
            subtitle="Why THE ONE & ONLY?"
            title="Franchise Benefits"
            description="A premium-looking, affordable men’s grooming business model with strong operational support."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FranchiseBenefitCard key={index} {...benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Outlet Requirements + Investment */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            subtitle="Quotation & Requirements"
            title="Franchise Investment & Outlet Setup"
            description="Clear commercial model with professional setup and support."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Outlet Requirements
                </h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Minimum area: 300–400 sq.ft (Ideal 400 sq.ft)",
                  "Ground floor only",
                  "Designed for premium salon interiors & customer comfort",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Investment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <IndianRupee className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Investment Details
                </h3>
              </div>

              <p className="text-muted-foreground mb-4">
                Total investment ranges between:
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
  Total investment will vary based on outlet size, interiors, location requirements,
  equipment and licensing. We share the official quotation after enquiry.
</p>

<p className="text-sm text-muted-foreground">
  Includes interiors, equipment, branding, products, and licensing.
</p>

<a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover-glow"
>
  <Phone size={18} />
  Get Quotation on WhatsApp
</a>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Commercial Terms */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <SectionTitle
            subtitle="Commercial Terms"
            title="Franchise Fee & Royalty"
            description="Simple and transparent franchise commercial structure."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Franchise Fee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <FileText className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Franchise Fee</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                One-Time | Non-Refundable
              </p>

              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Actual Franchise Fee:{" "}
                  <span className="font-semibold text-foreground">₹3,00,000</span>
                </p>
                <p className="text-muted-foreground">
                  Special Offer:{" "}
                  <span className="font-semibold text-primary">₹1,50,000 (50% OFF)</span>
                </p>
              </div>
            </motion.div>

            {/* Royalty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Royalty Structure</h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Fixed Monthly Royalty: ₹15,000 + GST",
                  "Royalty-Free Period: First 3 Months",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ROI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 p-6 bg-gradient-to-br from-card to-secondary/30 border border-border rounded-lg"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              ROI & Break-Even
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Based on conservative assumptions, franchise partners can expect break-even within{" "}
              <span className="font-semibold text-foreground">10–15 months</span>. ROI may vary
              depending on location, rent, staffing efficiency, and marketing execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Setup Includes */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            subtitle="Setup Includes"
            title="Interior + Furniture + Equipment"
            description="Premium interiors with modern setup to match brand standards."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Interior Setup Includes</h3>
              <ul className="space-y-3">
                {setupIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Salon Furniture & Equipment</h3>
              <ul className="space-y-3">
                {furnitureEquipment.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Support */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <SectionTitle
            subtitle="Support From Brand"
            title="What You Get As a Franchise Partner"
            description="End-to-end support for setup, staff, supply and marketing."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {franchiseSupport.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                viewport={{ once: true }}
                className="p-5 bg-card border border-border rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Manpower Model</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Professional, well-trained, multi-skilled staff model</li>
              <li>• Accommodation provided for staff</li>
              <li>• Weekly one off (weekly off)</li>
              <li>• Shift allocation managed to cover peak hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            subtitle="Simple Process"
            title="How It Works"
            description="Start your franchise journey in simple steps."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Interested in <span className="text-gradient-silver">Franchise Partnership</span>?
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Apply now or message us on WhatsApp to get the official franchise quotation and next steps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply-franchise"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover-glow"
              >
                Apply for Franchise
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 border border-border text-foreground font-semibold rounded-md hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Phone size={18} />
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;
