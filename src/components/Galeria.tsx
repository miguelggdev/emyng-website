import { Image } from "lucide-react";

const galleryImages = [
  {
    src: "/images/emilyfr2.jpeg",
    alt: "Emily en competencia internacional",
  },
  {
    src: "/images/1.jpg",
    alt: "Competencias 2024 - Patinaje de Velocidad",
  },
  {
    src: "/images/2.jpg",
    alt: "Resultados de competencias 2024",
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Image className="text-blue-400" size={32} />
        Galería
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="w-full aspect-square bg-white/10 rounded-xl flex items-center justify-center border-2 border-[#8b5cf6] overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
        {/* Espacio para futuras fotos */}
        <div className="w-full aspect-square bg-white/10 rounded-xl flex items-center justify-center border-2 border-dashed border-[#8b5cf6]">
          <span className="text-white/60">Próximamente más fotos</span>
        </div>
      </div>
      <p className="text-white/60 text-center mt-6">Recuerdos de mi carrera deportiva y competencias.</p>
    </section>
  );
}