import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FranchiseBenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const FranchiseBenefitCard = ({ icon: Icon, title, description, index = 0 }: FranchiseBenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative p-6 bg-gradient-to-br from-card to-secondary/30 border border-border rounded-lg overflow-hidden group"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
          <Icon className="text-primary" size={24} />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FranchiseBenefitCard;