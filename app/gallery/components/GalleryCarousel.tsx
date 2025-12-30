"use client";

import { motion } from "framer-motion";
import { AlphaCarousel } from "@/components/ui/alpha-carousel";

const carouselSlides = [
  {
    title: "Alpha Circle – Heritage",
    button: "Explore",
    src: "/home and about/hero-1.JPG",
  },
  {
    title: "Alpha Circle – Vision",
    button: "Explore",
    src: "/home and about/hero-2.JPG",
  },
  {
    title: "Global Presence",
    button: "Our Circles",
    src: "/gallery/0K6A8206.JPG",
  },
];

export function GalleryCarousel() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50/50 to-white py-20 px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div 
          className="space-y-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p 
            className="text-xs uppercase tracking-[0.2em] text-[#af2324] font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured Gallery
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Signature Moments
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Explore curated highlights from Alpha Circle events and gatherings.
          </p>
        </motion.div>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <AlphaCarousel slides={carouselSlides} />
        </motion.div>
      </div>
    </section>
  );
}


