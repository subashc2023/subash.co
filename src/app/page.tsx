import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import { Skills } from '@/components/home/Skills';
import { Experience } from '@/components/home/Experience';
import { Certifications } from '@/components/home/Certifications';
import { Projects } from '@/components/home/Projects';
import { Contact } from '@/components/home/Contact';
import { Footer } from '@/components/home/Footer';

// Additional metadata for the home page
export const metadata: Metadata = {
  title: 'Subash Chandra - Portfolio',
  description: 'Welcome to my portfolio - Technical Product Associate & Data Domain Architect',
  alternates: {
    canonical: 'https://subash.co'
  }
};

export default function Home() {
  return (
    // Remove min-h-screen as it's already in layout
    <div className="flex flex-col items-center w-full">
      {/* Main content sections */}
      <div className="w-full">
        <Hero />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
      </div>

      {/* Contact and footer section */}
      <div className="w-full">
        <Contact />
        {/* Use rem instead of vh for better mobile experience */}
        <div className="h-24" aria-hidden="true" />
        <Footer />
      </div>

      {/* Future section placeholder */}
      {/* <section id="blog" className="w-full" aria-hidden="true">
        Blog section (coming soon)
      </section> */}
    </div>
  );
}
