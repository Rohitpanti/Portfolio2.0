'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'words' | 'chars' | 'lines';
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  type = 'words',
  once = true,
}: AnimatedTextProps) {
  const elements =
    type === 'chars'
      ? text.split('')
      : type === 'lines'
        ? text.split('\n')
        : text.split(' ');

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      className={`inline-flex flex-wrap ${className}`}
      aria-label={text}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                delay: delay + index * (type === 'chars' ? 0.02 : 0.06),
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="inline-block"
        >
          {element}
          {type === 'words' ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export function GradientText({
  children,
  className = '',
  animated = false,
}: GradientTextProps) {
  return (
    <span
      className={`${animated ? 'gradient-text-animated' : 'gradient-text'} ${className}`}
    >
      {children}
    </span>
  );
}
