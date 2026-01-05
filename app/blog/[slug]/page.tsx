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
    heroImage: "/home_and_about/hero-1.JPG",
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
  "building-entrepreneurial-community": {
    slug: "building-entrepreneurial-community",
    title: "Building an Entrepreneurial Community That Transcends Traditional Networking",
    author: "The Alpha Circle",
    date: "December 1, 2024",
    readTime: "5 min read",
    heroImage: "/home_and_about/hero-2.JPG",
    category: "Community",
    content: `In an age where networking is easier than ever, meaningful connection has become surprisingly rare. Events are crowded, conversations are transactional, and introductions often end where they begin. For accomplished entrepreneurs and business leaders, this model quickly loses relevance.

As founders grow in scale, responsibility, and perspective, the need shifts. What they seek is not more access, but better alignment. Not more conversations, but the right ones. This shift in thinking is what led to the creation of Alpha Circle.

## Beyond the Limits of Networking

Traditional networking is built on volume. The assumption is that more people in the room create more opportunity. In practice, this often results in surface-level interactions, unclear intentions, and conversations driven by pitching rather than understanding.

For high-net-worth entrepreneurs and experienced founders, time is valuable and discretion is essential. Open networking environments rarely allow for candid discussion around real challenges—leadership decisions, long-term strategy, or legacy planning. As a result, the most meaningful conversations are often postponed or avoided altogether.

Alpha Circle was created as a response to this gap.

## From Contacts to Community

Alpha Circle is a private, invitation-only membership designed for successful entrepreneurs, founders, and business leaders who value depth over scale. Rather than focusing on expanding networks, Alpha Circle focuses on building a trusted community.

The guiding philosophy is simple: we curate the room, not the crowd.

Every gathering is intentionally designed to bring together individuals who operate at a similar level of experience and intent. This creates an environment where conversations feel natural, peer-driven, and free from performative behavior.

## The Role of Privacy and Trust

Privacy is not an add-on at Alpha Circle—it is foundational. Gatherings are closed-door by design, allowing members to engage openly without concern for exposure or judgment. There are no public guest lists, no recordings, and no pressure to perform.

This discretion enables honest dialogue. Members can discuss real business challenges, share lessons learned, and explore ideas that are often difficult to address in public forums. Over time, trust becomes the common language of the room.

## Experiences Designed for Depth

Alpha Circle brings its members together through thoughtfully curated experiences that prioritize interaction and intimacy. These include closed-door strategy sessions, private dinners, founder roundtables, and curated retreats.

Each format is designed to remove distractions and create space for meaningful exchange. There are no rigid agendas or forced outcomes—only intentional structure that allows conversations to evolve organically.

What emerges are not just insights, but relationships that extend well beyond the gathering itself.

## A Long-Term Perspective

Alpha Circle is not built around individual events. It is built around continuity. Members return not for novelty, but for familiarity—trusted perspectives, evolving conversations, and relationships that compound over time.

This long-term approach encourages collaboration, reflection, and shared growth without expectation or pressure. The value lies not in immediate outcomes, but in the strength of the circle itself.

## Redefining Belonging

In a world that rewards scale and noise, Alpha Circle chooses intention. It exists for entrepreneurs who understand that the most valuable rooms are not the largest, but the most thoughtfully curated.

By transcending traditional networking, Alpha Circle creates space for something more enduring—a community built on trust, alignment, and meaningful connection.

Because the right relationships don't just open doors. They shape the journey beyond them.`,
  },
  "future-of-leadership": {
    slug: "future-of-leadership",
    title: "The Future of Leadership: Why Community Matters More Than Ever",
    author: "Sarah Johnson",
    date: "November 28, 2024",
    readTime: "7 min read",
    heroImage: "/home_and_about/image.png",
    category: "Leadership",
    content: `Leadership today looks very different from what it did even a decade ago. The pace of change is faster, decisions carry greater complexity, and the consequences of leadership choices extend far beyond balance sheets. In this environment, leadership can be isolating — especially for founders, entrepreneurs, and business leaders operating at scale.

As organizations grow and responsibilities deepen, one truth becomes increasingly clear: leadership is no longer a solo pursuit. The future of leadership belongs to those who are surrounded by the right community.

## The Changing Reality of Leadership

Modern leaders face challenges that cannot be solved through frameworks alone. Market uncertainty, talent dynamics, capital decisions, and long-term vision demand clarity that often comes only through perspective.

Yet, the higher one rises, the fewer places exist to speak openly.

Traditional leadership environments — conferences, panels, and open forums — are often performative. Conversations remain surface-level, shaped by optics rather than honesty. For high-net-worth entrepreneurs and seasoned founders, these spaces rarely provide the depth required to navigate complex decisions.

This has created a growing need for trusted, private environments where leaders can think aloud without judgment.

## Community Over Individualism

The traditional image of leadership celebrates independence and self-reliance. While decisiveness remains essential, the future of leadership is increasingly collective.

The strongest leaders recognize that insight often comes from shared experience. Peer-level dialogue, diverse perspectives, and quiet reflection within a trusted group lead to better judgment and more grounded decisions.

Community, in this sense, is not about networking. It is about alignment — of values, intent, and long-term thinking.

## Why Private Communities Matter

Not all communities serve leaders equally. Open networks prioritize scale and visibility. Private communities prioritize trust and discretion.

Invitation-only leadership circles create space for:

Candid conversations without public exposure

Peer-to-peer learning rather than one-way instruction

Thoughtful dialogue beyond short-term outcomes

In these environments, leaders can discuss real challenges — succession, governance, capital allocation, and legacy — topics that are rarely addressed honestly in public forums.

This is where meaningful growth occurs.

## Leadership as a Shared Journey

Communities like Alpha Circle are built around the belief that leadership is shaped through continuity, not isolated moments. Relationships formed in trusted circles evolve over time, allowing conversations to deepen as circumstances change.

There is no pressure to perform. No expectation to impress. Only the understanding that every individual in the room brings experience, perspective, and responsibility.

Over time, these relationships become a quiet source of strength — a place where leaders return not for answers, but for clarity.

## The Role of Belonging in the Future of Leadership

As leadership becomes more complex, the need for belonging becomes more pronounced. Leaders who operate in isolation are more likely to rely on incomplete information or short-term thinking.

Those who belong to thoughtful, curated communities benefit from shared wisdom and long-term perspective. They are better equipped to lead with confidence, humility, and intent.

The future of leadership is not defined by authority alone. It is defined by the quality of conversations leaders choose to engage in — and the communities they choose to belong to.

## Looking Ahead

In a world that values speed and scale, intentional communities offer something rare: space to think, reflect, and grow alongside peers who understand the weight of leadership.

As the landscape continues to evolve, one thing remains certain — community will matter more than ever.

Because leadership is not just about direction.
It's about who walks the journey with you.`,
  },
  "entrepreneurship-mindset": {
    slug: "entrepreneurship-mindset",
    title: "The Entrepreneurial Mindset: What Separates Successful Founders from the Rest",
    author: "Michael Chen",
    date: "November 25, 2024",
    readTime: "8 min read",
    heroImage: "/home_and_about/image copy.png",
    category: "Entrepreneurship",
    content: `Success in entrepreneurship is often attributed to timing, capital, or access to the right opportunities. While these factors matter, they rarely explain why some founders consistently build enduring businesses while others struggle to sustain momentum. More often, the difference lies in mindset.

The most successful founders think differently long before outcomes appear different.

## Long-Term Thinking Over Short-Term Wins

Exceptional entrepreneurs are rarely focused on quick victories. They prioritize decisions that compound over time — building strong foundations, sustainable systems, and trusted relationships. While short-term wins can be attractive, lasting success comes from patience and clarity of direction.

This long-term orientation allows founders to navigate uncertainty without reacting impulsively. They understand that meaningful growth is rarely linear.

## Comfort with Ambiguity

Successful founders develop a high tolerance for ambiguity. They are able to make decisions without complete information, adapt when conditions change, and remain composed in uncertain environments.

Rather than waiting for perfect clarity, they move forward with conviction, refining their approach as new insights emerge. This ability to stay grounded amid uncertainty is a defining trait of resilient leadership.

## Learning Through Perspective, Not Noise

High-performing entrepreneurs are selective about the inputs they absorb. Instead of chasing constant information, they seek perspective — insights grounded in experience and thoughtful dialogue.

This is why peer-level conversations matter. Learning from those who have faced similar challenges often proves more valuable than consuming endless content or advice from outside the arena.

## Discipline in Decision-Making

Successful founders are intentional with their time and energy. They recognize that every decision carries weight, not only for the business but for the people involved. This leads to a disciplined approach to choosing opportunities, partnerships, and commitments.

They say no more often than yes, understanding that focus is a competitive advantage.

## The Power of the Right Environment

Mindset does not develop in isolation. It is shaped by environment. Founders who surround themselves with peers operating at a similar level of responsibility and intent tend to sharpen their thinking over time.

Communities like Alpha Circle exist to create such environments — private, curated spaces where entrepreneurs can engage honestly, challenge assumptions, and grow alongside those who understand the journey.

## Final Thought

What separates successful founders from the rest is not a single trait, but a way of thinking — deliberate, long-term, and grounded in perspective. When paired with the right environment, this mindset becomes a powerful force for sustained success.`,
  },
  "networking-events": {
    slug: "networking-events",
    title: "How to Maximize Your Networking Events: A Strategic Guide",
    author: "Emily Rodriguez",
    date: "November 22, 2024",
    readTime: "5 min read",
    heroImage: "/gallery/2025/kpc host/Photo-360.JPG",
    category: "Networking",
    content: `Networking events are often seen as opportunities to meet as many people as possible. In reality, this approach rarely delivers meaningful outcomes. For entrepreneurs, founders, and business leaders, effective networking is not about volume — it's about intentional engagement.

Maximizing the value of networking events requires a shift in mindset, from collecting contacts to building relationships.

## Enter with Clarity, Not Expectations

The most effective participants arrive with clarity rather than agendas. Instead of focusing on what they can gain, they focus on who they want to understand. Clear intent allows conversations to unfold naturally, without the pressure of immediate outcomes.

This approach encourages genuine dialogue and makes interactions more memorable and impactful.

## Prioritize Depth Over Reach

Meaningful relationships are built through depth, not repetition. A small number of thoughtful conversations will always outweigh dozens of surface-level exchanges.

By spending more time listening, asking considered questions, and engaging with curiosity, entrepreneurs create space for trust to form — the foundation of any valuable connection.

## Be Present, Not Performative

Many networking environments encourage performance — pitching ideas, highlighting achievements, or projecting success. Strategic networking, however, requires presence.

Being fully engaged, attentive, and respectful of confidentiality sets experienced leaders apart. Authenticity signals confidence and invites openness from others.

## Choose the Right Rooms

Not all networking events are created equal. Open, high-volume environments often prioritize visibility over substance. In contrast, curated and private gatherings offer greater alignment and depth.

The right rooms bring together individuals who share similar levels of experience, responsibility, and intent. In such settings, conversations move beyond introductions into meaningful exchange.`,
  },
  "global-community": {
    slug: "global-community",
    title: "Building a Global Community: Lessons from The Alpha Circle",
    author: "David Kumar",
    date: "November 20, 2024",
    readTime: "6 min read",
    heroImage: "/gallery/0K6A8206.JPG",
    category: "Community",
    content: `Building a global community is no longer about reach or scale alone. In an increasingly connected world, true community is defined by trust, alignment, and shared intent — especially among entrepreneurs and business leaders operating across borders.

Alpha Circle offers a clear lesson in what it takes to build a global community that feels personal, relevant, and enduring.

## Start with Values, Not Geography

A global community should not be formed by geography alone. Alpha Circle began by aligning individuals around shared values — long-term thinking, discretion, and meaningful relationships. When values lead, geography becomes an extension rather than a constraint.

This approach ensures that no matter where members come from, conversations feel familiar and grounded in mutual understanding.

## Curate the Room Carefully

One of the most important lessons in building a global community is selectivity. Alpha Circle follows a simple principle: curate the room, not the crowd. Growth is intentional, not accelerated for visibility.

By maintaining an invitation-only model, the community preserves its depth. Each new member strengthens the circle rather than diluting it, allowing trust to scale alongside reach.

## Create Shared Experiences, Not Just Access

Global communities thrive on shared experiences. Alpha Circle brings members together through private gatherings, strategy sessions, and retreats designed to foster genuine interaction.

These experiences create common reference points — moments that connect members beyond borders and time zones. Over time, these shared moments become the glue that holds the community together.

## Prioritize Trust and Continuity

Trust is the foundation of any global community. Alpha Circle emphasizes privacy and continuity, allowing relationships to evolve naturally over repeated interactions.

Rather than focusing on one-off engagements, the community is built around long-term connection. Members return not for novelty, but for familiarity and perspective.

## Think Long Term

The most valuable global communities are not built quickly. They are shaped patiently, with a focus on relevance and longevity. Alpha Circle demonstrates that when community is treated as a long-term commitment rather than a short-term initiative, its impact compounds quietly but powerfully.

## Final Thought

Building a global community is less about expansion and more about intention. By prioritizing values, curation, and trust, Alpha Circle shows that meaningful connections can transcend borders — and endure well beyond individual gatherings.`,
  },
  "innovation-through-collaboration": {
    slug: "innovation-through-collaboration",
    title: "Innovation Through Collaboration: Why Great Ideas Come from Great Networks",
    author: "Rachel Thompson",
    date: "November 18, 2024",
    readTime: "6 min read",
    heroImage: "/home_and_about/hero-1.JPG",
    category: "Innovation",
    content: `## Innovation Is Rarely Created in Isolation

While vision may begin with an individual, refinement happens collectively. Great ideas are challenged, reshaped, and strengthened through dialogue. Exposure to diverse thinking allows leaders to see blind spots, test assumptions, and uncover opportunities that may otherwise remain invisible.

Collaboration introduces friction — and friction, when constructive, sharpens ideas.

## The Power of Peer-Level Exchange

Not all collaboration is equal. The most valuable exchanges occur between peers who operate at similar levels of responsibility and experience. In such environments, conversations move beyond theory into real-world application.

When founders, investors, and operators engage openly, innovation becomes grounded in practicality. Ideas are not only imagined — they are pressure-tested by those who understand execution, risk, and long-term consequences.

## Why Networks Matter More Than Ever

In a rapidly evolving global landscape, no single leader can possess all the answers. Markets shift, technologies advance, and challenges grow increasingly complex. Strong networks provide access not just to information, but to perspective.

Great networks act as living ecosystems — continuously exchanging insights, experiences, and lessons learned. Over time, this collective intelligence becomes a powerful driver of innovation.

## Collaboration Requires the Right Environment

True collaboration cannot exist in crowded or transactional settings. It thrives in environments built on trust, discretion, and mutual respect. Private, curated networks allow participants to engage honestly without the need to perform or compete.

In these spaces, collaboration feels natural. Ideas are shared freely, challenged thoughtfully, and refined collectively.

## Innovation as a Collective Advantage

The most forward-thinking leaders understand that innovation is no longer a solo advantage. It is a collective one. By surrounding themselves with the right network, leaders increase their capacity to think creatively, act decisively, and adapt effectively.

Communities like Alpha Circle exist to create these conditions — bringing together individuals who recognize that the strongest ideas are often shaped in conversation.

## Final Thought

Great ideas do not emerge from isolation. They emerge from connection. In an era defined by complexity and change, innovation belongs to those who invest in meaningful collaboration — and the networks that make it possible.`,
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
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#af2324] rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-6">
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
                <span className="text-gray-600 font-medium">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-normal text-gray-900 text-sm">{post.author}</p>
                <p className="text-xs text-gray-500">
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
                      className="text-[9.8px] font-medium text-gray-900 mt-10 mb-4 first:mt-0"
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
                      className="text-[8.82px] font-medium text-gray-900 mt-8 mb-3"
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
                        <h3 className="text-[7.84px] font-medium text-gray-900 mb-2">
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
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Join The Alpha Circle
                </h3>
                <p className="text-sm text-gray-600 mb-5 max-w-2xl mx-auto">
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

