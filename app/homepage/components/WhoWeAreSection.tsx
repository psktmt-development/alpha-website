"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const alphaData = [
  {
    letter: "A",
    title: "Authentic Relationships",
    description: "Genuine bonds rooted in trust. We move beyond transaction to build a brotherhood of integrity.",
  },
  {
    letter: "L",
    title: "Legacy & Influence",
    description: "A platform to shape industries. Your work today is the foundation for the empires of tomorrow.",
  },
  {
    letter: "P",
    title: "Purposeful Stimulations",
    description: "Curated experiences that ignite curiosity and challenge perspectives to unlock potential.",
  },
  {
    letter: "H",
    title: "Holistic Growth",
    description: "Bridging the gap between tradition and innovation through intergenerational wisdom exchange.",
  },
  {
    letter: "A",
    title: "Aspirations",
    description: "Celebrating individualism while fostering a collective ambition for greatness.",
  },
];

export function WhoWeAreSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 3 seconds
  // The dependency array [activeIndex] ensures the timer resets if a user manually clicks a card,
  // giving them time to read before it switches again.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % alphaData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="about" className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 flex flex-col justify-center scroll-mt-24">
      <div className="max-w-7xl w-full mx-auto space-y-8">
        {/* Header - Compact */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#af2324]/10 pb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#000000] leading-tight">
              Who We Are
            </h2>
            <p className="mt-2 text-[#af2324]/80 font-medium tracking-wide uppercase text-sm">
              The Alpha Collective
            </p>
          </div>
          <p className="max-w-md text-gray-600 text-sm md:text-base leading-relaxed text-right md:text-right text-left">
            Connecting high-impact individuals from family businesses and emerging ventures.
          </p>
        </motion.div>

        {/* Interactive Deck Layout */}
        <div className="h-[500px] md:h-[400px] w-full flex flex-col md:flex-row gap-2">
          {alphaData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden cursor-pointer rounded-lg transition-colors duration-500 ease-in-out ${
                  isActive
                    ? "flex-[3] bg-white border-2 border-[#af2324]"
                    : "flex-[1] bg-[#af2324] border-2 border-transparent hover:border-[#961e1f]"
                }`}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  layout: { type: "spring", stiffness: 200, damping: 25 },
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Active State Content */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-8xl font-serif font-bold text-[#af2324]/5 select-none absolute top-4 right-4 leading-none">
                        {item.letter}
                      </span>
                      <div className="z-10 bg-[#af2324] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="relative z-10 max-w-lg mt-auto">
                    <h3 className="text-2xl md:text-3xl font-serif text-[#af2324] mb-3">
                      {item.title}
                    </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Inactive State Content */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-4xl md:text-5xl font-serif font-bold text-black"
                    >
                      {item.letter}
                    </motion.span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}