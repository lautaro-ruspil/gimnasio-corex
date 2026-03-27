import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contacto" className="bg-[#111111] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl uppercase text-white">
            CONTACTO
          </h2>
          <div className="w-16 h-1 bg-red-500 mt-2 mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <input
                {...register("nombre", { required: "El nombre es obligatorio" })}
                placeholder="Tu nombre"
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-neutral-100 placeholder-neutral-600 focus:border-red-500 focus:outline-none transition-colors"
              />
              {errors.nombre && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.nombre.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email inválido",
                  },
                })}
                placeholder="Tu email"
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-neutral-100 placeholder-neutral-600 focus:border-red-500 focus:outline-none transition-colors"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("telefono")}
                placeholder="Tu teléfono (opcional)"
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-neutral-100 placeholder-neutral-600 focus:border-red-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                {...register("mensaje", {
                  required: "El mensaje es obligatorio",
                })}
                placeholder="Tu mensaje"
                rows={4}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-neutral-100 placeholder-neutral-600 focus:border-red-500 focus:outline-none transition-colors resize-none"
              />
              {errors.mensaje && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.mensaje.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 font-semibold transition-colors"
            >
              Enviar consulta
            </button>

            {submitted && (
              <p className="text-green-400 text-sm text-center">
                ¡Mensaje enviado con éxito! Te responderemos pronto.
              </p>
            )}
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3 text-neutral-300">
              <MapPin className="text-red-500 shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-white">Dirección</p>
                <p className="text-sm text-neutral-400">
                  Av. Avellaneda esquina Moya, Olavarría, Buenos Aires
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-neutral-300">
              <Clock className="text-red-500 shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-white">Horarios</p>
                <p className="text-sm text-neutral-400">
                  Lunes a Viernes 07:00–22:00 hs
                </p>
                <p className="text-sm text-neutral-400">
                  Sábado 08:00–13:00 hs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-neutral-300">
              <svg className="text-red-500 shrink-0 mt-1 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <div>
                <p className="font-semibold text-white">Instagram</p>
                <a
                  href="https://instagram.com/corex_olav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-red-400 transition-colors"
                >
                  @corex_olav
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/5492284000000?text=Hola%20CoreX!%20Quiero%20m%C3%A1s%20info"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white rounded-xl py-4 font-semibold transition-colors"
            >
              <MessageCircle size={20} />
              Escribinos por WhatsApp
            </a>

            <div className="rounded-xl overflow-hidden border border-[#2a2a2a]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5!2d-60.3316!3d-36.8930!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2ce1695ee1c71%3A0x0!2sAv.+Avellaneda+%26+Moya%2C+Olavarr%C3%ADa!5e0!3m2!1ses-419!2sar!4v1700000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación CoreX Gimnasio"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
