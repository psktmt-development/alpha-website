"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage?: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  publication?: string;
  claps?: number;
  comments?: number;
}

const blogPosts: BlogPost[] = [
  {
    slug: "elite-networking-accelerate-growth",
    title: "How Does Elite Networking Accelerate Growth for Modern Entrepreneurs? And Why The Alpha Circle Is the Community Built for the Next Generation of Leaders",
    excerpt: "In today's fast-moving business world, success is no longer just about what you know - it's about who you can reach, collaborate with, and learn from. This is where elite networking becomes a powerful accelerator for entrepreneurs.",
    author: "Dr Pulluri Srikanth",
    date: "Dec 4",
    readTime: "6 min read",
    image: "/hero-1.JPG",
    category: "Networking",
    publication: "The Alpha Circle",
    claps: 231,
    comments: 4,
  },
  {
    slug: "building-entrepreneurial-community",
    title: "Building an Entrepreneurial Community That Transcends Traditional Networking",
    excerpt: "The Alpha Circle represents a new paradigm in professional networking - one that goes beyond transactional connections to foster genuine relationships that drive meaningful growth.",
    author: "The Alpha Circle",
    date: "Dec 1",
    readTime: "5 min read",
    image: "/hero-2.JPG",
    category: "Community",
    publication: "The Alpha Circle",
    claps: 156,
    comments: 8,
  },
  {
    slug: "future-of-leadership",
    title: "The Future of Leadership: Why Community Matters More Than Ever",
    excerpt: "As we navigate an increasingly complex business landscape, the role of community in leadership development has never been more critical. Discover how modern leaders are leveraging community connections to drive innovation and growth.",
    author: "Sarah Johnson",
    date: "Nov 28",
    readTime: "7 min read",
    image: "/hero-1.JPG",
    category: "Leadership",
    publication: "The Alpha Circle",
    claps: 342,
    comments: 12,
  },
  {
    slug: "entrepreneurship-mindset",
    title: "The Entrepreneurial Mindset: What Separates Successful Founders from the Rest",
    excerpt: "Success in entrepreneurship isn't just about having a great idea. It's about cultivating the right mindset, building resilience, and surrounding yourself with the right people. Here's what we've learned from working with hundreds of founders.",
    author: "Michael Chen",
    date: "Nov 25",
    readTime: "8 min read",
    image: "/hero-2.JPG",
    category: "Entrepreneurship",
    publication: "The Alpha Circle",
    claps: 489,
    comments: 23,
  },
  {
    slug: "networking-events",
    title: "How to Maximize Your Networking Events: A Strategic Guide",
    excerpt: "Most people attend networking events hoping for magic to happen. But the most successful networkers go in with a plan. Learn the strategies that turn casual conversations into meaningful business relationships.",
    author: "Emily Rodriguez",
    date: "Nov 22",
    readTime: "5 min read",
    image: "/hero-1.JPG",
    category: "Networking",
    publication: "The Alpha Circle",
    claps: 267,
    comments: 15,
  },
  {
    slug: "global-community",
    title: "Building a Global Community: Lessons from The Alpha Circle",
    excerpt: "Creating a truly global community requires more than just connecting people across borders. It demands understanding cultural nuances, time zones, and the unique challenges of international collaboration.",
    author: "David Kumar",
    date: "Nov 20",
    readTime: "6 min read",
    image: "/hero-2.JPG",
    category: "Community",
    publication: "The Alpha Circle",
    claps: 198,
    comments: 9,
  },
  {
    slug: "innovation-through-collaboration",
    title: "Innovation Through Collaboration: Why Great Ideas Come from Great Networks",
    excerpt: "The most groundbreaking innovations rarely come from isolated genius. They emerge from networks of diverse thinkers who challenge each other, share knowledge, and build on each other's ideas. Here's how to build that network.",
    author: "Lisa Wang",
    date: "Nov 18",
    readTime: "7 min read",
    image: "/hero-1.JPG",
    category: "Innovation",
    publication: "The Alpha Circle",
    claps: 312,
    comments: 18,
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(
    (post) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.category.toLowerCase().includes(searchLower);
      
      const matchesCategory = selectedCategory === null || 
        post.category.toLowerCase() === selectedCategory.toLowerCase();
      
      return matchesSearch && matchesCategory;
    }
  );

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category.toLowerCase()) {
      setSelectedCategory(null); // Deselect if already selected
    } else {
      setSelectedCategory(category.toLowerCase());
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* No Blogs Found Message */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="mb-4">
                    <svg
                      className="w-16 h-16 mx-auto text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    No blogs found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {searchQuery || selectedCategory
                      ? "Try adjusting your search or filter criteria."
                      : "No blog posts available at the moment."}
                  </p>
                  {(searchQuery || selectedCategory) && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory(null);
                      }}
                      className="px-6 py-2 bg-[#af2324] text-white rounded-lg hover:bg-[#af2324]/90 transition-colors"
                    >
                      Clear all filters
              </button>
                  )}
            </div>
              ) : (
                <>
              {/* Featured First Post - Larger */}
                <article className="border-b border-gray-200 pb-8">
                  <Link href={`/blog/${filteredPosts[0].slug}`}>
                    <div className="group cursor-pointer">
                      {/* Category/Publication */}
                      <div className="mb-4 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#af2324] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">A</span>
                        </div>
                        <span className="text-base text-gray-600">
                                In <span className="font-medium">{filteredPosts[0].category}</span>
                        </span>
                      </div>

                      {/* Large Image */}
                      <div className="mb-6 rounded-lg overflow-hidden">
                        <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
                          <Image
                            src={filteredPosts[0].image}
                            alt={filteredPosts[0].title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-4 group-hover:text-[#af2324] transition-colors leading-tight">
                        {filteredPosts[0].title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                        {filteredPosts[0].excerpt}
                      </p>

                      {/* Metadata */}
                      <div className="flex items-center gap-6 text-base text-gray-500">
                        <span>{filteredPosts[0].date}</span>
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                  </Link>
                </article>

              {/* Rest of the Posts - Regular Size */}
              {filteredPosts.slice(1).map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-gray-200 pb-8 last:border-b-0"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="flex gap-4">
                        {/* Left Content */}
                        <div className="flex-1 min-w-0">
                          {/* Category/Publication */}
                          <div className="mb-2 flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#af2324] flex items-center justify-center">
                              <span className="text-white text-xs font-bold">A</span>
                            </div>
                            <span className="text-sm text-gray-600">
                              In <span className="font-medium">{post.category}</span>
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-[#af2324] transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Metadata */}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex-shrink-0">
                          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Action Icons */}
                      <div className="flex items-center justify-end gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Trending Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  Trending on The Alpha Circle
                </h3>
                <div className="space-y-6">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={post.slug} className="flex gap-3">
                      <div className="flex-shrink-0 text-2xl font-bold text-gray-300 leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#af2324] transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">
                          {post.date} · {post.readTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Topics */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  Recommended topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Networking", "Entrepreneurship", "Leadership", "Community", "Innovation", "Business", "Growth"].map((topic) => {
                    const isActive = selectedCategory === topic.toLowerCase();
                    return (
                      <button
                      key={topic}
                        onClick={() => handleCategoryClick(topic)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[#af2324] text-white hover:bg-[#af2324]/90"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                    >
                      {topic}
                      </button>
                    );
                  })}
                </div>
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="mt-3 text-sm text-[#af2324] hover:underline"
                  >
                    Clear filter
                  </button>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

