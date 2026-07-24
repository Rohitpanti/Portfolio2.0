'use client';

import { useEffect, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useIsMobile } from '@/hooks/useMediaQuery';

export default function CustomCursor() {
  const isMobile = useIsMobile();

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring for the spotlight
  const ringX = useSpring(cursorX, { stiffness: 100, damping: 30, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 100, damping: 30, mass: 0.5 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, handleMouseMove]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[1] pointer-events-none"
      style={{
        x: ringX,
        y: ringY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <div
        className="w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.12) 40%, transparent 70%)',
          filter: 'blur(30px)',
          mixBlendMode: 'screen'
        }}
      />
    </motion.div>
  );
}
