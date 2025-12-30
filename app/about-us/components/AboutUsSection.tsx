"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Quote, Sparkles, Network, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { useJoinCircle } from "@/components/ui/join-circle-provider";

// --- Utility Helper ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// --- Simplex Noise Implementation ---
const createNoise3D = () => {
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 0; i < 256; i++) {
        const r = Math.floor(Math.random() * 256);
        const t = p[i]; p[i] = p[r]; p[r] = t;
    }
    const perm = new Uint8Array(512);
    const permMod12 = new Uint8Array(512);
    for (let i = 0; i < 512; i++) {
        perm[i] = p[i & 255];
        permMod12[i] = perm[i] % 12;
    }
    const grad3 = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0,
                                    1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1,
                                    0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]);
    const F3 = 1.0 / 3.0;
    const G3 = 1.0 / 6.0;
    return (xin: number, yin: number, zin: number) => {
        let n0, n1, n2, n3;
        const s = (xin + yin + zin) * F3;
        const i = Math.floor(xin + s);
        const j = Math.floor(yin + s);
        const k = Math.floor(zin + s);
        const t = (i + j + k) * G3;
        const X0 = i - t;
        const Y0 = j - t;
        const Z0 = k - t;
        const x0 = xin - X0;
        const y0 = yin - Y0;
        const z0 = zin - Z0;
        
        let i1, j1, k1;
        let i2, j2, k2;
        if (x0 >= y0) {
            if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
            else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
            else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
        } else {
            if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
            else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
            else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
        }
        
        const x1 = x0 - i1 + G3;
        const y1 = y0 - j1 + G3;
        const z1 = z0 - k1 + G3;
        const x2 = x0 - i2 + 2.0 * G3;
        const y2 = y0 - j2 + 2.0 * G3;
        const z2 = z0 - k2 + 2.0 * G3;
        const x3 = x0 - 1.0 + 3.0 * G3;
        const y3 = y0 - 1.0 + 3.0 * G3;
        const z3 = z0 - 1.0 + 3.0 * G3;
        
        const ii = i & 255;
        const jj = j & 255;
        const kk = k & 255;
        
        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) n0 = 0.0;
        else {
            const gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
            t0 *= t0;
            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
        }
        
        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) n1 = 0.0;
        else {
            const gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
            t1 *= t1;
            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
        }
        
        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) n2 = 0.0;
        else {
            const gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
            t2 *= t2;
            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
        }
        
        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) n3 = 0.0;
        else {
            const gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
            t3 *= t3;
            n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
        }
        
        return 32.0 * (n0 + n1 + n2 + n3);
    };
};

// --- WavyBackground Component ---
interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}

