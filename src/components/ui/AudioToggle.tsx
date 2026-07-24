'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element only on client side
    const audio = new Audio('/audio/ambient.mp3'); // We'll assume the user adds this file later
    audio.loop = true;
    audio.volume = 0.3; // Low ambient volume
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Catch promise for browsers that block autoplay
      audioRef.current.play().catch((err) => {
        console.warn('Audio playback prevented by browser:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleAudio}
      className="glass rounded-full p-2.5 text-text-secondary hover:text-accent-blue transition-colors duration-300 relative group"
      aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient sound'}
      data-cursor-hover
    >
      <div className="absolute inset-0 rounded-full bg-accent-blue/0 group-hover:bg-accent-blue/10 transition-colors duration-300" />
      
      {isPlaying ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <Volume2 size={18} />
          {/* Simple equalizer animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-end justify-center gap-0.5 opacity-20 pb-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-0.5 bg-accent-blue rounded-full"
                animate={{
                  height: ['20%', '80%', '20%'],
                }}
                transition={{
                  duration: 0.8 + i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <VolumeX size={18} />
        </motion.div>
      )}
    </button>
  );
}
