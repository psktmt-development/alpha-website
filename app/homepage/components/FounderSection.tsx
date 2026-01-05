"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function FounderSection() {
  const images = [
    "/home_and_about/xAlpha-Circle-World-Founder.jpg",
    "/home_and_about/0Z0A2192.png",
    "/home_and_about/Alpha Circle-47.jpg",
    "/home_and_about/Alpha Circle-67.jpg"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects (keep content readable)
  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const textOpacity = 1;
  // Frame parallax (moves slightly slower than image for depth)
  const frameY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Rotate through images automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

        {/* Left Section - Text Content (Spans 7 columns on tablet+) */}
        <motion.div
          className="md:col-span-7 flex flex-col space-y-8 relative z-10"
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-dm-serif text-[#af2324] text-sm font-bold tracking-[0.2em] uppercase">
              THE ALPHA CIRCLE
            </h2>
            <h1 className="font-dm-serif text-6xl text-gray-900 leading-[1.1] font-normal">
              Empowering <br className="hidden md:block" />
              <span className="italic text-gray-500 font-normal text-[1em] leading-[0.9]">Visionaries</span> Everywhere.
            </h1>
          </motion.div>
          <motion.div
            className="font-dm-serif space-y-6 text-gray-600 text-lg leading-relaxed max-w-2xl border-l-2 border-[#af2324]/20 pl-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-dm-serif">
              The Alpha Circle is an invite-only global industry leaders collective founded by Dr. Pulluri Srikanth.
              We unite industrialists, business pioneers, and generational entrepreneurs who share a vision for
              transformative leadership.
            </p>
            <p className="font-dm-serif">
              With a strong presence across India and our international launch in Dubai, The Alpha Circle serves
              as a platform for collaboration, innovation, and meaningful impact across industries and borders.
            </p>
          </motion.div>
          {/* Founder Signature Block */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="font-dm-serif text-gray-900 text-4xl md:text-5xl lg:text-6xl font-normal">
              Dr. Pulluri Srikanth
            </p>
            <p className="font-dm-serif text-[#af2324] text-lg md:text-xl lg:text-2xl font-normal uppercase tracking-wide mt-2 md:mt-3">
              FOUNDER, THE ALPHA CIRCLE
            </p>
          </motion.div>
        </motion.div>

        {/* Right Section - Framed Image (Spans 5 columns on tablet+) */}
        <motion.div
          className="md:col-span-5 relative flex justify-center md:justify-end mt-12 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* THE FRAME CONTAINER */}
          <div className="relative w-full max-w-md aspect-[3/4]">

            {/* 1. The Decorative Frame (Behind) */}
            <motion.div
              style={{ y: frameY }}
              className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#af2324] rounded-sm z-0 hidden md:block"
            />

            {/* 2. The Solid Background Block (For contrast) */}
            <div className="absolute -left-4 -top-4 w-full h-full bg-gray-50 rounded-sm -z-10 hidden md:block" />

            {/* 3. The Image Mask/Container */}
            <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl bg-gray-200 z-10">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{
                    opacity: { duration: 1.2, ease: "easeInOut" },
                    scale: { duration: 6, ease: "linear" }
                  }}
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt="Dr. Pulluri Srikanth - Founder, The Alpha Circle"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
              {/* Optional: subtle gradient overlay for text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* 4. Decorative Corner Element */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#af2324] hidden md:flex items-center justify-center shadow-lg z-20">
              <ArrowUpRight className="text-white w-12 h-12" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
