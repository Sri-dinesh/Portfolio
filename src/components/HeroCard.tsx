import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HeroCardProps {
  initials: string;
  name: string;
  title: string;
  description: string;
}

// Floating particles for subtle background effect
function FloatingParticle({
  delay,
  size,
  x,
  y,
}: {
  delay: number;
  size: number;
  x: number;
  y: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/10"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.5],
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroCard({
  initials,
  name,
  title,
  description,
}: HeroCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for gradient follow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform mouse position to gradient position
  const gradientX = useTransform(mouseXSpring, (val) => val);
  const gradientY = useTransform(mouseYSpring, (val) => val);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Particles configuration
  const particles = [
    { delay: 0, size: 4, x: 15, y: 20 },
    { delay: 1, size: 3, x: 80, y: 15 },
    { delay: 2, size: 5, x: 70, y: 70 },
    { delay: 0.5, size: 3, x: 25, y: 80 },
    { delay: 1.5, size: 4, x: 90, y: 50 },
  ];

  return (
    <motion.div
      ref={containerRef}
      id="about"
      className="sm:col-span-2 lg:col-span-2 row-span-2 bg-custom-black text-white p-6 sm:p-8 relative group overflow-hidden cursor-default"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="region"
      aria-label="About section">
      {/* Animated gradient background that follows mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) =>
              `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 60%)`
          ),
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <FloatingParticle key={i} {...particle} />
      ))}

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M100,0 L100,100 L0,100"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Content container */}
      <div className="h-full flex flex-col justify-between relative z-10">
        <div>
          {/* Initials badge */}
          <div className="relative mb-6 inline-block">
            {/* Initials circle */}
            <div className="relative w-14 h-14 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-semibold border border-white/10 shadow-lg">
              <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                {initials}
              </span>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2 font-sans tracking-tight">
            {name}
          </h1>

          {/* Title */}
          <p className="text-base sm:text-lg text-white/70 mb-4 font-light">
            {title}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-white/60 leading-relaxed max-w-md">
          {description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white/30 via-white/10 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "60%" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* Hover state overlay for extra polish */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
