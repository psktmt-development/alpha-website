"use client";

import { useEffect, useRef } from "react";

/**
 * Real Canvas Particle Effect
 * This creates an actual HTML5 Canvas with moving particles
 */
export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  containerClassName,
  colors = [[59, 130, 246]],
  dotSize = 2,
}: {
  animationSpeed?: number;
  containerClassName?: string;
  colors?: number[][];
  dotSize?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    // Particle logic
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * animationSpeed,
        vy: (Math.random() - 0.5) * animationSpeed,
        size: Math.random() * dotSize + 1,
        color: `rgb(${colors[Math.floor(Math.random() * colors.length)].join(",")})`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, animationSpeed, dotSize]);

  return (
    <div className={`absolute inset-0 h-full w-full overflow-hidden ${containerClassName || ""}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-60"
        style={{ filter: "blur(0.5px)" }}
      />
    </div>
  );
};
