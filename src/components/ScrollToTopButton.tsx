import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // High-precision spring for that premium "weighty" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  // Keep progress state in sync with the spring
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setProgress(latest);
  });

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-12 right-12 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center justify-center outline-none"
            aria-label="Scroll to top"
          >
            {/* The Beam / Morphing Container */}
            <motion.div
              animate={{ 
                width: isHovered ? 52 : 3,
                height: isHovered ? 52 : 100,
                borderRadius: isHovered ? "14px" : "4px",
                backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                mass: 0.8
              }}
              className="relative backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* The "Light" Progress Fill */}
              <motion.div 
                animate={{ 
                  height: isHovered ? "100%" : `${progress * 100}%`,
                  width: "100%",
                  opacity: isHovered ? 0.2 : 1,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 30,
                  mass: 0.5 
                }}
                className="absolute bottom-0 left-0 right-0 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              />

              {/* Interaction Elements */}
              <AnimatePresence mode="wait">
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-0.5"
                  >
                    <ArrowUp className="w-5 h-5 text-white" />
                    <span className="text-[7px] font-black tracking-[0.3em] text-white/80 uppercase">
                      Top
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Internal Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Subtle Aura / Halo */}
            <motion.div
              animate={{ 
                scale: isHovered ? 1.4 : 1,
                opacity: isHovered ? 0.15 : 0
              }}
              className="absolute inset-0 bg-white rounded-full blur-2xl -z-10"
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