const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const noiseRef = useRef<any>(null);
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow": return 0.001;
      case "fast": return 0.002;
      default: return 0.001;
    }
  };
  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;
    if (!noiseRef.current) {
        noiseRef.current = createNoise3D();
    }
    
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      if (!ctx) return;
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };
  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    const noise = noiseRef.current;
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.65); 
      }
      ctx.stroke();
      ctx.closePath();
    }
  };
  let animationId: number;
  const render = () => {
    if (!ctx) return;
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };
  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
      window.onresize = null;
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "relative flex flex-col w-full min-h-screen", 
        containerClassName
      )}
    >
      <canvas
        className="fixed inset-0 z-0 pointer-events-none" 
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
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
    <span className="block overflow-hidden relative" style={{ fontSize: 'inherit' }}>
      <motion.span
        initial={{ y: "100%" }}
        animate={priority ? { y: 0 } : undefined}
        whileInView={!priority ? { y: 0 } : undefined}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.9, delay: delay, ease: [0.16, 1, 0.3, 1] }} 
        className={`block ${className}`}
        style={{ fontSize: 'inherit' }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// --- Founders Message Component ---
const FounderMessage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const yImage = useTransform(smoothProgress, [0, 1], [50, -30]);
  const rotateQuote = useTransform(smoothProgress, [0, 1], [-3, 3]);
  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 md:py-32 px-6 overflow-hidden flex flex-col items-center justify-center mt-20"
    >
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-0 left-6 md:left-12 lg:left-24 h-full w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent origin-top hidden md:block z-10" 
      />
      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        
        {/* 1. The Hook / Main Quote */}
        <div className="mb-20 md:mb-28 relative text-center max-w-4xl mx-auto">
            <motion.div 
              style={{ rotate: rotateQuote }} 
              className="inline-block"
            >
              <PopUp delay={0.1}>
                 <Quote className="w-12 h-12 text-[#af2324] mx-auto mb-8 opacity-90 drop-shadow-sm" />
              </PopUp>
            </motion.div>
            
            <h2 
              className="font-dm-serif text-5xl font-bold leading-tight text-gray-900"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              <RevealText>
                <span className="inline-block px-4 md:px-6 lg:px-8 py-2 md:py-3 border-l-4 border-r-4 border-transparent">
                  "Legacy is not what we
                </span>
              </RevealText>
              <RevealText delay={0.15}>
                <span className="inline-block px-4 md:px-6 lg:px-8 py-2 md:py-3 border-l-4 border-r-4 border-transparent">
                  leave behind — it's what
                </span>
              </RevealText>
              <RevealText delay={0.3} className="text-[#af2324]">
                <span className="inline-block px-4 md:px-6 lg:px-8 py-2 md:py-3 border-l-4 border-r-4 border-transparent">
                  we build together."
                </span>
              </RevealText>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 w-full items-center">
            
            {/* 2. The Narrative Body */}
            <div className="md:col-span-7 relative">
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-12 space-y-8 text-lg font-light text-gray-700 leading-relaxed text-justify md:text-left">
                <PopUp delay={0.1}>
                  <p>
                    When I started <strong className="text-gray-900 font-semibold relative inline-block">The Alpha Circle
                    <motion.span initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }} className="absolute bottom-0 left-0 h-[2px] bg-[#af2324]/20" />
                    </strong>, it wasn't just to build another community. 
                    It was to create a space I personally wished existed — a place where leaders could rise together, 
                    <span className="italic text-gray-900/80"> without pretense, without ego, and without limits.</span>
                  </p>
                </PopUp>
                <PopUp delay={0.2}>
                  <p>
                    In business, we often find ourselves surrounded by noise. But rarely do we find 
                    <span className="text-gray-900 mx-1 relative inline-block group cursor-pointer hover:text-[#af2324] transition-colors duration-300 font-medium">
                      authenticity, clarity, and purpose
                      <span className="block h-[1px] w-full bg-[#af2324]/30 group-hover:bg-[#af2324] transition-colors" />
                    </span> 
                    in the conversations we have. The Alpha Circle was born from a desire to change that — to bring together 
                    those who don't just chase growth, but believe in creating lasting impact.
                  </p>
                </PopUp>
                <PopUp delay={0.3}>
                  <p>
                    We're here to redefine leadership — not by titles or wealth, but by how we think, act, and serve. 
                    Whether you're a legacy builder or a changemaker, The Alpha Circle is a space to collaborate beyond borders, 
                    elevate industries, and build with intention.
                  </p>
                </PopUp>
                {/* Signature Block */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="pt-4 flex flex-col items-start"
                >
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="h-[1px] w-12 bg-[#af2324]" />
                      <span className="text-xs tracking-[0.3em] uppercase text-[#af2324] font-bold font-sans">Founder</span>
                    </div>
                    <h3 className="font-dm-serif text-4xl italic text-gray-900 transform -rotate-1 origin-left whitespace-nowrap">
                      Dr. Pulluri Srikanth
                    </h3>
                </motion.div>
              </div>
            </div>
            {/* 3. The Visual / Image Placeholder */}
            <div className="md:col-span-5 relative mt-8 md:mt-0 flex justify-center md:justify-end z-20">
               <motion.div style={{ y: yImage }} className="relative w-full aspect-[3/4] md:aspect-[4/5] max-w-sm z-20">
                 <PopUp delay={0.4} priority={true}>
                     {/* Outer Decorative Lines */}
                     <div className="absolute -inset-4 border border-black/5 z-0 hidden md:block" />
                     <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-[#af2324]/30 rounded-tr-3xl hidden md:block z-0" />
                     <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-[#af2324]/30 rounded-bl-3xl hidden md:block z-0" />
                     
                     {/* The Image Container */}
                     <div className="relative w-full h-full bg-gray-50 overflow-hidden group z-20 border border-black/5 shadow-2xl rounded-sm">
                         {/* Founder Image */}
                         <img 
                           src="/home and about/founder.JPG"
                           alt="Dr. Pulluri Srikanth - Founder, The Alpha Circle"
                           className="w-full h-full object-cover"
                           loading="eager"
                         />
                         {/* Gradient Overlay */}
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 z-10 pointer-events-none" />
                     </div>
                     
                     {/* Bottom Shadow */}
                     <div className="absolute -bottom-8 left-8 right-8 h-8 bg-black/10 blur-xl rounded-full z-0" />
                 </PopUp>
               </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}

// --- About Us Component ---
const AboutCard = ({ title, description, icon, delay = 0 }: { title: string; description: string, icon: React.ReactNode, delay?: number }) => (
  <PopUp delay={delay} className="h-full">
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 p-8 rounded-2xl hover:border-[#af2324]/30 hover:shadow-xl hover:shadow-[#af2324]/5 transition-all duration-300 group h-full flex flex-col">
      <div className="mb-6 p-3 bg-gray-50 rounded-xl w-fit text-[#af2324] group-hover:bg-[#af2324] group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
        {icon}
      </div>
      <h3 className="font-dm-serif text-2xl font-normal text-gray-900 mb-3 group-hover:text-[#af2324] transition-colors">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  </PopUp>
);

// --- Main Component ---
export default function AboutUsSection() {
  const { openModal } = useJoinCircle();
  return (
    <div className="w-full h-full antialiased text-gray-900 selection:bg-[#af2324] selection:text-white">
      <WavyBackground 
        className="w-full mx-auto"
        containerClassName="min-h-screen"
        backgroundFill="#ffffff"
        colors={[
          "#af2324", // Primary Red
          "#e5e5e5", // Light Grey
          "#000000", // Black
          "#d12e2f", // Brighter Red
        ]}
        waveOpacity={0.4}
        blur={10}
        speed="slow"
      >
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
          
          {/* Heading First: About Us */}
          <div className="flex flex-col items-center text-center mb-24 md:mb-32">
            <PopUp delay={0.1} priority={true}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-black/5 bg-gray-50 text-gray-900 text-xs font-bold tracking-widest uppercase shadow-sm font-sans">
                <span className="w-2 h-2 rounded-full bg-[#af2324]"></span>
                About Us
              </div>
            </PopUp>
            <h1 
              className="font-dm-serif text-6xl font-bold text-gray-900 tracking-tight mb-8 leading-none"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              <RevealText delay={0.2} priority={true}>
                ALPHA <span className="text-[#af2324]">CIRCLE</span>
              </RevealText>
            </h1>
            
            <PopUp delay={0.4} className="max-w-3xl mx-auto" priority={true}>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                We are the architects of the new standard. A private ecosystem forging connections that defy the ordinary.
              </p>
            </PopUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <AboutCard 
              delay={0.2}
              title="Elite Network" 
              description="Access a curated brotherhood of high-performers, visionaries, and industry titans dedicated to mutual elevation."
              icon={<Network size={28} />}
            />
            <AboutCard 
              delay={0.4}
              title="Unrivaled Growth" 
              description="Experience a paradigm shift in personal and professional development through exclusive mentorship and resources."
              icon={<TrendingUp size={28} />}
            />
            <AboutCard 
              delay={0.6}
              title="Global Impact" 
              description="We don't just adapt to the future; we shape it. Our collective influence spans borders, industries, and cultures."
              icon={<Globe size={28} />}
            />
          </div>
          {/* Founder Message Section */}
          <div className="border-t border-gray-100">
             <FounderMessage />
          </div>
          <PopUp delay={0.2}>
            <div className="w-full bg-gray-900 text-white rounded-3xl p-12 md:p-20 mt-12 relative overflow-hidden group">
               {/* Abstract Red Glow */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-[#af2324] blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
               
               <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <h2 className="font-dm-serif text-4xl md:text-5xl tracking-tight">Ready to Ascend?</h2>
                    <div className="space-y-6 text-gray-400 text-lg font-light">
                      <p>
                        Alpha Circle is the signal in the noise. We believe true power lies in precision, integrity, and the strength of one's circle.
                      </p>
                    </div>
                    <button 
                      onClick={openModal}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#af2324] hover:bg-[#d12e2f] text-white font-bold rounded-full transition-all duration-300 transform hover:translate-x-1 font-sans tracking-wide"
                    >
                      Join the Circle <ArrowRight size={20} />
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                     <img 
                       src="/home and about/Visiting Card (2).png"
                       alt="The Alpha Circle"
                       className="max-w-full h-auto"
                     />
                  </div>
               </div>
            </div>
          </PopUp>
        </div>
      </WavyBackground>
    </div>
  );
}
