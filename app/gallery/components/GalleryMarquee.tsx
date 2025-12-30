"use client";

import { motion } from "framer-motion";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const marqueeImages = [
  "/gallery/gallery scroll images/0Z0A2070.JPG",
  "/gallery/gallery scroll images/0Z0A2863.JPG",
  "/gallery/gallery scroll images/0Z0A2873.JPG",
  "/gallery/gallery scroll images/0Z0A3082.JPG",
  "/gallery/gallery scroll images/8K6A1522.JPG",
  "/gallery/gallery scroll images/DSC01118.JPG",
  "/gallery/gallery scroll images/gallery-1.JPG",
  "/gallery/gallery scroll images/gallery-2.jpg",
];

export function GalleryMarquee() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] py-24 px-4 text-white">
      <motion.div 
        className="relative z-10 mx-auto max-w-4xl space-y-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p 
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#af2324]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Gallery
        </motion.p>
        <motion.h1 
          className="text-5xl font-serif font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Key Moments
        </motion.h1>
        <motion.p 
          className="text-lg text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Capturing the essence of Alpha Circle through curated highlights and memorable gatherings.
        </motion.p>
      </motion.div>

      <motion.div 
        className="relative z-10 mt-16 w-full max-w-7xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <ThreeDMarquee images={marqueeImages} speedSeconds={30} />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#af2324]/5 via-transparent to-[#af2324]/5" />
    </section>
  );
}


