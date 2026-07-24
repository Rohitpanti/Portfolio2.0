'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/certifications';
import SectionTransition, { SectionHeader } from '@/components/ui/SectionTransition';
import GlassCard from '@/components/ui/GlassCard';

export default function Certifications() {
  return (
    <SectionTransition id="certifications" className="relative section-lazy">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          subtitle="// Credentials"
          title="Certifications"
          description="Professional certifications and credentials"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
            >
              <GlassCard className="p-6 h-full group">
                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0"
                  >
                    <Award size={22} className="text-accent-blue" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-text-primary mb-1 truncate">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-accent-cyan mb-1">{cert.issuer}</p>
                    <p className="text-xs text-text-muted mb-2">{cert.date}</p>
                    {cert.description && (
                      <p className="text-xs text-text-muted leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-xs text-accent-blue hover:underline"
                        data-cursor-hover
                      >
                        View credential <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
