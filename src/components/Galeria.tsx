import { useState } from "react";
import { Image } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import GalleryModal from "@/components/GalleryModal"; // Importar el nuevo componente

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
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, inView } = useInViewAnimation();

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {galleryImages.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => openModal(idx)}
            className="relative w-full h-32 sm:h-40 rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform hover:scale-105"
            aria-label={`Ver imagen ${img.alt}`}
            type="button"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-opacity group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-semibold text-center p-2">{img.alt}</span>
            </div>
          </button>
        ))}
      </div>
      <p className="text-white/60 text-center mt-6">Recuerdos de mi carrera deportiva y competencias.</p>

      <GalleryModal
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={closeModal}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </section>
  );
}