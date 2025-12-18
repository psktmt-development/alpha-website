"use client";

import React from "react";
import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";

type Difference = {
  id: string;
  title: string;
  body: string;
};

const differences: Difference[] = [
  {
    id: "access",
    title: "Investor & Global Access",
    body: "Cross-border opportunities with access to international leaders and investors.",
  },
  {
    id: "support",
    title: "360° Member Support",
    body: "Scaling with systems and sustainability. We support the whole founder journey.",
  },
  {
    id: "values",
    title: "Shared Values & Culture",
    body: "Where relationships matter more than business cards. Genuine bonds rooted in trust.",
  },
  {
    id: "strategy",
    title: "Strategy Circles",
    body: "Closed-door sessions with top minds to sharpen your business strategies.",
  },
  {
    id: "policy",
    title: "Policy Influence",
    body: "Direct access to bureaucrats and change-makers to shape industry impact.",
  },
  {
    id: "nextgen",
    title: "Next-Gen Engagement",
    body: "Legacy transition, resilience-driven leadership, and succession focus.",
  },
];

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:30s] [--gap:1rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className ?? ""}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] ${
              vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"
            } ${reverse ? "[animation-direction:reverse]" : ""} ${
              pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
            }`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

const DifferenceCard = React.memo(function DifferenceCard({
  title,
  body,
}: Pick<Difference, "title" | "body">) {
  return (
    <div className="w-64 h-full flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-red-600 hover:shadow-lg">
      <div className="h-1 w-8 rounded-full bg-red-600" />
      <h3 className="mt-4 text-base font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
    </div>
  );
});
DifferenceCard.displayName = "DifferenceCard";

export function AlphaAdvantageMarquee() {
  return (
    <ParallaxSection
      id="blog"
      className="w-full bg-white py-10 px-4 md:px-8 lg:px-12"
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        @keyframes marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-100% - var(--gap))); }
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        .animate-marquee-vertical {
          animation: marquee-vertical var(--duration) linear infinite;
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto space-y-6">
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">The Alpha Advantage</h2>
          <p className="text-neutral-500 text-base md:text-lg">Where Visionaries Align. Globally.</p>
        </motion.div>

        <div className="relative mx-auto w-full max-w-5xl overflow-hidden py-6">
          <Marquee pauseOnHover className="[--duration:28s]">
            {differences.map((item) => (
              <DifferenceCard key={item.id} title={item.title} body={item.body} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Embedded Instagram reel */}
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-neutral-200 shadow-sm bg-white">
            <iframe
              src="https://www.instagram.com/reel/DIBx9-fSoIv/embed"
              allowtransparency="true"
              allow="encrypted-media; clipboard-write"
              scrolling="no"
              className="w-full h-[700px]"
            />
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
}

