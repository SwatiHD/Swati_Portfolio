export default function About({ mode }) {
  return (
    <section id="about" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-10">About</h2>
      <div className="bg-black border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(139,92,246,0.08)] hover:border-purple-500/40 transition-all duration-300">
        <p className="text-slate-300 leading-8 text-lg">
          I enjoy building applications that solve real-world problems. I mainly
          work with
          <span className="text-cyan-400">
            {" "}
            React, Node.js, Express.js, MongoDB, JavaScript, TypeScript{" "}
          </span>{" "}
          and I'm always excited to learn new technologies and keep improving my
          skills. I do build everything from responsive user interfaces to
          secure backend APIs. Over the past three years, I've worked on
          <br />
          <span className="text-blue-400 font-medium">
            {" "}
            ERP systems, Cloud based telecom dashboards, and marketplace
            platforms.
          </span>{" "}
          One thing I've learned is that great applications start with clear
          thinking before writing a single line of code. I care about clean
          architecture, reusable components, scalable APIs, performance, and
          writing code that's easy for the next developer to understand and
          maintain. Recently, I have also learned to use AI tools like Cursor to
          speed up repetitive tasks so I can spend more time solving problems,
          designing better systems, and building quality software.
        </p>

        <p className="mt-6 text-slate-400 leading-8 text-lg">
          Passionate about{" "}
          <span className="text-purple-400">full-stack development</span>,{" "}
          <span className="text-cyan-400">scalable system design,</span>{" "}
          <span className="text-pink-400">API development,</span>{" "}
          <span className="text-teal-400">performance optimization,</span>{" "}
          <span className="text-blue-400">clean code,</span> and{" "}
          <span className="text-cyan-400">continuous learning.</span>
        </p>
      </div>
    </section>
  );
}
