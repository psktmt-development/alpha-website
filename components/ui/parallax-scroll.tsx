"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxScrollProps = {
  images: string[];
  className?: string;
};

export function ParallaxScroll({ images, className }: ParallaxScrollProps) {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("relative h-[40rem] w-full overflow-y-auto items-start", className)}
      ref={gridRef}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 px-6 py-20 md:grid-cols-2 lg:grid-cols-3 md:px-10">
        <div className="grid gap-10">
          {firstPart.map((src, idx) => (
            <motion.div style={{ y: translateFirst }} key={`grid-1-${idx}`}>
              <img
                src={src}
                className="h-80 w-full rounded-lg object-cover object-left-top"
                height={400}
                width={400}
                alt="gallery item"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10">
          {secondPart.map((src, idx) => (
            <motion.div style={{ y: translateSecond }} key={`grid-2-${idx}`}>
              <img
                src={src}
                className="h-80 w-full rounded-lg object-cover object-left-top"
                height={400}
                width={400}
                alt="gallery item"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10">
          {thirdPart.map((src, idx) => (
            <motion.div style={{ y: translateThird }} key={`grid-3-${idx}`}>
              <img
                src={src}
                className="h-80 w-full rounded-lg object-cover object-left-top"
                height={400}
                width={400}
                alt="gallery item"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


