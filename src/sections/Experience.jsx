const jobs = [
  {
    year: "2025",
    title: "Software Engineer",
    company: "ACTouch Technologies",
    desc: "Owned the frontend for ACTouch's ERP planning module — built a Gantt chart with task dependencies and hierarchy from scratch, then spent a lot of time making it actually usable at scale. Got rendering performance up ~30% for 1,000+ task views using memoization, lazy loading, and pagination. Also used AI tools like Cursor throughout to move faster and debug smarter.",
  },
  {
    year: "2024",
    title: "Business Analyst Intern - Frontend Focus",
    company: "BACentric Solutions & Kitaabh Technologies",
    desc: "Worked between product and engineering — took business requirements and turned them into specs developers could actually build from. Helped avoid a lot of back-and-forth by thinking through edge cases and UI behavior upfront, before things got built the wrong way.",
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "Harlalka services India Pvt Ltd",
    desc: "Built 15+ UI modules for an enterprise marketplace using React, Next.js, and TypeScript. Set up a shared component system for search, filters, and listing pages that cut redundant work by ~30%. Also handled Redux, REST APIs, accessibility, and kept production bugs down ~20% through proper debugging habits.",
  },
  {
    year: "2020 — 2023",
    title: "Graduate Trainee Engineer",
    company: "Huawei Technologies",
    desc: "Spent 3 years building and maintaining frontend modules for cloud-based telecom monitoring systems in React and JavaScript. Dug deep into component lifecycle and async data flows to ship reliable dashboard features, tightened form validation logic that cut invalid submissions by ~35%, and used SQL to validate data end-to-end — from API response to what actually renders on screen.",
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
            className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.5)] p-8 md:p-12 hover:border-purple-500/30 transition-all duration-300"
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
