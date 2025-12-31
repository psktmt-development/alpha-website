"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

// Data structure: Year → Event → Images
const galleryData: Record<number, Record<string, string[]>> = {
  2025: {
    "Circle 2 Launch": [
      "/gallery/2025/circle 2 launch/0B4A0369.JPG",
      "/gallery/2025/circle 2 launch/0B4A0567 (1).JPG",
      "/gallery/2025/circle 2 launch/DSCF6778.JPG",
      "/gallery/2025/circle 2 launch/DSCF6787.JPG",
      "/gallery/2025/circle 2 launch/DSCF6789.JPG",
      "/gallery/2025/circle 2 launch/DSCF6841.JPG",
    ],
    "Cirlce 1 meet": [
      "/gallery/2025/circle meet/Alpha-132.JPG",
      "/gallery/2025/circle meet/Alpha-66.JPG",
      "/gallery/2025/circle meet/Alpha-75.JPG",
      "/gallery/2025/circle meet/Alpha-84.JPG",
    ],
    "Circle 2 meet": [
      "/gallery/2025/circle 2 meet/8K6A3576 (1).JPG",
      "/gallery/2025/circle 2 meet/DSCF1091.JPG",
      "/gallery/2025/circle 2 meet/DSCF1635.JPG",
    ],
    "Event-HICC": [
      "/gallery/2025/HICC event/Alpha Circle HICC Novtal-104.JPG",
      "/gallery/2025/HICC event/Alpha Circle HICC Novtal-81.JPG",
      "/gallery/2025/HICC event/DSC05736.JPG",
    ],
    "Event-KPC": [
      "/gallery/2025/kpc host/Photo-190.JPG",
      "/gallery/2025/kpc host/Photo-303.JPG",
      "/gallery/2025/kpc host/Photo-311.JPG",
      "/gallery/2025/kpc host/Photo-322.JPG",
      "/gallery/2025/kpc host/Photo-331.JPG",
      "/gallery/2025/kpc host/Photo-360.JPG",
      "/gallery/2025/kpc host/Photo-55.JPG",
    ],
    "Sailing Club": [
      "/gallery/2025/sailing club/Alpha-178.jpg",
      "/gallery/2025/sailing club/Alpha-216.jpg",
      "/gallery/2025/sailing club/Alpha-221.jpg",
    ],
    "Speaker Session-Vijay": [
      "/gallery/2025/Speaker-vijay/DSC07774.JPG",
    ],
    "Strategy Session-1": [
      "/gallery/2025/strategy session-1/8K6A1311.JPG",
      "/gallery/2025/strategy session-1/Aphla-29.JPG",
      "/gallery/2025/strategy session-1/Aphla-295.JPG",
    ],
    "Strategy Session-2": [
      "/gallery/2025/strategy session-2/Alpha-115.JPG",
      "/gallery/2025/strategy session-2/Alpha-119.JPG",
      "/gallery/2025/strategy session-2/Alpha-123.JPG",
      "/gallery/2025/strategy session-2/Alpha-136.JPG",
      "/gallery/2025/strategy session-2/Alpha-144.JPG",
    ],
    "Social Event-Valentines Day": [
      "/gallery/2025/valentines day/Alpha Circle-282.JPG",
      "/gallery/2025/valentines day/Alpha Circle-551.JPG",
      "/gallery/2025/valentines day/Alpha Circle-555.JPG",
      "/gallery/2025/valentines day/Alpha Circle-557.JPG",
      "/gallery/2025/valentines day/Alpha Circle-560.JPG",
    ],
    "Social Event-Womens Day": [
      "/gallery/2025/womens day/8K6A5234.JPG",
      "/gallery/2025/womens day/8K6A5263.JPG",
      "/gallery/2025/womens day/8K6A5385.JPG",
      "/gallery/2025/womens day/Alpha-130.JPG",
      "/gallery/2025/womens day/Alpha-131.JPG",
    ],
  },
  2024: {
    "Falaknuma Launch": [
      "/gallery/2024/falaknuma/0Z0A3459.JPG",
      "/gallery/2024/falaknuma/0Z0A3399.JPG",
      "/gallery/2024/falaknuma/0Z0A3093 (1).JPG",
      "/gallery/2024/falaknuma/0Z0A3069.JPG",
      "/gallery/2024/falaknuma/0Z0A3044.JPG",
      "/gallery/2024/falaknuma/0Z0A2888.JPG",
      "/gallery/2024/falaknuma/0Z0A2214 (1).JPG",
    ],
    "District 150": [
      "/gallery/2024/District150/8K6A9181.JPG",
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
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<ImageItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Helper to get all images for a specific year
  const getYearImages = (year: number): ImageItem[] => {
    return Object.keys(galleryData[year]).flatMap((event) =>
      (galleryData[year][event] || []).map((src) => ({
        src,
        event,
        year,
      }))
    );
  };

  // Helper to get ALL images
  const getAllImages = (): ImageItem[] => {
    return Object.keys(galleryData).flatMap((year) => getYearImages(Number(year)));
  };

  // Derive currentImages based on state
  let currentImages: ImageItem[] = [];
  if (selectedYear === null) {
    currentImages = getAllImages();
  } else {
    if (selectedEvent === null) {
      currentImages = getYearImages(selectedYear);
    } else {
      currentImages = (galleryData[selectedYear]?.[selectedEvent] || []).map((src) => ({
        src,
        event: selectedEvent,
        year: selectedYear,
      }));
    }
  }

  const handleAllPhotosClick = () => {
    setSelectedYear(null);
    setSelectedEvent(null);
  };

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    setSelectedEvent(null);
  };

  const handleEventClick = (event: string) => {
    setSelectedEvent(event);
  };

  const openLightbox = (image: ImageItem, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxImage) return;

    // Use currentImages for navigation context
    const currentIdx = currentImages.findIndex(
      (img) => img.src === lightboxImage.src
    );

    let newIdx;
    if (direction === "next") {
      newIdx = (currentIdx + 1) % currentImages.length;
    } else {
      newIdx = currentIdx - 1 < 0 ? currentImages.length - 1 : currentIdx - 1;
    }

    setLightboxImage(currentImages[newIdx]);
    setLightboxIndex(newIdx);
  };

  // Hide navbar when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      const navbar = document.querySelector('nav');
      if (navbar) {
        (navbar as HTMLElement).style.display = 'none';
      }
      document.body.style.overflow = 'hidden';
    } else {
      const navbar = document.querySelector('nav');
      if (navbar) {
        (navbar as HTMLElement).style.display = '';
      }
      document.body.style.overflow = '';
    }

    return () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        (navbar as HTMLElement).style.display = '';
      }
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  // Scroll-based navbar replacement logic
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const previousScrollY = lastScrollY.current;

          if (currentScrollY > 80 && currentScrollY > previousScrollY) {
            setNavHidden(true);
          } else if (currentScrollY < previousScrollY || currentScrollY < 80) {
            setNavHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    lastScrollY.current = window.scrollY;
    setNavHidden(window.scrollY > 80);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev");
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, currentImages]); // Added currentImages dependency

  // Events to show in sidebar
  const visibleEvents = selectedYear ? Object.keys(galleryData[selectedYear]) : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content with Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="lg:col-span-1 lg:border-r lg:border-black/10">
            <div className="sticky top-24 space-y-8 pr-8">
              {/* All Photos Filter Section */}
              <div>
                <button
                  onClick={handleAllPhotosClick}
                  className={`
                    text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 w-fit
                    ${selectedYear === null
                      ? "bg-[#af2324] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#af2324]"
                    }
                  `}
                >
                  All Photos
                </button>
              </div>

              {/* Year Filter Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  YEAR
                </h3>
                <div className="flex flex-col gap-2">
                  {(Object.keys(galleryData).map(Number) as unknown as number[]).map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearClick(year)}
                      className={`
                        text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 w-fit
                        ${selectedYear === year
                          ? "bg-[#af2324] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#af2324]"
                        }
                      `}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Event Filter Section - Only visible if a year is selected */}
              <AnimatePresence>
                {selectedYear && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide pt-4 border-t border-gray-100">
                      EVENTS ({selectedYear})
                    </h3>
                    <div className="flex flex-col gap-2">
                      {visibleEvents.map((event) => (
                        <button
                          key={event}
                          onClick={() => handleEventClick(event)}
                          className={`
                            text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 w-fit
                            ${selectedEvent === event
                              ? "bg-[#af2324] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#af2324]"
                            }
                          `}
                        >
                          {event}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </aside>

          {/* Right Column - Gallery Images */}
          <div className="lg:col-span-1">
            {/* Empty State */}
            {currentImages.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-24 relative"
              >
                {/* ... (Keep existing empty state UI) ... */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#af2324]/5 rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#af2324]/10 rounded-full blur-xl" />

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-[#af2324]/20 to-[#af2324]/5 mb-8 relative z-10 border-2 border-[#af2324]/20 shadow-lg"
                >
                  <svg
                    className="w-12 h-12 text-[#af2324]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-[#af2324]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold text-gray-900 mb-3 relative z-10"
                >
                  Images Coming Soon
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 text-lg relative z-10"
                >
                  Images for <span className="font-bold text-[#af2324] px-2 py-1 bg-[#af2324]/10 rounded-md">{selectedEvent || selectedYear}</span> will be added soon.
                </motion.p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mx-auto mt-8 h-1 bg-gradient-to-r from-transparent via-[#af2324] to-transparent rounded-full"
                />
              </motion.div>
            ) : (
              /* Bento Grid */
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedYear}-${selectedEvent}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <BentoGrid className="w-full md:auto-rows-[24rem] lg:auto-rows-[28rem] gap-6 md:gap-8">
                    {currentImages.map((image, index) => (
                      <motion.div
                        key={image.src}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.08,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`${index === 3 || index === 6 ? "md:col-span-2" : ""}`}
                      >
                        <BentoGridItem
                          title={image.event}
                          description={`${image.year}`}
                          header={
                            <div
                              className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#af2324]/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#af2324]/20"
                              onClick={() => openLightbox(image, index)}
                            >
                              <Image
                                src={image.src}
                                alt={`${image.event} - ${image.year}`}
                                fill
                                className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                loading={index < 6 ? "eager" : "lazy"}
                                priority={index < 3}
                                quality={85}
                              />
                              {/* Gradient overlays */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              <div className="absolute inset-0 bg-[#af2324]/0 group-hover:bg-[#af2324]/20 transition-colors duration-500" />

                              {/* Shine effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                initial={{ x: "-200%" }}
                                whileHover={{ x: "200%" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                              />

                              {/* Content overlay */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-2 h-2 rounded-full bg-[#af2324] animate-pulse" />
                                  <p className="text-white font-bold text-base drop-shadow-lg">
                                    {image.event}
                                  </p>
                                </div>
                                <p className="text-white/90 text-sm font-medium drop-shadow-md">
                                  Click to view full image
                                </p>
                              </div>

                              {/* Corner accent */}
                              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#af2324] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-xl" />
                            </div>
                          }
                          className="h-full"
                        />
                      </motion.div>
                    ))}
                  </BentoGrid>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button - Top Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="fixed top-6 right-6 z-[10002] p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Event name - Top Left */}
            <div className="fixed top-8 left-8 z-[10002] text-left pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                key={lightboxImage.src} // Animate text when image changes
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-white drop-shadow-lg tracking-wide">
                  {lightboxImage.event}
                </h2>
                <p className="text-base md:text-lg text-white/80 font-medium drop-shadow-md mt-1">
                  {lightboxImage.year}
                </p>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[10002] p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} strokeWidth={1.5} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[10002] p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight size={48} strokeWidth={1.5} />
            </button>

            {/* Main Image Container */}
            <div
              className="relative w-full h-full max-w-7xl max-h-[85vh] p-4 md:p-8 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={lightboxImage.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15, ease: "easeOut" }} // Fast transition
                className="relative w-full h-full"
              >
                <Image
                  src={lightboxImage.src}
                  alt={`${lightboxImage.event} - ${lightboxImage.year}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="100vw"
                  priority
                  quality={95}
                />
              </motion.div>
            </div>

            {/* Image counter - Bottom Center */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10002] text-white/60 text-sm font-medium tracking-widest uppercase">
              {currentImages.findIndex((img) => img.src === lightboxImage.src) + 1} <span className="mx-2 text-white/30">|</span> {currentImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

