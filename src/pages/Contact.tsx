import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Validation Error",
        description: result.error.errors[0]?.message || "Please fill all fields correctly",
        variant: "destructive",
      });
      return;
    }

    const phoneNumber = "917893398534";
    const whatsappMessage = `*Contact Form - THE ONE & ONLY*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "Your message is ready to send via WhatsApp!",
    });
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      lines: [
        {
          label: "+91 7893398534",
          href: "tel:+917893398534",
        },
        {
          label: "+91 8978108180",
          href: "tel:+918978108180",
        },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      lines: [
        {
          label: "theoneandonlyindia1@gmail.com",
          href: "mailto:theoneandonlyindia1@gmail.com",
        },
      ],
    },
    {
      icon: MapPin,
      title: "Address",
      lines: [
        {
          label: "RENIGUNTA STORE: 10/210, Post Office St, beside HONDA SHOWROOM, Gowri Nagar, Tukivakam, Andhra Pradesh 517520",
          href: "https://maps.google.com/?cid=13844069859092920535&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
          external: true,
        },
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      lines: [
        { label: "Sunday – Saturday (365 Days)", href: "/contact" },
        { label: "07:00 AM – 10:00 PM", href: "/contact" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppFloatButton />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Get In <span className="text-gradient-silver">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions? Reach us instantly via WhatsApp, phone call or email.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding pt-8">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-card border border-border rounded-xl shadow-sm relative overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full" />

              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                Send us a Message
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Submit the form and it will open WhatsApp with your message.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send size={18} className="mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                Contact Information
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Tap any item to call, email or open location in Google Maps.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {contactCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="group p-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-700" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                        <card.icon className="text-primary" size={20} />
                      </div>

                      <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>

                      <div className="space-y-2">
                        {card.lines.map((line, i) => {
                          const isExternal = line.external;
                          const isInternal = line.href?.startsWith("/");

                          const common =
                            "inline-flex items-start gap-1 text-sm text-muted-foreground hover:text-primary transition-colors text-left";

                          if (isInternal) {
                            return (
                              <a key={i} href={line.href} className={common}>
                                {line.label}
                              </a>
                            );
                          }

                          return (
                            <a
                              key={i}
                              href={line.href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              className={common}
                            >
                              <span>{line.label}</span>
                              <ArrowUpRight size={14} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/theoneandonlysalon.india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-all hover:bg-secondary/20"
                  >
                    <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <Instagram size={18} />
                      @theoneandonlysalon.india
                    </span>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>

                  <a
                    href="https://www.facebook.com/share/1A1QKDQDno/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-all hover:bg-secondary/20"
                  >
                    <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <Facebook size={18} />
                      The One & Only Affordable Unisex Salon
                    </span>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* Map Section */}
<section className="section-padding bg-card/50">
  <div className="container-max">
    <SectionTitle
      subtitle="Location"
      title="Find Us Here"
      description="Visit our store in Renigunta, Tirupati."
    />

    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-xl border border-border bg-card"
    >
      <iframe
        title="THE ONE & ONLY Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0195562725514!2d79.4716768!3d13.6262846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1a476b0103%3A0xc020043014ecf8d7!2sTHE%20ONE%20%26%20ONLY%20AFFORDABLE%20UNISEX%20SALON!5e0!3m2!1sen!2sin!4v1708100000000!5m2!1sen!2sin"
        className="w-full h-[420px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Contact;