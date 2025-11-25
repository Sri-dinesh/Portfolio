import {
  Linkedin,
  Twitter,
  Github,
  FileText,
  User,
  ArrowUpRight,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Magnetic social link with ripple effect
function MagneticSocialLink({
  href,
  label,
  icon,
  index,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 overflow-hidden group/social"
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 0.3 + index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}>
      {/* Background fill animation */}
      <motion.div
        className="absolute inset-0 bg-custom-black"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ borderRadius: "50%" }}
      />

      {/* Icon with color transition */}
      <motion.span
        className="relative z-10"
        animate={{ color: isHovered ? "#ffffff" : "#525252" }}
        transition={{ duration: 0.2 }}>
        {icon}
      </motion.span>

      {/* Subtle ring on hover */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-gray-200"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.a>
  );
}

export function CodeIllustration() {
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for gradient
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const mouseYSpring = useSpring(mouseY, { damping: 25, stiffness: 200 });

  const socials = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/sridinesh07",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/Sridinesh07",
      label: "Twitter",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Sri-dinesh",
      label: "GitHub",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      href: "https://medium.com/@sridineshS",
      label: "Medium",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={containerRef}
      className="sm:col-span-2 lg:col-span-2 row-span-2 bg-white p-6 sm:p-8 flex flex-col items-center justify-center gap-8 group border border-gray-100 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="region"
      aria-label="Social links and resume">
      {/* Subtle gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) =>
              `radial-gradient(300px circle at ${x}px ${y}px, rgba(0,0,0,0.02), transparent 50%)`
          ),
        }}
      />

      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Label */}
      <motion.span
        className="text-xs font-medium text-gray-400 uppercase tracking-widest"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}>
        Connect with me
      </motion.span>

      {/* Social links */}
      <div className="flex items-center gap-4 relative z-10">
        {socials.map((social, index) => (
          <MagneticSocialLink
            key={index}
            href={social.href}
            label={social.label}
            icon={social.icon}
            index={index}
          />
        ))}
      </div>

      {/* Resume button with enhanced animation */}
      <motion.a
        href="https://drive.google.com/file/d/1fO-eTQ5husAEKMeuARSghLAoG-TQ913Y/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 px-7 py-3.5 bg-custom-black text-white rounded-full overflow-hidden group/btn"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={() => setIsResumeHovered(true)}
        onMouseLeave={() => setIsResumeHovered(false)}>
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"
          initial={{ x: "-100%" }}
          animate={{ x: isResumeHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Button content */}
        <motion.span className="relative z-10 flex items-center gap-2">
          <User className="w-4 h-4" />
          <span className="font-medium text-sm">View Resume</span>
          <motion.span
            animate={{
              x: isResumeHovered ? 3 : 0,
              y: isResumeHovered ? -3 : 0,
            }}
            transition={{ duration: 0.2 }}>
            <ArrowUpRight className="w-4 h-4" />
          </motion.span>
        </motion.span>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full shadow-xl"
          animate={{
            boxShadow: isResumeHovered
              ? "0 20px 40px rgba(0,0,0,0.3)"
              : "0 10px 25px rgba(0,0,0,0.15)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>

      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gray-100"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-100"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
    </motion.div>
  );
}
