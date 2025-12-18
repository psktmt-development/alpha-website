"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Initialize visibility based on scroll position
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentScroll = window.scrollY;
      lastScrollY.current = currentScroll;
      setVisible(currentScroll < 10);
    }

    // Direct scroll event listener with throttling
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const previous = lastScrollY.current;
          
          // Always show at the very top (first 10px)
          if (currentScroll < 10) {
            setVisible(true);
          } else {
            // Determine scroll direction
            if (currentScroll > previous) {
              // Scrolling DOWN - hide navbar
              setVisible(false);
            } else if (currentScroll < previous) {
              // Scrolling UP - show navbar
              setVisible(true);
            }
            // If equal (no scroll change), maintain current state
          }
          
          lastScrollY.current = currentScroll;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      style={{
        pointerEvents: visible ? "auto" : "none",
      }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-black/10 rounded-full bg-white/80 backdrop-blur-md shadow-lg pr-2 pl-8 py-2 items-center justify-center space-x-4 z-[9999]",
        className
      )}
    >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="relative items-center flex space-x-1 text-black font-sans uppercase hover:text-[#af2324] transition-colors"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-sans uppercase tracking-wide">
              {navItem.name.toUpperCase()}
            </span>
          </Link>
        ))}
        <Link
          href="#contact"
          className="border text-sm font-sans font-medium uppercase tracking-wide relative border-black text-black px-4 py-2 rounded-full hover:bg-[#af2324] hover:text-white hover:border-[#af2324] transition-colors"
        >
          <span>Join the Circle</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#af2324] to-transparent h-px" />
        </Link>
    </motion.div>
  );
};