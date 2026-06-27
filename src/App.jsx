import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroCanvas from "./components/HeroCanvas.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import Featured from "./sections/Featured.jsx";
import Contact from "./sections/Contact.jsx";
import WeatherEffects from "./components/WeatherEffects.jsx";
function App() {
  const [mode, setMode] = useState(0);

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      <Navbar mode={mode} setMode={setMode} />

      <WeatherEffects mode={mode} />
      <HeroCanvas />
      <About mode={mode} />
      <Experience mpde={mode} />
      <Skills mode={mode} />
      <Featured mode={mode} />
      <Contact mode={mode} />
    </div>
  );
}
export default App;
