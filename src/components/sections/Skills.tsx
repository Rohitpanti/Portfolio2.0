'use client';

import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiPython, SiSpringboot, SiSpring, SiHibernate,
  SiGraphql, SiApachekafka, SiNodedotjs, SiReact, SiAngular, SiHtml5,
  SiTailwindcss, SiPostgresql, SiMysql, SiMongodb,
  SiRedis, SiDocker, SiKubernetes,
  SiJenkins, SiLinux, SiGit, SiGithub, SiApachemaven, SiGradle,
  SiIntellijidea, SiSwagger, SiPrometheus, SiGrafana,
} from 'react-icons/si';
import { FaJava, FaCubes, FaPlug, FaInfinity, FaVial, FaFlask, FaCss3Alt, FaAws, FaDatabase } from 'react-icons/fa';
import { VscAzure, VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { skills, skillCategories } from '@/data/skills';
import SectionTransition, { SectionHeader } from '@/components/ui/SectionTransition';
import GlassCard from '@/components/ui/GlassCard';

// Icon map
const iconMap: Record<string, React.ReactNode> = {
  FaJava: <FaJava size={28} />,
  SiJavascript: <SiJavascript size={28} />,
  SiTypescript: <SiTypescript size={28} />,
  SiPython: <SiPython size={28} />,
  SiSpringboot: <SiSpringboot size={28} />,
  SiSpring: <SiSpring size={28} />,
  SiHibernate: <SiHibernate size={28} />,
  FaCubes: <FaCubes size={28} />,
  TbApi: <TbApi size={28} />,
  SiGraphql: <SiGraphql size={28} />,
  SiApachekafka: <SiApachekafka size={28} />,
  SiNodedotjs: <SiNodedotjs size={28} />,
  FaPlug: <FaPlug size={28} />,
  SiReact: <SiReact size={28} />,
  SiAngular: <SiAngular size={28} />,
  SiHtml5: <SiHtml5 size={28} />,
  SiCss3: <FaCss3Alt size={28} />,
  SiTailwindcss: <SiTailwindcss size={28} />,
  SiPostgresql: <SiPostgresql size={28} />,
  SiMysql: <SiMysql size={28} />,
  SiOracle: <FaDatabase size={28} />,
  SiMongodb: <SiMongodb size={28} />,
  SiRedis: <SiRedis size={28} />,
  SiDocker: <SiDocker size={28} />,
  SiKubernetes: <SiKubernetes size={28} />,
  SiAmazonwebservices: <FaAws size={28} />,
  SiMicrosoftazure: <VscAzure size={28} />,
  SiJenkins: <SiJenkins size={28} />,
  FaInfinity: <FaInfinity size={28} />,
  SiLinux: <SiLinux size={28} />,
  SiGit: <SiGit size={28} />,
  SiGithub: <SiGithub size={28} />,
  SiApachemaven: <SiApachemaven size={28} />,
  SiGradle: <SiGradle size={28} />,
  FaVial: <FaVial size={28} />,
  FaFlask: <FaFlask size={28} />,
  SiIntellijidea: <SiIntellijidea size={28} />,
  SiVisualstudiocode: <VscVscode size={28} />,
  SiSwagger: <SiSwagger size={28} />,
  SiPrometheus: <SiPrometheus size={28} />,
  SiGrafana: <SiGrafana size={28} />,
};

export default function Skills() {
  const actualCategories = skillCategories.filter((c) => c !== 'All');

  return (
    <SectionTransition id="skills" className="relative">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          subtitle="// Tech Stack"
          title="Technical Skills"
          description="Technologies I work with to build scalable systems"
        />

        <div className="space-y-16 w-full">
          {actualCategories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category);
            
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="w-full"
              >
                <h3 
                  className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-4 text-white"
                  style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(59,130,246,0.6), 0 0 30px rgba(59,130,246,0.4)' }}
                >
                  <span className="w-8 h-[2px] bg-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.8)] block" />
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {categorySkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.05,
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      <GlassCard
                        className="p-4 text-center group h-full"
                        glowColor={`${skill.color}20`}
                        tilt={false}
                        radiusClass="rounded-lg"
                      >
                        {/* Icon */}
                        <motion.div
                          whileHover={{
                            scale: 1.2,
                            rotate: 5,
                            y: -4,
                          }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          className="inline-flex mb-3 transition-colors duration-300"
                          style={{ color: skill.color }}
                          data-cursor-hover
                        >
                          {iconMap[skill.icon] || <FaCubes size={28} />}
                        </motion.div>

                        {/* Name */}
                        <p className="text-sm font-medium text-text-primary mb-2 truncate">
                          {skill.name}
                        </p>

                        {/* Proficiency bar */}
                        <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden mt-auto">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.02, duration: 1, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                              boxShadow: `0 0 8px ${skill.color}40`,
                            }}
                          />
                        </div>

                        {/* Hover info */}
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-xs text-text-muted">
                            {skill.yearsOfExperience}y • {skill.proficiency}%
                          </p>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
