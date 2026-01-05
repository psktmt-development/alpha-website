"use client";

import { GalleryMarquee } from "./components/GalleryMarquee";
import { GalleryMain } from "./components/GalleryMain";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/40 to-white text-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #af2324 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10">
        <GalleryMarquee />
        <GalleryMain />
      </div>
    </main>
  );
}




