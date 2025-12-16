"use client";

import React, { useState, useEffect } from "react";
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
  const lastScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  // Initialize visibility based on scroll position
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentScroll = window.scrollY;
      lastScrollY.current = currentScroll;
      setVisible(currentScroll < 50);
    }

    // Direct scroll event listener with throttling
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const previous = lastScrollY.current;
          
          // Always show at the top (first 50px)
          if (currentScroll < 50) {
            setVisible(true);
          } else {
            // Determine scroll direction - be more aggressive about hiding
            if (currentScroll > previous) {
              // Scrolling DOWN - hide navbar immediately
              setVisible(false);
            } else if (currentScroll < previous) {
              // Scrolling UP - show navbar immediately
              setVisible(true);
            } else {
              // If scroll position hasn't changed, keep it hidden if we were scrolling down
              // This ensures it stays hidden when scroll stops after scrolling down
              if (currentScroll > 50) {
                setVisible(false);
              }
            }
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
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border-0 rounded-full bg-transparent pr-2 pl-8 py-2 items-center justify-center space-x-4 z-[9999]",
        className
      )}
    >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-black font-sans uppercase hover:text-[#af2324] transition-colors"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-sans uppercase tracking-wide">{navItem.name.toUpperCase()}</span>
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

