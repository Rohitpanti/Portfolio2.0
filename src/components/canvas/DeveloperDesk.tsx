import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox, Html } from '@react-three/drei';
import * as THREE from 'three';

interface DeveloperDeskProps {
  children?: React.ReactNode;
}

export default function DeveloperDesk({ children }: DeveloperDeskProps) {
  return (
    <group position={[0, -1, 0]} scale={0.9}>
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 10, 5]} intensity={2.0} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#3b82f6" />
      <Desk />
      <Monitor>{children}</Monitor>
      <Keyboard />
      <Float
        speed={2} 
        rotationIntensity={0.2} 
        floatIntensity={0.5}
        floatingRange={[-0.02, 0.02]}
      >
        <CoffeeMug />
      </Float>
    </group>
  );
}

function Desk() {
  return (
    <group>
      <RoundedBox args={[5, 0.1, 2.5]} radius={0.02} position={[0, 0, 0]}>
        {/* Dark Walnut Wood color */}
        <meshStandardMaterial color="#1f1a18" metalness={0.2} roughness={0.7} />
      </RoundedBox>
      {[
        [-2.3, -1, -1],
        [2.3, -1, -1],
        [-2.3, -1, 1],
        [2.3, -1, 1],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <cylinderGeometry args={[0.04, 0.04, 2, 8]} />
          {/* Dark metallic legs */}
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

interface MonitorProps {
  children?: React.ReactNode;
}

function Monitor({ children }: MonitorProps) {
  const screenRef = useRef<THREE.Mesh>(null);

  // Monitor glow animation (flicker)
  useFrame((state) => {
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      // Slight flicker effect
      material.emissiveIntensity = 0.4 + Math.random() * 0.1;
    }
  });

  return (
    <group position={[0, 1.2, -0.8]}>
      {/* Monitor Casing - Light Greyish Aluminum */}
      <RoundedBox args={[2.8, 1.7, 0.08]} radius={0.04}>
        <meshStandardMaterial color="#d1d5db" metalness={0.6} roughness={0.4} />
      </RoundedBox>
      
      {/* Monitor Screen */}
      <mesh ref={screenRef} position={[0, 0, 0.045]}>
        <planeGeometry args={[2.5, 1.45]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#0a1224"
          emissiveIntensity={0.5}
          toneMapped={false}
        />
        {/* Render HTML content directly onto the monitor screen */}
        {children && (
          <Html transform position={[0, 0, 0.01]} scale={0.003} zIndexRange={[100, 0]}>
            <div 
              className="w-[830px] h-[480px] flex flex-col items-center justify-center text-white pointer-events-auto"
            >
              {children}
            </div>
          </Html>
        )}
      </mesh>
      
      {/* Monitor Stand - Light Greyish Aluminum */}
      <mesh position={[0, -1.05, 0.2]}>
        <cylinderGeometry args={[0.06, 0.08, 0.4, 12]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, -1.28, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.04, 16]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.7} roughness={0.3} />
      </mesh>
      <pointLight position={[0, 0, 0.5]} intensity={2} color="#3b82f6" distance={3} />
    </group>
  );
}

function Keyboard() {
  const keyboardRef = useRef<THREE.Group>(null);
  
  // Removed the useFrame animation to stop the flickering of the keyboard

  return (
    <group ref={keyboardRef} position={[0, 0.12, 0.3]}>
      <RoundedBox args={[1.8, 0.05, 0.6]} radius={0.02}>
        <meshStandardMaterial
          color="#d1d5db"
          metalness={0.6}
          roughness={0.4}
        />
      </RoundedBox>
      {/* eslint-disable react-hooks/purity */}
      {Array.from({ length: 40 }).map((_, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        const x = -0.75 + col * 0.16 + (row % 2) * 0.05;
        const z = -0.15 + row * 0.1;
        
        return (
          <mesh key={i} position={[x, 0.03, z]}>
            <boxGeometry args={[0.12, 0.02, 0.08]} />
            <meshStandardMaterial 
              color="#09090b" 
              emissive="#3b82f6"
              emissiveIntensity={0.2}
              roughness={0.8}
            />
          </mesh>
        );
      })}
      {/* eslint-enable react-hooks/purity */}
    </group>
  );
}

function CoffeeMug() {
  return (
    <group>
      <group position={[2, 0.25, 0.5]}>
        <mesh>
          <cylinderGeometry args={[0.12, 0.1, 0.25, 16]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.11, 16]} />
          <meshStandardMaterial color="#3b2010" roughness={0.1} />
        </mesh>
      </group>
      <mesh position={[2, 0.6, 0.5]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <MeshDistortMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          distort={0.4}
          speed={3}
        />
      </mesh>
      <mesh position={[1.95, 0.8, 0.5]} scale={0.6}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <MeshDistortMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          distort={0.5}
          speed={2}
        />
      </mesh>
    </group>
  );
}
