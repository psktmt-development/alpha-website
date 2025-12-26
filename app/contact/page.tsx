"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

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
        className={`relative group p-8 rounded-3xl h-[450px] flex flex-col justify-between overflow-hidden transition-all duration-500 max-w-sm w-full mx-auto ${
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

        <div>
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

  // Parallax scroll container ref for map section
  const mapParallaxRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mapParallaxRef,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax transforms for map section with scroll effect
  const mapY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -50]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.5, 1, 1, 0.95]);
  const mapScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.85, 1, 1.03, 1]);
  const mapRotation = useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1]);
  const backdropOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.7, 0.4]);

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section with Shooting Stars Background */}
      <section className="w-full bg-slate-950 py-12 px-4 md:px-8 relative overflow-hidden">
        {/* Static Stars Background */}
        {staticStars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}

        {/* Shooting Stars Animation */}
        <ShootingStars 
          minSpeed={12} 
          maxSpeed={25} 
          starColor="#facc15" 
          trailColor="#e879f9" 
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              We'd love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.
            </p>
          </motion.div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
          </div>
        </div>
      </section>

      {/* Map Section with Parallax Popup - No Shooting Stars Background */}
      <section className="w-full bg-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={mapParallaxRef} className="mb-12 relative">
            {/* Backdrop overlay */}
            <motion.div
              style={{ opacity: backdropOpacity }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10 pointer-events-none"
            />
            
            <motion.div
              style={{ 
                y: mapY, 
                opacity: mapOpacity, 
                scale: mapScale,
                rotate: mapRotation
              }}
              className="relative z-10 mb-12"
            >
              <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-gray-100 backdrop-blur-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.3764744!3d17.4564665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzIzLjMiTiA3OMKwMjInMzUuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Buziness+Square+Building+Jubilee+Enclave+Hi-Tech+City+Hyderabad"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="The Alpha Circle Location - Buziness Square Building"
                />
              </div>
              <motion.a
                href="https://www.google.com/maps/search/Buziness+Square+Building,+Jubilee+Enclave,+Hi-Tech+City,+Hyderabad"
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

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request a Demo
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within one business day.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BB2324] focus:border-[#BB2324] outline-none transition-all bg-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BB2324] focus:border-[#BB2324] outline-none transition-all bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BB2324] focus:border-[#BB2324] outline-none transition-all bg-white"
                        placeholder="+91 123 456 7890"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BB2324] focus:border-[#BB2324] outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="event">Event Information</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BB2324] focus:border-[#BB2324] outline-none transition-all resize-none bg-white"
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 bg-[#BB2324] text-white font-semibold rounded-lg hover:bg-[#BB2324]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}