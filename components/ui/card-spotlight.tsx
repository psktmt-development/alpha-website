"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speedX: number; speedY: number }>>([]);

  // Initialize particles
  useEffect(() => {
    const particleCount = 25;
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 6, // Size between 6-12px (bigger)
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    }));
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [particles.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.addEventListener("focus", handleFocus);
      div.addEventListener("blur", handleBlur);
      return () => {
        div.removeEventListener("focus", handleFocus);
        div.removeEventListener("blur", handleBlur);
      };
    }
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-3xl border border-neutral-800 bg-gradient-to-r from-neutral-900 to-neutral-800 p-8 overflow-hidden",
        className
      )}
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-[#af2324] opacity-80 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.size * 1.5}px rgba(175, 35, 36, 0.6)`,
              transform: `translate(-50%, -50%)`,
              filter: `blur(${particle.size * 0.3}px)`,
            }}
          />
        ))}
      </div>

      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(175, 35, 36, 0.25), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};
