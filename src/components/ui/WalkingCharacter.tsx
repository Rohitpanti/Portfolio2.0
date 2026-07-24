'use client';

import { motion } from 'framer-motion';

interface WalkingCharacterProps {
  gifSrc: string;
  altText: string;
  initial?: any;
  animate?: any;
  transition?: any;
  className?: string;
}

export default function WalkingCharacter({
  gifSrc,
  altText,
  initial = { right: '100%' },
  animate = { right: '5%' },
  transition = { duration: 6, ease: 'linear' },
  className = "absolute bottom-10 z-50 flex items-end pointer-events-none"
}: WalkingCharacterProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] pointer-events-auto">
        <img 
          src={gifSrc} 
          alt={altText}
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
}
