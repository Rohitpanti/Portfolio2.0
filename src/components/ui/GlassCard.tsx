'use client';

import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  tilt?: boolean;
  radiusClass?: string;
}

export default function GlassCard({
  children,
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.15)',
  tilt = true,
  radiusClass = 'rounded-2xl',
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 30,
  });

  const gradientX = useTransform(mouseX, [0, 1], [0, 100]);
  const gradientY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !tilt) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformPerspective: 1000,
      }}
      className={`relative group ${radiusClass} overflow-hidden ${className}`}
    >
      {/* Glassmorphism background */}
      <div className={`absolute inset-0 glass ${radiusClass}`} />

      {/* Hover gradient glow */}
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${radiusClass} pointer-events-none`}
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, ${glowColor}, transparent 60%)`
          ),
        }}
      />

      {/* Animated gradient border */}
      <div
        className={`absolute inset-0 ${radiusClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        style={{
          padding: '1px',
          background:
            'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.4))',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          borderRadius: 'inherit',
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
