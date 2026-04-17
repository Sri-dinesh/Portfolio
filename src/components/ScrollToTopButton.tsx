import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring for the progress ring pathLength
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show immediately after scrolling past the first section
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-obsidian-light/80 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 shadow-xl overflow-hidden outline-none"
            aria-label="Scroll to top"
          >
            {/* Progress Circular SVG Ring */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300" 
              viewBox="0 0 100 100"
            >
               <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  className="text-emerald-500"
                  strokeWidth="3"
                  style={{ pathLength: smoothProgress }}
               />
            </svg>
            
            <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" strokeWidth={2} />
            
            {/* Hover bottom dot */}
            <div className="absolute bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="w-1 h-1 rounded-full bg-emerald-500" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
