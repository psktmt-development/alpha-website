"use client";

import React, { useState, useRef } from "react";
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
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    // Calculate direction: positive is down, negative is up
    const direction = current - lastScrollY.current;

    if (current < 50) {
      // Always show at the top
      setVisible(true);
    } else if (direction > 10) {
      // Scrolling down significantly
      setVisible(false);
    } else if (direction < -10) {
      // Scrolling up significantly
      setVisible(true);
    }

    lastScrollY.current = current;
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-gray-200 rounded-full bg-white/90 backdrop-blur-md shadow-lg pr-2 pl-8 py-2 items-center justify-center space-x-4 z-[9999]",
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
    </AnimatePresence>
  );
};