"use client";

import React, { useEffect, useRef, useState } from "react";
import { ParallaxSection } from "./ParallaxSection";
import { motion } from "framer-motion";

/**
 * Alpha Circle – SVG Mask Reveal (standalone section)
 * Base: light background with red text
 * Hover: dark background with white text revealed through expanding circle
 */
export function AlphaCircleMaskSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const idleRadius = 10;
  const revealRadius = 360;
  const radius = hovered ? revealRadius : idleRadius;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // start centered
    const rect = el.getBoundingClientRect();
    setPos({ x: rect.width / 2, y: rect.height / 2 });

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  return (
    <ParallaxSection>
      <motion.section
        ref={containerRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ backgroundColor: hovered ? "#000000" : "#ffffff" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="relative w-full overflow-hidden rounded-xl border bg-white py-16"
        style={{ minHeight: "40rem" }}
      >
        <svg className="absolute inset-0 h-full w-full pointer-events-none">
          <defs>
            <mask id="alpha-circle-mask">
              <rect width="100%" height="100%" fill="black" />
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={radius}
                fill="white"
                animate={{ r: radius, cx: pos.x, cy: pos.y }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </mask>
          </defs>
        </svg>

        {/* Revealed layer */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-black text-white px-6"
          style={{ mask: "url(#alpha-circle-mask)", WebkitMask: "url(#alpha-circle-mask)" }}
        >
          <div className="max-w-4xl text-center text-3xl md:text-4xl font-bold leading-tight">
            We build the Alpha Circle for founders, creators, and operators who
            scale with clarity, systems, and execution.
          </div>
        </div>

        {/* Base layer */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <p className="max-w-4xl text-center text-3xl md:text-4xl font-bold text-red-600 leading-tight">
            A private ecosystem where strategy meets execution — built for serious builders.
          </p>
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

