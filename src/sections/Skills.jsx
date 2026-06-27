import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJest,
  SiTestinglibrary,
  SiKubernetes,
  SiMysql,
  SiOpenai,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "REST APIs", icon: "🔗" },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "AI Integration", icon: <SiOpenai /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "React Testing Library", icon: <SiTestinglibrary /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "SQL", icon: <SiMysql /> },
];

export default function Skills({ mode }) {
  return (
    <section id="skills" className="mb-32 scroll-mt-20">
      <h2 className="text-3xl font-bold text-white mb-10">
        Skills & Technologies
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{
              y: -10,
              scale: 1.06,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="
      group
      relative
      bg-slate-800/50
      border border-slate-700
      rounded-xl
      p-6
      flex flex-col
      items-center
      justify-center
      overflow-hidden
      cursor-pointer
      "
          >
            <div
              className="
        absolute
        inset-0
        bg-gradient-to-br
        from-teal-400/10
        via-cyan-400/5
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        "
            />

            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.2,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-5xl text-teal-400 mb-4 relative z-10"
            >
              {skill.icon}
            </motion.div>

            <p className="text-gray-300 text-center relative z-10">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
