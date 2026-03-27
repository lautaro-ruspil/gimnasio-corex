import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600",
  "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=600",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600",
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-[#111111] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl uppercase text-white">
            GALERÍA
          </h2>
          <div className="w-16 h-1 bg-red-500 mt-2 mb-8" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0
                  ? "col-span-2 row-span-2 min-h-[300px]"
                  : "h-48 md:h-56"
              }`}
            >
              <img
                src={src}
                alt={`CoreX Gimnasio ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
