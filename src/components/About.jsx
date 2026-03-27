import { motion } from "framer-motion";
import { Shield, Heart, TrendingUp } from "lucide-react";

const values = [
  { icon: Shield, label: "Confianza — Un espacio seguro para entrenar" },
  { icon: Heart, label: "Comunidad — Te acompañamos en cada paso" },
  { icon: TrendingUp, label: "Progreso — Resultados reales y constantes" },
];

const stats = [
  { number: "+5", label: "Años en Olavarría" },
  { number: "6", label: "Días a la semana" },
  { number: "3", label: "Disciplinas principales" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-red-500 font-mono text-sm tracking-widest mb-4">
            SOBRE NOSOTROS
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl uppercase text-white leading-tight">
            UN ESPACIO SERIO PARA ENTRENAR EN SERIO
          </h2>
          <div className="w-16 h-1 bg-red-500 mt-2 mb-8" />

          <p className="text-neutral-400 leading-relaxed mb-4">
            CoreX nació en Olavarría con una idea clara: ofrecer un gimnasio
            completo, bien equipado y con un ambiente que motive. No importa si
            recién arrancás o si entrenás hace años, acá vas a encontrar lo que
            necesitás para avanzar.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Con más de 5 años en la ciudad, nos convertimos en un punto de
            referencia para quienes buscan musculación, fitness y circuitos
            funcionales con seriedad y compromiso.
          </p>

          <ul className="space-y-3">
            {values.map((v) => (
              <li key={v.label} className="flex items-center gap-3 text-neutral-300">
                <v.icon className="text-red-500 shrink-0" size={20} />
                <span className="text-sm">{v.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#1a1a1a] border-l-4 border-red-500 rounded-r-xl p-6"
            >
              <span className="font-[family-name:var(--font-display)] text-5xl text-red-500">
                {s.number}
              </span>
              <p className="text-neutral-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
