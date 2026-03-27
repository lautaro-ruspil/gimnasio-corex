const InstagramIcon = () => (
    <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const sectionLinks = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Planes", href: "#planes" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <a href="#inicio">
                        <img
                            src="/corex-logo-navbar.png"
                            alt="CoreX Gimnasio"
                            className="h-12 md:h-14 w-auto"
                        />
                    </a>
                    <p className="text-neutral-500 text-sm mt-2">
                        Fitness y musculación en el corazón de Olavarría.
                    </p>
                    <a
                        href="https://instagram.com/corex_olav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-red-400 text-sm mt-3 transition-colors"
                    >
                        <InstagramIcon />
                        @corex_olav
                    </a>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-semibold mb-3 text-sm">
                        Links rápidos
                    </h4>
                    <ul className="space-y-2">
                        {sectionLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-neutral-500 hover:text-white text-sm transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="text-white font-semibold mb-3 text-sm">
                        Horarios
                    </h4>
                    <p className="text-neutral-500 text-sm">
                        Lunes a Viernes: 07:00–22:00 hs
                    </p>
                    <p className="text-neutral-500 text-sm">
                        Sábado: 08:00–13:00 hs
                    </p>
                    <p className="text-neutral-500 text-sm mt-2">
                        Av. Avellaneda esq. Moya, Olavarría
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-2">
                <p className="text-neutral-600 text-xs">
                    © 2025 CoreX Gimnasio · Olavarría, Buenos Aires
                </p>
                <p className="text-neutral-600 text-xs">
                    Desarrollado por{" "}
                    <a
                        href="#"
                        className="hover:text-neutral-400 transition-colors"
                    >
                        Lautaro Ruspil
                    </a>
                </p>
            </div>
        </footer>
    );
}
