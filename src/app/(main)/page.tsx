import { ContactForm } from '@/components/contact-form';
import Navbar from '@/components/navbar';
import { Skills } from '@/components/skills';
import { HeroCard } from '@/components/hero-card';
import { TimelineSection } from '@/components/timeline-section';
import { ProjectList } from '@/components/project-list';
import { FreelanceProjects } from '@/components/freelance-projects';

import { generateMetadata as generateSeoMetadata } from "@/config/seo";

export const metadata = generateSeoMetadata();

function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <section
        id="about"
        className="col-span-1 sm:col-span-2 lg:col-span-4 row-span-2 scroll-mt-20"
        aria-labelledby="about-heading"
      >
        <h2 id="about-heading" className="sr-only">
          About Me
        </h2>
        <HeroCard
          initials="SD"
          name="S Sridinesh"
          title="Full-Stack Developer"
          description="Building scalable web applications with clean code and seamless user experiences."
        />
      </section>

      <section
        className="sm:col-span-2 lg:col-span-4 scroll-mt-24"
        id="skills"
        aria-labelledby="skills-heading"
      >
        <h2 id="skills-heading" className="sr-only">
          Skills & Technologies
        </h2>
        <Skills />
      </section>

      <section
        id="projects"
        className="sm:col-span-2 lg:col-span-4 scroll-mt-24"
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        <ProjectList />
      </section>

      <section
        className="sm:col-span-2 lg:col-span-4 scroll-mt-10"
        id="experience"
        aria-labelledby="experience-heading"
      >
        <h2 id="experience-heading" className="sr-only">
          Experience & Education
        </h2>
        <TimelineSection />
      </section>

      <section
        id="freelance"
        className="sm:col-span-2 lg:col-span-4 scroll-mt-24"
        aria-labelledby="freelance-heading"
      >
        <h2 id="freelance-heading" className="sr-only">
          Freelance Projects
        </h2>
        <FreelanceProjects />
      </section>

      <section
        className="sm:col-span-2 lg:col-span-4 scroll-mt-24"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <h2 id="contact-heading" className="sr-only">
          Contact
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <BentoGrid />
      </main>
    </>
  );
}
