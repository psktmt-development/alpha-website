"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

// Data structure: Year → Event → Images
const galleryData = {
  2025: {
    "Annual Meet": [
      "/gallery/0Z0A3048.JPG",
      "/gallery/0Z0A2863.JPG",
      "/gallery/0Z0A2070.JPG",
      "/gallery scroll images/0Z0A3082.JPG",
      "/gallery scroll images/0Z0A2873.JPG",
    ],
    "Founder Roundtable": [
      "/gallery/0K6A8206.JPG",
      "/gallery/0B4A0588.JPG",
      "/gallery/0B4A0565.JPG",
    ],
    "Global Summit": [
      "/gallery scroll images/DSC01118.JPG",
      "/gallery scroll images/8K6A1522.JPG",
      "/gallery scroll images/gallery-1.JPG",
      "/gallery scroll images/gallery-2.jpg",
    ],
  },
  2024: {
    "Launch Event": [
      "/gallery/0Z0A2192.png",
      "/gallery/0B4A0365.JPG",
      "/gallery/0B4A0194.JPG",
    ],
    "Private Dinner": [
      "/gallery/0Z0A3048.JPG",
      "/gallery/0Z0A2863.JPG",
    ],
    "Knowledge Session": [
      "/gallery/0Z0A2070.JPG",
      "/gallery/0K6A8206.JPG",
    ],
  },
};

type Year = keyof typeof galleryData;
type EventName = string;

interface ImageItem {
  src: string;
  event: string;
  year: number;
}

