'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.15; // Set a low volume so it's not overwhelming
    }
    
    // Attempt to play on first user interaction if they haven't manually clicked yet
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {
          // Auto-play prevented (expected in many cases)
        });
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true); // Mark as interacted so auto-play doesn't trigger anymore
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/shinchan_theme.mp3"
        loop
        preload="auto"
      />
      
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, type: 'spring' }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-glass border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 group"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              className="relative flex items-center justify-center text-accent-cyan"
            >
              <Volume2 size={24} />
              <motion.span 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-accent-cyan/20 pointer-events-none"
              />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              className="text-text-muted group-hover:text-white transition-colors"
            >
              <VolumeX size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Tooltip */}
        <span className="absolute -top-10 right-0 w-max px-3 py-1 bg-black/80 backdrop-blur text-xs font-mono text-text-secondary rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {isPlaying ? 'Pause Theme' : 'Play Theme'}
        </span>
      </motion.button>
    </>
  );
}
