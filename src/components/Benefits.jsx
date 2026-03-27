import { motion } from "framer-motion";
import { Clock, Dumbbell, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Horarios amplios",
    description: "De 7 a 22hs de lunes a viernes",
  },
  {
    icon: Dumbbell,
    title: "Equipamiento completo",
    description: "Máquinas y pesas para todos los niveles",
  },
  {
    icon: Users,
    title: "Comunidad CoreX",
    description: "Un ambiente que te impulsa a dar más",
  },
  {
    icon: TrendingUp,
    title: "Progreso real",
    description: "Seguimiento y guía en cada etapa",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#111111] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl uppercase text-white">
            POR QUÉ COREX
          </h2>
          <div className="w-16 h-1 bg-red-500 mt-2 mb-8" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-red-500/30 transition-colors"
            >
              <b.icon className="text-red-500 mb-4" size={28} />
              <h3 className="text-white font-semibold mb-1">{b.title}</h3>
              <p className="text-neutral-500 text-sm">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
