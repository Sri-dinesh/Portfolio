"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  Code,
  Briefcase,
  Laptop,
  Mail,
  FileText,
  ScrollText,
  LucideIcon,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "experience", label: "Experience", icon: FileText },
  { id: "freelance", label: "Freelance", icon: Laptop },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "blog", label: "Blogs", icon: ScrollText, href: "/blog" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    if (pathname === "/blog") {
      setActiveId("blog");
      return;
    }

    const scrollPosition = window.scrollY + 100;
    let current = "";

    for (const item of NAV_ITEMS) {
      if (item.href) continue;
      const section = document.getElementById(item.id);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          current = item.id;
          break;
        }
      }
    }

    setActiveId((prev) => (prev !== current ? current : prev));
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = "/#" + id;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none w-full max-w-fit px-4">
      <nav className="flex items-center gap-1 p-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl pointer-events-auto shadow-none">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          const Icon = item.icon;

          return (
            <div key={item.id} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`
                    relative flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-[13px] font-medium transition-colors duration-300
                    ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}
                  `}
                >
                  <Icon size={18} className="sm:hidden block shrink-0" />
                  <span className="hidden sm:block">{item.label}</span>
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-[13px] font-medium transition-colors duration-300
                    ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}
                  `}
                >
                  <Icon size={18} className="sm:hidden block shrink-0" />
                  <span className="hidden sm:block">{item.label}</span>
                </button>
              )}

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                      mass: 1,
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </header>
  );
}
