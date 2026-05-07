import HeroCanvas from "./components/HeroCanvas";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Featured from "./sections/Featured";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-800 overflow-x-hidden">
      <Navbar />
      <HeroCanvas />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-32 space-y-40">
        <About />
        <Experience />
        <Skills />
        <Featured />
        <Contact />
      </main>
    </div>
  );
}

export default App;
