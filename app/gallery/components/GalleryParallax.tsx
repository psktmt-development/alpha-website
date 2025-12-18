"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const images = [
  "/gallery/0Z0A3048.JPG",
  "/gallery/0Z0A2863.JPG",
  "/gallery/0Z0A2192.png",
  "/gallery/0Z0A2070.JPG",
  "/gallery/0K6A8206.JPG",
  "/gallery/0B4A0588.JPG",
  "/gallery/0B4A0565.JPG",
  "/gallery/0B4A0365.JPG",
  "/gallery/0B4A0194.JPG",
  "/gallery scroll images/DSC01118.JPG",
  "/gallery scroll images/8K6A1522.JPG",
  "/gallery scroll images/0Z0A3082.JPG",
  "/gallery scroll images/0Z0A2873.JPG",
  "/gallery scroll images/gallery-1.JPG",
  "/gallery scroll images/gallery-2.jpg",
];

export function GalleryParallax() {
  return <ParallaxScroll images={images} />;
}
