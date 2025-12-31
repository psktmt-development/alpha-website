"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const images = [
  "/gallery/gallery scroll images/0Z0A2070.JPG",
  "/gallery/gallery scroll images/0Z0A2863.JPG",
  "/gallery/gallery scroll images/0Z0A2873.JPG",
  "/gallery/gallery scroll images/0Z0A3082.JPG",
  "/gallery/gallery scroll images/DSC01118.JPG",
  "/gallery/gallery scroll images/gallery-1.JPG",
  "/gallery/gallery scroll images/gallery-2.jpg",
];

export function GalleryParallax() {
  return <ParallaxScroll images={images} />;
}
