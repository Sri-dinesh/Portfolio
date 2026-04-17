import { motion } from "framer-motion";
import { Github, FileText, Linkedin } from "lucide-react";

interface HeroCardProps {
  initials: string;
  name: string;
  title: string;
  description: string;
}

export function HeroCard({ name, title }: HeroCardProps) {
  const profileImage = "https://avatars.githubusercontent.com/u/101187384?v=4";

  const links = [
    {
      href: "https://drive.google.com/file/d/1fO-eTQ5husAEKMeuARSghLAoG-TQ913Y/view?usp=sharing",
      icon: FileText,
      label: "Resume",
    },
    {
      href: "https://github.com/Sri-dinesh",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/sridinesh07",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <div className="relative w-full flex justify-start pt-8 pb-4 px-4 md:px-8">
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-start gap-8 md:gap-10 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <motion.div
          className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full border border-white/10 p-2 bg-[#0d0d0e]/50 backdrop-blur-sm shadow-xl overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden relative border border-white/5">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] rounded-full pointer-events-none" />
          </div>

          <div className="absolute inset-0 border border-white/5 rounded-full rotate-45 scale-[1.03] group-hover:rotate-90 transition-transform duration-1000 ease-out" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6 md:gap-8 text-left">
          <div className="flex flex-col items-start text-left">
            <motion.h1
              className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {name}
            </motion.h1>

            <motion.h2
              className="text-lg md:text-xl text-white/50 font-light tracking-wide"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {title}
            </motion.h2>
          </div>

          <motion.div
            className="hidden md:block w-px h-16 bg-gradient-to-b from-white/30 to-transparent border-none shrink-0"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ originY: 0 }}
          />

          <motion.div
            className="block md:hidden w-16 h-px bg-gradient-to-r from-white/30 to-transparent border-none shrink-0"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ originX: 0 }}
          />

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300"
                aria-label={link.label}
              >
                <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
                  <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/20 to-transparent rotate-45 -translate-x-[100%] -translate-y-[100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-transform duration-[600ms] ease-out" />
                </div>

                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <link.icon
                  className="w-5 h-5 md:w-[22px] md:h-[22px] text-white/50 group-hover:text-white relative z-10 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
