import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Code, Briefcase, Mail, FileText } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "about", label: "About", icon: <User size={18} /> },
  { id: "skills", label: "Skills", icon: <Code size={18} /> },
  { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
  { id: "experience", label: "Experience", icon: <FileText size={18} /> },
  { id: "contact", label: "Contact", icon: <Mail size={18} /> },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for header height
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hidden anchor points for navigation */}
      <div className="fixed top-0 left-0 w-full h-0 pointer-events-none">
        {navItems.map((item) => (
          <div key={item.id} id={`nav-${item.id}`}></div>
        ))}
      </div>

      {/* Dock-style Navigation */}
      <div
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 ${isScrolled ? "opacity-100" : "opacity-90"}`}
      >
        <div className="flex items-center bg-obsidian/80 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 shadow-2xl">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              className="mx-0.5"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: activeSection === item.id ? -10 : 0,
                scale: activeSection === item.id ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20"
                    : "text-pearl hover:text-alabaster hover:bg-white/10"
                }`}
                aria-label={item.label}
                title={item.label}
              >
                <div className="flex items-center justify-center h-6 mb-0.5">
                  {item.icon}
                </div>
                <motion.span
                  className="text-[10px] font-medium"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{
                    opacity: activeSection === item.id ? 1 : 0,
                    y: activeSection === item.id ? 0 : 5,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
