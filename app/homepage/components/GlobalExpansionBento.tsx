"use client";

import { ParallaxSection } from "./ParallaxSection";

export function GlobalExpansionBento() {
  return (
    <ParallaxSection
      id="events"
      className="w-full bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12 flex justify-center"
    >
      <div className="w-full max-w-5xl space-y-16">
        <style>{`
          @keyframes wobble {
            0% { transform: translate3d(0,0,0) rotate(0deg); }
            15% { transform: translate3d(-1px, -1px, 0) rotate(-0.5deg); }
            30% { transform: translate3d(1px, -0.5px, 0) rotate(0.4deg); }
            45% { transform: translate3d(-1px, 1px, 0) rotate(-0.3deg); }
            60% { transform: translate3d(1px, 1px, 0) rotate(0.5deg); }
            75% { transform: translate3d(-0.5px, 0, 0) rotate(-0.4deg); }
            100% { transform: translate3d(0,0,0) rotate(0deg); }
          }
          .wobble-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .wobble-card:hover {
            animation: wobble 0.7s ease;
            box-shadow: 0 18px 34px rgba(0,0,0,0.2);
          }
        `}</style>

        {/* Expansion Bento Grid */}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-[1.6fr_1fr] md:auto-rows-auto">
          {/* Main red card */}
          <div className="wobble-card relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#af2324] to-[#8a1b1c] p-6 text-white shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.08em] text-white/80">
              Our Roots
            </span>
            <h2 className="text-2xl font-bold leading-tight">The Alpha Circle</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              From our royal roots at Falaknuma Palace, we are now expanding globally.
            </p>
            <div className="mt-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-white/10" />
          </div>

          {/* Dubai card */}
          <div className="wobble-card rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">
              Upcoming
            </span>
            <h2 className="text-3xl font-bold text-[#af2324] leading-tight">Dubai</h2>
            <p className="mt-1 text-lg font-semibold text-[#af2324]">2025–2026</p>
            <p className="mt-4 text-sm text-gray-600">
              Expanding our royal circle to the Emirates.
            </p>
          </div>

          {/* Wide card for cities */}
          <div className="wobble-card col-span-1 md:col-span-2 flex flex-col gap-4 rounded-2xl bg-[#1a1a1a] p-6 text-white shadow-[0_12px_24px_rgba(0,0,0,0.2)] md:flex-row md:items-center">
            <div className="flex-1 space-y-2">
              <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#af2324]">
                Now Active
              </span>
              <h2 className="text-2xl font-bold leading-tight">Our Circles</h2>
              <p className="text-sm text-white/80">Establishing presence across major Indian metros.</p>
            </div>
            <div className="flex flex-1 flex-wrap gap-2">
              {["Hyderabad","Bangalore","Vizag","Mumbai","Delhi","Chennai","Kolkata"].map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-[#af2324] bg-[rgba(175,35,36,0.12)] px-3 py-2 text-sm font-medium text-[#ff8a8b]"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Knowledge & Insights */}
        <div className="space-y-8">
          <h2 className="text-center font-serif text-4xl text-[#af2324]">Knowledge & Insights</h2>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-[1.6fr_1fr] md:auto-rows-auto">
            {/* Strategy Sessions - red */}
            <div className="wobble-card rounded-2xl bg-gradient-to-br from-[#af2324] to-[#8a1b1c] p-6 text-white shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.08em] text-white/80">
                Signature Segment
              </span>
              <h2 className="text-2xl font-bold leading-tight">Alpha Circle Strategy Sessions</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                In our meetings, <strong>Brigadier (Dr) Inder Sethi</strong> shares practical ideas on leadership, strategy, and innovation.
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/85">
                Designed for Alpha Leaders who want more than tactics: a new perspective on shaping your legacy.
              </p>
            </div>

            {/* Next-Gen Lens - white */}
            <div className="wobble-card rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#af2324]">
                Dedicated Section
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Next-Gen Lens</h2>
              <p className="mt-2 text-sm text-gray-700">
                For second and third-generation entrepreneurs navigating modern leadership.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-gray-600">Featured Reads:</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-700">
                <li>What Success Looks Like at 30.</li>
                <li>Bridging Generations in Business.</li>
                <li>Social Capital: The New Wealth.</li>
              </ul>
            </div>

            {/* Alpha Perspectives - dark */}
            <div className="wobble-card rounded-2xl bg-[#1a1a1a] p-6 text-white shadow-[0_12px_24px_rgba(0,0,0,0.2)]">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#af2324]">
                Thought Leadership
              </span>
              <h2 className="text-2xl font-bold leading-tight">Alpha Perspectives</h2>
              <p className="mt-2 text-sm text-white/85">
                Essays and opinion pieces by Council Members, curated leaders, and global mentors.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/80">Recent Topics:</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-white/85">
                <li>The Future of Indian Family Businesses.</li>
                <li>From Scale to Legacy: Redefining Growth.</li>
                <li>The Emotional Intelligence of Entrepreneurs.</li>
              </ul>
            </div>

            {/* Council Conversations - white */}
            <div className="wobble-card rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#af2324]">
                Closed-Door Wisdom
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Council Conversations</h2>
              <p className="mt-2 text-sm text-gray-700">
                Snippets and summaries from high-value conversations. Authentic, unfiltered, and full of lived wisdom.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-gray-600">Highlights:</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-700">
                <li>How to Build a Legacy Without Losing Your Peace.</li>
                <li>Disruption vs. Discipline: When to Lead with Instinct.</li>
                <li>What Billionaires Talk About When the Cameras Are Off.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

