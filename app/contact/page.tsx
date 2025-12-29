"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ExternalLink, ChevronDown, User, MessageSquare, Info } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Google Maps embed URL - uses API key if available, otherwise uses standard embed
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  // Place coordinates: 17.4565963, 78.3762464
  // Place ID: ChIJN1t_tDeuEjsRQ-Ry7D0K8YQ (from the URL)
  const mapEmbedUrl = googleMapsApiKey 
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=place_id:ChIJN1t_tDeuEjsRQ-Ry7D0K8YQ`
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.3762464!3d17.4565963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9379d66ca8e5%3A0xb5df3a81cb333e18!2sThe%20Alpha%20Circle%20Hyderabad!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin`;
  const [staticStars, setStaticStars] = useState<Array<{
    id: number;
    top: string;
    left: string;
    size: number;
    opacity: number;
    duration: number;
  }>>([]);

  // Shooting Stars Component
  const getRandomStartPoint = () => {
    const side = Math.floor(Math.random() * 4);
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    switch (side) {
      case 0: // Top
        return { x: Math.random() * vw, y: -20, angle: 45 + Math.random() * 90 };
      case 1: // Right
        return { x: vw + 20, y: Math.random() * vh, angle: 135 + Math.random() * 90 };
      case 2: // Bottom
        return { x: Math.random() * vw, y: vh + 20, angle: 225 + Math.random() * 90 };
      case 3: // Left
        return { x: -20, y: Math.random() * vh, angle: 315 + Math.random() * 90 };
      default:
        return { x: 0, y: 0, angle: 45 };
    }
  };

  const ShootingStars = ({
    minSpeed = 5,
    maxSpeed = 15,
    minDelay = 800,
    maxDelay = 2500,
    starColor = "#9E00FF",
    trailColor = "#2EB9DF",
    starWidth = 15,
    starHeight = 2,
    className = "",
  }: {
    minSpeed?: number;
    maxSpeed?: number;
    minDelay?: number;
    maxDelay?: number;
    starColor?: string;
    trailColor?: string;
    starWidth?: number;
    starHeight?: number;
    className?: string;
  }) => {
    const [stars, setStars] = useState<Array<{
      id: string;
      x: number;
      y: number;
      angle: number;
      scale: number;
      speed: number;
      distance: number;
    }>>([]);
    const requestRef = useRef<number>();

    useEffect(() => {
      let timeoutId: NodeJS.Timeout;
      
      const spawnStar = () => {
        const { x, y, angle } = getRandomStartPoint();
        const newStar = {
          id: Math.random().toString(36).substring(2, 9),
          x,
          y,
          angle,
          scale: 1,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          distance: 0,
        };

        setStars((prev) => [...prev, newStar]);
        
        const nextDelay = Math.random() * (maxDelay - minDelay) + minDelay;
        timeoutId = setTimeout(spawnStar, nextDelay);
      };

      spawnStar();
      return () => clearTimeout(timeoutId);
    }, [minSpeed, maxSpeed, minDelay, maxDelay]);

    const animate = useCallback(() => {
      setStars((prevStars) => {
        return prevStars
          .map((star) => {
            const rad = (star.angle * Math.PI) / 180;
            const newX = star.x + star.speed * Math.cos(rad);
            const newY = star.y + star.speed * Math.sin(rad);
            const newDistance = star.distance + star.speed;
            
            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: 1 + newDistance / 200,
            };
          })
          .filter((star) => {
            return (
              star.x > -100 &&
              star.x < window.innerWidth + 100 &&
              star.y > -100 &&
              star.y < window.innerHeight + 100
            );
          });
      });
      requestRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }, [animate]);

    return (
      <svg className={`w-full h-full absolute inset-0 pointer-events-none ${className}`}>
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={trailColor} stopOpacity="0" />
            <stop offset="100%" stopColor={starColor} stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {stars.map((star) => (
          <rect
            key={star.id}
            x={star.x}
            y={star.y}
            width={starWidth * star.scale}
            height={starHeight}
            fill="url(#starGradient)"
            filter="url(#glow)"
            transform={`rotate(${star.angle}, ${star.x}, ${star.y})`}
            style={{ transition: 'opacity 0.2s' }}
          />
        ))}
      </svg>
    );
  };

  // Generate static stars for background
  useEffect(() => {
    const stars = Array.from({ length: 100 }).map(() => ({
      id: Math.random(),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 3 + 2,
    }));
    setStaticStars(stars);
  }, []);

  // Icon component for corner decorations
  const Icon = ({ className, ...rest }: { className?: string; [key: string]: any }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };

  // Card component with glassmorphism and hover effects
  const Card = ({ 
    title, 
    icon: IconComponent, 
    subtitle, 
    value, 
    actionIcon, 
    actionHref,
    actionType,
    isRed = false,
    delay = 0
  }: {
    title: string;
    icon: React.ComponentType<any>;
    subtitle: string;
    value: string;
    actionIcon: React.ReactNode;
    actionHref?: string;
    actionType?: "copy" | "link";
    isRed?: boolean;
    delay?: number;
  }) => {
    // Fallback if IconComponent is undefined
    const Icon = IconComponent || MapPin;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        whileHover={{ y: -10 }}
        className={`relative group p-10 md:p-12 rounded-3xl h-[450px] flex flex-col justify-between items-center overflow-hidden transition-all duration-500 max-w-sm w-full mx-auto ${
          isRed 
            ? "bg-[#BB2324] text-white shadow-[0_20px_50px_rgba(187,35,36,0.3)]" 
            : "bg-white border border-[#BB2324] shadow-xl shadow-slate-200/50"
        }`}
      >
        {/* Decorative Background Icon (Watermark effect) */}
        <div className={`absolute -right-8 -bottom-8 opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none ${
          isRed ? "text-white" : "text-[#BB2324]"
        }`}>
          <Icon size={240} />
        </div>

        <div className="w-full flex flex-col items-center text-center">
          {/* Icon Container */}
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${
            isRed ? "bg-white/20 backdrop-blur-md" : "bg-slate-50 text-[#BB2324]"
          }`}>
            <Icon size={28} />
          </div>

          {/* Labels */}
          <span className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block ${
            isRed ? "text-white/60" : "text-slate-400"
          }`}>
            {subtitle}
          </span>
          
          <h3 className={`text-2xl font-semibold leading-relaxed whitespace-pre-line font-serif ${
            isRed ? "text-white" : "text-gray-900"
          }`}>
            {value}
          </h3>
        </div>

        {/* Action Button */}
        <motion.a
          href={actionHref || "#"}
          target={actionType === "link" ? "_blank" : undefined}
          rel={actionType === "link" ? "noopener noreferrer" : undefined}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 z-10 ${
            isRed 
              ? "bg-white text-[#BB2324] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]" 
              : "bg-slate-900 text-white hover:bg-[#BB2324]"
          }`}
        >
          {actionIcon}
        </motion.a>
      </motion.div>
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  // Scroll effect for map section
  const mapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll transforms for map
  const mapOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.95]);
  const mapY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);
  const mapScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);

  return (
    <main className="min-h-screen pb-16 scroll-smooth">
      {/* Hero Section with White Background */}
      <section className="w-full bg-white py-12 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              We'd love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.
            </p>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card 
                  title="Physical" 
                  subtitle="Meet Us"
                  value={`206 Buziness Square Building,\nJubilee Enclave, Hi-Tech City\nHyderabad - 500081`}
                  icon={MapPin}
                  actionIcon={<ExternalLink size={20} />}
                  actionHref="https://maps.app.goo.gl/9axnPvqvQJJYy4XQ7"
                  actionType="link"
                  isRed={true}
                  delay={0.2}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card 
                  title="Telephony" 
                  subtitle="Let's Connect"
                  value={`91333 83399\n91333 83381\n91333 73344`}
                  icon={Phone}
                  actionIcon={<Phone size={20} />}
                  actionHref="tel:+919133383399"
                  actionType="copy"
                  isRed={false}
                  delay={0.3}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card 
                  title="Electronic" 
                  subtitle="Email Us"
                  value="admin@thealphacircle.world"
                  icon={Mail}
                  actionIcon={<Mail size={20} />}
                  actionHref="mailto:admin@thealphacircle.world"
                  actionType="copy"
                  isRed={false}
                  delay={0.4}
                />
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section with Scroll Effects */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full bg-white py-12 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div ref={mapRef} className="mb-12 relative">
            <motion.div
              style={{ 
                opacity: mapOpacity,
                y: mapY, 
                scale: mapScale
              }}
              className="relative z-10"
            >
              <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-gray-100">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="The Alpha Circle Location - Hyderabad"
                />
              </div>
              <motion.a
                href="https://www.google.com/maps/place/The+Alpha+Circle+Hyderabad/@17.4566014,78.3736715,912m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb9379d66ca8e5:0xb5df3a81cb333e18!8m2!3d17.4565963!4d78.3762464!16s%2Fg%2F11ykwwzj_p?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#BB2324] text-white font-semibold rounded-lg hover:bg-[#BB2324]/90 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Contact Form Section with Scroll Animation */}
          <ContainerScroll
            titleComponent={
              <>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-[#BB2324]/10 text-[#BB2324] text-xs font-bold uppercase tracking-widest mb-6"
          >
                  Connect With Us
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                  Request a <span className="italic text-[#BB2324]">Personalized</span> Demo
              </h2>
                <p className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed">
                  Experience the power of Alpha Circle. Our specialists will reach out to provide a 
                  tailored walkthrough of our ecosystem.
                </p>
              </>
            }
          >
            <div className="bg-white rounded-[2rem] border border-neutral-200/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] p-8 md:p-16 lg:p-20 overflow-hidden relative max-w-4xl mx-auto h-full flex items-center justify-center">
              <div className="w-full">

              <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="relative mb-8">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 200 }}
                        className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center"
                >
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                      </motion.div>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-green-200 rounded-full -z-10"
                      />
                    </div>
                    <h3 className="text-3xl font-semibold text-neutral-900 mb-3">
                      Request Received
                  </h3>
                    <p className="text-neutral-500 text-lg max-w-sm">
                      Thank you for your interest. A member of our concierge team will contact you within 24 hours.
                  </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-10 text-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium underline underline-offset-4"
                    >
                      Send another message
                    </button>
                </motion.div>
              ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FloatingInput 
                        label="Full Name" 
                        name="name"
                        icon={<User size={18} />}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <FloatingInput 
                        label="Email Address" 
                        name="email" 
                        type="email"
                        icon={<Mail size={18} />}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FloatingInput 
                        label="Phone Number" 
                        name="phone"
                        icon={<Phone size={18} />}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <FloatingSelect 
                        label="Inquiry Type" 
                        name="subject"
                        icon={<Info size={18} />}
                        value={formData.subject}
                        onChange={handleChange}
                      />
                  </div>

                    <FloatingTextarea 
                      label="Message" 
                      name="message"
                      icon={<MessageSquare size={18} />}
                      value={formData.message}
                      onChange={handleChange}
                    />

                    <div className="pt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                        className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#BB2324] text-white font-bold rounded-2xl overflow-hidden shadow-lg shadow-[#BB2324]/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    {isSubmitting ? (
                          <div className="flex items-center gap-3">
                            <span className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                            <span className="relative">Processing...</span>
                          </div>
                    ) : (
                      <>
                            <span className="relative">Send Request</span>
                            <Send className="w-5 h-5 relative transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                      </motion.button>
                    </div>
                  </motion.form>
              )}
              </AnimatePresence>
              </div>
            </div>
          </ContainerScroll>
        </div>
      </motion.section>
    </main>
  );
}

/* ---------- UI Components ---------- */

function FloatingInput({ label, icon, ...props }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value && props.value.length > 0;

  return (
    <div className="relative group">
      <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-[#BB2324]' : 'text-neutral-400 group-hover:text-neutral-500'}`}>
        {icon}
      </div>
      <label 
        className={`absolute left-12 transition-all duration-300 pointer-events-none
          ${(isFocused || hasValue) 
            ? 'top-2 text-[10px] font-bold text-[#BB2324] uppercase tracking-wider' 
            : 'top-1/2 -translate-y-1/2 text-neutral-400 text-base'}`}
      >
        {label}
      </label>
      <input
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full pl-12 pr-5 pt-6 pb-2 bg-neutral-50 border-2 rounded-2xl outline-none transition-all duration-300
          ${isFocused 
            ? 'border-[#BB2324] bg-white ring-4 ring-[#BB2324]/5 shadow-sm' 
            : 'border-neutral-100 group-hover:border-neutral-200'}`}
      />
    </div>
  );
}

function FloatingSelect({ label, icon, ...props }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value && props.value.length > 0;

  return (
    <div className="relative group">
      <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-[#BB2324]' : 'text-neutral-400 group-hover:text-neutral-500'}`}>
        {icon}
      </div>
      <label 
        className={`absolute left-12 transition-all duration-300 pointer-events-none
          ${(isFocused || hasValue) 
            ? 'top-2 text-[10px] font-bold text-[#BB2324] uppercase tracking-wider' 
            : 'top-1/2 -translate-y-1/2 text-neutral-400 text-base'}`}
      >
        {label}
      </label>
      <select
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full pl-12 pr-12 pt-6 pb-2 bg-neutral-50 border-2 rounded-2xl outline-none transition-all duration-300 appearance-none cursor-pointer
          ${isFocused 
            ? 'border-[#BB2324] bg-white ring-4 ring-[#BB2324]/5 shadow-sm' 
            : 'border-neutral-100 group-hover:border-neutral-200'}`}
      >
        <option value="" hidden></option>
        <option value="membership">Membership Inquiry</option>
        <option value="partnership">Partnership Opportunity</option>
        <option value="event">Event Information</option>
        <option value="general">General Inquiry</option>
      </select>
      <ChevronDown className={`absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-300 ${isFocused ? 'rotate-180' : ''}`} size={18} />
    </div>
  );
}

function FloatingTextarea({ label, icon, ...props }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value && props.value.length > 0;

  return (
    <div className="relative group">
      <div className={`absolute left-5 top-7 transition-colors duration-300 ${isFocused ? 'text-[#BB2324]' : 'text-neutral-400 group-hover:text-neutral-500'}`}>
        {icon}
      </div>
      <label 
        className={`absolute left-12 transition-all duration-300 pointer-events-none
          ${(isFocused || hasValue) 
            ? 'top-2 text-[10px] font-bold text-[#BB2324] uppercase tracking-wider' 
            : 'top-7 text-neutral-400 text-base'}`}
      >
        {label}
      </label>
      <textarea
        {...props}
        rows={5}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full pl-12 pr-5 pt-7 pb-4 bg-neutral-50 border-2 rounded-2xl outline-none transition-all duration-300 resize-none
          ${isFocused 
            ? 'border-[#BB2324] bg-white ring-4 ring-[#BB2324]/5 shadow-sm' 
            : 'border-neutral-100 group-hover:border-neutral-200'}`}
      />
    </div>
  );
}