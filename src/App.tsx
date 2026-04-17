import { ContactForm } from "./components/ContactForm";
import Header from "./components/Header";
import { Skills } from "./components/Skills";
import { HeroCard } from "./components/HeroCard";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { SignatureCursor } from "./components/SignatureCursor";
import { TimelineSection } from "./components/TimelineSection";
import { ProjectList } from "./components/ProjectList";
import { useMemo } from "react";
import { useSeo } from "./lib/seo";

export default function App() {
  const homeSchema = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "S Sridinesh | Full-Stack Developer Portfolio",
        url: "https://sridinesh-portfolio.vercel.app/",
        description:
          "Portfolio of S Sridinesh, a full-stack developer specializing in React, Node.js, and TypeScript.",
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "S Sridinesh",
        url: "https://sridinesh-portfolio.vercel.app/",
        sameAs: [
          "https://github.com/Sri-dinesh",
          "https://linkedin.com/in/sridinesh07",
          "https://x.com/srixdevv",
        ],
        jobTitle: "Full-Stack Developer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
      },
    ],
    [],
  );

  useSeo({
    title: "S Sridinesh | Full-Stack Developer | React, Node.js, TypeScript",
    description:
      "S Sridinesh is a full-stack developer in Hyderabad specializing in React, Node.js, and TypeScript. Explore projects, skills, and experience.",
    canonical: "https://sridinesh-portfolio.vercel.app/",
    author: "S Sridinesh",
    keywords:
      "S Sridinesh, full-stack developer, React developer, Node.js developer, TypeScript developer, web developer Hyderabad, software engineer portfolio",
    ogType: "website",
    ogSiteName: "S Sridinesh Portfolio",
    ogLocale: "en_US",
    twitterSite: "@srixdevv",
    twitterCreator: "@srixdevv",
    rssHref: "https://sridinesh-portfolio.vercel.app/rss.xml",
    schema: homeSchema,
  });

  return (
    <div className="min-h-screen bg-obsidian text-alabaster selection:bg-charcoal-light selection:text-white pb-24 relative">
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(#a1a1a6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
      </div>

      <SignatureCursor />
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <BentoGrid />
      </main>
      <ScrollToTopButton />
    </div>
  );
}

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
