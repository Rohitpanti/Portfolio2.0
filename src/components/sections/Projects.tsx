'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Target, Lightbulb, TrendingUp, AlertTriangle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/projects';
import SectionTransition, { SectionHeader } from '@/components/ui/SectionTransition';
import GlassCard from '@/components/ui/GlassCard';
import TechBadge from '@/components/ui/TechBadge';
import { GlowButton } from '@/components/ui/MagneticButton';

export default function Projects() {
  return (
    <SectionTransition id="projects" className="relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <SectionHeader
          subtitle="// Featured Work"
          title="Projects"
          description="Enterprise systems powering global operations"
        />

        <div className="flex flex-col gap-32 w-full mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard className="p-5 sm:p-8 md:p-10 overflow-hidden">
                {/* Code-style header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-3 text-xs text-text-muted font-mono">
                    ~/projects/{project.id}
                  </div>
                </div>

                {/* Title & subtitle */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-accent-blue font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {project.longDescription}
                </p>

                {/* Details grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Challenges */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-amber-400">
                      <AlertTriangle size={16} />
                      <h4 className="text-sm font-semibold uppercase tracking-wider">
                        Challenges
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {project.challenges.map((c, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="text-sm text-text-muted flex gap-2"
                        >
                          <span className="text-amber-400/60 mt-1">▸</span>
                          {c}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-accent-blue">
                      <Lightbulb size={16} />
                      <h4 className="text-sm font-semibold uppercase tracking-wider">
                        Solutions
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {project.solutions.map((s, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="text-sm text-text-muted flex gap-2"
                        >
                          <span className="text-accent-blue/60 mt-1">▸</span>
                          {s}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-accent-green">
                      <TrendingUp size={16} />
                      <h4 className="text-sm font-semibold uppercase tracking-wider">
                        Impact
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {project.impact.map((imp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="text-sm text-text-muted flex gap-2"
                        >
                          <span className="text-accent-green/60 mt-1">▸</span>
                          {imp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} size="md" />
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <GlowButton variant="outline" size="sm" href={project.githubUrl}>
                      <FaGithub size={16} />
                      Source Code
                    </GlowButton>
                  )}
                  {project.liveUrl && (
                    <GlowButton variant="primary" size="sm" href={project.liveUrl}>
                      <ExternalLink size={16} />
                      Live Demo
                    </GlowButton>
                  )}
                  {project.clients && (
                    <span className="flex items-center gap-2 text-xs text-text-muted ml-auto">
                      <Target size={14} />
                      Clients: {project.clients.join(', ')}
                    </span>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
