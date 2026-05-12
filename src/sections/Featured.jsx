const features = [
  {
    title: "AI Resume JD Matcher",
    desc: "Built a full AI-powered resume analysis tool — users drop in their resume and a job description, and get back ATS scores, keyword gaps, and rewrite suggestions. Wired up OpenAI APIs, file uploads, and real-time result rendering from scratch.",
  },
  {
    title: "Gantt Chart Library Research & Recommendation",
    desc: "Evaluated multiple React Gantt libraries and made the call to go with SVAR — saved the team weeks of building custom drag-and-drop and dependency logic. The recommendation stuck and became the foundation of the entire MS Project-style planning module we shipped.",
  },
  {
    title: "Performance Overhaul — ERP Task Dashboard",
    desc: "The dashboard was choking on 1,000+ task records. Diagnosed the bottleneck, applied lazy loading, memoization, and pagination — brought render time down ~30% without touching the data layer. One of those fixes that's invisible when it works, which is exactly the point.",
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
