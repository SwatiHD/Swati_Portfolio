import { useState } from "react";
import { FaPalette, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

export default function Navbar({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  const links = ["About", "Experience", "Skills", "Featured", "Contact"];

  const cycleMode = () => {
    setMode((prev) => (prev + 1) % 4);
  };

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">

        {/* Desktop Navbar */}
        <nav className="hidden md:block bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-cyan-200 text-sm hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaTimes className="text-cyan-300 text-lg" />
          ) : (
            <FaBars className="text-cyan-300 text-lg" />
          )}
        </button>

        {/* Weather Button */}
        <button
          onClick={cycleMode}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:scale-110 transition"
        >
          <FaPalette className="text-cyan-300 text-lg md:text-xl" />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-black/80 backdrop-blur-xl rounded-3xl border border-white/10 transition-all duration-300 z-40 md:hidden ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center py-6 gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-cyan-200 text-lg hover:text-white transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}