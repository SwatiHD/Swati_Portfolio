export default function About() {
  return (
    <section id="about" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-10">About</h2>
      <div className="bg-black border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(139,92,246,0.08)] hover:border-purple-500/40 transition-all duration-300">
        <p className="text-slate-300 leading-8 text-lg">
          I build frontend products people actually enjoy using. Three years in,
          I've worked on
          <span className="text-cyan-400">
            {" "}
            ERP tools, telecom dashboards, and marketplace platforms -{" "}
          </span>{" "}
          and what I keep coming back to is the same thing: good UI is mostly
          about thinking clearly before you write a single line of code.
          <br />
          <span className="text-blue-400 font-medium"> My stack is - </span>
          <span className="text-purple-400">
            React, Next.js,TypeScript, and, Node.js
          </span>{" "}
          I care a lot about component design, keeping renders fast, and not
          leaving a mess for the next engineer. Lately I've been using AI tools
          like Cursor day-to-day — not as a shortcut, but as a way to move
          faster on the boring stuff so I can focus on the parts that actually
          need thinking. .
        </p>

        <p className="mt-6 text-slate-400 leading-8 text-lg">
          Passionate about <span className="text-purple-400">UI systems</span>,{" "}
          <span className="text-cyan-400">accessibility</span>,{" "}
          <span className="text-pink-400">animations</span>, and{" "}
          <span className="text-blue-400">AI-powered frontend workflows</span>.
        </p>
      </div>
    </section>
  );
}
