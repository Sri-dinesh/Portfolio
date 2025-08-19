export function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Python",
    "Flask",
    "Java",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Figma",
    "Framer",
  ];

  return (
    <div
      id="skills"
      className="sm:col-span-2 lg:col-span-4 bg-white border border-gray-100 p-6">
      <h3 className="text-sm font-medium text-black mb-4">
        Skills & Technologies
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs hover:bg-gray-200 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
