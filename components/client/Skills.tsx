"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skills = [
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/a1a1a6" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/a1a1a6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/a1a1a6" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/a1a1a6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/a1a1a6" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/a1a1a6" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/a1a1a6" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/a1a1a6" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/a1a1a6" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/a1a1a6" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/a1a1a6" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/a1a1a6" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/a1a1a6" },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/a1a1a6",
  },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/a1a1a6" },
];

export function Skills() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-8 group">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-300">
          <Code2 className="w-5 h-5 text-emerald-400" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-semibold text-alabaster tracking-tight">
          Skills
        </h2>
      </div>

      <div className="relative w-full rounded-xl p-5 sm:p-8 bg-white/[0.02] border border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <ul className="relative z-10 flex flex-wrap gap-2.5 sm:gap-3 justify-start m-0 p-0 list-none">
          {skills.map((skill, index) => (
            <SkillBadge key={skill.name} skill={skill} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SkillBadge({
  skill,
  index,
}: {
  skill: { name: string; icon: string };
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.03,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.06] hover:border-emerald-500/20 hover:shadow-[0_2px_10px_-4px_rgba(52,211,153,0.15)] transition-all duration-300"
    >
      <Image
        src={skill.icon}
        alt={`${skill.name}`}
        width={15}
        height={15}
        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-125 select-none pointer-events-none"
        draggable={false}
        aria-hidden="true"
      />
      <span className="text-xs sm:text-[13px] font-medium text-pearl/70 group-hover:text-alabaster transition-colors duration-300 tracking-wide select-none">
        {skill.name}
      </span>
    </motion.li>
  );
}
