import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { plans } from "../data/plans";

export default function Plans() {
  return (
    <section id="planes" className="bg-[#111111] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl uppercase text-white">
            PLANES
          </h2>
          <div className="w-16 h-1 bg-red-500 mt-2 mb-8" />
          <p className="text-neutral-400 mb-10 max-w-lg">
            Precios accesibles para que no haya excusas. Consultanos por
            WhatsApp y te asesoramos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-[#1a1a1a] rounded-2xl p-6 flex flex-col ${
                plan.highlight
                  ? "border-2 border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.15)]"
                  : "border border-[#2a2a2a]"
              }`}
            >
              {plan.badge && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs rounded-full px-3 py-1 font-semibold">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-white">
                {plan.name}
              </h3>
              <p className="text-neutral-500 text-sm">{plan.duration}</p>
              <p className="text-red-400 text-lg font-semibold mt-4">
                Consultá el precio
              </p>

              <ul className="mt-5 space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-neutral-300 text-sm"
                  >
                    <Check className="text-red-500 shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5492284000000?text=${encodeURIComponent(
                  `Hola! Me interesa el ${plan.name} de CoreX Gimnasio`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 text-sm font-semibold transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
