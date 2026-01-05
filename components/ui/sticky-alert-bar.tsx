"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePopup } from "./popup-context";

/**
 * StickyAlertBar Component
 *
 * Displays a persistent alert bar on the home page with upcoming event information.
 *
 * Behavior:
 * - Only appears AFTER popup is closed
 * - Only visible on home page (/)
 * - Syncs with navbar visibility:
 *   - When navbar visible: sits below navbar
 *   - When navbar hidden: locks to top of viewport
 * - Smooth transitions, no jumping or gaps
 */
export function StickyAlertBar() {
  // ALL HOOKS MUST BE CALLED FIRST - before any conditional returns
  const pathname = usePathname();
  const { popupClosed } = usePopup();
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [topPosition, setTopPosition] = useState(64); // Default mobile height
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // Initialize navbar visibility state
    if (typeof window !== "undefined") {
      const currentScroll = window.scrollY;
      lastScrollY.current = currentScroll;
      setNavbarVisible(currentScroll < 10);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const previous = lastScrollY.current;

          // Always show navbar at the very top (first 10px)
          if (currentScroll < 10) {
            setNavbarVisible(true);
          } else {
            // Determine scroll direction
            if (currentScroll > previous) {
              // Scrolling DOWN - hide navbar
              setNavbarVisible(false);
            } else if (currentScroll < previous) {
              // Scrolling UP - show navbar
              setNavbarVisible(true);
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
  }, [hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;

    const updatePosition = () => {
      if (navbarVisible) {
        // Position below navbar - responsive height
        const isDesktop = window.innerWidth >= 768;
        setTopPosition(isDesktop ? 80 : 64);
      } else {
        // Navbar hidden - lock to top
        setTopPosition(0);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [navbarVisible, hasMounted]);

  // Conditional returns AFTER all hooks
  // Only render on home page
  if (pathname !== "/") {
    return null;
  }

  // Only show if popup is closed
  if (!popupClosed) {
    return null;
  }

  // Event information - update these with actual upcoming event details
  const eventInfo = {
    venue: "Leela Hyderabad Hotel",
    time: "7PM onwards",
    ctaText: "View Details",
    ctaLink: "/events",
  };

  return (
    <motion.div
      initial={false}
      animate={{
        top: topPosition,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed left-0 right-0 z-[9998] bg-white border-b border-gray-200/50 shadow-sm"
      style={{
        // Position will be animated based on navbar visibility
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Event Information */}
          <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
            <span className="text-xs md:text-sm font-sans font-semibold uppercase tracking-wide text-gray-900 whitespace-nowrap">
              Upcoming Event:
            </span>
            <span className="text-xs md:text-sm font-sans text-gray-700 truncate">
              {eventInfo.venue}, {eventInfo.time}
            </span>
          </div>

          {/* Optional CTA */}
          <Link
            href={eventInfo.ctaLink}
            className="ml-4 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-sans font-semibold uppercase tracking-wide text-[#af2324] hover:text-[#d12e2f] transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            {eventInfo.ctaText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
