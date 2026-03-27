import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600)",
        }}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 pt-20"
      >
        <p className="text-red-500 font-mono text-sm tracking-widest mb-6">
          OLAVARRÍA, BUENOS AIRES
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-7xl md:text-9xl text-white uppercase leading-none">
          ENTRENÁ
        </h1>
        <h1 className="font-[family-name:var(--font-display)] text-7xl md:text-9xl text-red-500 uppercase leading-none">
          EN SERIO
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl mt-6 max-w-xl mx-auto">
          CoreX – Fitness y musculación en el corazón de Olavarría
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 mb-8">
          <a
            href="#contacto"
            className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-4 font-semibold transition-colors"
          >
            Empezá hoy
          </a>
          <a
            href="#planes"
            className="border border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 transition-colors"
          >
            Ver planes
          </a>
          <a
            href="https://maps.google.com/?q=Av+Avellaneda+y+Moya+Olavarria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm transition-colors"
          >
            <MapPin size={16} />
            Cómo llegar
          </a>
        </div>
      </motion.div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-center divide-x divide-white/20 py-4 px-6 text-sm text-neutral-400">
          <span className="px-6 text-center">07:00 AM · Abre temprano</span>
          <span className="px-6 text-center">+5 años · De experiencia</span>
          <span className="px-6 text-center">Lun–Sáb · 6 días a la semana</span>
        </div>
      </div>
    </section>
  );
}
