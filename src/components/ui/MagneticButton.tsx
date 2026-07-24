'use client';

import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  download?: boolean;
  magnetic?: boolean;
}

export function GlowButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  download,
  magnetic = true,
}: GlowButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-accent-blue to-accent-purple text-white
      shadow-[0_0_20px_rgba(59,130,246,0.3)]
      hover:shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(139,92,246,0.2)]
    `,
    secondary: `
      bg-white/5 text-text-primary border border-glass-border
      hover:bg-white/10 hover:border-accent-blue/30
    `,
    outline: `
      bg-transparent text-accent-blue border border-accent-blue/40
      hover:bg-accent-blue/10 hover:border-accent-blue/60
      hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
    `,
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex items-center gap-2 rounded-xl font-medium
        transition-all duration-300 cursor-pointer
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      data-cursor-hover
    >
      {children}
    </motion.span>
  );

  const content = href ? (
    <a href={href} download={download} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {buttonContent}
    </a>
  ) : (
    <button onClick={onClick} type="button">
      {buttonContent}
    </button>
  );

  if (magnetic) {
    return <MagneticButton>{content}</MagneticButton>;
  }
  return content;
}

