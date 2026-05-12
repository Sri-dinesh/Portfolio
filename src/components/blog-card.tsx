"use client";

import { ScrollText, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  mediumLink: string;
}

export function BlogCard({ title, description, date, slug, mediumLink }: BlogCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col p-6 bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 ease-out"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors duration-300">
          <ScrollText className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/5">
          <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest">
            {date}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 flex items-start justify-between gap-4">
          {title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed line-clamp-3 group-hover:text-white/70 transition-colors duration-300">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
        <Link
          href={`/blog/${slug}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 group/btn"
        >
          <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
          Read More
        </Link>
        <a
          href={mediumLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 group/medium"
          title="Read on Medium"
        >
          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/medium:scale-110" />
        </a>
      </div>
    </motion.div>
  );
}
