import { FaPalette } from "react-icons/fa";

export default function Navbar({ mode, setMode }) {
  const links = ["About", "Experience", "Skills", "Featured", "Contact"];

  const cycleMode = () => {
    setMode((prev) => (prev + 1) % 5);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      <nav className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-cyan-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={cycleMode}
        className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center"
      >
        <FaPalette className="text-cyan-300 text-xl" />
      </button>
    </header>
  );
}
