import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight, MousePointer2 } from "lucide-react";

export function SignatureCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "link" | "button">("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 1. Core Spring (Fastest, tightest to the actual mouse pointer)
  const coreSpring = { damping: 20, stiffness: 500, mass: 0.1 };
  const coreX = useSpring(mouseX, coreSpring);
  const coreY = useSpring(mouseY, coreSpring);

  // 2. Viewfinder Reticle Spring (Medium lag for parallax pulling effect)
  const reticleSpring = { damping: 25, stiffness: 250, mass: 0.5 };
  const reticleX = useSpring(mouseX, reticleSpring);
  const reticleY = useSpring(mouseY, reticleSpring);

  useEffect(() => {
    // Disable on touch devices
    if (
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    ) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      
      const isClickable = (el: HTMLElement | null): boolean => {
        if (!el) return false;
        const tagName = el.tagName.toLowerCase();
        const role = el.getAttribute("role");
        return (
          tagName === "a" || 
          tagName === "button" || 
          role === "button" ||
          window.getComputedStyle(el).cursor === "pointer"
        );
      };

      const clickableEl = target.closest("a, button, [role='button']") as HTMLElement || target;

      if (isClickable(clickableEl)) {
        setIsHovering(true);
        setHoverType(clickableEl.tagName.toLowerCase() === "a" ? "link" : "button");
      } else {
        setIsHovering(false);
        setHoverType("default");
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const style = document.createElement("style");
    style.id = "signature-cursor-style";
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      const existingStyle = document.getElementById("signature-cursor-style");
      if (existingStyle) existingStyle.remove();
    };
  }, [mouseX, mouseY, isVisible]);

  if (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  ) {
    return null;
  }

  return (
    <>
      {/* Normal state: clean crosshair-style viewfinder */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{ x: reticleX, y: reticleY, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ 
          opacity: isVisible && !isHovering ? 1 : 0,
          scale: isHovering ? 0 : 1,
          rotate: isHovering ? 0 : 45
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-12 h-12 animate-[spin_10s_linear_infinite_reverse]">
          <div className="absolute inset-0 rounded-full border border-white/25" />
          <div className="absolute top-1/2 left-1/2 w-6 h-[1px] bg-white/80 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-[1px] h-6 bg-white/80 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-[1px] h-2.5 bg-white/35 -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 w-[1px] h-2.5 bg-white/35 -translate-x-1/2" />
          <div className="absolute left-0 top-1/2 h-[1px] w-2.5 bg-white/35 -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 h-[1px] w-2.5 bg-white/35 -translate-y-1/2" />
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-white/90" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-white/90" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] border-white/90" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-white/90" />
        </div>
      </motion.div>

      {/* 
        LAYER 1: Core Diamond morphing into Interaction Lens (Fastest/Exact)
      */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
        style={{ x: coreX, y: coreY, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={{
            width: isHovering ? 64 : 8,
            height: isHovering ? 64 : 8,
            borderRadius: isHovering ? "50%" : "2px", // 2px = diamond, 50% = round lens
            rotate: isHovering ? 0 : 45, // Diamond in normal state
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="relative flex items-center justify-center overflow-hidden"
        >
          {/* Inner Custom Icon visible on hover */}
          <motion.div
            className="text-black absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0
            }}
            transition={{ duration: 0.25, delay: isHovering ? 0.05 : 0 }}
          >
            {hoverType === "link" ? (
              <ArrowUpRight className="w-6 h-6 stroke-[2.5px]" />
            ) : (
              <MousePointer2 className="w-5 h-5 stroke-[2.5px]" />
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
