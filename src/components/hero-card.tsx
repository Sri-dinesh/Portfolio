"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroCardProps {
  initials: string;
  name: string;
  title: string;
  description: string;
}

export function HeroCard({ name, title }: HeroCardProps) {
  const profileImage = "https://avatars.githubusercontent.com/u/101187384?v=4";
  const resumeHref =
    "https://drive.google.com/file/d/1fO-eTQ5husAEKMeuARSghLAoG-TQ913Y/view?usp=sharing";

  return (
    <div className="w-full py-10 md:py-16 flex justify-center">
      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 md:gap-12 lg:gap-20 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 shrink-0">
          <motion.div
            className="relative w-24 h-24 shrink-0 rounded-full border border-white/10 p-1 bg-white/[0.02] backdrop-blur-sm shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden relative border border-white/5">
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </div>
          </motion.div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {name}
            </h1>
            <h2 className="text-lg md:text-xl text-white/60 font-medium">
              {title}
            </h2>
          </div>
        </div>

        <div className="hidden lg:block w-px h-16 bg-white/10 shrink-0" />

        <div className="flex-1 max-w-xl text-center lg:text-left">
          <motion.p
            className="text-base md:text-lg lg:text-xl text-white/40 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Building AI and web products that are fast, practical, and
            occasionally sleep-depriving.{" "}
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white underline decoration-white/20 hover:decoration-white transition-all underline-offset-4 whitespace-nowrap"
            >
              View my resume
            </a>
            .
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
