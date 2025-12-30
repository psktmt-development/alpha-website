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
 * Now includes pop-up animation when section comes into view.
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
      className={cn("relative scroll-mt-24", className)}
      style={{ y }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}


