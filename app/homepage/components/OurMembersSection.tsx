"use client";

import React from "react";
import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";

const memberLogos: string[] = [
  "/member logos/The-Alpha-Circle-01.png",
  "/member logos/The-Alpha-Circle-03.png",
  "/member logos/The-Alpha-Circle-04.png",
  "/member logos/The-Alpha-Circle-05.png",
  "/member logos/The-Alpha-Circle-06.png",
  "/member logos/The-Alpha-Circle-07.png",
  "/member logos/The-Alpha-Circle-08.png",
  "/member logos/The-Alpha-Circle-09.png",
  "/member logos/The-Alpha-Circle-10.png",
  "/member logos/The-Alpha-Circle-11.png",
  "/member logos/The-Alpha-Circle-12.png",
  "/member logos/The-Alpha-Circle-13.png",
  "/member logos/The-Alpha-Circle-14.png",
  "/member logos/The-Alpha-Circle-15.png",
  "/member logos/The-Alpha-Circle-16.png",
  "/member logos/The-Alpha-Circle-17.png",
  "/member logos/The-Alpha-Circle-18.png",
  "/member logos/The-Alpha-Circle-19.png",
  "/member logos/The-Alpha-Circle-20.png",
  "/member logos/The-Alpha-Circle-21.png",
  "/member logos/The-Alpha-Circle-22.png",
  "/member logos/The-Alpha-Circle-23.png",
  "/member logos/The-Alpha-Circle-24.png",
  "/member logos/The-Alpha-Circle-25.png",
  "/member logos/The-Alpha-Circle-26.png",
  "/member logos/The-Alpha-Circle-27.png",
  "/member logos/The-Alpha-Circle-28.png",
  "/member logos/The-Alpha-Circle-29.png",
  "/member logos/The-Alpha-Circle-30.png",
  "/member logos/The-Alpha-Circle-31.png",
  "/member logos/The-Alpha-Circle-32.png",
  "/member logos/The-Alpha-Circle-33.png",
  "/member logos/The-Alpha-Circle-34.png",
  "/member logos/The-Alpha-Circle-36.png",
  "/member logos/The-Alpha-Circle-37.png",
  "/member logos/The-Alpha-Circle-38.png",
  "/member logos/The-Alpha-Circle-39.png",
  "/member logos/The-Alpha-Circle-40.png",
  "/member logos/The-Alpha-Circle-41.png",
  "/member logos/The-Alpha-Circle-43.png",
  "/member logos/The-Alpha-Circle-44.png",
  "/member logos/The-Alpha-Circle-45.png",
  "/member logos/The-Alpha-Circle-46.png",
  "/member logos/The-Alpha-Circle-47.png",
  "/member logos/The-Alpha-Circle-50.png",
  "/member logos/The-Alpha-Circle-51.png",
  "/member logos/The-Alpha-Circle-52.png",
  "/member logos/The-Alpha-Circle-56.png",
  "/member logos/The-Alpha-Circle-57.png",
  "/member logos/The-Alpha-Circle-58.png",
  "/member logos/The-Alpha-Circle-59.png",
  "/member logos/The-Alpha-Circle-60.png",
  "/member logos/The-Alpha-Circle-63.png",
  "/member logos/The-Alpha-Circle-64.png",
  "/member logos/582697826_18068062949613998_1850375943596812759_n.jpg",
  "/member logos/Untitled-1.png",
  "/member logos/Untitled-2.png",
];

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  repeat = 2,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  repeat?: number;
  [key: string]: any;
}) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:2rem] [gap:var(--gap)] flex-row ${className ?? ""}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row ${
              reverse ? "[animation-direction:reverse]" : ""
            } ${
              pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
            }`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

const LogoItem = React.memo(function LogoItem({ src }: { src: string }) {
  return (
    <div className="flex items-center justify-center h-24 w-32 md:h-28 md:w-40 px-4 shrink-0 perspective-1000">
      <motion.div
        className="w-full h-full flex items-center justify-center"
        whileHover={{
          scale: 1.3,
          z: 100,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={src}
          alt="Member logo"
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
});
LogoItem.displayName = "LogoItem";

export function OurMembersSection() {
  return (
    <ParallaxSection
      id="our-members"
      className="w-full bg-white py-16 px-4 md:px-8 lg:px-12"
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto space-y-8">
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">
            Our Members
          </h2>
          <p className="text-[#af2324] text-lg md:text-xl font-semibold">
            Trusted Partners & Industry Leaders
          </p>
        </motion.div>

        <div className="relative mx-auto w-full overflow-hidden py-6">
          <Marquee pauseOnHover className="[--duration:50s]">
            {memberLogos.map((src, idx) => (
              <LogoItem key={`${src}-${idx}`} src={src} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </ParallaxSection>
  );
}

