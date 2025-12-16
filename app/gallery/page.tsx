"use client";

import { AlphaCarousel } from "@/components/ui/alpha-carousel";

const slides = [
  {
    title: "Alpha Circle – Heritage",
    button: "Explore",
    src: "/hero-1.JPG",
  },
  {
    title: "Alpha Circle – Vision",
    button: "Explore",
    src: "/hero-2.JPG",
  },
  {
    title: "Leadership",
    button: "Meet the Founder",
    src: "/founder.JPG",
  },
  {
    title: "Global Presence",
    button: "Our Circles",
    src: "/gallery/0K6A8206.JPG",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#f7eaea] to-white py-24 px-4">
        <div className="relative z-10 mx-auto max-w-3xl text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-[#af2324] font-semibold">
            Gallery
          </p>
          <h1 className="text-4xl font-serif font-bold leading-tight md:text-5xl">
            Signature Moments from The Alpha Circle
          </h1>
          <p className="text-base text-gray-700 md:text-lg">
            A curated carousel featuring highlights from our circles, leadership, and global expansion.
          </p>
        </div>
        <div className="relative z-10 mt-12 w-full flex justify-center">
          <AlphaCarousel slides={slides} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white pointer-events-none" />
      </section>
    </main>
  );
}



