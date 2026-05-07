import FloatingShape from "./FloatingShape";

export default function HeroCanvas() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <FloatingShape className="top-20 left-20 w-40 h-40 bg-pink-300 rounded-b-full" />

      <FloatingShape className="top-32 right-32 w-36 h-36 bg-orange-300 rounded-full" />

      <FloatingShape className="bottom-24 left-40 w-44 h-44 bg-purple-300 rounded-tr-full" />

      <FloatingShape className="bottom-32 right-20 w-52 h-52 bg-slate-400 rounded-tl-full" />

      <div className="max-w-xl text-center z-10 px-6">
        <p className="mb-6 text-lg text-olive-300">Hello there!</p>

        <h1 className="text-6xl font-bold text-olive-300 mb-8">Swati HD</h1>

        <p className="text-xl leading-9 text-olive-300">
          Frontend Developer building responsive web applications with React,
          Tailwind CSS and AI-powered workflows.
        </p>
      </div>
    </section>
  );
}
