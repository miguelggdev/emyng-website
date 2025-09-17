import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryModalProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: GalleryModalProps) {
  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed inset-0 z-50 flex items-center justify-center p-0 bg-black/90 border-none max-w-full max-h-full w-screen h-screen">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2 rounded-full bg-white/10"
          aria-label="Cerrar galería"
          type="button"
        >
          <X size={28} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
          />

          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-3 rounded-full bg-white/10"
            aria-label="Imagen anterior"
            type="button"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-3 rounded-full bg-white/10"
            aria-label="Imagen siguiente"
            type="button"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}