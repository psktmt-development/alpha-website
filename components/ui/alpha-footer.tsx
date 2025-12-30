"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function AlphaFooter() {
  return (
    <footer className="relative w-full bg-black text-white z-[200] mt-auto" style={{ position: 'relative' }}>
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-1.5" style={{ fontFamily: 'DM Serif Display, serif' }}>
                The Alpha Circle
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed max-w-md">
                The Alpha Circle, founded by Dr. Pulluri Srikanth, is an exclusive collective of industrialists, visionary entrepreneurs, legacy business leaders, and forward-thinking innovators who are actively shaping the future. Rooted in India and expanding globally with circles in Dubai and beyond.
              </p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider">Explore</h3>
              <nav className="space-y-1.5">
                <Link 
                  href="/" 
                  className="block text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                >
                  Home
                </Link>
                <Link 
                  href="/about-us" 
                  className="block text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                >
                  About Us
                </Link>
                <Link 
                  href="/events" 
                  className="block text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                >
                  Events
                </Link>
                <Link 
                  href="/gallery" 
                  className="block text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                >
                  Gallery
                </Link>
                <Link 
                  href="/members" 
                  className="block text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                >
                  Membership
                </Link>
                <Link 
                  href="/blog" 
                  className="block text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                >
                  Blogs
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </nav>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-base font-semibold mb-3 uppercase tracking-wider">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#af2324] mt-0.5 shrink-0" />
                  <p className="text-gray-400 text-sm leading-relaxed">
                    206 Buziness Square Building, Jubilee Enclave,<br />
                    Hi-Tech City Hyderabad - 500081.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#af2324] shrink-0" />
                  <a 
                    href="tel:+919133383399" 
                    className="text-gray-400 hover:text-[#af2324] transition-colors duration-300 text-sm"
                  >
                    91333 83399
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#af2324] shrink-0" />
                  <a 
                    href="https://mail.google.com/mail/?view=cm&to=admin@thealphacircle.world" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#af2324] transition-colors duration-300 break-all text-sm"
                  >
                    admin@thealphacircle.world
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 pt-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/the_alphacircle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.youtube.com/@thealphacircle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </a>
              <a
                href="https://www.linkedin.com/company/thealphacircle/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#af2324] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 pt-3 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © Copyright The Alpha Circle | All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

