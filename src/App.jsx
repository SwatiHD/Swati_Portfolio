import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroCanvas from "./components/HeroCanvas.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import Featured from "./sections/Featured.jsx";
import Contact from "./sections/Contact.jsx";
function App() {
  const [mode, setMode] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar mode={mode} setMode={setMode} />

      <HeroCanvas />

      <main className="relative z-20 max-w-4xl mx-auto px-6 py-32 space-y-40">
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
