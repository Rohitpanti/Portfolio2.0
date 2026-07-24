'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { education } from '@/data/education';
import SectionTransition, { SectionHeader } from '@/components/ui/SectionTransition';
import GlassCard from '@/components/ui/GlassCard';
import WalkingCharacter from '@/components/ui/WalkingCharacter';

export default function Education() {
  return (
    <SectionTransition id="education" className="relative mb-32 md:mb-48">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          subtitle="// Foundation"
          title="Education"
          description="Where the journey began"
        />

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <GlassCard className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="w-16 h-16 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0"
                >
                  <GraduationCap size={28} className="text-accent-purple" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-accent-blue font-medium text-lg mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 text-text-muted text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.startYear} – {edu.endYear}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>

                  {edu.description && (
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {edu.achievements && (
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex gap-2 text-sm text-text-secondary"
                        >
                          <BookOpen
                            size={14}
                            className="mt-0.5 text-accent-purple shrink-0"
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Shin-chan walking right to left */}
      <WalkingCharacter 
        gifSrc="https://media.tenor.com/UKkHdEwg-5IAAAAj/crayon-shin-chan.gif" 
        altText="Shinchan walking" 
        initial={{ right: '-30%' }}
        animate={{ right: '120%' }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
        className="hidden md:flex absolute -bottom-40 z-50 items-end pointer-events-none"
      />
    </SectionTransition>
  );
}
