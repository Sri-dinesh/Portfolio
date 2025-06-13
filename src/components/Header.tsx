import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium text-black">Dev Lab</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
            aria-label="Toggle menu">
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-out top-3 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`md:hidden fixed inset-0 top-[73px] bg-black/20 backdrop-blur-sm transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}>
          <nav
            className={`bg-white/95 backdrop-blur-md border-b border-gray-100 transform transition-all duration-300 ease-out ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}>
            <ul className="px-4 py-8 space-y-1">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block py-3 px-4 text-gray-700 hover:text-black hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition-all duration-200 transform ${
                      isMobileMenuOpen
                        ? `translate-x-0 opacity-100`
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="text-sm font-light tracking-wide">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
