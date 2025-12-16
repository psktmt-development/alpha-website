import Link from "next/link";
import { ParallaxSection } from "./ParallaxSection";

export function ContactSection() {
  return (
    <ParallaxSection
      id="contact"
      className="w-full bg-[#0f0f0f] text-white py-14 px-4 md:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb3b3]">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
            Ready to align with The Alpha Circle?
          </h2>
          <p className="text-base text-white/80 max-w-3xl">
            Tell us about your goals and we will connect you with the right circle of leaders, innovators,
            and builders.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-white/80 text-sm md:text-base">
          <p className="font-semibold text-white">We typically respond within one business day.</p>
          <p>Prefer email? Use the button below to start the conversation.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="mailto:hello@alphacircle.com"
            className="inline-flex items-center justify-center rounded-full bg-[#af2324] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#951d1e] transition-colors"
          >
            Email Us
          </Link>
          <Link
            href="#membership"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:border-white/60 transition-colors"
          >
            Explore Membership
          </Link>
        </div>
      </div>
    </ParallaxSection>
  );
}


