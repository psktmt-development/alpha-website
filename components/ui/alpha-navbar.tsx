"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Events", link: "/events" },
  { name: "Gallery", link: "/gallery" },
  { name: "Membership", link: "/members" },
  { name: "Blog", link: "/blog" },
  { name: "Contact Us", link: "/contact" },
];

export function AlphaNavbar() {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentScroll = window.scrollY;
      lastScrollY.current = currentScroll;
      setVisible(currentScroll < 10);
    }

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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
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
          "fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center">
              <Image
                src="/xAlpha-Circle.png.pagespeed.ic.iNmpDHM9GE.png"
                alt="The Alpha Circle Logo"
                width={200}
                height={60}
                className="h-8 md:h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="px-3 lg:px-4 py-2 text-sm lg:text-base font-sans uppercase tracking-wide text-gray-900 hover:text-[#af2324] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="ml-2 lg:ml-4 px-4 lg:px-6 py-2 text-sm lg:text-base font-sans font-semibold uppercase tracking-wide bg-[#af2324] text-white rounded-full hover:bg-[#d12e2f] transition-colors duration-200"
              >
                Join the Circle
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-[#af2324] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-base font-sans uppercase tracking-wide text-gray-900 hover:text-[#af2324] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block mt-4 px-4 py-3 text-center text-base font-sans font-semibold uppercase tracking-wide bg-[#af2324] text-white rounded-full hover:bg-[#d12e2f] transition-colors duration-200"
                >
                  Join the Circle
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}

