import { ContactForm } from '@/components/client/ContactForm';
import Header from '@/components/client/Header';
import { Skills } from '@/components/client/Skills';
import { HeroCard } from '@/components/client/HeroCard';
import { TimelineSection } from '@/components/client/TimelineSection';
import { ProjectList } from '@/components/client/ProjectList';

import { generateMetadata as generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata();

function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <section
        id="about"
        className="col-span-1 sm:col-span-1 lg:col-span-4 row-span-2 scroll-mt-20"
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
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <BentoGrid />
      </main>
    </>
  );
}
