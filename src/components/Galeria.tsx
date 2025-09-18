import { useState } from "react";
import { Image, ChevronLeft, ChevronRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const galleryImages = [
  { src: "/images/emilyfr2.jpeg", alt: "Emily en competencia internacional", orientation: "vertical" },
  { src: "/images/emynskate.jpeg", alt: "Emily patinando", orientation: "vertical" },
  { src: "/images/20250509_083812.jpg", alt: "Emily en entrenamiento", orientation: "vertical" },
  { src: "/images/image1emyng.jpeg", alt: "Emily sonriendo", orientation: "vertical" },
  { src: "/images/imag1.jpeg", alt: "Emily en la pista", orientation: "horizontal" },
  { src: "/images/imag2.jpeg", alt: "Emily en acción", orientation: "horizontal" },
  { src: "/images/imag3.jpeg", alt: "Emily en carrera", orientation: "vertical" },
  { src: "/images/imag4.jpeg", alt: "Emily en el podio", orientation: "vertical" }, // Ajustado a vertical para object-contain
  { src: "/images/imag5.jpeg", alt: "Emily con su equipo", orientation: "vertical" }, // Ajustado a vertical para object-contain
  { src: "/images/imag6.jpeg", alt: "Emily celebrando", orientation: "horizontal" },
  { src: "/images/imag7.jpeg", alt: "Emily en un evento", orientation: "horizontal" },
  { src: "/images/imag8.jpeg", alt: "Emily con medalla", orientation: "vertical" }, // Ajustado a vertical para object-contain
  { src: "/images/imag9.jpeg", alt: "Emily en primer plano", orientation: "horizontal" },
  { src: "/images/imag10.jpeg", alt: "Emily en la línea de meta", orientation: "vertical" }, // Ajustado a vertical para object-contain
  { src: "/images/imag11.jpeg", alt: "Emily en competencia", orientation: "vertical" }, // Ajustado a vertical para object-contain
  { src: "/images/imag12.jpeg", alt: "Emily en la pista", orientation: "vertical" }, // Ajustado a vertical para object-contain
  { src: "/images/imag14.jpeg", alt: "Emily en carrera", orientation: "horizontal" },
  { src: "/images/imag15.jpeg", alt: "Emily en el podio", orientation: "horizontal" },
  { src: "/images/imag16.jpeg", alt: "Emily celebrando", orientation: "horizontal" },
  { src: "/images/imag17.jpeg", alt: "Emily en un evento", orientation: "horizontal" },
  { src: "/images/imag18.jpeg", alt: "Emily con medalla", orientation: "horizontal" },
  { src: "/images/emyng_guarne.jpeg", alt: "Emily en Guarne", orientation: "horizontal" },
  { src: "/images/salida_patinando.jpeg", alt: "Emily saliendo a patinar", orientation: "horizontal" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.28 AM.jpeg", alt: "Emily en pista", orientation: "horizontal" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.50 AM (1).jpeg", alt: "Emily con su familia", orientation: "horizontal" },
];

export default function Galeria() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, inView } = useInViewAnimation();

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = galleryImages[currentImageIndex];

  return (
    <section
      ref={ref}
      id="galeria"
      className={`max-w-5xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Image className="text-blue-400" size={32} />
        Galería
      </h2>
      <div className="relative w-full max-w-3xl mx-auto h-80 sm:h-96 rounded-lg overflow-hidden shadow-lg border-2 border-white/20 bg-black">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className={currentImage.orientation === 'vertical' ? 'w-full h-full object-contain' : 'w-full h-full object-cover'}
        />
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Imagen anterior"
          type="button"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Imagen siguiente"
          type="button"
        >
          <ChevronRight size={28} />
        </button>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white/90 text-sm bg-black/50 py-1 px-2">
          {currentImage.alt} ({currentImageIndex + 1} de {galleryImages.length})
        </div>
      </div>
      <p className="text-white/60 text-center mt-6">Recuerdos de mi carrera deportiva y competencias.</p>
    </section>
  );
}