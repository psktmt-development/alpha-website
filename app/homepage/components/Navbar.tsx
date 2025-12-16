"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Events", href: "/#events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Membership", href: "/#membership" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact Us", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const current = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setAtTop(current < 8);

          if (!open) {
            const scrollingDown = current > lastScrollY;
            const pastThreshold = current > 80;
            setHidden(scrollingDown && pastThreshold);
          }

          setLastScrollY(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8 border-transparent shadow-none transition-colors ${
          atTop ? "bg-transparent backdrop-blur-0" : "bg-transparent backdrop-blur-0"
        }`}
      >
        <Link href="#home" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#af2324] text-white font-semibold">
            A
          </span>
          <span className="text-base font-semibold tracking-wide text-gray-900">
            The Alpha Circle
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#af2324]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="rounded-full bg-[#af2324] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#951d1e] transition-colors"
          >
            Join the Circle
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-800 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 border-b border-gray-100 bg-white px-4 py-3 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-2 text-base font-semibold text-gray-800 transition-colors hover:text-[#af2324]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#af2324] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#951d1e] transition-colors"
            >
              Join the Circle
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


