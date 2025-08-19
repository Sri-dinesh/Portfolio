import { Briefcase, Calendar, Mail, User } from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import { ContactLinks } from "./components/ContactLinks";
import { EducationCard } from "./components/EducationCard";
import { ExperienceCard } from "./components/ExperienceCard";
import Header from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { Skills } from "./components/Skills";
import { projects } from "./data/projects";
import { HeroCard } from "./components/HeroCard";
import { CodeIllustration } from "./components/CodeIllustration";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-8">
        <BentoGrid />
      </main>
      <ScrollToTopButton />
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {/* Hero Card */}
      <HeroCard
        initials="SD"
        name="S Sridinesh"
        title="Web Developer | UI/UX Designer"
        description="Turning ideas into interactive web realities."
      />

      {/* Code Illustration */}
      <CodeIllustration />

      {/* Skills */}
      <Skills />

      {/* Section Divider - Projects Section */}
      <div className="sm:col-span-2 lg:col-span-4 flex items-center gap-4 py-2">
        <Briefcase className="w-4 h-4 text-black dark:text-white" />
        <h2 className="text-lg font-medium text-black dark:text-white">
          Projects
        </h2>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
      </div>

      <div className="sm:col-span-2 lg:col-span-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              language={project.language}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="sm:col-span-2 lg:col-span-4 flex items-center gap-4 py-2">
        <User className="w-4 h-4 text-black" />
        <h2 className="text-lg font-medium text-black">Experience</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <ExperienceCard
        title={"Project Intern"}
        company={"ACTS CDAC HYDERABAD"}
        period={"2024 May - June"}
        description={
          "Contributed to the ISEA portal by developing responsive UI components, ensuring functionality, security, and cross-browser compatibility, while supporting training and cybersecurity initiatives."
        }
      />
      <ExperienceCard
        title={"Web Developer Intern"}
        company={"CipherByte Technologies"}
        period={"2024 May - June"}
        description={
          "Developed 5+ responsive websites with React and Tailwind CSS, achieving 98% compatibility and 40% faster load times through optimization."
        }
      />
      <ExperienceCard
        title={"UI/UX Designer"}
        company={"Nousverse LLP"}
        period={"2024 May - November"}
        description={
          "Designed cross-platform UI/UX solutions, improving engagement by 18%, navigation by 30%, and feedback speed by 25% using Figma and user research."
        }
      />

      {/* Education Section */}
      <div className="sm:col-span-2 lg:col-span-4 flex items-center gap-4 py-2">
        <Calendar className="w-4 h-4 text-black" />
        <h2 className="text-lg font-medium text-black">Education</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <EducationCard />

      {/* Section Divider - Contact */}
      <div className="sm:col-span-2 lg:col-span-4 flex items-center gap-4 py-2">
        <Mail className="w-4 h-4 text-black dark:text-white" />
        <h2 className="text-lg font-medium text-black dark:text-white">
          Contact
        </h2>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
      </div>

      <ContactForm />
      <ContactLinks />
    </div>
  );
}
