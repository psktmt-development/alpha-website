"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Quote, Sparkles, Network, TrendingUp, ArrowRight, Target, Users, Shield, Zap } from "lucide-react";
import Image from "next/image";
import { useJoinCircle } from "@/components/ui/join-circle-provider";

// --- Utility Helper ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// --- NEW: Reactive Dot Grid Background ---
// Replaces the WavyBackground with a high-end, interactive dot matrix
const DotGridBackground = ({
  children,
  className,
  containerClassName,
  dotColor = "#e5e5e5",
  activeColor = "#af2324",
  spacing = 30,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dotColor?: string;
  activeColor?: string;
  spacing?: number;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = container.offsetWidth);
    let h = (canvas.height = container.offsetHeight);
    let dots: { x: number; y: number; baseR: number; r: number; active: number }[] = [];
    
    // Mouse state
    const mouse = { x: -1000, y: -1000 };

    // Initialize dots
    const init = () => {
      w = canvas.width = container.offsetWidth;
      h = canvas.height = container.offsetHeight;
      dots = [];
      // Create a grid of dots
      for (let x = spacing; x < w; x += spacing) {
        for (let y = spacing; y < h; y += spacing) {
          dots.push({
            x,
            y,
            baseR: 1.5, // Base radius
            r: 1.5,
            active: 0 // Interpolation factor for color (0 = gray, 1 = red)
          });
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      dots.forEach((dot) => {
        // Calculate distance to mouse
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Interaction radius
        const maxDist = 200;
        
        // Target state based on distance
        let targetR = dot.baseR;
        let targetActive = 0;
        if (dist < maxDist) {
           // Scale up active dots
           const scale = (1 - dist / maxDist); // 0 to 1
           targetR = dot.baseR + (scale * 3); // Max radius size increase
           targetActive = scale; 
        }

        // Smooth interpolation (Easing)
        dot.r += (targetR - dot.r) * 0.1;
        dot.active += (targetActive - dot.active) * 0.1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        
        // Interpolate color manually for performance
        // Grey (#e5e5e5) to Red (#af2324)
        // Simple opacity switch for "pop" effect
        if (dot.active > 0.1) {
            ctx.fillStyle = activeColor; // Red
            ctx.globalAlpha = dot.active; // Fade in redness opacity
            ctx.fill();
            
            // Draw a second pass for the base grey dot underneath so it transforms smoothly
            ctx.globalAlpha = 1 - dot.active;
            ctx.fillStyle = dotColor;
            ctx.fill();
        } else {
            ctx.fillStyle = dotColor;
            ctx.globalAlpha = 1;
            ctx.fill();
        }
        
        // Reset alpha
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    // Event Listeners
    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
       const rect = canvas.getBoundingClientRect();
       mouse.x = e.clientX - rect.left;
       mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dotColor, activeColor, spacing]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col w-full min-h-screen bg-white", 
        containerClassName
      )}
    >
      {/* Background Canvas */}
      <canvas
        className="absolute inset-0 z-0" 
        ref={canvasRef}
      />
      
      {/* Premium Noise Overlay for Texture */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-multiply"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className={cn("relative z-10 w-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

// --- Animations Components ---
const PopUp = ({ children, delay = 0, className = "", priority = false }: { children: React.ReactNode; delay?: number; className?: string, priority?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={priority ? { opacity: 1, y: 0, scale: 1 } : undefined}
      whileInView={!priority ? { opacity: 1, y: 0, scale: 1 } : undefined}
      viewport={{ once: true, margin: "-10%" }} 
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function RevealText({ children, delay = 0, className = "", priority = false }: { children: React.ReactNode; delay?: number; className?: string, priority?: boolean }) {
  return (
    <span className="block overflow-hidden relative">
      <motion.span
        initial={{ y: "100%" }}
        animate={priority ? { y: 0 } : undefined}
        whileInView={!priority ? { y: 0 } : undefined}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.9, delay: delay, ease: [0.16, 1, 0.3, 1] }} 
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

// --- Premium Card Components ---
const FeatureCard = ({ title, items, icon, delay = 0 }: { title: string, items: string[], icon: React.ReactNode, delay?: number }) => (
  <PopUp delay={delay} className="h-full">
    <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 hover:border-[#af2324]/30 transition-all duration-500 group h-full relative overflow-hidden">
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#af2324]/0 to-[#af2324]/0 group-hover:from-[#af2324]/5 group-hover:to-transparent transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white rounded-xl text-[#af2324] shadow-sm group-hover:bg-[#af2324] group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                {icon}
            </div>
            <h3 className="text-2xl font-normal text-black" style={{ fontFamily: 'DM Serif Display, serif' }}>{title}</h3>
        </div>
        <ul className="space-y-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 font-light leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#af2324]/60 shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
      </div>
    </div>
  </PopUp>
);

const TeamMemberCard = ({ name, role, image, delay = 0 }: { name: string, role: string, image?: string, delay?: number }) => (
    <PopUp delay={delay}>
        <div className="group relative">
            {/* Card Container */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 shadow-lg">
                {/* Background/Placeholder Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200" />
                
                {/* Image */}
                {image ? (
                    <img 
                        src={image} 
                        alt={name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                        <div className="relative mb-4">
                             <div className="absolute inset-0 bg-[#af2324]/10 blur-2xl rounded-full" />
                             <Users className="w-12 h-12 relative z-10 opacity-30 group-hover:opacity-100 group-hover:text-[#af2324] transition-all duration-500" />
                        </div>
                        <span className="text-xs tracking-[0.2em] uppercase opacity-50 font-medium font-sans">Portrait</span>
                    </div>
                )}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="h-0.5 w-12 bg-[#af2324] mb-4 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                    <h3 className="text-2xl text-white mb-1 leading-tight" style={{ fontFamily: 'DM Serif Display, serif' }}>{name}</h3>
                    <p className="text-gray-300 text-sm font-light tracking-wide">{role}</p>
                </div>
            </div>
        </div>
    </PopUp>
);

// --- Main Application Component ---
export default function AboutUsDotGridSection() {
  const { openModal } = useJoinCircle();
  return (
    <div className="w-full h-full font-sans antialiased text-black selection:bg-[#af2324] selection:text-white" style={{ fontFamily: 'Lato, sans-serif' }}>
      <DotGridBackground 
        className="w-full mx-auto"
        containerClassName="min-h-screen"
        dotColor="#d1d5db" // Tailwind gray-300
        activeColor="#af2324" // Brand Red
        spacing={32}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          
          {/* --- HERO SECTION --- */}
          <div className="flex flex-col items-center text-center mb-28 md:mb-40">
            <PopUp delay={0.1} priority={true}>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-black/5 bg-white/70 backdrop-blur-sm text-black text-xs font-bold tracking-widest uppercase shadow-sm font-sans hover:shadow-md transition-shadow">
                <span className="w-2 h-2 rounded-full bg-[#af2324] animate-pulse"></span>
                Welcome to The Alpha Circle
              </div>
            </PopUp>
            <h1 className="text-6xl text-black tracking-tight mb-8 leading-[0.9]" style={{ fontFamily: 'DM Serif Display, serif' }}>
              <RevealText delay={0.2} priority={true}>
                SHAPE THE FUTURE,
              </RevealText>
              <RevealText delay={0.3} priority={true} className="text-transparent bg-clip-text bg-gradient-to-r from-[#af2324] to-[#ff4d4d]">
                TOGETHER.
              </RevealText>
            </h1>
            
            <PopUp delay={0.5} className="max-w-3xl mx-auto" priority={true}>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                 Founded in 2024 by visionary entrepreneur <strong className="text-black font-semibold">Dr. Pulluri Srikanth</strong>, The Alpha Circle is a global, invite-only collective of industry leaders, second-generation entrepreneurs, changemakers, and innovators.
              </p>
            </PopUp>
          </div>

          {/* --- ABOUT / INTRO BLOCK --- */}
          <div className="mb-32 relative">
             <PopUp delay={0.2}>
                <div className="bg-white/80 backdrop-blur-xl border border-white shadow-xl shadow-black/5 rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#af2324]/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl leading-tight" style={{ fontFamily: 'DM Serif Display, serif' }}>
                                A Transformative <br/><span className="text-[#af2324]">Leadership Ecosystem</span>
                            </h2>
                            <div className="h-1.5 w-24 bg-[#af2324] rounded-full" />
                        </div>
                        <div className="space-y-6 text-lg font-light text-gray-700 leading-relaxed text-justify md:text-left">
                            <p>
                                From its regal launch at Hyderabad's <span className="font-semibold text-black">Falaknuma Palace</span>, The Alpha Circle has grown into a transformative force, spanning across India and expanding globally — with circles in <span className="font-semibold text-black">Bangalore, Vizag</span>, and upcoming launches in <span className="font-semibold text-black">Delhi, Mumbai, Dubai</span>, and more.
                            </p>
                            <p>
                                More than just a networking platform, we bring together high-impact individuals who are shaping the future across sectors — from manufacturing, real estate, and technology to finance, infrastructure, and policy innovation.
                            </p>
                        </div>
                    </div>
                </div>
             </PopUp>
          </div>

          {/* --- PURPOSE SECTION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 items-stretch">
             {/* Left: Our Purpose */}
             <div className="lg:col-span-4">
                <PopUp delay={0.1} className="h-full">
                    <div className="bg-[#af2324] text-white rounded-3xl p-10 h-full flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-[#af2324]/20">
                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/30 blur-3xl rounded-full" />
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                                <Target className="text-white w-7 h-7" />
                            </div>
                            <h3 className="text-4xl mb-6" style={{ fontFamily: 'DM Serif Display, serif' }}>Our Purpose</h3>
                            <p className="text-white/90 font-light leading-relaxed text-lg">
                                At The Alpha Circle, our mission is to build bridges between legacy and innovation, foster purposeful collaborations, and enable sustainable, global-scale growth for business leaders.
                            </p>
                        </div>
                        <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
                            <p className="font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                                <Zap size={16} fill="currentColor" /> Championing Bold Thinking
                            </p>
                        </div>
                    </div>
                </PopUp>
             </div>
             {/* Right: Why We Exist & Who We Bring Together */}
             <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                <FeatureCard 
                    title="Why We Exist"
                    icon={<Shield size={24} />}
                    delay={0.2}
                    items={[
                        "To connect global business minds on a shared platform of trust and vision.",
                        "To cultivate next-generation leadership through cross-generational engagement.",
                        "To provide a private, elevated circle for authentic conversations, strategy, and action.",
                        "To enable high-growth ventures and empower leaders with global opportunities."
                    ]}
                />
                <FeatureCard 
                    title="Who We Bring Together"
                    icon={<Users size={24} />}
                    delay={0.3}
                    items={[
                        "CXOs and Founders from diverse domains.",
                        "Second-generation leaders from India's top legacy families.",
                        "Impact-driven investors, policy influencers, and visionaries.",
                        "Industry pioneers, innovators, and global business enablers."
                    ]}
                />
             </div>
          </div>

          {/* --- MEET THE TEAM SECTION --- */}
          <div className="mb-32">
             <div className="flex flex-col items-center text-center mb-16">
                <PopUp delay={0.1}>
                    <h2 className="text-5xl text-black mb-6" style={{ fontFamily: 'DM Serif Display, serif' }}>Meet The Team</h2>
                    <div className="w-24 h-1.5 bg-[#af2324] mx-auto rounded-full" />
                </PopUp>
             </div>
             <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
                {/* Top: Founder */}
                <div className="w-full max-w-sm">
                    <TeamMemberCard 
                        name="Dr. Srikanth Pulluri"
                        role="Founder"
                        image="/home and about/Dr.-Pulluri-Srikanth-Founder.jpg"
                        delay={0.2}
                    />
                </div>
                {/* Bottom: Two team members */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    <TeamMemberCard 
                        name="Dr. Chandrashekar D P"
                        role="Director"
                        image="/home and about/Chandrashekhar.jpg"
                        delay={0.3}
                    />
                    <TeamMemberCard 
                        name="Brigadier (Dr) Inder Sethi (R)"
                        role="Chief Strategy Officer"
                        image="/home and about/Alpha-Sethi-sir.jpg"
                        delay={0.4}
                    />
                </div>
             </div>
          </div>

          {/* --- CTA SECTION --- */}
          <PopUp delay={0.2}>
            <div className="w-full bg-black text-white rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden group">
               {/* Abstract Red Glow */}
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#af2324] blur-[150px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3" />
               
               <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
                  <div className="space-y-8 max-w-2xl flex-1 min-w-0">
                    <h2 className="text-5xl tracking-tight leading-tight" style={{ fontFamily: 'DM Serif Display, serif' }}>
                        <span className="inline-block px-0.5 md:px-1 py-2 md:py-3 border-l-4 border-r-4 border-transparent -mr-1 md:-mr-2">Join</span>
                        <span className="inline-block px-0.5 md:px-1 py-2 md:py-3 border-l-4 border-r-4 border-transparent -mr-1 md:-mr-2">the</span>
                        <span className="inline-block px-0.5 md:px-1 py-2 md:py-3 border-l-4 border-r-4 border-transparent -mr-1 md:-mr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#af2324] to-[#ff4d4d]">Legacy</span>
                        <span className="inline-block px-0.5 md:px-1 py-2 md:py-3 border-l-4 border-r-4 border-transparent">.</span>
                    </h2>
                    <div className="space-y-4 text-gray-400 text-xl font-light">
                      <p className="break-words">
                        We believe that leadership, when united, can reshape industries and uplift economies.
                      </p>
                    </div>
                    <button 
                      onClick={openModal}
                      className="inline-flex items-center gap-3 px-10 py-5 bg-[#af2324] hover:bg-[#d12e2f] text-white font-bold rounded-full transition-all duration-300 transform hover:translate-x-1 font-sans tracking-wide shadow-[0_10px_40px_-10px_rgba(175,35,36,0.6)]"
                    >
                      Apply for Membership <ArrowRight size={20} />
                    </button>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center flex-shrink-0">
                     <div className="w-[480px] h-[320px] flex items-center justify-center relative">
                        <div className="relative w-full h-full">
                          <Image
                            src="/home and about/Visiting Card (2).png"
                            alt="Alpha Circle Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </PopUp>

        </div>
      </DotGridBackground>
    </div>
  );
}

