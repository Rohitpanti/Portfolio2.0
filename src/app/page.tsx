import dynamic from 'next/dynamic';

// Dynamic imports for heavy components (code splitting)
const CustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor')
);
const Navbar = dynamic(() => import('@/components/ui/Navbar'));
const ScrollProgress = dynamic(
  () => import('@/components/ui/ScrollProgress')
);
const SmoothScrollProvider = dynamic(
  () => import('@/components/providers/SmoothScrollProvider')
);

// Section components
const Hero = dynamic(() => import('@/components/sections/Hero'));
const About = dynamic(() => import('@/components/sections/About'));
const Skills = dynamic(() => import('@/components/sections/Skills'));
const Experience = dynamic(() => import('@/components/sections/Experience'));
const Projects = dynamic(() => import('@/components/sections/Projects'));
const Education = dynamic(() => import('@/components/sections/Education'));

const Achievements = dynamic(
  () => import('@/components/sections/Achievements')
);
const Contact = dynamic(() => import('@/components/sections/Contact'));
const Footer = dynamic(() => import('@/components/sections/Footer'));

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Ambient background gradient */}
      <div className="ambient-gradient" />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />
      <ScrollProgress />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />

        <Achievements />
        <Contact />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
