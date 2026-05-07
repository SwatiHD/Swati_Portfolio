import { motion } from "framer-motion";

export default function FloatingShape({ className }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
    />
  );
}
