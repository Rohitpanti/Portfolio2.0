'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import SectionTransition, { SectionHeader } from '@/components/ui/SectionTransition';
import GlassCard from '@/components/ui/GlassCard';
import WalkingCharacter from '@/components/ui/WalkingCharacter';
import { Code2, Server, Cloud, Database, Users, Zap } from 'lucide-react';

const highlights = [
  { icon: <Server size={24} />, label: 'Backend Architecture', color: '#3b82f6' },
  { icon: <Cloud size={24} />, label: 'Cloud Native', color: '#8b5cf6' },
  { icon: <Database size={24} />, label: 'Data Systems', color: '#06b6d4' },
  { icon: <Code2 size={24} />, label: 'Clean Code', color: '#10b981' },
  { icon: <Users size={24} />, label: 'Agile Teams', color: '#f59e0b' },
  { icon: <Zap size={24} />, label: 'Performance', color: '#ec4899' },
];

export default function About() {
  const sentences = personalInfo.summary.split('. ').filter(Boolean);

  return (
    <SectionTransition id="about" className="relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle="// About Me"
          title="Who I Am"
          description="Passionate about building systems that scale"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main summary */}
          <div className="lg:col-span-3">
            <GlassCard className="p-8 md:p-10">
              <div className="space-y-5">
                {sentences.map((sentence, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-text-secondary text-lg leading-relaxed"
                  >
                    {sentence.trim()}
                    {sentence.trim().endsWith('.') ? '' : '.'}
                  </motion.p>
                ))}
              </div>

              {/* Location & availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-6 flex flex-wrap gap-4 items-center"
              >
                <span className="flex items-center gap-2 text-sm text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                  {personalInfo.availability}
                </span>
                <span className="text-text-muted text-sm">•</span>
                <span className="text-sm text-text-muted">
                  📍 {personalInfo.location}
                </span>
              </motion.div>
            </GlassCard>
          </div>

          {/* Highlight cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + i * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <GlassCard
                  className="p-4 text-center"
                  glowColor={`${item.color}20`}
                  tilt={false}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex p-3 rounded-xl mb-2"
                    style={{ color: item.color, background: `${item.color}15` }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="text-sm text-text-secondary font-medium">
                    {item.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <WalkingCharacter 
        gifSrc="https://media.tenor.com/rcKRNgllZrwAAAAj/%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0%E5%AE%B3%E7%BE%9E.gif" 
        altText="Shinchan blushing" 
        initial={{ right: '5%', opacity: 0 }}
        animate={{ right: '5%', opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="hidden md:flex absolute -bottom-28 z-50 items-end pointer-events-none"
      />
    </SectionTransition>
  );
}
