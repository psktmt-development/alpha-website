"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlobalExpansionCard } from "./GlobalExpansionCard";
import { ParallaxSection } from "./ParallaxSection";

type Pillar = {
  title: string;
  description: string;
  link?: string;
};

const alphaPillars: Pillar[] = [
  {
    title: "Legacy & Vision",
    description: "Strengthening India’s legacy businesses for global impact.",
    link: "#",
  },
  {
    title: "Leadership & Learning",
    description: "Elevating thought through curated masterclasses.",
    link: "#",
  },
  {
    title: "Purpose & Contribution",
    description: "Giving back through policy, mentorship, and innovation.",
    link: "#",
  },
  {
    title: "Next-Gen Engagement",
    description: "Empowering second-generation entrepreneurs with dedicated tracks.",
    link: "#",
  },
  {
    title: "Impact & Influence",
    description: "Shaping policy, supporting education, and funding innovation.",
    link: "#",
  },
  {
    title: "Global Perspective",
    description: "Rooted in Indian values, growing through a global HNI network.",
    link: "#",
  },
];

function PillarCard({
  title,
  description,
  className,
}: Pillar & { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-full w-full rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300",
        "group-hover:border-[#af2324] group-hover:shadow-lg",
        className
      )}
    >
      <div className="h-1 w-8 rounded-full bg-[#af2324]" />
      <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
    </div>
  );
}

export function AlphaPillarsHover() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ParallaxSection
      id="membership"
      className="w-full bg-white py-12 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">
            The Alpha Circle
          </h2>
          <p className="text-[#af2324] text-xl md:text-2xl font-semibold">Our Pillars</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {alphaPillars.map((item, idx) => (
              <a
                key={item.title + idx}
                href={item.link}
                className="relative block h-full w-full p-2 group"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full rounded-3xl bg-[#af2324]"
                      layoutId="pillars-hover-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
                    />
                  )}
                </AnimatePresence>

                <PillarCard
                  title={item.title}
                  description={item.description}
                  className="relative z-10"
                />
              </a>
            ))}
          </div>

          <div className="flex justify-center">
            <GlobalExpansionCard inline />
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

