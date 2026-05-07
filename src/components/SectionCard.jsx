import { motion } from "framer-motion";

export default function SectionCard({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="bg-white/50 backdrop-blur-md border border-white/40 rounded-[32px] shadow-sm p-8 md:p-12"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800">
        {title}
      </h2>

      <div className="text-slate-700 leading-8">{children}</div>
    </motion.section>
  );
}
