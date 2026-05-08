import FloatingShape from "./FloatingShape";

export default function HeroCanvas() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* dotted texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9b6b6_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

      {/* floating filled shapes */}
      <FloatingShape className="top-28 left-24 w-48 h-48 bg-[#E88D8D] rounded-b-full" />

      <FloatingShape className="top-24 right-32 w-40 h-40 bg-[#E5A55C] rounded-full" />

      <FloatingShape className="bottom-24 left-36 w-44 h-44 bg-[#B59ACD] rounded-tr-full" />

      <FloatingShape className="bottom-28 right-28 w-52 h-52 bg-[#7B8794] rounded-tl-full" />

      {/* top-left closed dashed arc */}
      <svg
        className="absolute -top-18 left-16 w-52 h-52 opacity-50"
        viewBox="0 0 200 200"
      >
        <path
          d="M40 120 A60 60 0 1 1 160 120 L40 120"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55 120 A45 45 0 1 1 145 120 L55 120"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
      </svg>

      {/* right orange closed shape */}
      <svg
        className="absolute top-[38%] right-20 w-44 h-44 opacity-70 rotate-[25deg]"
        viewBox="0 0 200 200"
      >
        <path
          d="M60 50 A70 70 0 1 0 150 150 L60 50"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="7 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* bottom-left pink closed shape */}
      <svg
        className="absolute bottom-28 left-16 w-40 h-40 opacity-60 rotate-[15deg]"
        viewBox="0 0 200 200"
      >
        <path
          d="M60 50 A70 70 0 1 0 150 150 L60 50"
          fill="none"
          stroke="#f9a8d4"
          strokeWidth="2"
          strokeDasharray="3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* bottom-center lavender closed shape */}
      <svg
        className="absolute bottom-20 left-[38%] w-40 h-40 opacity-50 -rotate-[20deg]"
        viewBox="0 0 200 200"
      >
        <path
          d="M60 50 A70 70 0 1 0 150 150 L60 50"
          fill="none"
          stroke="#d8b4fe"
          strokeWidth="2"
          strokeDasharray="7 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* bottom-right thin circle */}
      <div className="absolute bottom-36 right-72 w-28 h-28 border border-slate-300 rounded-full opacity-30" />
      {/* content */}
      <div className="max-w-2xl text-center relative z-10">
        <p className="mb-6 text-lg text-slate-700 font-medium">
          Hello there! 👋
        </p>

        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8">
          Swati HD
        </h1>

        <p className="text-xl md:text-2xl leading-10 text-slate-700 max-w-xl mx-auto">
          Frontend Developer building responsive web applications with React,
          Tailwind CSS, animations, and AI-powered workflows.
        </p>
      </div>
    </section>
  );
}
