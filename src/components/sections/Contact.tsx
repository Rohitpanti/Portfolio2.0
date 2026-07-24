'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send,
  Download, CheckCircle, AlertCircle,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '@/data/personal';
import SectionTransition, { SectionHeader } from '@/components/ui/SectionTransition';
import GlassCard from '@/components/ui/GlassCard';
import { GlowButton } from '@/components/ui/MagneticButton';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#3b82f6',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: '#10b981',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: personalInfo.location,
    color: '#f59e0b',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personalInfo.socialLinks.find((l) => l.name === 'LinkedIn')?.url,
    color: '#0077b5',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'View my code',
    href: personalInfo.socialLinks.find((l) => l.name === 'GitHub')?.url,
    color: '#ffffff',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <SectionTransition id="contact" className="relative section-lazy">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle="// Let's Connect"
          title="Get In Touch"
          description="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <GlassCard className="p-4" tilt={false}>
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green" />
                  </span>
                  <span className="text-sm text-text-primary font-medium">
                    {personalInfo.availability}
                  </span>
                </div>
              </GlassCard>
            </motion.div>

            {/* Contact cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    data-cursor-hover
                  >
                    <ContactCard item={item} />
                  </a>
                ) : (
                  <ContactCard item={item} />
                )}
              </motion.div>
            ))}

            {/* Resume download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <GlowButton
                variant="secondary"
                size="md"
                href={personalInfo.resumeUrl}
                magnetic={false}
              >
                <Download size={16} />
                Download Resume
              </GlowButton>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-5 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Your Name"
                    type="text"
                    value={formState.name}
                    onChange={(v) => setFormState((s) => ({ ...s, name: v }))}
                    required
                    placeholder="John Doe"
                  />
                  <FormField
                    label="Your Email"
                    type="email"
                    value={formState.email}
                    onChange={(v) => setFormState((s) => ({ ...s, email: v }))}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <FormField
                  label="Subject"
                  type="text"
                  value={formState.subject}
                  onChange={(v) => setFormState((s) => ({ ...s, subject: v }))}
                  required
                  placeholder="Project collaboration"
                />
                <FormField
                  label="Message"
                  type="textarea"
                  value={formState.message}
                  onChange={(v) => setFormState((s) => ({ ...s, message: v }))}
                  required
                  placeholder="Tell me about your project..."
                />

                <div className="pt-2">
                  <GlowButton
                    variant="primary"
                    size="lg"
                    onClick={() => {}}
                    magnetic={false}
                  >
                    <AnimatePresence mode="wait">
                      {status === 'sending' && (
                        <motion.span
                          key="sending"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </motion.span>
                      )}
                      {status === 'sent' && (
                        <motion.span
                          key="sent"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle size={16} />
                          Message Sent!
                        </motion.span>
                      )}
                      {status === 'error' && (
                        <motion.span
                          key="error"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <AlertCircle size={16} />
                          Try Again
                        </motion.span>
                      )}
                      {status === 'idle' && (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Send size={16} />
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </GlowButton>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SectionTransition>
  );
}

function ContactCard({
  item,
}: {
  item: { icon: React.ReactNode; label: string; value: string; color: string };
}) {
  return (
    <div className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 group">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${item.color}15`,
          color: item.color,
        }}
      >
        {item.icon}
      </div>
      <div>
        <p className="text-xs text-text-muted">{item.label}</p>
        <p className="text-sm text-text-primary font-medium">{item.value}</p>
      </div>
    </div>
  );
}

function FormField({
  label,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  const inputClasses =
    'w-full bg-white/5 border border-glass-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all duration-300';

  return (
    <div>
      <label className="block text-sm text-text-secondary mb-2 font-medium">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
}
