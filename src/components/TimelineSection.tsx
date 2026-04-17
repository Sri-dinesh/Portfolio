import { motion } from "framer-motion";
import { timelineData, TimelineItem } from "../data/timeline";
import { Briefcase, GraduationCap, Calendar, ChevronRight } from "lucide-react";

export function TimelineSection() {
  const experienceData = timelineData.filter((item) => item.type === "experience");
  const educationData = timelineData.filter((item) => item.type === "education");

  return (
    <section className="relative py-8 sm:py-12 overflow-hidden" id="experience">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <TimelineColumn
          title="Experience"
          icon={<Briefcase className="w-5 h-5 text-emerald-400" />}
          data={experienceData}
          delayOffset={0}
        />

        <TimelineColumn
          title="Education"
          icon={<GraduationCap className="w-5 h-5 text-emerald-400" />}
          data={educationData}
          delayOffset={0.2}
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
    <div>
      <div className="flex items-center gap-3 mb-10 group">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-300">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-alabaster tracking-tight">
          {title}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-[20px] top-2 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

        <div className="space-y-10">
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
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: baseDelay + index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="relative pl-12 group"
    >
      <div className="absolute left-[20px] top-8 -translate-x-1/2 flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-obsidian border-2 border-white/20 group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-300 z-20 shadow-[0_0_0_3px_rgb(13,13,14)]" />
        <div className="absolute top-2.5 w-px h-full bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-colors duration-500 delay-100" />
      </div>

      <div className="relative p-5 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]">

        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base font-semibold text-alabaster tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 mt-1.5 text-sm text-pearl font-medium">
              <span>{item.organization}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-colors w-fit">
            <Calendar className="w-3 h-3 text-pearl/60" />
            <span className="text-[11px] font-mono text-pearl/80 whitespace-nowrap">
              {item.period}
            </span>
          </div>
        </div>

        <p className="text-sm text-pearl/70 leading-relaxed mb-4 font-light">
          {item.description}
        </p>

        {item.tags && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/[0.05] text-emerald-400/80 border border-emerald-500/10 group-hover:bg-emerald-500/[0.1] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronRight className="w-3 h-3 text-white/10" />
        </div>
      </div>
    </motion.div>
  );
}
