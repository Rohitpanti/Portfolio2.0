'use client';

import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  color?: string;
  size?: 'sm' | 'md';
}

export default function TechBadge({
  name,
  color = 'rgba(59, 130, 246, 0.15)',
  size = 'sm',
}: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className={`inline-flex items-center rounded-lg font-mono transition-all duration-300 border border-transparent hover:border-accent-blue/30 ${
        size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
      }`}
      style={{
        background: color,
        color: 'var(--text-secondary)',
      }}
      data-cursor-hover
    >
      {name}
    </motion.span>
  );
}
