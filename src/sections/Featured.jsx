const features = [
  {
    title: "AI Resume Analyzer",
    desc: "Built an AI-assisted resume optimization platform using React and OpenAI APIs.",
  },
  {
    title: "Reusable UI Component System",
    desc: "Created scalable reusable frontend components with Tailwind CSS.",
  },
  {
    title: "Frontend Performance Optimization",
    desc: "Reduced render time and improved UI responsiveness using lazy loading and memoization.",
  },
];

export default function Featured() {
  return (
    <section id="featured" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-10">Featured Work</h2>

      <div className="space-y-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.5)] p-8 md:p-12 hover:border-purple-500/30 transition-all duration-300"
          >
            <h3 className="text-xl text-white">{item.title}</h3>

            <p className="mt-4 leading-7 text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
