// ============================================================
// Portfolio Type Definitions
// ============================================================

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  profileImage: string;
  availability: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  proficiency: number; // 0-100
  yearsOfExperience: number;
  color: string;
}

export type SkillCategory =
  | 'Languages'
  | 'Backend'
  | 'Frontend'
  | 'Databases'
  | 'DevOps & Cloud'
  | 'Tools & Testing';

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  companyLogo?: string;
  achievements: string[];
  techStack: string[];
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  clients?: string[];
  challenges: string[];
  solutions: string[];
  impact: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  achievements?: string[];
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeImage?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
