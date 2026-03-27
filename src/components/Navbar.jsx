import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#inicio">
          <img
            src="/corex-logo-navbar.png"
            alt="CoreX Gimnasio"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-red-500 hover:bg-red-600 text-white rounded-full px-5 py-2 text-sm font-semibold transition-colors"
          >
            Empezá hoy
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#2a2a2a] px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center bg-red-500 hover:bg-red-600 text-white rounded-full px-5 py-2 text-sm font-semibold transition-colors"
          >
            Empezá hoy
          </a>
        </div>
      )}
    </nav>
  );
}
