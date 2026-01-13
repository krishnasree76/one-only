import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover-glow"
    >
      <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-5">
        <Icon className="text-primary" size={26} />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
