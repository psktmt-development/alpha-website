"use client";

import { GalleryMarquee } from "./components/GalleryMarquee";
import { GalleryCarousel } from "./components/GalleryCarousel";
import { GalleryMain } from "./components/GalleryMain";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <GalleryMarquee />
      <GalleryCarousel />
      <GalleryMain />
    </main>
  );
}




