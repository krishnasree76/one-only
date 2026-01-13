import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const franchiseSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(100),
  investmentRange: z.string().min(1, "Investment range is required"),
  preferredLocation: z.string().trim().min(1, "Preferred location is required").max(200),
  hasExperience: z.string().min(1, "Please select an option"),
  startTimeline: z.string().min(1, "Please select when you want to start"),

  message: z.string().trim().max(1000).optional(),
  
});

const investmentRanges = [
  "₹5-10 Lakhs",
  "₹10-15 Lakhs",
  "₹15-20 Lakhs",
  "₹20+ Lakhs",
];

const startTimelines = ["Immediate", "1 or 2 Months", "After 3 Months"];



const ApplyFranchise = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    investmentRange: "",
    preferredLocation: "",
    hasExperience: "",
    startTimeline: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = franchiseSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Validation Error",
        description: result.error.errors[0]?.message || "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    const phoneNumber = "917893398534";
    const whatsappMessage = `*FRANCHISE APPLICATION - THE ONE & ONLY*

*Personal Details:*
• Full Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}

*Location Details:*
• City: ${formData.city}
• State: ${formData.state}
• Preferred Location: ${formData.preferredLocation}

*Investment Details:*
• Investment Range: ${formData.investmentRange}
• Start Timeline: ${formData.startTimeline}
• Business Experience: ${formData.hasExperience === "yes" ? "Yes" : "No"}

*Additional Message:*
${formData.message || "N/A"}

---
I am interested in becoming a franchise partner. Please contact me with more details.`;


    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Opening WhatsApp",
      description: "Your franchise application is ready to send!",
    });
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
              Join Our Network
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Franchise <span className="text-gradient-silver">Application</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Take the first step towards owning your own THE ONE & ONLY salon. Fill out the form below and our team will get in touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding pt-8">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="p-6 md:p-8 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Application Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <Input
                          name="fullName"
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="bg-background border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                        <Input
                          name="phone"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-background border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Location Details</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">City *</label>
                        <Input
                          name="city"
                          placeholder="Your city"
                          value={formData.city}
                          onChange={handleChange}
                          className="bg-background border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">State *</label>
                        <Input
                          name="state"
                          placeholder="Your state"
                          value={formData.state}
                          onChange={handleChange}
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-2">Preferred Location for Outlet *</label>
                        <Input
                          name="preferredLocation"
                          placeholder="Area/locality where you plan to open the salon"
                          value={formData.preferredLocation}
                          onChange={handleChange}
                          className="bg-background border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Investment Info */}
                  <div>
  <h3 className="text-lg font-semibold text-foreground mb-4">
    Investment Details
  </h3>

  <div className="grid sm:grid-cols-2 gap-4">
    {/* Investment Range */}
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        Investment Range *
      </label>
      <Select
        value={formData.investmentRange}
        onValueChange={(value) => handleSelectChange("investmentRange", value)}
      >
        <SelectTrigger className="bg-background border-border">
          <SelectValue placeholder="Select investment range" />
        </SelectTrigger>
        <SelectContent>
          {investmentRanges.map((range) => (
            <SelectItem key={range} value={range}>
              {range}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    {/* Business Experience */}
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        Business Experience *
      </label>
      <Select
        value={formData.hasExperience}
        onValueChange={(value) => handleSelectChange("hasExperience", value)}
      >
        <SelectTrigger className="bg-background border-border">
          <SelectValue placeholder="Do you have business experience?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* ✅ NEW START TIMELINE */}
    <div className="sm:col-span-2">
      <label className="block text-sm font-medium text-foreground mb-2">
        When are you planning to start the business? *
      </label>

      <Select
        value={formData.startTimeline}
        onValueChange={(value) => handleSelectChange("startTimeline", value)}
      >
        <SelectTrigger className="bg-background border-border">
          <SelectValue placeholder="Select your timeline" />
        </SelectTrigger>
        <SelectContent>
          {startTimelines.map((t) => (
            <SelectItem key={t} value={t}>
              {t}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>
</div>


                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Additional Message (Optional)</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us more about yourself and why you want to join THE ONE & ONLY franchise..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                    <Send size={18} className="mr-2" />
                    Submit Application via WhatsApp
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Why Apply?</h3>
                <ul className="space-y-3">
                  {[
                    "Low investment, high returns",
                    "Complete training & support",
                    "Proven business model",
                    "Marketing assistance",
                    "Ongoing operational help",
                    "Strong brand recognition",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Process</h3>
                <ol className="space-y-4">
                  {[
                    "Fill this form",
                    "Team reviews application",
                    "Discussion call scheduled",
                    "Site visit & agreement",
                    "Setup & launch",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Call us directly for any questions
                </p>
                <a
                  href="tel:+917893398534"
                  className="text-primary font-semibold hover:underline"
                >
                  +91 7893398534
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplyFranchise;