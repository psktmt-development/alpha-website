"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Lightweight parallax + fade-in wrapper for sections.
 * Uses scroll position of the section to animate translateY/opacity.
 */
export function ParallaxSection({ id, className, children }: ParallaxSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 40%"],
  });

  // Keep opacity fixed at 1 to avoid the faint overlay look while still
  // giving a subtle upward motion on scroll.
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn("scroll-mt-24", className)}
      style={{ y }}
    >
      {children}
    </motion.section>
  );
}


