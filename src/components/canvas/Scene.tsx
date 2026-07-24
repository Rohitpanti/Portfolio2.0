'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import StarsBackground from './StarsBackground';
import FloatingParticles from './FloatingParticles';

interface SceneProps {
  children?: React.ReactNode;
  showStars?: boolean;
  showParticles?: boolean;
  className?: string;
  camera?: { position: [number, number, number]; fov: number };
}

export default function Scene({
  children,
  showStars = true,
  showParticles = true,
  className = '',
  camera = { position: [0, 0, 8], fov: 55 },
}: SceneProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={camera}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          {showStars && <StarsBackground />}
          {showParticles && <FloatingParticles />}
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
