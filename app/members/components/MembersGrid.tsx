"use client";

import { ParallaxSection } from "@/app/homepage/components/ParallaxSection";

const logos: string[] = [
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

export function MembersGrid() {
  return (
    <ParallaxSection
      id="membership"
      className="w-full bg-white py-12 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#af2324] font-semibold">
            Members
          </p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            The Alpha Circle Network
          </h3>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-6 py-6">
            {logos.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="flex items-center justify-center p-4"
              >
                <img
                  src={src}
                  alt="Member logo"
                  className="max-h-20 max-w-[150px] object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
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

