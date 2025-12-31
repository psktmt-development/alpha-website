"use client";

import { motion } from "framer-motion";

export function KnowledgeInsightsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#af2324]">
            Knowledge & Insights
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Top Left - SIGNATURE SEGMENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#af2324] rounded-xl p-8 md:p-10 shadow-lg"
          >
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white opacity-90">
                SIGNATURE SEGMENT
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Alpha Circle Strategy Sessions
              </h3>
              <div className="space-y-3 text-white text-base md:text-lg leading-relaxed">
                <p>
                  In our meetings, Brigadier (Dr) Inder Sethi shares practical ideas on leadership, strategy, and innovation.
                </p>
                <p>
                  Designed for Alpha Leaders who want more than tactics: a new perspective on shaping your legacy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Top Right - DEDICATED SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-100"
          >
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#af2324]">
                DEDICATED SECTION
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#af2324]">
                Next-Gen Lens
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                For second and third-generation entrepreneurs navigating modern leadership.
              </p>
              <div className="pt-2">
                <p className="text-[#af2324] font-bold text-sm md:text-base mb-3">
                  FEATURED READS:
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-[#af2324] mr-2">•</span>
                    <span>What Success Looks Like at 30.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#af2324] mr-2">•</span>
                    <span>Bridging Generations in Business.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#af2324] mr-2">•</span>
                    <span>Social Capital: The New Wealth.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Bottom Left - THOUGHT LEADERSHIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black rounded-xl p-8 md:p-10 shadow-lg"
          >
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white opacity-90">
                THOUGHT LEADERSHIP
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Alpha Perspectives
              </h3>
              <p className="text-white text-base md:text-lg leading-relaxed">
                Essays and opinion pieces by Council Members, curated leaders, and global mentors.
              </p>
              <div className="pt-2">
                <p className="text-white font-bold text-sm md:text-base mb-3">
                  RECENT TOPICS:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>The Future of Indian Family Businesses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>From Scale to Legacy: Redefining Growth.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>The Emotional Intelligence of Entrepreneurs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right - CLOSED-DOOR WISDOM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-100"
          >
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#af2324]">
                CLOSED-DOOR WISDOM
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#af2324]">
                Council Conversations
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Snippets and summaries from high-value conversations. Authentic, unfiltered, and full of lived wisdom.
              </p>
              <div className="pt-2">
                <p className="text-[#af2324] font-bold text-sm md:text-base mb-3">
                  HIGHLIGHTS:
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-[#af2324] mr-2">•</span>
                    <span>How to Build a Legacy Without Losing Your Peace.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#af2324] mr-2">•</span>
                    <span>Disruption vs. Discipline: When to Lead with Instinct.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#af2324] mr-2">•</span>
                    <span>What Billionaires Talk About When the Cameras Are Off.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


