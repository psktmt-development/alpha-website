"use client";

import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";

export function GlobalExpansionBento() {
  return (
    <ParallaxSection
      id="events"
      className="w-full bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12 flex justify-center"
    >
      <div className="w-full max-w-5xl">
        {/* Knowledge & Insights */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-center font-serif text-4xl text-[#af2324]">Knowledge & Insights</h2>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-[1.6fr_1fr] md:auto-rows-auto">
            {/* Strategy Sessions - red */}
            <motion.div 
              className="rounded-2xl bg-gradient-to-br from-[#af2324] to-[#8a1b1c] p-6 text-white shadow-[0_15px_30px_rgba(0,0,0,0.15)] cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-white/80">
                Signature Segment
              </span>
              <h2 className="text-2xl font-bold leading-tight">Alpha Circle Strategy Sessions</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                In our meetings, <strong>Brigadier (Dr) Inder Sethi</strong> shares practical ideas on leadership, strategy, and innovation.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Designed for Alpha Leaders who want more than tactics: a new perspective on shaping your legacy.
              </p>
            </motion.div>

            {/* Next-Gen Lens - white */}
            <motion.div 
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)] cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#af2324]">
                Dedicated Section
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Next-Gen Lens</h2>
              <p className="mt-2 text-sm text-gray-700">
                For second and third-generation entrepreneurs navigating modern leadership.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-gray-600">Featured Reads:</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-gray-600">
                <li>What Success Looks Like at 30.</li>
                <li>Bridging Generations in Business.</li>
                <li>Social Capital: The New Wealth.</li>
              </ul>
            </motion.div>

            {/* Alpha Perspectives - dark */}
            <motion.div 
              className="rounded-2xl bg-[#1a1a1a] p-6 text-white shadow-[0_12px_24px_rgba(0,0,0,0.2)] cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#af2324]">
                Thought Leadership
              </span>
              <h2 className="text-2xl font-bold leading-tight">Alpha Perspectives</h2>
              <p className="mt-2 text-sm text-white/85">
                Essays and opinion pieces by Council Members, curated leaders, and global mentors.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/80">Recent Topics:</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-white/80">
                <li>The Future of Indian Family Businesses.</li>
                <li>From Scale to Legacy: Redefining Growth.</li>
                <li>The Emotional Intelligence of Entrepreneurs.</li>
              </ul>
            </motion.div>

            {/* Council Conversations - white */}
            <motion.div 
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)] cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#af2324]">
                Closed-Door Wisdom
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Council Conversations</h2>
              <p className="mt-2 text-sm text-gray-700">
                Snippets and summaries from high-value conversations. Authentic, unfiltered, and full of lived wisdom.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-gray-600">Highlights:</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-gray-600">
                <li>How to Build a Legacy Without Losing Your Peace.</li>
                <li>Disruption vs. Discipline: When to Lead with Instinct.</li>
                <li>What Billionaires Talk About When the Cameras Are Off.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
}

