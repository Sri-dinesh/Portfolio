import { motion } from "framer-motion";

const skills = [
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Docker",
  "Figma",
  "SQL",
];

export function Skills() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillPill key={skill} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

function SkillPill({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.02,
        ease: [0.2, 0.8, 0.2, 1] 
      }}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.25)"
      }}
      className="px-5 py-2.5 text-sm font-medium text-alabaster/90 bg-white/[0.03] border border-white/5 rounded-full cursor-default transition-colors duration-300"
    >
      {skill}
    </motion.div>
  );
}
