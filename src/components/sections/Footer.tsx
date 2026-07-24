'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-glass-border">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-text-secondary text-sm flex items-center gap-1.5 justify-center md:justify-start">
              Designed & Developed with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart size={14} className="text-red-500 fill-red-500" />
              </motion.span>
              by
              <span className="gradient-text-animated font-semibold">
                Rohit B
              </span>
            </p>
            <p className="text-text-muted text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold gradient-text-animated"
          >
            {'<RB />'}
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass rounded-xl px-4 py-2 text-text-secondary hover:text-text-primary transition-colors duration-300 flex items-center gap-2 text-sm"
            aria-label="Back to top"
            data-cursor-hover
          >
            <ArrowUp size={16} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
