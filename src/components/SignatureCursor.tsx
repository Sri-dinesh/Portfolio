import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// Code characters that appear in the trail - developer signature
const codeChars = [
  "<",
  ">",
  "/",
  "{",
  "}",
  "(",
  ")",
  ";",
  "=",
  "+",
  "*",
  "&",
  "|",
  "~",
];

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  char: string;
  rotation: number;
}

export function SignatureCursor() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "link" | "button">(
    "default"
  );
  const [trail, setTrail] = useState<TrailParticle[]>([]);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const particleIdRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(Date.now());
  const moveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse position with spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra smooth spring for cursor
  const springConfig = { damping: 20, stiffness: 400, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Create trail particle
  const createParticle = useCallback((x: number, y: number) => {
    const char = codeChars[Math.floor(Math.random() * codeChars.length)];
    const particle: TrailParticle = {
      id: particleIdRef.current++,
      x,
      y,
      char,
      rotation: Math.random() * 40 - 20,
    };

    setTrail((prev) => {
      const newTrail = [...prev, particle];
      // Keep only last 12 particles for performance
      return newTrail.slice(-12);
    });

    // Remove particle after animation
    setTimeout(() => {
      setTrail((prev) => prev.filter((p) => p.id !== particle.id));
    }, 800);
  }, []);

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
      return;
    }

    let lastTrailTime = 0;
    const trailInterval = 50; // ms between trail particles

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastTimeRef.current;

      // Calculate velocity
      const vx = (e.clientX - lastPosRef.current.x) / Math.max(dt, 1);
      const vy = (e.clientY - lastPosRef.current.y) / Math.max(dt, 1);
      setVelocity({ x: vx, y: vy });

      // Calculate speed
      const speed = Math.sqrt(vx * vx + vy * vy);

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Set moving state
      setIsMoving(true);
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
      moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 100);

      // Create trail particles when moving fast enough
      if (speed > 0.3 && now - lastTrailTime > trailInterval) {
        createParticle(e.clientX, e.clientY);
        lastTrailTime = now;
      }

      lastPosRef.current = { x: e.clientX, y: e.clientY };
      lastTimeRef.current = now;

      // Check hover state
      const target = e.target as HTMLElement;
      const isLink = target.tagName === "A" || target.closest("a");
      const isButton =
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.getAttribute("role") === "button";

      if (isLink) {
        setHoverType("link");
        setIsHovering(true);
      } else if (isButton) {
        setHoverType("button");
        setIsHovering(true);
      } else {
        setHoverType("default");
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Hide default cursor
    const style = document.createElement("style");
    style.id = "signature-cursor-style";
    style.innerHTML = `*, *::before, *::after { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      const existingStyle = document.getElementById("signature-cursor-style");
      if (existingStyle) existingStyle.remove();
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
    };
  }, [mouseX, mouseY, createParticle]);

  // Don't render on touch devices
  if (
    !isVisible &&
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  ) {
    return null;
  }

  const cursorSize =
    hoverType === "link" ? 56 : hoverType === "button" ? 64 : 16;
  const dotSize = hoverType === "default" ? 6 : 4;

  return (
    <>
      {/* Trail particles - code characters */}
      <AnimatePresence>
        {trail.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9996] font-mono select-none"
            style={{
              left: particle.x,
              top: particle.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{
              opacity: 0.8,
              scale: 1,
              rotate: particle.rotation,
            }}
            animate={{
              opacity: 0,
              scale: 0.3,
              y: -20,
              rotate: particle.rotation + (Math.random() > 0.5 ? 20 : -20),
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}>
            <span
              className="text-custom-black font-medium"
              style={{
                fontSize: `${10 + Math.random() * 6}px`,
                opacity: 0.4 + (index / trail.length) * 0.4,
              }}>
              {particle.char}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}>
        {/* Outer ring */}
        <motion.div
          className="absolute border border-custom-black/30 rounded-full flex items-center justify-center"
          style={{
            left: "50%",
            top: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            width: cursorSize,
            height: cursorSize,
            borderColor: isHovering ? "rgba(2,4,15,0.8)" : "rgba(2,4,15,0.3)",
            scale: isMoving ? 0.9 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            scale: { duration: 0.15 },
          }}>
          {/* Link indicator */}
          <AnimatePresence>
            {hoverType === "link" && (
              <motion.span
                className="text-custom-black text-sm font-light"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}>
                ↗
              </motion.span>
            )}
          </AnimatePresence>

          {/* Button indicator */}
          <AnimatePresence>
            {hoverType === "button" && (
              <motion.div
                className="flex items-center gap-0.5"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}>
                <motion.span
                  className="w-1 h-1 bg-custom-black rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                />
                <motion.span
                  className="w-1 h-1 bg-custom-black rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
                />
                <motion.span
                  className="w-1 h-1 bg-custom-black rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Inner dot */}
        <motion.div
          className="absolute bg-custom-black rounded-full"
          style={{
            left: "50%",
            top: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            width: dotSize,
            height: dotSize,
            scale: isMoving ? 1.2 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            scale: { duration: 0.1 },
          }}
        />

        {/* Velocity streak effect */}
        <motion.div
          className="absolute bg-custom-black/20 rounded-full blur-sm"
          style={{
            left: "50%",
            top: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            width: isMoving ? 20 + Math.abs(velocity.x) * 10 : 0,
            height: isMoving ? 4 : 0,
            rotate: Math.atan2(velocity.y, velocity.x) * (180 / Math.PI),
            opacity: isMoving ? 0.5 : 0,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Minimal signature tag - appears on idle */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "24px",
          translateY: "-32px",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible && !isMoving ? 1 : 0,
          scale: isMoving ? 0.8 : 1,
        }}
        transition={{
          opacity: { delay: isMoving ? 0 : 0.5, duration: 0.3 },
          scale: { duration: 0.2 },
        }}>
        <motion.div
          className="flex items-center gap-1.5 px-2 py-1 bg-custom-black/5 backdrop-blur-sm rounded-md border border-custom-black/10"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="text-[10px] font-mono text-custom-black/60 tracking-tight">
            sd.dev
          </span>
        </motion.div>
      </motion.div>
    </>
  );
}
