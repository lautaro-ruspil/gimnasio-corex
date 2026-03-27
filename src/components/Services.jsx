import { motion } from "framer-motion";
import { Dumbbell, Heart, Zap } from "lucide-react";
import { services } from "../data/services";

const iconMap = { Dumbbell, Heart, Zap };

export default function Services() {
  return (
    <section id="servicios" className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl uppercase text-white">
            SERVICIOS
          </h2>
          <div className="w-16 h-1 bg-red-500 mt-2 mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] border-l-4 border-red-500 rounded-xl overflow-hidden"
              >
                <div className="relative h-56">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    {Icon && <Icon className="text-red-500" size={22} />}
                    <span className="text-white font-semibold text-lg">
                      {s.name}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
