"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();
        
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          setPosts(data.data);
        } else {
          // If API fails or returns empty data, use embed method as fallback
          setError('Using embed fallback');
          setPosts([]);
        }
      } catch (err) {
        console.error('Failed to fetch Instagram posts:', err);
        setError('Failed to load Instagram feed');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[550px] flex items-center justify-center bg-white rounded-xl border border-neutral-200">
        <div className="text-gray-400">Loading Instagram feed...</div>
      </div>
    );
  }

  // Use embed fallback if no posts or error occurred
  if (posts.length === 0) {
    // Fallback: Use Instagram embed widget for @the_alphacircle
    return (
      <div className="w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm bg-white">
        <iframe
          src="https://www.instagram.com/the_alphacircle/embed"
          allowTransparency={true}
          allow="encrypted-media"
          scrolling="no"
          className="w-full h-[550px] border-0"
          title="Instagram Feed - The Alpha Circle"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[700px] overflow-y-auto rounded-xl border border-neutral-200 shadow-sm bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
        {posts.map((post, index) => (
          <motion.a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            {post.media_type === 'VIDEO' ? (
              <div className="relative w-full h-full">
                <img
                  src={post.thumbnail_url || post.media_url}
                  alt={post.caption || 'Instagram post'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            ) : (
              <img
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

