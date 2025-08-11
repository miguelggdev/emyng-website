import { Image } from "lucide-react";

export default function Galeria() {
  return (
    <section id="galeria" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Image className="text-blue-400" size={32} />
        Galería
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Espacios para fotos */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-full aspect-square bg-white/10 rounded-xl flex items-center justify-center border-2 border-dashed border-[#8b5cf6]"
          >
            <span className="text-white/60">Foto {i}</span>
          </div>
        ))}
      </div>
      <p className="text-white/60 text-center mt-6">Próximamente más fotos y recuerdos de mi carrera deportiva.</p>
    </section>
  );
}