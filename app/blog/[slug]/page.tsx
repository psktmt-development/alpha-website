"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  author: string;
  authorImage?: string;
  date: string;
  readTime: string;
  heroImage: string;
  category: string;
}


const blogPosts: Record<string, BlogPost> = {
  "elite-networking-accelerate-growth": {
    slug: "elite-networking-accelerate-growth",
    title: "How Does Elite Networking Accelerate Growth for Modern Entrepreneurs? And Why The Alpha Circle Is the Community Built for the Next Generation of Leaders",
    author: "Dr Pulluri Srikanth",
    date: "December 4, 2025",
    readTime: "6 min read",
    heroImage: "/hero-1.JPG",
    category: "Networking",
    content: `In today's fast-moving business world, success is no longer just about what you know — it's about who you can reach, collaborate with, and learn from. This is where elite networking becomes a powerful accelerator for entrepreneurs. Unlike traditional networking, where connections are random and conversations are surface-level, elite networking is intentional, curated, and designed to build high-impact relationships that open doors.

This is exactly what The Alpha Circle stands for — a premium community crafted exclusively for ambitious entrepreneurs, leaders, creators, and innovators who want to grow faster together.

## Why Elite Networking Matters for Modern Entrepreneurs

### 1. Access to High-Value Connections

Elite networking isn't about collecting business cards — it's about connecting with decision-makers, investors, founders, and industry leaders who can genuinely impact your journey. These connections lead to strategic partnerships, faster introductions, and opportunities you simply can't find on LinkedIn or at generic events.

With The Alpha Circle, members span across sectors — from manufacturing, real estate, technology, infrastructure, finance to policy and global business. This cross-industry diversity ensures that your network isn't limited to one silo but spans many, offering broader growth potential and unique collaborations.

### 2. Real-World Insights From Experienced Leaders

When you surround yourself with top performers, you gain access to tactics, playbooks, and lessons that money can't buy. Through Alpha Circle meets, panel sessions, masterclasses, and informal circles, entrepreneurs learn directly from those who've already built, scaled, and succeeded.

The Alpha Circle runs curated masterclasses, closed-door "Strategy Circles," leadership roundtables, and "Next-Gen Forums" for second-generation entrepreneurs — blending business wisdom with real-world perspective. These settings let you glean insights from seasoned founders, legacy-business leaders, and policy influencers — accelerating your growth path.

### 3. Faster Problem-Solving Through Collective Intelligence

Modern entrepreneurs face complex challenges — funding, scaling, hiring, branding, technology adoption, and more. Elite networks create a safe, collaborative environment where members exchange solutions, offer feedback, and help accelerate each other's outcomes.

Because Alpha Circle brings together diverse industry veterans and new-age entrepreneurs, the collective intelligence becomes a powerful resource. This cross-pollination of experience helps solve intricate problems more effectively.

### 4. Opportunities That Don't Appear Publicly

The biggest deals, collaborations, and strategic partnerships often happen behind closed doors. Whether it's investing together, bundling services, partnering on a product, or acquiring clients — elite circles unlock opportunities invisible to the outside world.

Alpha Circle's structure — invite-only, curated membership — ensures privacy, trust, and quality.

## Introducing The Alpha Circle — Where Growth Meets Exclusivity

The Alpha Circle is not just a networking community — it's a curated ecosystem built to help entrepreneurs scale with speed, confidence, and clarity. What sets Alpha Circle apart is its purposeful design:

### 1. Curated Membership

Every member is selected to ensure quality, diversity, and value. You meet someone relevant — a founder, investor, domain expert, or industry contributor. Members include CXOs, founders, second-generation legacy-business successors, investors, policy-influencers, and cross-industry pioneers.

### 2. Bespoke Events & Experiences

From premium launch events (the group first launched at Hyderabad's iconic Falaknuma Palace) to intimate leadership circles, global summits, closed-door masterclasses, and next-gen forums — The Alpha Circle blends business with lifestyle to create meaningful, high-value relationship-building moments.

### 3. A Growth-Driven, Values-First Culture

Members uplift one another. The Alpha Circle emphasizes integrity, purpose, collaboration, legacy, and long-term value creation.

### 4. Global Expansion Vision

Starting from Hyderabad and with active circles in Bangalore and Vizag — the Alpha Circle is rapidly expanding across India and internationally (with upcoming launches in Mumbai, Delhi, Dubai, and more).

## How Alpha Circle Accelerates Your Growth

### Premium Networking with Real Outcomes

Every event is engineered to create value — new ideas, collaborations, cross-industry learning, lead exchange, and co-creation.

### Learning, Mentorship & Continuous Development

Through masterclasses, strategy sessions, and next-gen forums, entrepreneurs sharpen their edge, learn business acumen, and get prepared for legacy-scale leadership.

### Visibility & Brand Elevation

As part of a high-caliber, invite-only community, your brand identity strengthens and influence expands among peer leaders and industry stakeholders.

### A Tribe That Supports Your Entrepreneurial Journey

From intimate strategy circles and high-impact summits to support from peers and mentors — Alpha Circle ensures every member feels supported, heard, and aligned with purpose.

## Real-People Example: Bringing the Vision to Life

In our Alpha Circle meetings, Brigadier (Dr) Inder Sethi — our Chief Strategy Officer regularly guides members. With decades of strategic business experience, he shares sharp, practical ideas on leadership, growth strategy, innovation, and legacy building. This signature segment is designed for elite Alpha leaders who want more than tactics — it offers a new perspective on shaping their legacy and steering businesses toward long-term impact.

## Final Thoughts

Elite networking is no longer a luxury, it is a strategic advantage. For modern entrepreneurs, it can be the difference between slow, isolated growth and rapid acceleration powered by the right people, aligned values, and real opportunities.

If you're looking for a platform where connections lead to real outcomes, where events feel premium, and where every interaction adds value, The Alpha Circle is your next big move.

Ready to grow with leaders who think like you?

Join the Circle. Elevate your journey. Be Alpha.`,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const post = blogPosts[params.slug];

  useEffect(() => {
    if (!post) {
      router.push("/blog");
    }
  }, [post, router]);

  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Post not found. Redirecting...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#af2324] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#af2324] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900">{post.category}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#af2324] rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Content */}
        <article>
            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base">{post.author}</p>
                <p className="text-sm text-gray-500">
                  {post.date} · {post.readTime}
                </p>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => {
                // Check if it's an h2 heading
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-[9.8px] font-bold text-gray-900 mt-10 mb-4 first:mt-0"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                // Check if it's an h3 heading
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-[8.82px] font-bold text-gray-900 mt-8 mb-3"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                // Check if it's a numbered list item (starts with number and period)
                if (/^\d+\.\s/.test(paragraph.trim())) {
                  const match = paragraph.match(/^(\d+)\.\s(.+)$/);
                  if (match) {
                    return (
                      <div key={index} className="my-5">
                        <h3 className="text-[7.84px] font-bold text-gray-900 mb-2">
                          {match[1]}. {match[2]}
                        </h3>
                      </div>
                    );
                  }
                }
                // Check if it's a bullet list
                if (paragraph.startsWith("- ") || paragraph.includes("\n- ")) {
                  const items = paragraph
                    .split("\n")
                    .filter((line) => line.trim().startsWith("- "))
                    .map((line) => {
                      // Remove markdown bold formatting
                      let item = line.replace(/^-\s*/, "").trim();
                      item = item.replace(/\*\*/g, "");
                      return item;
                    });
                  return (
                    <ul key={index} className="list-none space-y-2.5 my-5">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-[#af2324] mr-3 mt-1.5 text-[5.88px]">•</span>
                          <span className="text-[6.86px] text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Regular paragraph
                return (
                  <p
                    key={index}
                    className="text-[6.86px] md:text-[7.84px] text-gray-700 leading-relaxed mb-5"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Join The Alpha Circle
                </h3>
                <p className="text-base text-gray-600 mb-5 max-w-2xl mx-auto">
                  Become part of a community of ambitious entrepreneurs and leaders
                  who are shaping the future of business.
                </p>
                <Link
                  href="/membership"
                  className="inline-block bg-[#af2324] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#8f1c1d] transition-colors"
                >
                  Join The Circle
                </Link>
              </div>
            </div>

          </article>
      </div>
    </main>
  );
}

