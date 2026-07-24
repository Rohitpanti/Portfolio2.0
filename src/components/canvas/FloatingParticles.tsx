'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingParticlesProps {
  count?: number;
}

export default function FloatingParticles({ count = 80 }: FloatingParticlesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  /* eslint-disable react-hooks/purity */
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15
        ),
        speed: Math.random() * 0.3 + 0.1,
        offset: Math.random() * Math.PI * 2,
        scale: Math.random() * 0.08 + 0.02,
        color: new THREE.Color().setHSL(
          0.55 + Math.random() * 0.15, // blue to purple range
          0.8,
          0.5 + Math.random() * 0.3
        ),
      });
    }
    return temp;
  }, [count]);
  /* eslint-enable react-hooks/purity */

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particles.forEach((particle, i) => {
      dummy.position.set(
        particle.position.x + Math.sin(time * particle.speed + particle.offset) * 2,
        particle.position.y +
          Math.cos(time * particle.speed * 0.8 + particle.offset) * 1.5,
        particle.position.z + Math.sin(time * particle.speed * 0.5) * 1
      );
      dummy.scale.setScalar(
        particle.scale * (1 + Math.sin(time * 2 + particle.offset) * 0.3)
      );
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
      meshRef.current!.setColorAt(i, particle.color);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial transparent opacity={0.6} toneMapped={false} />
    </instancedMesh>
  );
}
