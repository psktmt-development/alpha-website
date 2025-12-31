"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { usePopup } from "./popup-context";

export function UpcomingEventPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const hasCheckedRef = useRef(false); // Prevent multiple checks on re-renders
  const { setPopupClosed } = usePopup();

  useEffect(() => {
    // Mark component as mounted to avoid SSR issues
    setHasMounted(true);
  }, []);

  useEffect(() => {
    // Only run this logic after component has mounted (client-side only)
    // and only check once per component lifecycle
    if (!hasMounted || hasCheckedRef.current) return;

    /**
     * Why sessionStorage instead of localStorage?
     * 
     * sessionStorage persists data only for the current browser tab/window session.
     * When a user opens a NEW tab/window, sessionStorage is empty, so the popup will show again.
     * 
     * localStorage would persist across all tabs/windows, meaning the popup would never
     * show again once dismissed, even in a new tab.
     * 
     * This ensures:
     * - Popup shows on new tab/window ✅
     * - Popup does NOT show on page refresh ✅
     * - Popup does NOT show on route changes ✅
     * - Popup shows again when user closes tab and opens website in new tab ✅
     */
    hasCheckedRef.current = true;
    const hasSeenPopup = sessionStorage.getItem("entry_popup_seen");
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [hasMounted]);

  const handleClose = () => {
    setIsOpen(false);
    /**
     * Store flag in sessionStorage to prevent popup from showing again
     * in the current browser tab/window session.
     * 
     * This flag will be cleared when:
     * - User closes the tab/window
     * - User opens website in a new tab/window (new sessionStorage)
     */
    sessionStorage.setItem("entry_popup_seen", "true");
    // Notify context that popup is closed - this will show the alert bar
    setPopupClosed(true);
  };

  // Event details - update these with actual upcoming event information
  const eventDetails = {
    title: "Speaker Session",
    date: "January 9, 2026",
    time: "7PM onwards",
    location: "Leela Hyderabad Hotel",
    description: "Join us for an exclusive gathering of industry leaders and visionaries.",
    image: "/alert/image.png", // Event poster
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-[2rem] border-2 border-[#af2324] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] w-full max-w-5xl pointer-events-auto relative"
              onClick={(e) => e.stopPropagation()}
              style={{ 
                maxHeight: '95vh',
                overflow: 'auto'
              }}
            >
              {/* Close Button - Top Right */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-2 hover:bg-neutral-100 rounded-full transition-colors bg-white/80 backdrop-blur-sm"
                aria-label="Close popup"
              >
                <X className="h-5 w-5 text-neutral-500" />
              </button>

              {/* Content - Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Poster Image Section */}
                <div className="relative w-full flex items-center justify-center p-2 md:p-4" style={{ height: 'auto' }}>
                  <Image
                    src={eventDetails.image}
                    alt={eventDetails.title}
                    width={1200}
                    height={1600}
                    className="h-auto object-contain rounded-l-[2rem]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    style={{ 
                      display: 'block',
                      height: 'auto',
                      width: '90%',
                      maxWidth: '100%'
                    }}
                  />
                </div>

                {/* Invitation Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 bg-gradient-to-br from-white to-gray-50/50 rounded-r-[2rem]">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                      {eventDetails.title}
                    </h2>
                    <div className="h-1 w-16 bg-[#af2324] rounded-full" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-[#af2324] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          Date
                        </p>
                        <p className="text-gray-600">{eventDetails.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#af2324] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          Time
                        </p>
                        <p className="text-gray-600">{eventDetails.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#af2324] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          Location
                        </p>
                        <p className="text-gray-600">{eventDetails.location}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed pt-2">
                    {eventDetails.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

