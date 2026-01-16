import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scaleX.on("change", (v) => setProgress(v));
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      unsubscribe();
    };
  }, [scaleX]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const size = 48;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2 - 2; // Inset slightly
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 outline-none group"
          aria-label="Scroll to top"
        >
          <div className="relative w-12 h-12 flex items-center justify-center bg-obsidian/80 backdrop-blur-xl rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110">
            {/* SVG Ring System */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox={`0 0 ${size} ${size}`}
            >
              {/* Background Track (Acts as border) */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-white/10"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Active Progress */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-alabaster transition-all duration-75 ease-linear"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ 
                   filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))"
                }}
              />
            </svg>

            {/* Icon Animation */}
            <div className="relative z-10 w-5 h-5 overflow-hidden flex flex-col items-center">
              <ArrowUp className="w-5 h-5 text-alabaster transition-transform duration-500 group-hover:-translate-y-[150%]" />
              <ArrowUp className="absolute w-5 h-5 text-emerald-400 translate-y-[150%] transition-transform duration-500 group-hover:translate-y-0" />
            </div>
            
            {/* Inner Glow */}
            <div className="absolute inset-0 rounded-full bg-white/[0.02] pointer-events-none group-hover:bg-white/[0.05] transition-colors" />
          </div>
          
           {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-obsidian border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-pearl opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
