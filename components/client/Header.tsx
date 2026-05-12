"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Code,
  Briefcase,
  Mail,
  FileText,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
}

const navItems: NavItem[] = [
  { id: "about", label: "About", icon: <User size={16} /> },
  { id: "skills", label: "Skills", icon: <Code size={16} /> },
  { id: "projects", label: "Projects", icon: <Briefcase size={16} /> },
  { id: "experience", label: "Experience", icon: <FileText size={16} /> },
  { id: "contact", label: "Contact", icon: <Mail size={16} /> },
  { id: "blog", label: "Blog", icon: <ScrollText size={16} />, href: "/blog" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/blog") {
      setActiveSection("blog");
      return;
    }

    const handleScroll = () => {
      const sections = navItems
        .filter((item) => !item.href)
        .map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            currentSection = navItems[i].id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (item: NavItem) => {
    if (item.href) {
      return;
    }

    if (pathname !== "/") {
      window.location.href = "/#" + item.id;
    } else {
      scrollToSection(item.id);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const renderNavItem = (item: NavItem) => {
    const isActive = activeSection === item.id;
    const isHovered = hoveredItem === item.id;
    const isSelected = isHovered || isActive;

    const content = (
      <button
        onClick={() => handleNavClick(item)}
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
        className="relative px-5 py-2.5 flex items-center gap-2.5 group outline-none"
      >
        {isSelected && (
          <motion.div
            layoutId="nav-active-pill"
            className={`absolute inset-0 rounded-full z-0 ${
              isActive ? "bg-white/10" : "bg-white/5"
            }`}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.2,
            }}
          >
            <div className="absolute inset-0 rounded-full border border-white/5" />
          </motion.div>
        )}

        <span
          className={`relative z-10 transition-colors duration-200 ${
            isSelected ? "text-white" : "text-white/40"
          }`}
        >
          {item.icon}
        </span>

        <span
          className={`relative z-10 text-[13px] font-medium tracking-tight transition-colors duration-200 hidden md:block ${
            isSelected ? "text-white" : "text-white/40"
          }`}
        >
          {item.label}
        </span>
      </button>
    );

    if (item.href) {
      return (
        <Link key={item.id} href={item.href}>
          {content}
        </Link>
      );
    }

    return <div key={item.id}>{content}</div>;
  };

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <nav className="relative flex items-center p-1 bg-black/30 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl pointer-events-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

        {navItems.map(renderNavItem)}
      </nav>
    </header>
  );
}
