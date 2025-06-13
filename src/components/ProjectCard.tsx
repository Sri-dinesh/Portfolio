import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  language?: string;
  demoLink?: string;
  codeLink?: string;
  imageUrl?: string;
}

export function ProjectCard({
  title,
  description,
  language,
  demoLink,
  codeLink,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div
      className="bg-white dark:bg-black border border-gray-100 dark:border-gray-900 p-6 flex flex-col h-full"
      id="projects">
      <div className="h-24 bg-gray-100 dark:bg-gray-900 mb-4 rounded-lg overflow-hidden border border-gray-200 relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-800 transition-colors" />
        )}
      </div>
      <h3 className="text-sm font-medium text-black dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 flex-grow">
        {description}
      </p>
      <p className="text-xs text-gray-600 italic  dark:text-gray-400 mb-4 flex-grow">
        {language}
      </p>
      <div className="flex gap-3 mt-auto">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-500 hover:text-black dark:hover:text-white text-xs transition-colors">
            <ExternalLink className="w-3 h-3" />
            Demo
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-500 hover:text-black dark:hover:text-white text-xs transition-colors">
            <Github className="w-3 h-3" />
            Code
          </a>
        )}
      </div>
    </div>
  );
}
