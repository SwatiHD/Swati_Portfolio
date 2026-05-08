export default function About() {
  return (
    <section id="about" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-10">About</h2>
      <div className="bg-black border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(139,92,246,0.08)] hover:border-purple-500/40 transition-all duration-300">
        <p className="text-slate-300 leading-8 text-lg">
          Frontend developer with experience building enterprise-grade
          applications using{" "}
          <span className="text-white font-medium">
            React, JavaScript, REST APIs, and Tailwind CSS
          </span>
          .
        </p>

        <p className="mt-6 text-slate-400 leading-8 text-lg">
          Passionate about <span className="text-purple-400">UI systems</span>,{" "}
          <span className="text-cyan-400">accessibility</span>,{" "}
          <span className="text-pink-400">animations</span>, and{" "}
          <span className="text-white">AI-powered frontend workflows</span>.
        </p>
      </div>
    </section>
  );
}
