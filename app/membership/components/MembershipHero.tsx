"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useJoinCircle } from "@/components/ui/join-circle-provider";

export function MembershipHero() {
  const { openModal } = useJoinCircle();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax and fade effects for smooth transitions
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#BB2324]/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#BB2324]/8 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#BB2324 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content - Headline & CTA (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-neutral-900 leading-[1.05]"
            >
              A Private Circle for{" "}
              <span className="italic text-[#BB2324] relative inline-block">
                Leaders
                <motion.svg
                  viewBox="0 0 200 20"
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#BB2324]/20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <path d="M5 15 Q 100 5 195 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </motion.svg>
              </span>{" "}
              Who Build Legacy.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl space-y-6"
            >
              <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
                The Alpha Circle is an invite-only collective of founders, family business leaders, HNIs, and decision-makers who value{" "}
                <span className="text-neutral-900 font-medium">depth over noise</span>, and{" "}
                <span className="text-neutral-900 font-medium">impact over attention</span>.
              </p>
              <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
                Membership is reserved for those who operate at a level where
                trust, discretion, and long-term thinking matter most.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <button
                onClick={openModal}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#BB2324] text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-[#BB2324]/20 transition-all hover:-translate-y-1 hover:shadow-[#BB2324]/30"
              >
                <span className="relative z-10">Request Invitation</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/10 to-black/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - Visual/Supporting Info (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 aspect-square lg:aspect-[4/5] bg-white rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between overflow-hidden border-2 border-[#BB2324]"
              style={{
                boxShadow: '0 40px 100px -20px rgba(0,0,0,0.08)',
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#BB2324]/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-6 relative z-10 flex flex-col justify-center h-full">
                <h3 className="text-3xl md:text-4xl font-serif font-medium text-neutral-900 leading-tight">
                  A Private Circle for Leaders Who Build Legacy.
                </h3>

                <div className="space-y-4">
                  <p className="text-neutral-500 text-lg leading-relaxed">
                    The Alpha Circle is an invite-only collective of founders, family business leaders, HNIs, and decision-makers who value depth over noise and impact over attention.
                  </p>
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    This is a space for those who operate at a level where trust, discretion, and long-term thinking matter most.
                  </p>
                </div>
              </div>

            </motion.div>

            {/* Background floating elements for depth */}
            <motion.div
              className="absolute -top-12 -right-12 w-48 h-48 bg-[#BB2324]/10 rounded-full blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-300 to-transparent" />
      </motion.div>
    </section>
  );
}

