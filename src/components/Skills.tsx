export function Skills() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "React",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "TypeScript",
    "Flask",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Postman",
    "Stripe",
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
