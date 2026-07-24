'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
          className="text-4xl font-bold gradient-text-animated"
        >
          {'<RB />'}
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className="h-full w-1/2 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent, var(--accent-blue), var(--accent-purple), transparent)',
            }}
          />
        </div>

        <p className="text-text-muted text-xs font-mono tracking-wider">
          Initializing...
        </p>
      </motion.div>
    </div>
  );
}
