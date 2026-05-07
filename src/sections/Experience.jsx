const jobs = [
  {
    year: "2025 — PRESENT",
    title: "Frontend Developer",
    company: "Freelance + AI Projects",
    desc: "Built responsive UI applications using React, Tailwind CSS, API integrations, and AI-assisted workflows.",
  },
  {
    year: "2023 — 2025",
    title: "Business Analyst",
    company: "APT IT Solutions",
    desc: "Worked on requirement analysis, workflows, client communication, and UI improvement initiatives.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-10">Experience</h2>

      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="group border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/30 transition"
          >
            <p className="text-sm text-slate-500">{job.year}</p>

            <h3 className="text-xl text-white mt-2">{job.title}</h3>

            <p className="text-teal-300 mt-1">{job.company}</p>

            <p className="mt-4 leading-7 text-slate-400">{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
