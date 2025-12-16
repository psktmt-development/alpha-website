"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/hero-1.JPG", "/hero-2.JPG"];
  const captions = [
    { line1: "WHERE VISIONARIES", line2: "ALIGN GLOBALLY." },
    { line1: "GLOBAL GROUND FOR", line2: "VISIONARY MINDS." }
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  
  // Parallax effect for text (moves slower)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="home"
      ref={containerRef}
      className="h-screen w-screen relative overflow-hidden scroll-mt-24"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ y, opacity }}
        >
          <DirectionAwareHover
            imageUrl={images[currentImage]}
            className="h-full w-full rounded-none"
            childrenClassName="text-white"
          >
            <motion.div 
              className="flex flex-col items-center justify-center text-center w-full max-w-full px-4"
              style={{ y: textY, opacity: textOpacity }}
            >
              <p className="font-bodoni font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-center">
                {captions[currentImage].line1}
                <br />
                {captions[currentImage].line2}
              </p>
            </motion.div>
          </DirectionAwareHover>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

