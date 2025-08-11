import { useState } from "react";
import { ChevronLeft, ChevronRight, Image } from "lucide-react";

const galleryImages = [
  {
    src: "/images/emilyfr2.jpeg",
    alt: "Emily en competencia internacional",
    caption: "Emily en competencia internacional",
  },
  {
    src: "/images/1.jpg",
    alt: "Competencias 2024 - Patinaje de Velocidad",
    caption: "Competencias 2024 - Patinaje de Velocidad",
  },
  {
    src: "/images/2.jpg",
    alt: "Resultados de competencias 2024",
    caption: "Resultados de competencias 2024",
  },
];

export default function Galeria() {
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c === 0 ? galleryImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === galleryImages.length - 1 ? 0 : c + 1));

  return (
    <section id="galeria" className="max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Image className="text-blue-400" size={32} />
        Galería
      </h2>
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-white/10">
        {/* Slides */}
        {galleryImages.map((img, idx) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
            aria-hidden={idx !== current}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-72 sm:h-96 object-cover"
              style={{ backgroundPosition: "50%" }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white z-20">
              <h5 className="text-lg font-semibold drop-shadow">{img.caption}</h5>
            </div>
          </div>
        ))}
        {/* Navigation */}
        <button
          className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 text-white/80 hover:text-white transition z-20"
          onClick={prev}
          aria-label="Anterior"
          type="button"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-12 text-white/80 hover:text-white transition z-20"
          onClick={next}
          aria-label="Siguiente"
          type="button"
        >
          <ChevronRight size={32} />
        </button>
        {/* Indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Ir a la imagen ${idx + 1}`}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${current === idx ? "bg-white opacity-80" : "bg-white/50 opacity-50"}`}
              style={{ border: "none" }}
            />
          ))}
        </div>
      </div>
      <p className="text-white/60 text-center mt-6">Recuerdos de mi carrera deportiva y competencias.</p>
    </section>
  );
}