"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import {
  ArrowUpRight,
  Github,
  ChevronDown,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectList() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-10 group">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-300">
          <Briefcase className="w-5 h-5 text-emerald-400" />
        </div>
        <h2 className="text-xl font-semibold text-alabaster tracking-tight">
          Projects
        </h2>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectRow
            key={index}
            project={project}
            index={index}
            isExpanded={expandedId === index}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectRow({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const tags = project.language
    ? project.language.split(",").map((tag) => tag.trim())
    : [];
  const indexStr = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "group border-b border-white/5 last:border-0 transition-colors duration-300",
        isExpanded ? "bg-white/[0.02]" : "hover:bg-white/[0.01]",
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 sm:gap-8 py-6 px-2 sm:px-4 text-left focus:outline-none"
      >
        <span className="text-xs font-mono text-pearl/40 group-hover:text-emerald-400/80 transition-colors w-6">
          {indexStr}
        </span>

        <h3 className="text-lg sm:text-xl font-medium text-alabaster tracking-tight flex-1 group-hover:text-emerald-400 transition-colors">
          {project.title || "Untitled Project"}
        </h3>

        {tags.length > 0 && (
          <div className="hidden md:flex items-center gap-2">
            {tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded text-[10px] font-medium bg-white/5 text-pearl/60 border border-white/5 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-pearl/40">+{tags.length - 3}</span>
            )}
          </div>
        )}

        <div
          className={cn(
            "p-2 rounded-full border border-white/5 text-pearl/50 transition-all duration-300",
            isExpanded
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 rotate-180"
              : "group-hover:bg-white/5 group-hover:text-alabaster",
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className={cn(
                "px-4 pb-8 sm:px-14 sm:pb-10 grid grid-cols-1 gap-8 items-start",
                project.imageUrl && "lg:grid-cols-2",
              )}
            >
              <div className="space-y-6">
                {project.description && (
                  <p className="text-pearl/80 leading-relaxed font-light text-sm sm:text-base">
                    {project.description}
                  </p>
                )}

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 md:hidden">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded text-[10px] font-medium bg-white/5 text-pearl/60 border border-white/5 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors group/btn"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-alabaster text-sm font-medium hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
              {project.imageUrl && (
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-charcoal/20 group/image">
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/image:opacity-100 transition-opacity z-10" />
                  <Image
                    src={project.imageUrl}
                    alt={project.title || "Project Image"}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover/image:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
