"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const identityCards = [
  {
    title: "Founders & Co-Founders",
    text: "Visionary leaders building scalable enterprises with strategic intent and sustainable growth models.",
  },
  {
    title: "Second-Generation Entrepreneurs",
    text: "Stewards of legacy businesses who are expanding and evolving established enterprises.",
  },
  {
    title: "CXOs & Senior Decision-Makers",
    text: "Executive leaders responsible for strategic direction, organizational transformation, and measurable outcomes.",
  },
  {
    title: "Family Business Leaders",
    text: "Leaders managing multi-generational enterprises, balancing tradition with innovation and sustainable expansion.",
  },
  {
    title: "Global Operators & Investors",
    text: "Strategic investors and international business leaders operating across markets and time horizons.",
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
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function MembershipIdentitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white via-gray-50/50 to-white py-24 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#BB2324]/5 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#BB2324]/5 rounded-full blur-3xl"
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20 relative"
        >
          {/* Decorative Elements */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#BB2324]/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />

          <motion.h2
            className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-neutral-900 mb-6 leading-[1.1] relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Designed for Leadership Excellence
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#BB2324] to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            />
          </motion.h2>

          <motion.h3
            className="text-2xl md:text-3xl font-serif font-normal text-neutral-700 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A Curated Network of Visionary Leaders and Decision-Makers
          </motion.h3>

          {/* Body Copy */}
          <motion.div
            className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-neutral-500 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              The Alpha Circle brings together accomplished leaders who have demonstrated
              exceptional commitment to building lasting enterprises and meaningful impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Our members share a common understanding: that strategic relationships,
              thoughtful dialogue, and collaborative vision drive transformative outcomes.
            </motion.p>
            <motion.p
              className="text-neutral-700 font-medium"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Membership is extended to those who have reached a level where
              strategic thinking, discretion, and long-term perspective define their approach.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Identity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {identityCards.map((card, index) => {
            const isHovered = hoveredCard === index;
            return (
              <motion.div
                key={card.title}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                }}
                className="group relative bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-[#BB2324] hover:shadow-2xl hover:shadow-[#BB2324]/10 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#BB2324]/0 to-[#BB2324]/0 group-hover:from-[#BB2324]/5 group-hover:to-transparent transition-all duration-500"
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Top Accent Line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BB2324] via-[#BB2324] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#BB2324] rounded-tr-2xl opacity-0"
                  animate={{
                    opacity: isHovered ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">


                  <motion.h4
                    className="text-2xl font-serif font-semibold text-neutral-900 mb-4 leading-tight group-hover:text-[#BB2324] transition-colors duration-300"
                    animate={{
                      x: isHovered ? 4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.title}
                  </motion.h4>
                  <motion.p
                    className="text-neutral-500 leading-relaxed text-base group-hover:text-neutral-700 transition-colors duration-300"
                    animate={{
                      x: isHovered ? 4 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    {card.text}
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

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-6 relative"
        >
          {/* Decorative Line */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#BB2324]/30" />
            <div className="w-2 h-2 rounded-full bg-[#BB2324]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#BB2324]/30" />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
          >
            For leaders who prioritize{" "}
            <span className="relative inline-block">
              <span className="text-neutral-700 font-medium">strategic depth and meaningful connections</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#BB2324]/30"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              />
            </span>
            , The Alpha Circle offers a platform for genuine collaboration and shared growth.
          </motion.p>


        </motion.div>
      </div>
    </section>
  );
}

