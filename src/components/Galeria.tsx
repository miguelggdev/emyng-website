import { useState } from "react";
import { Image, ChevronLeft, ChevronRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const galleryImages = [
  { src: "/images/emilyfr2.jpeg", alt: "Emily en competencia internacional" },
  { src: "/images/emynskate.jpeg", alt: "Emily patinando" },
  { src: "/images/20250509_083812.jpg", alt: "Emily en entrenamiento" },
  { src: "/images/image1emyng.jpeg", alt: "Emily sonriendo" },
  { src: "/images/imag1.jpeg", alt: "Emily en la pista" },
  { src: "/images/imag2.jpeg", alt: "Emily en acción" },
  { src: "/images/imag3.jpeg", alt: "Emily en carrera" },
  { src: "/images/imag4.jpeg", alt: "Emily en el podio" },
  { src: "/images/imag5.jpeg", alt: "Emily con su equipo" },
  { src: "/images/imag6.jpeg", alt: "Emily celebrando" },
  { src: "/images/imag7.jpeg", alt: "Emily en un evento" },
  { src: "/images/imag8.jpeg", alt: "Emily con medalla" },
  { src: "/images/imag9.jpeg", alt: "Emily en primer plano" },
  { src: "/images/imag10.jpeg", alt: "Emily en la línea de meta" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.28 AM.jpeg", alt: "Emily en pista" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.36 AM.jpeg", alt: "Emily en competencia" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.39 AM (1).jpeg", alt: "Emily en carrera" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.40 AM (1).jpeg", alt: "Emily en el evento" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.40 AM (2).jpeg", alt: "Emily en el podio" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.42 AM.jpeg", alt: "Emily con su entrenador" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.43 AM.jpeg", alt: "Emily en la salida" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.48 AM.jpeg", alt: "Emily en la meta" },
  { src: "/images/WhatsApp Image 2025-09-17 at 10.09.50 AM (1).jpeg", alt: "Emily con su familia" },
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
      className={`max-w-3xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Image className="text-blue-400" size={32} />
        Galería
      </h2>
      <div className="relative w-full max-w-xl mx-auto h-80 sm:h-96 rounded-lg overflow-hidden shadow-lg border-2 border-white/20">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full h-full object-cover"
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