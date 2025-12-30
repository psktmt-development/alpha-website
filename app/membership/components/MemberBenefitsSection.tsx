"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const memberBenefits = [
  {
    title: "Global Circles",
    description: "Connect with exclusive circles across India, Dubai, and beyond, joining visionary leaders worldwide for meaningful cross-border collaborations and strategic global insights.",
  },
  {
    title: "Private Gatherings",
    description: "Attend intimately curated events designed for authenticity and genuine insight, where quality conversations happen away from the noise of typical networking platforms.",
  },
  {
    title: "Leadership Sessions",
    description: "Engage with global icons, renowned policy experts, and distinguished industry veterans in exclusive sessions that provide deep strategic insights and leadership perspectives.",
  },
  {
    title: "Exclusive Access",
    description: "Gain privileged entry to private investment rounds, cutting-edge tech innovation previews, and strategic partnership opportunities reserved for a select inner circle.",
  },
  {
    title: "Next-Gen Circles",
    description: "Empower the next generation of leaders with vision, exposure, and responsibility through dedicated platforms that foster succession planning and legacy building.",
  },
  {
    title: "Credibility & Trust",
    description: "Build and strengthen your reputation through membership in a peer-verified network of excellence, where trust is earned through demonstrated achievement and verified expertise.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function MemberBenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-24 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden z-10"
      style={{ position: 'relative', display: 'block' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-[#BB2324]/3 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#BB2324]/3 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Decorative Line */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#BB2324]/20" />
            <div className="w-2 h-2 rounded-full bg-[#BB2324]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#BB2324]/20" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-neutral-900 mb-4 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Member Benefits
          </motion.h2>

          <motion.h3
            className="text-xl md:text-2xl font-serif font-normal text-neutral-700 mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            As a member of The Alpha Circle, you gain access to:
          </motion.h3>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {memberBenefits.map((benefit, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={benefit.title}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "visible"}
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                }}
                className="group relative bg-white border-2 border-[#BB2324] hover:border-[#BB2324] rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Animated Background Gradient - Removed for white cards */}

                {/* Top Accent Line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BB2324] via-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.h4
                    className="text-2xl font-serif font-semibold text-neutral-900 mb-3 leading-tight group-hover:text-neutral-800 transition-colors duration-300"
                    animate={{
                      x: isHovered ? 4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.title}
                  </motion.h4>
                  
                  <motion.p
                    className="text-neutral-600 leading-relaxed text-base group-hover:text-neutral-700 transition-colors duration-300"
                    animate={{
                      x: isHovered ? 4 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    {benefit.description}
                  </motion.p>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-200%" }}
                  animate={{
                    x: isHovered ? "200%" : "-200%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

