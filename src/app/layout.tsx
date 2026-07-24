import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import AudioPlayer from '@/components/ui/AudioPlayer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rohit B | Backend Software Engineer',
  description:
    'Software Developer with 4+ years of experience building scalable microservices-based systems. Expert in Java, Spring Boot, AWS, Docker, Kubernetes, and enterprise architecture.',
  keywords: [
    'Rohit B',
    'Backend Software Engineer',
    'Java Developer',
    'Spring Boot',
    'Microservices',
    'Full Stack Developer',
    'AWS',
    'Docker',
    'Kubernetes',
    'Portfolio',
  ],
  authors: [{ name: 'Rohit B', url: 'https://rohitb.dev' }],
  creator: 'Rohit B',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohitb.dev',
    title: 'Rohit B | Backend Software Engineer',
    description:
      'Software Developer with 4+ years of experience building scalable microservices-based systems.',
    siteName: 'Rohit B Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit B | Backend Software Engineer',
    description:
      'Software Developer with 4+ years of experience building scalable microservices-based systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Rohit B',
              jobTitle: 'Backend Software Engineer',
              url: 'https://rohitb.dev',
              email: 'rohitpanti03@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bengaluru',
                addressCountry: 'India',
              },
              knowsAbout: [
                'Java',
                'Spring Boot',
                'Microservices',
                'AWS',
                'Docker',
                'Kubernetes',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased bg-black">
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}
