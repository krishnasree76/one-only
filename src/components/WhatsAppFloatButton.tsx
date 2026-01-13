import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatButton = () => {
  const phoneNumber = "917893398534";
  const message = encodeURIComponent(
    "Hello! I'm interested in THE ONE & ONLY Affordable Men's Salon. Please share more details."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: "#25D366" }} // ✅ official WhatsApp green
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ boxShadow: "0 0 30px rgba(37, 211, 102, 0.55)" }}
    >
      <FaWhatsapp size={32} color="white" />
    </motion.a>
  );
};

export default WhatsAppFloatButton;
