import { motion } from "framer-motion";
import { Terminal, Box } from "lucide-react";

const skills = [
  "Java", "Python", "JavaScript",
  "SQL", "React", "Next.js",
  "Node.js", "Express", "PostgreSQL", "MongoDB", "MySQL",
  "Tailwind CSS", "Git", "Docker", "Figma"
];

export function Skills() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-10 group">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-300">
          <Box className="w-5 h-5 text-emerald-400" />
        </div>
        <h2 className="text-xl font-semibold text-alabaster tracking-tight">
          Skills
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="group relative"
      >
        <div className="absolute -inset-[1px] bg-gradient-to-tr from-white/10 via-transparent to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        <div className="relative bg-[#0d0d0e] border border-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl">

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 flex flex-wrap gap-2.5">
            {skills.map((skill, index) => (
              <SkillPill key={skill} name={skill} index={index} />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </motion.div>
    </div>
  );
}

function SkillPill({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.02,
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1]
      }}
      whileHover={{ scale: 1.02 }}
      className="group/pill relative px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-emerald-500/0 group-hover/pill:bg-emerald-500/[0.02] transition-colors duration-500" />

      <span className="relative z-10 text-lg font-medium text-white/40 group-hover/pill:text-white transition-colors duration-300 tracking-tight">
        {name}
      </span>

      <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-white/[0.05] group-hover/pill:bg-emerald-500/40 transition-colors duration-500" />
    </motion.div>
  );
}
