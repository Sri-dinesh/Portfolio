import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div
      className="sm:col-span-2 bg-white dark:bg-black border border-gray-100 dark:border-gray-900 p-6"
      id="experience">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-4 h-4 text-black dark:text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-black dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-xs text-black dark:text-white mb-1">{company}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            {period}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
