import { Calendar } from "lucide-react";

export function EducationCard() {
  const education = [
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "T.R.R. College of Technology",
      period: "2022 - 2025",
      cgpa: "8.8",
    },
  ];

  return (
    <div
      className="bg-gray-50 dark:bg-gray-950 p-6 w-max"
      id="education">
      <Calendar className="w-6 h-6 text-black dark:text-white mb-4" />
      <h3 className="text-sm font-medium text-black dark:text-white mb-2">
        Education
      </h3>
      {education.map((edu, idx) => (
        <div
          key={idx}
          className="mb-2">
          <p className="text-xs font-medium text-black dark:text-white">
            {edu.degree}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {edu.institution}
          </p>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-500 dark:text-gray-500">
              {edu.period}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-500">
              CGPA {edu.cgpa}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
