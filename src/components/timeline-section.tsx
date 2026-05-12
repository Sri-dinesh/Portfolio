"use client";

import { motion } from "framer-motion";
import { timelineData, TimelineItem } from "@/constants/experience";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export function TimelineSection() {
  const sortedData = [...timelineData].sort((a, b) => {
    const getYear = (period: string) => {
      const match = period.match(/\d{4}/g);
      return match ? Math.max(...match.map(Number)) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  const experienceData = sortedData.filter((item) => item.type === "experience");
  const educationData = sortedData.filter((item) => item.type === "education");

  return (
    <section className="relative py-4" id="experience">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <TimelineColumn
          title="Experience"
          icon={<Briefcase className="w-4 h-4 text-emerald-400" />}
          data={experienceData}
          delayOffset={0}
        />

        <TimelineColumn
          title="Education"
          icon={<GraduationCap className="w-4 h-4 text-emerald-400" />}
          data={educationData}
          delayOffset={0.1}
        />
      </div>
    </section>
  );
}

function TimelineColumn({
  title,
  icon,
  data,
  delayOffset,
}: {
  title: string;
  icon: React.ReactNode;
  data: TimelineItem[];
  delayOffset: number;
}) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2.5 mb-6 group">
        <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-300">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">
          {title}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

        <div className="space-y-6">
          {data.map((item, index) => (
            <TimelineCard
              key={item.id}
              item={item}
              index={index}
              baseDelay={delayOffset}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineCard({
  item,
  index,
  baseDelay,
}: {
  item: TimelineItem;
  index: number;
  baseDelay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        delay: baseDelay + index * 0.05,
        duration: 0.4,
        ease: "easeOut",
      }}
      className="relative pl-10 group"
    >
      <div className="absolute left-[15px] top-6 -translate-x-1/2 flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-obsidian border-2 border-white/20 group-hover:border-emerald-500 transition-all duration-300 z-20" />
      </div>

      <div className="relative p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
        <div className="flex flex-col gap-2 mb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-[15px] font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
              {item.title}
            </h3>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/[0.03] border border-white/5 w-fit">
              <Calendar className="w-3 h-3 text-pearl/60" />
              <span className="text-[10px] font-mono text-pearl tracking-tight">
                {item.period}
              </span>
            </div>
          </div>
          <p className="text-[12px] text-pearl font-medium">{item.organization}</p>
        </div>

        <p className="text-[13px] text-pearl/70 leading-relaxed mb-4 font-light">
          {item.description}
        </p>

        {item.tags && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-medium bg-white/[0.03] text-pearl/50 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
