"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ParallaxSection } from "./ParallaxSection";

type Props = {
  inline?: boolean;
};

export function GlobalExpansionCard({ inline = false }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax and zoom effects
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);
  
  const headingY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

  if (inline) {
    return (
      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src="/Coffe Book Trail 01.png"
          alt="Alpha's Footprint - Global Expansion Map"
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <ParallaxSection
      className="w-full bg-white px-4 md:px-8 lg:px-12"
    >
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Heading on the left */}
          <motion.div 
            className="text-left space-y-3 order-1 md:order-1"
            style={{
              y: headingY,
              opacity: headingOpacity,
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">
              Our Global Expansion
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-xl">
              From our royal roots at Falaknuma Palace, we are now expanding globally.
            </p>
          </motion.div>

          {/* Image on the right */}
          <motion.div 
            className="flex justify-end order-2 md:order-2"
            style={{
              y: imageY,
              scale: imageScale,
              opacity: imageOpacity,
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-2xl" style={{ transformOrigin: 'right center' }}>
              <Image
                src="/Coffe Book Trail 01.png"
                alt="Alpha's Footprint - Global Expansion Map"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </ParallaxSection>
  );
}

