import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  location?: string;
}

const TestimonialCard = ({ name, role, content, rating, location }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 bg-card border border-border rounded-lg"
    >
      <Quote className="text-primary/30 mb-4" size={32} />
      <p className="text-foreground text-sm leading-relaxed mb-6">"{content}"</p>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-primary fill-primary" : "text-muted-foreground"}
          />
        ))}
      </div>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
        {location && <p className="text-xs text-primary mt-1">{location}</p>}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;