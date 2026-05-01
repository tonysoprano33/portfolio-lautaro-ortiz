"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { TranslationBundle } from "@/lib/i18n";

type ModalLabels = Pick<
  TranslationBundle["projects"],
  "previousImage" | "nextImage" | "zoomImage" | "modalHelp"
>;

interface ImageModalProps {
  images: Array<{ src: string; caption: string }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  labels: ModalLabels;
}

export default function ImageModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  labels,
}: ImageModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    },
    [onClose, onNext, onPrevious]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentImage.caption}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Close modal"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Main content container */}
      <div
        className="relative w-full max-w-6xl mx-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image counter */}
        <div className="absolute top-4 left-4 z-50 px-3 py-1 bg-white/10 text-white text-sm rounded-full">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label={labels.previousImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label={labels.nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image container with zoom */}
        <div className="relative max-h-[70vh] w-full flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.caption}
            className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl cursor-zoom-in hover:scale-105 transition-transform duration-300"
            onClick={(e) => {
              const img = e.currentTarget;
              if (img.classList.contains("scale-150")) {
                img.classList.remove("scale-150", "cursor-zoom-out");
                img.classList.add("cursor-zoom-in");
              } else {
                img.classList.add("scale-150", "cursor-zoom-out");
                img.classList.remove("cursor-zoom-in");
              }
            }}
          />
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <ZoomIn className="w-3 h-3" />
            {labels.zoomImage}
          </div>
        </div>

        {/* Caption */}
        <div className="mt-6 max-w-2xl text-center">
          <p className="text-white text-lg font-medium mb-2">
            {currentImage.caption}
          </p>
          <p className="text-white/60 text-sm">
            {labels.modalHelp}
          </p>
        </div>

        {/* Thumbnail navigation */}
        {images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto max-w-full px-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  // Navigate to this image
                  const diff = idx - currentIndex;
                  if (diff > 0) {
                    for (let i = 0; i < diff; i++) onNext();
                  } else if (diff < 0) {
                    for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                  }
                }}
                className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
                  idx === currentIndex
                    ? "border-accent"
                    : "border-transparent hover:border-white/50"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
