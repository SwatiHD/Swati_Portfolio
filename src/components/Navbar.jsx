export default function Navbar() {
  const links = ["About", "Experience", "Skills", "Featured", "Contact"];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
      <nav className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full px-8 py-4">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link} className="relative group">
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-cyan-200 hover:text-pink-300 transition-all duration-300"
              >
                {link}
              </a>

              {/* animated underline */}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
