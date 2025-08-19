export function EducationCard() {
  const education = [
    {
      degree: "Bachelor of Computer Science Engineering",
      institution: "Vardhaman College of Technology",
      period: "2025 - 2028",
      cgpa: "8.8",
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "T.R.R. College of Technology",
      period: "2022 - 2025",
      cgpa: "8.8",
    },
  ];
  return (
    <div className="flex gap-4">
      {education.map((edu, idx) => (
        <div
          key={idx}
          className="bg-gray-50 dark:bg-gray-950 p-4 shadow-sm w-full shrink-0">
          <p className="text-xs font-medium text-black dark:text-white">
            {edu.degree}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
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
