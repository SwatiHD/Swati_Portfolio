import { FaGithub } from "react-icons/fa";

const features = [
  {
    title: "AI Resume JD Matcher",
    desc: "Built a full AI-powered resume analysis tool — users drop in their resume and a job description, and get back ATS scores, keyword gaps, and rewrite suggestions. Wired up OpenAI APIs, file uploads, and real-time result rendering from scratch.",
    techstack: ["React", "JavaScript", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/SwatiHD/AI_Resume-JD_Matcher",
  },
  {
    title: "Secured Webhook System",
    desc: "Designed and developed a secure webhook communication system with HMAC authentication, event-driven architecture, and retry mechanisms, demonstrating real-world service-to-service communication patterns used by modern platforms and payment gateways.",
    techstack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "HMAC SHA256",
      "JavaScript",
    ],
    github: "https://github.com/SwatiHD/WebHookProject",
  },
  {
    title: "Performance Overhaul — ERP Task Dashboard",
    desc: "The dashboard was choking on 1,000+ task records. Diagnosed the bottleneck, applied lazy loading, memoization, and pagination — brought render time down ~30% without touching the data layer. One of those fixes that's invisible when it works, which is exactly the point.",
    techstack: [
      "React",
      "Node.js",
      "Express",
      "SQL",
      "JavaScript",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
];

export default function Featured({ mode }) {
  return (
    <section id="featured" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-10">Featured Work</h2>

      <div className="space-y-8">
        {features.map((item, index) => (
          <div
            key={index}
            className={`
    bg-black/50
    backdrop-blur-xl
    border
    rounded-[32px]
    p-8
    md:p-12
    transition-all
    duration-700
    ${
      mode === 1
        ? "border-yellow-400/20 shadow-[0_0_45px_rgba(255,200,90,.08)]"
        : mode === 2
          ? "border-cyan-400/20 shadow-[0_0_45px_rgba(100,180,255,.08)]"
          : mode === 3
            ? "border-white/20 shadow-[0_0_45px_rgba(255,255,255,.06)]"
            : "border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
    }
    hover:border-purple-500/30
  `}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl text-white font-medium">{item.title}</h3>

              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition duration-300"
                aria-label="View GitHub Repository"
              >
                <FaGithub size={24} />
              </a>
            </div>

            <p className="mt-4 leading-7 text-slate-400">{item.desc}</p>
            <p className="mt-4 text-sm text-teal-300">
              Tech stack: {item.techstack ? item.techstack.join(", ") : "N/A"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
