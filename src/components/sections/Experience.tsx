'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { experiences } from '@/data/experience';
import SectionTransition, { SectionHeader } from '@/components/ui/SectionTransition';
import GlassCard from '@/components/ui/GlassCard';
import TechBadge from '@/components/ui/TechBadge';

export default function Experience() {
  return (
    <SectionTransition id="experience" className="relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          subtitle="// Career Path"
          title="Professional Experience"
          description="Building enterprise systems for Fortune 500 clients"
        />

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="hidden md:block absolute left-4 md:left-1/2 top-0 w-[2px] origin-top shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            style={{
              background:
                'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), transparent)',
            }}
          />

          {/* Experience cards */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex items-start mb-16 md:mb-24 flex-col ${
                  isLeft
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  className="hidden md:block absolute left-4 md:left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="relative flex items-center justify-center w-8 h-8 group cursor-pointer">
                    <div className="absolute inset-0 rounded-full bg-accent-blue animate-ping opacity-30" />
                    <div className="absolute inset-2 rounded-full bg-background border border-accent-blue" />
                    <div className="w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_20px_rgba(59,130,246,1)] z-10" />
                  </div>
                </motion.div>

                {/* Card */}
                <div
                  className={`w-full md:w-[45%] flex-shrink-0 relative z-20 ${
                    isLeft ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'
                  }`}
                >
                  <GlassCard className="p-5 md:p-8 relative group overflow-hidden border border-white/5 hover:border-accent-blue/30 transition-colors duration-500">
                    {/* Glowing background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-6 border-b border-white/10 pb-4">
                        <h3 
                          className="text-2xl font-bold text-white mb-2"
                          style={{ textShadow: '0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(59,130,246,0.3)' }}
                        >
                          {exp.role}
                        </h3>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2 text-accent-blue font-semibold">
                            <Building2 size={16} />
                            <span className="text-base tracking-wide uppercase">
                              {exp.company}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
                            <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-sm">
                              <Calendar size={14} className="text-accent-blue" />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-sm">
                              <MapPin size={14} className="text-accent-blue" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-4 mb-8">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex gap-4 text-sm md:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <TechBadge key={tech} name={tech} size="sm" />
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Character on the right side for the first experience */}
                {index === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex relative md:absolute left-0 right-0 md:left-auto top-0 bottom-0 w-full md:w-[45%] mt-8 md:mt-0 md:pl-12 flex-col justify-center opacity-100 pointer-events-auto transition-opacity duration-300 z-10"
                  >
                    <div className="relative w-full rounded-2xl p-1 bg-gradient-to-tr from-accent-blue/40 via-accent-purple/40 to-transparent shadow-[0_0_50px_rgba(59,130,246,0.3)] animate-pulse-slow group overflow-hidden">
                      {/* Glow Behind */}
                      <div className="absolute inset-0 bg-accent-blue/20 blur-2xl group-hover:bg-accent-blue/40 transition-colors duration-500" />
                      
                      {/* Image Container */}
                      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-background/50 backdrop-blur-sm w-full">
                        <img 
                          src="https://media1.tenor.com/m/f2skTtL7kLwAAAAC/%E8%A0%9F%E7%AD%86%E5%B0%8F%E6%96%B0-shin-chan.gif" 
                          alt="Shin-chan"
                          className="w-full h-auto object-contain"
                          style={{ maxHeight: '250px' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Character on the left side for the second experience */}
                {index === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex relative md:absolute left-0 right-0 md:right-auto md:left-0 top-0 bottom-0 w-full md:w-[45%] mt-8 md:mt-0 md:pr-12 flex-col justify-center opacity-100 pointer-events-auto transition-opacity duration-300 z-10"
                  >
                    <div className="relative w-full rounded-2xl p-1 bg-gradient-to-tr from-accent-purple/40 via-accent-blue/40 to-transparent shadow-[0_0_50px_rgba(139,92,246,0.3)] animate-pulse-slow group overflow-hidden">
                      {/* Glow Behind */}
                      <div className="absolute inset-0 bg-accent-purple/20 blur-2xl group-hover:bg-accent-purple/40 transition-colors duration-500" />
                      
                      {/* Image Container */}
                      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-background/50 backdrop-blur-sm w-full">
                        <img 
                          src="https://i.redd.it/iaoxv23z40za1.jpg"
                          alt="Shinchan blue uniform"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
