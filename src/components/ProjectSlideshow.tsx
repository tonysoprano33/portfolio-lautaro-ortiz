"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import ImageModal from "./ImageModal";

interface ProjectSlideshowProps {
  images: Array<{ src: string; caption: string }>;
  alt: string;
}

export default function ProjectSlideshow({ images, alt }: ProjectSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-advance every 3 seconds (pause when modal is open)
  useEffect(() => {
    if (images.length <= 1 || isModalOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isModalOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer">
        {/* Click handler for modal */}
        <div 
          className="absolute inset-0 z-10"
          onClick={() => setIsModalOpen(true)}
        />

        {/* Expand hint */}
        <div className="absolute top-2 right-2 z-20 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-3 h-3" />
          Click to expand
        </div>

        {/* Images */}
        {images.map((img, index) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.caption}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ))}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Full-screen modal */}
      <ImageModal
        images={images}
        currentIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        onPrevious={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
      />
    </>
  );
}
