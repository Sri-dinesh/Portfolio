import { Calendar } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}

export function EducationCard({
  degree,
  institution,
  period,
  cgpa,
}: EducationCardProps) {
  return (
    <div
      className="bg-gray-50 dark:bg-gray-950 p-6 w-max"
      id="education">
      <Calendar className="w-6 h-6 text-black dark:text-white mb-4" />
      <h3 className="text-sm font-medium text-black dark:text-white mb-2">
        Education
      </h3>
      <p className="text-xs text-black dark:text-white font-medium">{degree}</p>
      <p className="text-xs text-gray-600 dark:text-gray-400">{institution}</p>
      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-500 dark:text-gray-500">
          {period}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-500">
          CGPA {cgpa}
        </span>
      </div>
    </div>
  );
}
