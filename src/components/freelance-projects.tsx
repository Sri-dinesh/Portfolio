"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";

interface FreelanceProject {
  name: string;
  image: string;
  link: string;
}

const freelanceProjects: FreelanceProject[] = [
  {
    name: "Chinoue - Cafe & Patisserie",
    image: "/images/projects/chinoue.webp",
    link: "https://chinoue.vercel.app/",
  },
  {
    name: "Rams Dental World",
    image: "/images/projects/rams-dental-world.jpg",
    link: "https://rams-dental-world.vercel.app/",
  },
  {
    name: "MothersTouch School",
    image: "/images/projects/motherstouchschool.webp",
    link: "https://motherstouch-school.vercel.app/",
  },
];

export function FreelanceProjects() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-10 group">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-300">
          <Globe className="w-5 h-5 text-emerald-400" />
        </div>
        <h2 className="text-xl font-semibold text-alabaster tracking-tight">
          Freelance Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {freelanceProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] rounded-2xl overflow-hidden transition-all duration-500"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20"
              aria-label={`Visit ${project.name}`}
            />
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-charcoal/20">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex items-center justify-between p-5 mt-auto">
              <span className="text-base font-medium text-alabaster group-hover:text-emerald-400 transition-colors duration-300 tracking-tight line-clamp-1">
                {project.name}
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300">
                <ArrowUpRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