export function GalleryMain() {
  const [selectedYear, setSelectedYear] = useState<Year>(2025);
  const [selectedEvent, setSelectedEvent] = useState<EventName>(
    Object.keys(galleryData[2025])[0]
  );
  const [lightboxImage, setLightboxImage] = useState<ImageItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Get current images based on selected year and event
  const currentImages: ImageItem[] = galleryData[selectedYear][selectedEvent]?.map(
    (src) => ({
      src,
      event: selectedEvent,
      year: selectedYear,
    })
  ) || [];

  // Get all images from the selected year for lightbox navigation
  const allYearImages: ImageItem[] = Object.keys(galleryData[selectedYear]).flatMap(
    (event) =>
      galleryData[selectedYear][event].map((src) => ({
        src,
        event,
        year: selectedYear,
      }))
  );

  const handleYearChange = (year: Year) => {
    setSelectedYear(year);
    // Set first event of the new year
    const firstEvent = Object.keys(galleryData[year])[0];
    setSelectedEvent(firstEvent);
  };

  const openLightbox = (image: ImageItem, index: number) => {
    // Find the index in allYearImages for proper navigation
    const allYearIdx = allYearImages.findIndex((img) => img.src === image.src);
    setLightboxImage(image);
    setLightboxIndex(allYearIdx >= 0 ? allYearIdx : index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxImage) return;
    const currentIdx = allYearImages.findIndex(
      (img) => img.src === lightboxImage.src
    );
    let newIdx;
    if (direction === "next") {
      newIdx = (currentIdx + 1) % allYearImages.length;
    } else {
      newIdx = currentIdx - 1 < 0 ? allYearImages.length - 1 : currentIdx - 1;
    }
    setLightboxImage(allYearImages[newIdx]);
    setLightboxIndex(newIdx);
  };

  // Hide navbar when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      // Hide navbar
      const navbar = document.querySelector('nav');
      if (navbar) {
        (navbar as HTMLElement).style.display = 'none';
      }
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Show navbar
      const navbar = document.querySelector('nav');
      if (navbar) {
        (navbar as HTMLElement).style.display = '';
      }
      // Restore body scroll
      document.body.style.overflow = '';
    }

    return () => {
      // Cleanup: restore navbar and scroll
      const navbar = document.querySelector('nav');
      if (navbar) {
        (navbar as HTMLElement).style.display = '';
      }
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      } else if (e.key === "ArrowLeft") {
        const currentIdx = allYearImages.findIndex(
          (img) => img.src === lightboxImage.src
        );
        const newIdx = currentIdx - 1 < 0 ? allYearImages.length - 1 : currentIdx - 1;
        setLightboxImage(allYearImages[newIdx]);
        setLightboxIndex(newIdx);
      } else if (e.key === "ArrowRight") {
        const currentIdx = allYearImages.findIndex(
          (img) => img.src === lightboxImage.src
        );
        const newIdx = (currentIdx + 1) % allYearImages.length;
        setLightboxImage(allYearImages[newIdx]);
        setLightboxIndex(newIdx);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, allYearImages]);

  const currentYearEvents = Object.keys(galleryData[selectedYear]);

  return (
    <div className="min-h-screen bg-white">
      {/* Year Tabs */}
      <div className="sticky top-0 z-30 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-center gap-8 overflow-x-auto scrollbar-hide">
            {(Object.keys(galleryData) as Year[]).map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`
                  relative py-6 px-2 text-sm md:text-base font-medium transition-all duration-200 ease-out
                  ${selectedYear === year
                    ? "text-black font-semibold"
                    : "text-black/60 hover:text-black"
                  }
                `}
              >
                {year}
                {selectedYear === year && (
                  <motion.div
                    layoutId="yearUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#af2324]"
                    initial={false}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                )}
                {selectedYear !== year && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#af2324] scale-x-0"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Event Tabs - Sticky below year tabs */}
      <div className="sticky top-[73px] z-20 bg-white border-b border-black/10 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-center gap-3 overflow-x-auto scrollbar-hide">
            <AnimatePresence mode="wait">
              {currentYearEvents.map((event) => (
                <motion.button
                  key={event}
                  onClick={() => setSelectedEvent(event)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`
                    whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-out
                    border border-black/20
                    ${selectedEvent === event
                      ? "bg-[#af2324] text-white border-[#af2324]"
                      : "bg-white text-black hover:border-[#af2324] hover:scale-105"
                    }
                  `}
                >
                  {event}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8">

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedYear}-${selectedEvent}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <BentoGrid className="w-full max-w-[95vw] mx-auto md:auto-rows-[24rem] lg:auto-rows-[28rem] gap-6 md:gap-8">
              {currentImages.map((image, index) => (
                <BentoGridItem
                  key={image.src}
                  title={image.event}
                  description={`${image.year}`}
                  header={
                    <div 
                      className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden group"
                    >
                      <Image
                        src={image.src}
                        alt={`${image.event} - ${image.year}`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  }
                  className={`cursor-pointer ${index === 3 || index === 6 ? "md:col-span-2" : ""}`}
                  onClick={() => openLightbox(image, index)}
                />
              ))}
            </BentoGrid>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightboxImage.src}
                  alt={`${lightboxImage.event} - ${lightboxImage.year}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
                {/* Event name - Extreme Left */}
                <div className="fixed top-4 left-0 pl-4 z-[10001] text-white">
                  <p className="text-lg font-medium">{lightboxImage.event}</p>
                  <p className="text-sm text-white/80">{lightboxImage.year}</p>
                </div>
                {/* Close button - Extreme Right */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  className="fixed top-4 right-0 pr-4 z-[10001] bg-black/50 hover:bg-black/70 rounded-full p-2 text-white hover:text-white/80 transition-all duration-200 backdrop-blur-sm"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                {/* Previous button - Extreme Left */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox("prev");
                  }}
                  className="fixed left-0 top-1/2 -translate-y-1/2 z-[10001] bg-black/50 hover:bg-black/70 rounded-r-full rounded-l-none p-3 pl-4 pr-3 text-white hover:text-white/80 transition-all duration-200 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                {/* Next button - Extreme Right */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox("next");
                  }}
                  className="fixed right-0 top-1/2 -translate-y-1/2 z-[10001] bg-black/50 hover:bg-black/70 rounded-l-full rounded-r-none p-3 pr-4 pl-3 text-white hover:text-white/80 transition-all duration-200 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[10000] bg-black/50 rounded-full px-4 py-2 text-white text-sm backdrop-blur-sm">
                  {allYearImages.findIndex((img) => img.src === lightboxImage.src) + 1} / {allYearImages.length}
                </div>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

