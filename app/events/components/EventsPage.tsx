"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const nextEvent = { day: "9", month: "JAN", year: "2026" };

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

function TimelineDemo() {
  const data = [
    {
      title: "Launch",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-800 md:text-base lg:text-lg dark:text-neutral-200">
            Alpha Circle began with a private gathering at Falaknuma Palace, bringing together a trusted circle of founders and leaders for meaningful conversations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/launch/0Z0A3093.JPG"
                alt="Alpha Circle Launch Event"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/launch/0Z0A2863 (1).JPG"
                alt="Alpha Circle Launch Event"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/launch/0Z0A2825.JPG"
                alt="Alpha Circle Launch Event"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/launch/0Z0A2798.JPG"
                alt="Alpha Circle Launch Event"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] col-span-2">
              <Image
                src="/launch/0Z0A2225.JPG"
                alt="Alpha Circle Launch Event"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Strategy Sessions",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-800 md:text-base lg:text-lg dark:text-neutral-200">
            Private strategy discussions curated for senior founders and decision-makers.
            Each session enabled the exchange of insights on growth, governance, and long-term vision.
            The environment prioritized discretion, depth, and trust.
            Relationships formed here extended well beyond the sessions themselves.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/strategy_session_event_page%20/DSC02703.JPG"
                alt="Alpha Circle Strategy Session"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/strategy_session_event_page%20/Alpha%20Circle-90.jpg"
                alt="Alpha Circle Strategy Session"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/strategy_session_event_page%20/8K6A1402.JPG"
                alt="Alpha Circle Strategy Session"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/strategy_session_event_page%20/8K6A1385.JPG"
                alt="Alpha Circle Strategy Session"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] col-span-2">
              <Image
                src="/strategy_session_event_page%20/8K6A0924.JPG"
                alt="Alpha Circle Strategy Session"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Social Events",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-800 md:text-base lg:text-lg dark:text-neutral-200">
            Intimate, private gatherings where relationships grew naturally beyond structure, agendas, and formal discussion.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/social events/Alpha Circle-229.JPG"
                alt="Alpha Circle Social Event"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/social events/Alpha Circle-279.JPG"
                alt="Alpha Circle Social Event"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] col-span-2">
              <Image
                src="/social events/Alpha Circle-511.JPG"
                alt="Alpha Circle Social Event"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Speaker Sessions",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-800 md:text-base lg:text-lg dark:text-neutral-200">
            Sessions featuring accomplished leaders sharing experience-driven insights, lessons, and perspectives shaped by long-term success.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/speaker sessions /DSCF6433.JPG"
                alt="Alpha Circle Speaker Session"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/speaker sessions /DSCF6411.JPG"
                alt="Alpha Circle Speaker Session"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/speaker sessions /DSCF6379.JPG"
                alt="Alpha Circle Speaker Session"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full rounded-lg overflow-hidden border-2 border-[#BB2324] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Image
                src="/speaker sessions /DSC06503.jpeg"
                alt="Alpha Circle Speaker Session"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

function BentoGridDemo() {
  return (
    <BentoGrid className="w-full max-w-[95vw] mx-auto md:auto-rows-[24rem] lg:auto-rows-[28rem] gap-6 md:gap-8">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

export function EventsPage() {

  return (
    <>
      <style jsx>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          color: #1a1a1a;
          margin: 0;
          padding: 0;
        }

        .header-bg {
          background-color: #0f1c24;
        }

        .hero-container {
          position: relative;
          background: linear-gradient(to bottom, #000000 50%, #ffffff 50%);
        }

        .contact-btn {
          background-color: #3b4d57;
          transition: background-color 0.3s ease;
        }

        .contact-btn:hover {
          background-color: #4b5d67;
        }

        .accent-underline {
          position: relative;
        }

        .accent-underline::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #a3b34e;
        }

        .red-accent-bar {
          height: 6px;
          background-color: #b33939;
          width: 100%;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
        }

        .custom-shadow {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>

      {/* Hero Section Wrapper */}
      <section className="hero-container px-6 md:px-12 pt-8 md:pt-12">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden custom-shadow bg-white">
            {/* Hero Image */}
            <div className="relative w-full h-[300px] md:h-[550px]">
              <Image
                src="/image.png"
                alt="Alpha Circle Event"
                fill
                className="object-cover brightness-75"
                priority
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Upcoming Events Text */}
              <motion.div 
                className="absolute top-6 left-6 md:top-8 md:left-8 text-white z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  Upcoming Events
                </h2>
              </motion.div>
              
              {/* Event Title on Image */}
              <motion.div 
                className="absolute top-1/2 left-6 md:left-8 -translate-y-1/2 text-white z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  The Alpha Circle <br />
                  Speaker Session
                </h3>
              </motion.div>
              
              {/* Date Card overlaid at the bottom */}
              <motion.div 
                className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-lg border shadow-lg p-4 md:p-5">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="text-3xl md:text-4xl font-bold text-[#BB2324] leading-none">
                      {nextEvent.day}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wide">
                        {nextEvent.month}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500">
                        {nextEvent.year}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Red Accent Bar */}
            <div className="red-accent-bar"></div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Description Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <motion.div 
            className="md:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transformative Experiences that Shape Industries
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl font-semibold text-[#BB2324] mb-4 md:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Not Just an Event — A Movement in Motion
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              At The Alpha Circle, events aren't just meetings — they're catalysts for transformation. From intimate leadership roundtables to grand summits in palaces and global business hubs, every Alpha Circle event is designed to spark real dialogue, meaningful relationships, and actionable outcomes.
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Whether you're engaging with policymakers, global investors, or next-gen entrepreneurs, each gathering is a doorway to deeper growth, innovation, and collaboration.
            </motion.p>
          </motion.div>
          <div className="md:col-span-6 flex items-center justify-center">
            <motion.div 
              className="relative w-full max-w-lg group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-400"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
              <Image
                src="/image copy.png"
                alt="Alpha Circle Event"
                width={800}
                height={600}
                  className="w-full h-auto rounded-lg transition-transform duration-400 group-hover:brightness-110"
              />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-br from-[#BB2324]/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Timeline Section */}
        <motion.section 
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <TimelineDemo />
        </motion.section>

        {/* Bento Grid Section */}
        <motion.section 
          className="min-h-screen w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 flex items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full">
            <BentoGridDemo />
          </div>
        </motion.section>
      </main>
    </>
  );
}
