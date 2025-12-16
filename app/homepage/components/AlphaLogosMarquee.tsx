"use client";

import { useEffect, useMemo, useState } from "react";
import { ParallaxSection } from "./ParallaxSection";

const logos: string[] = [
  "/all/The-Alpha-Circle-01.png",
  "/all/The-Alpha-Circle-03.png",
  "/all/The-Alpha-Circle-04.png",
  "/all/The-Alpha-Circle-05.png",
  "/all/The-Alpha-Circle-06.png",
  "/all/The-Alpha-Circle-07.png",
  "/all/The-Alpha-Circle-08.png",
  "/all/The-Alpha-Circle-09.png",
  "/all/The-Alpha-Circle-10.png",
  "/all/The-Alpha-Circle-11.png",
  "/all/The-Alpha-Circle-12.png",
  "/all/The-Alpha-Circle-13.png",
  "/all/The-Alpha-Circle-14.png",
  "/all/The-Alpha-Circle-15.png",
  "/all/The-Alpha-Circle-16.png",
  "/all/The-Alpha-Circle-17.png",
  "/all/The-Alpha-Circle-18.png",
  "/all/The-Alpha-Circle-19.png",
  "/all/The-Alpha-Circle-20.png",
  "/all/The-Alpha-Circle-21.png",
  "/all/The-Alpha-Circle-22.png",
  "/all/The-Alpha-Circle-23.png",
  "/all/The-Alpha-Circle-24.png",
  "/all/The-Alpha-Circle-25.png",
  "/all/The-Alpha-Circle-26.png",
  "/all/The-Alpha-Circle-27.png",
  "/all/The-Alpha-Circle-28.png",
  "/all/The-Alpha-Circle-29.png",
  "/all/The-Alpha-Circle-30.png",
  "/all/The-Alpha-Circle-31.png",
  "/all/The-Alpha-Circle-32.png",
  "/all/The-Alpha-Circle-33.png",
  "/all/The-Alpha-Circle-34.png",
  "/all/The-Alpha-Circle-36.png",
  "/all/The-Alpha-Circle-37.png",
  "/all/The-Alpha-Circle-38.png",
  "/all/The-Alpha-Circle-39.png",
  "/all/The-Alpha-Circle-40.png",
  "/all/The-Alpha-Circle-41.png",
  "/all/The-Alpha-Circle-43.png",
  "/all/The-Alpha-Circle-44.png",
  "/all/The-Alpha-Circle-45.png",
  "/all/The-Alpha-Circle-46.png",
  "/all/The-Alpha-Circle-47.png",
  "/all/The-Alpha-Circle-50.png",
  "/all/The-Alpha-Circle-51.png",
  "/all/The-Alpha-Circle-52.png",
  "/all/The-Alpha-Circle-56.png",
  "/all/The-Alpha-Circle-57.png",
  "/all/The-Alpha-Circle-58.png",
  "/all/The-Alpha-Circle-59.png",
  "/all/The-Alpha-Circle-60.png",
  "/all/The-Alpha-Circle-63.png",
  "/all/The-Alpha-Circle-64.png",
  "/all/582697826_18068062949613998_1850375943596812759_n.jpg",
  "/all/Untitled-1.png",
  "/all/Untitled-2.png",
];

const DISPLAY_COUNT = 4;
const AUTO_MS = 2200;

export function AlphaLogosMarquee() {
  const [start, setStart] = useState(0);

  const visible = useMemo(() => {
    const items: string[] = [];
    for (let i = 0; i < DISPLAY_COUNT; i++) {
      items.push(logos[(start + i) % logos.length]);
    }
    return items;
  }, [start]);

  useEffect(() => {
    const id = setInterval(() => {
      setStart((prev) => (prev + 1) % logos.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, []);

  const next = () => setStart((prev) => (prev + 1) % logos.length);
  const prev = () => setStart((prev) => (prev - 1 + logos.length) % logos.length);

  return (
    <ParallaxSection
      id="gallery"
      className="w-full bg-white py-12 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#af2324] font-semibold">
              Members
            </p>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              The Alpha Circle Network
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full border border-[#af2324] text-[#af2324] hover:bg-[#af2324] hover:text-white transition-colors"
              aria-label="Previous logos"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full border border-[#af2324] text-[#af2324] hover:bg-[#af2324] hover:text-white transition-colors"
              aria-label="Next logos"
            >
              ›
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-6">
            {visible.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="flex items-center justify-center"
              >
                <img
                  src={src}
                  alt="Member logo"
                  className="max-h-20 max-w-[150px] object-contain mix-blend-multiply"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

