export default function Navbar() {
  const links = ["About", "Experience", "Skills", "Featured", "Contact"];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm rounded-full px-8 py-4">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-700 hover:text-pink-500 transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
