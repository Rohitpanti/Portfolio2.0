'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Briefcase, FolderGit2, Globe, Activity, Cpu, MapPin,
} from 'lucide-react';
import { achievements } from '@/data/achievements';
import SectionTransition, { SectionHeader } from '@/components/ui/SectionTransition';
import GlassCard from '@/components/ui/GlassCard';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase size={28} />,
  FolderGit2: <FolderGit2 size={28} />,
  Globe: <Globe size={28} />,
  Activity: <Activity size={28} />,
  Cpu: <Cpu size={28} />,
  MapPin: <MapPin size={28} />,
};

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      setDisplayValue(
        value % 1 !== 0
          ? parseFloat((eased * value).toFixed(1))
          : Math.floor(eased * value)
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <SectionTransition id="achievements" className="relative section-lazy">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          subtitle="// By The Numbers"
          title="Achievements"
          description="Impact metrics across my career"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
            >
              <GlassCard className="p-6 md:p-8 text-center h-full" tilt={false}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="inline-flex p-3 md:p-4 rounded-2xl mb-4 text-accent-blue"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                  }}
                >
                  {iconMap[achievement.icon] || <Activity size={28} />}
                </motion.div>

                <div className="text-3xl md:text-4xl font-bold gradient-text-animated mb-2">
                  <AnimatedCounter
                    value={achievement.value}
                    suffix={achievement.suffix}
                  />
                </div>

                <h3 className="text-sm font-semibold text-text-primary mb-1">
                  {achievement.label}
                </h3>
                <p className="text-xs text-text-muted">{achievement.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
