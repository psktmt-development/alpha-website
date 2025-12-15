"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function FounderSection() {
  const founderImageUrl = "/founder.JPG";
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for text; keep image mostly fixed
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.9]);
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center bg-white py-10 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Section - Text Content */}
        <motion.div 
          className="flex flex-col space-y-6 -mt-8 lg:-mt-12"
          style={{ y: textY, opacity: textOpacity }}
        >
          {/* Small red heading */}
          <h2 className="text-[#af2324] text-sm font-semibold tracking-wider uppercase">
            THE ALPHA CIRCLE
          </h2>

          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
            Empowering Visionaries— Everywhere.
          </h1>

          {/* Description paragraphs */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              The Alpha Circle is an invite-only global industry leaders collective founded by Dr. Pulluri Srikanth. 
              We unite industrialists, business pioneers, and generational entrepreneurs who share a vision for 
              transformative leadership and sustainable growth.
            </p>
            <p className="text-lg">
              With a strong presence across India and our international launch in Dubai, The Alpha Circle serves 
              as a platform for collaboration, innovation, and meaningful impact across industries and borders.
            </p>
          </div>

          {/* Founder attribution */}
          <p className="text-[#af2324] text-base font-medium mt-8">
            — Dr. Pulluri Srikanth<br />
            <span className="text-[#af2324]">Founder, The Alpha Circle</span>
          </p>
        </motion.div>

        {/* Right Section - 3D Card with Founder Image */}
        <motion.div 
          className="flex justify-center lg:justify-start -mt-12 lg:-mt-8 lg:ml-24"
          style={{ y: imageY, opacity: imageOpacity, scale: imageScale }}
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-transparent relative group/card w-full max-w-sm md:max-w-md h-auto rounded-xl border-none">
              <CardItem
                translateZ="100"
                className="w-full"
              >
                <img
                  src={founderImageUrl}
                  height="1000"
                  width="1000"
                  className="w-full h-auto max-h-[70vh] object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Dr. Pulluri Srikanth - Founder, The Alpha Circle"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </section>
  );
}

