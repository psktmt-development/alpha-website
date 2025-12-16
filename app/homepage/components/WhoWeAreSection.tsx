"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

export function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // More visible parallax effects - enter from below
  const leftY = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.5, 1, 1]);
  const leftScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  
  const rightY = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [0, 0.4, 1, 1]);
  const rightScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1, 1]);

  const alphaItems = [
    {
      letter: "A",
      title: "Authentic Relationships",
      description:
        "Genuine bonds rooted in trust, respect, and shared values.",
    },
    {
      letter: "L",
      title: "Legacy & Influence",
      description:
        "A platform to shape industries and inspire generations.",
    },
    {
      letter: "P",
      title: "Purposeful Stimulations",
      description:
        "Curated experiences and conversations that ignite curiosity and challenge perspectives.",
    },
    {
      letter: "H",
      title: "Holistic Intergenerational Growth",
      description:
        "Insights and exchanges that blend wisdom and fresh thinking across age groups.",
    },
    {
      letter: "A",
      title: "Aspirations & Individualism",
      description:
        "A space that honors your unique journey, ambitions, and identity.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full min-h-[70vh] bg-[#FAFAFA] py-6 md:py-8 lg:py-10 px-4 md:px-8 lg:px-16 scroll-mt-24"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* Left Section - Who We Are */}
        <motion.div
          className="flex flex-col space-y-3"
          style={{ y: leftY, opacity: leftOpacity, scale: leftScale }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#af2324] leading-tight">
            Who We Are
          </h2>
          <p className="text-base md:text-lg text-gray-900 leading-relaxed font-sans">
            A Global Collective of Leaders and Legacy Builders. The Alpha Circle connects
            high-impact individuals from family businesses, emerging ventures, and top
            industrial circles — across sectors and borders.
          </p>
        </motion.div>

        {/* Right Section - The Alpha Advantage */}
        <motion.div
          className="flex flex-col space-y-2"
          style={{ y: rightY, opacity: rightOpacity, scale: rightScale }}
        >
          <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 mb-2">
            The Alpha Advantage
          </h3>

          <div className="flex flex-col space-y-1.5">
            {alphaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-gray-100 rounded-lg px-2.5 py-2 md:px-3 md:py-2.5 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                onClick={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 font-bold text-base">
                    {openIndex === index ? "▼" : "►"}
                  </span>
                  <span className="text-gray-900 font-semibold text-sm md:text-base">
                    <span className="font-bold">{item.letter}</span> - {item.title}
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.p
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-2 pl-7 pr-1 text-xs md:text-sm text-gray-700 leading-relaxed overflow-hidden"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

