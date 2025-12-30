"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

const nextEvent = { day: "9", month: "JAN", year: "2026" };

function TimelineDemo() {
  const data = [
    {
      title: "Launch",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Alpha Circle began with a thoughtfully curated gathering that brought together accomplished leaders to set the foundation for meaningful, long-term relationships.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/events/launch/0Z0A3093.JPG"
              alt="Launch event"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/launch/0Z0A2863 (1).JPG"
              alt="Launch event"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/launch/0Z0A2825.JPG"
              alt="Launch event"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/launch/0Z0A2798.JPG"
              alt="Launch event"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Social Events",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Social gatherings designed to strengthen relationships through informal conversations, shared moments, and genuine connection beyond structured discussions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/events/social events/Alpha Circle-511.JPG"
              alt="Social event"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/social events/Alpha Circle-279.JPG"
              alt="Social event"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/social events/Alpha Circle-229.JPG"
              alt="Social event"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Speaker Sessions",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Sessions featuring accomplished leaders sharing experience-driven insights, practical wisdom, and perspectives shaped by years of leadership and execution.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/events/speaker sessions /DSC06503.jpeg"
              alt="Speaker session"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/speaker sessions /DSCF6433.JPG"
              alt="Speaker session"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/speaker sessions /DSCF6411.JPG"
              alt="Speaker session"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/speaker sessions /DSCF6379.JPG"
              alt="Speaker session"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Strategy Sessions",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Focused sessions where founders and business leaders engaged in deep conversations around growth, direction, and long-term decision-making.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/events/strategy_session_event_page /DSC02703.JPG"
              alt="Strategy session"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/strategy_session_event_page /Alpha Circle-90.jpg"
              alt="Strategy session"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/strategy_session_event_page /8K6A1402.JPG"
              alt="Strategy session"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/events/strategy_session_event_page /8K6A1385.JPG"
              alt="Strategy session"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
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
        <div className="max-w-7xl mx-auto">
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
              <div className="absolute top-6 left-6 md:top-8 md:left-8 text-white z-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  Upcoming Events
                </h2>
              </div>
              
              {/* Event Title on Image */}
              <div className="absolute top-1/2 left-6 md:left-8 -translate-y-1/2 text-white z-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  The Alpha Circle <br />
                  Speaker Session
                </h3>
              </div>
              
              {/* Date Card overlaid at the bottom */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10">
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
              </div>
            </div>
            {/* Red Accent Bar */}
            <div className="red-accent-bar"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Description Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4 md:mb-6">
              Transformative Experiences that Shape Industries
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-[#BB2324] mb-4 md:mb-6 leading-relaxed">
              Not Just an Event — A Movement in Motion
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              At The Alpha Circle, events aren't just meetings — they're catalysts for transformation. From intimate leadership roundtables to grand summits in palaces and global business hubs, every Alpha Circle event is designed to spark real dialogue, meaningful relationships, and actionable outcomes.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Whether you're engaging with policymakers, global investors, or next-gen entrepreneurs, each gathering is a doorway to deeper growth, innovation, and collaboration.
            </p>
          </div>
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
        <section className="w-full">
          <TimelineDemo />
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Alpha Circle events are designed to foster meaningful relationships through thoughtful gatherings, shared perspectives, and enduring conversations. Each experience reflects our commitment to trust, depth, and long-term connection.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
