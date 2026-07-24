'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function SectionTransition({
  children,
  className = '',
  id,
  delay = 0,
}: SectionTransitionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`section-padding flex flex-col items-center justify-center min-h-[80vh] ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-full mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-accent-blue font-mono text-sm mb-3 tracking-wider uppercase"
        >
          {subtitle}
        </motion.p>
      )}
      {description && (
        <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
