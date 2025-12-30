"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const benefits = [
  {
    quote: "Think better, decide faster. Members gain access to real-world insights from peers who've faced similar challenges — growth, scale, succession, and leadership.",
    name: "Strategic Perspective",
    title: "The Alpha Circle",
  },
  {
    quote: "A room where discretion is assumed. No pitching. No posturing. Just honest conversations with people who understand the weight of decisions.",
    name: "High-Trust Peer Network",
    title: "The Alpha Circle",
  },
  {
    quote: "Not everyone gets in — and that's the point. Every interaction, introduction, and event is intentionally curated to protect the quality of the circle.",
    name: "Curated Access",
    title: "The Alpha Circle",
  },
  {
    quote: "Local roots. Global reach. Members connect across cities and international chapters, opening doors to new markets, ideas, and collaborations.",
    name: "Global Exposure & Expansion",
    title: "The Alpha Circle",
  },
  {
    quote: "Beyond growth. Toward impact. The Circle encourages long-term thinking — legacy, influence, and responsible leadership across generations.",
    name: "Leadership & Legacy Thinking",
    title: "The Alpha Circle",
  },
  {
    quote: "Access to what isn't public. Invite-only roundtables, retreats, social experiences, and closed-door sessions designed for connection, not crowds.",
    name: "Private Experiences & Gatherings",
    title: "The Alpha Circle",
  },
];

export function MembershipBenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden z-10"
      id="membership-benefits"
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
          className="text-center mb-12 md:mb-16"
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
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Why Leaders Choose{" "}
            <span className="relative inline-block">
              <span className="text-[#BB2324]">the Alpha Circle</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#BB2324] to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.h3
            className="text-2xl md:text-3xl font-serif font-normal text-neutral-700 mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Not for Access. For Advantage.
          </motion.h3>

          {/* Intro Copy */}
          <motion.div
            className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl text-neutral-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p>
              People don't join the Alpha Circle to collect contacts.
              <br />
              They join to gain clarity, perspective, and proximity to others who operate at the same level.
            </p>
            <p className="text-neutral-700 font-medium">
              What draws leaders in isn't visibility — it's value.
            </p>
          </motion.div>
        </motion.div>

        {/* Benefits Cards - Infinite Moving */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="h-auto min-h-[400px] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden py-0">
            <InfiniteMovingCards
              items={benefits}
              direction="right"
              speed="slow"
            />
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative"
        >
          {/* Decorative Elements */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#BB2324]/20" />
            <div className="w-3 h-3 rounded-full bg-[#BB2324]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#BB2324]/20" />
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-neutral-900 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            The real benefit isn't what you gain —
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-[#BB2324]">it's who you're sitting with</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#BB2324] to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              />
            </span>
            {" "}when it matters most.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

