const skills = [
  "React",
  "Node.js",
  "Express",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "REST APIs",
  "Git",
  "AWS",
  "AI Integration",
  "Jest",
  "React Testing Library",
  "Docker",
  "Kubernetes",
  "SQL",
];

export default function Skills({ mode }) {
  return (
    <section id="skills" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-10">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-teal-400/10 text-teal-300 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
