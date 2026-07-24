'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    velocityX: 0,
    velocityY: 0,
  });
  const prevPosition = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const vx = e.clientX - prevPosition.current.x;
      const vy = e.clientY - prevPosition.current.y;
      prevPosition.current = { x: e.clientX, y: e.clientY };
      setPosition({
        x: e.clientX,
        y: e.clientY,
        velocityX: vx,
        velocityY: vy,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return position;
}
