'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Download, ArrowDown, Globe, Mail, PenTool } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '@/data/personal';
import { GlowButton } from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';
import TypewriterText from '@/components/ui/TypewriterText';
import WalkingCharacter from '@/components/ui/WalkingCharacter';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });

const socialIcons: Record<string, React.ReactNode> = {
  github: <FaGithub size={18} />,
  linkedin: <FaLinkedin size={18} />,
  mail: <Mail size={18} />,
  'pen-tool': <PenTool size={18} />,
  globe: <Globe size={18} />,
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background — fade from black */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-black z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <WalkingCharacter 
        gifSrc="https://media.tenor.com/-RYUs_Icgw4AAAAj/crayon-shin-chan-crayon-shin-chan-dance.gif" 
        altText="Shinchan dancing" 
        initial={{ left: '-20%', opacity: 0 }}
        animate={{ left: '100%', opacity: 1 }}
        transition={{ 
          duration: 15, 
          ease: 'linear',
          repeat: Infinity 
        }}
        className="absolute bottom-0 z-50 flex items-end pointer-events-none"
      />

      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Scene
          showStars
          showParticles
          camera={{ position: [0, 0, 5], fov: 45 }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 pointer-events-auto">
        {/* Greeting */}
        <div className="mb-4">
          <span className="text-accent-blue font-mono text-lg md:text-xl tracking-wider block h-7">
            <TypewriterText text={'// Hello World'} delay={500} speed={40} cursor={false} />
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-4 tracking-tight flex justify-center items-center gap-4 h-20 md:h-28">
          <TypewriterText text="Hi, I'm" delay={1200} speed={50} cursor={false} />
          <span className="gradient-text-animated">
            <TypewriterText text={personalInfo.firstName} delay={1800} speed={80} cursor={true} />
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-text-secondary mb-6 font-light tracking-wide">
          {personalInfo.title}
        </h2>

        {/* Tagline */}
        <div className="mb-8">
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            <AnimatedText text={personalInfo.tagline} delay={2.5} />
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <GlowButton
            variant="primary"
            size="md"
            onClick={() => {
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore
            <ArrowDown size={16} />
          </GlowButton>
          <GlowButton
            variant="secondary"
            size="md"
            href={personalInfo.resumeUrl}
          >
            <Download size={16} />
            Resume
          </GlowButton>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3">
          {personalInfo.socialLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/30 transition-colors duration-300 pointer-events-auto"
              aria-label={link.name}
            >
              {socialIcons[link.icon] || <Globe size={18} />}
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
