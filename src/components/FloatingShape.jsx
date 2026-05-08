import { motion } from "framer-motion";

export default function FloatingShape({ className }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -25, 10, 0],
        rotate: [0, 10, -10, 0],
        x: [0, 10, -10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
