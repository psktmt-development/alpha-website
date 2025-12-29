"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useJoinCircle } from "@/components/ui/join-circle-provider";

// Dynamically import the bright 3D model component with SSR disabled
const BrightModel3D = dynamic(
  () => import("./BrightModel3D").then((mod) => mod.BrightModel3D),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-gray-400">Loading 3D Model...</div>
      </div>
    )
  }
);

/**
 * AlphaHeroSection
 * -----------------
 * Hero section for About Us page.
 * - MASSIVE curved image shape (rounded-bl-[600px])
 * - BOLD, RANDOM abstract curves in Alpha red (#af2324) and Black
 * - Tailored for The Alpha Circle branding
 */
export default function AlphaHeroSection() {
  const { openModal } = useJoinCircle();
  
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white selection:bg-[#af2324] selection:text-white">
      {/* HERO CONTAINER */}
      <div className="relative flex flex-col md:grid md:grid-cols-2 min-h-screen">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 order-2 md:order-1 bg-white"
        >
          <div className="max-w-lg relative">
            {/* Decorative Red Dot */}
            <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-[#af2324] hidden md:block" />
            
            <h1 className="font-dm-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-gray-900 mb-8 tracking-tight">
              Where Visionaries<br />
              <span className="italic text-[#af2324] text-2xl md:text-4xl lg:text-4xl">
                Align Globally
              </span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md border-l-4 border-[#af2324] pl-6">
              An invite-only global collective of industry leaders, business pioneers, 
              and generational entrepreneurs united by a vision for transformative leadership.
            </p>
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 rounded-full bg-[#af2324] px-10 py-5 font-semibold text-white shadow-xl shadow-red-900/20 hover:bg-black transition-all duration-300"
            >
              Join The Circle
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[60vh] md:h-screen overflow-visible order-1 md:order-2 md:ml-[-50px] z-20"
        >
          {/* ABSTRACT BOLD CURVES (Behind Main Image) 
              These are randomized, asymmetric SVG shapes instead of neat layers.
          */}
          <svg 
            className="absolute -bottom-[20%] -left-[30%] w-[180%] h-[150%] z-0 pointer-events-none" 
            viewBox="0 0 200 200" 
            preserveAspectRatio="none"
          >
            {/* Massive Bold Red Swoosh - Asymmetric */}
            <path 
              d="M 0 200 Q 60 80 150 120 T 200 200 Z" 
              fill="#af2324" 
            />
            {/* Sharp Black Geometric Shape intersecting */}
            <path 
              d="M 40 200 Q 90 140 160 180 L 200 200 H 40 Z" 
              fill="black" 
            />
            {/* Floating Red Blob high up */}
            <path 
              d="M 180 50 Q 150 20 180 0 L 200 0 V 60 Z" 
              fill="#af2324" 
            />
          </svg>

          {/* MAIN 3D MODEL SHAPE */}
          <div className="w-full h-full rounded-bl-[150px] md:rounded-bl-[600px] overflow-hidden shadow-2xl relative bg-white z-10">
            
            {/* 3D MODEL */}
            <div className="absolute inset-0 z-10">
              <div className="w-full h-full">
                <BrightModel3D stlUrl="/The_Alpha_Circle (1).stl" color="#af2324" />
              </div>
            </div>
            {/* INTERNAL DECORATIVE CURVES (Inside the 3D Model) 
                Updated to match the 'random' bold aesthetic
            */}
            <svg 
              className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-20"
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
               {/* Bold Black Curve cutting sharply */}
               <path 
                 d="M 0 100 C 30 60 70 90 100 85 V 100 H 0 Z" 
                 fill="black" 
                 className="opacity-90"
               />
               
               {/* Solid Red Curve (#af2324) flowing opposite */}
               <path 
                 d="M 50 100 Q 75 70 100 95 V 100 H 50 Z" 
                 fill="#af2324" 
                 className="opacity-100"
               />
            </svg>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

