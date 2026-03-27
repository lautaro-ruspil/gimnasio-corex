import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl uppercase text-white">
            LO QUE DICEN
          </h2>
          <div className="w-16 h-1 bg-red-500 mt-2 mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 relative"
            >
              <span className="absolute top-4 left-6 text-red-500/30 text-6xl font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="text-neutral-300 leading-relaxed mt-8 mb-6">
                {t.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-neutral-500 text-sm">{t.description}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="text-orange-400 fill-orange-400"
                      size={14}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
