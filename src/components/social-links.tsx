import {
  ArrowUpRight,
  Mail,
  Smartphone,
  FileText,
  Linkedin,
  Github,
  Instagram,
  Globe,
  Wifi,
} from "lucide-react";

interface ContactLink {
  href: string;
  label: string;
  icon: React.ElementType;
  primary?: boolean;
}

export function ContactLinks() {
  const links: ContactLink[] = [
    {
      href: "mailto:santhisridinesh@gmail.com",
      label: "Send Email",
      icon: Mail,
      primary: true,
    },
    {
      href: "https://linkedin.com/in/sridinesh07",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://github.com/Sri-dinesh",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://drive.google.com/file/d/1fO-eTQ5husAEKMeuARSghLAoG-TQ913Y/view?usp=sharing",
      label: "Resume",
      icon: FileText,
    },
    {
      href: "https://medium.com/@sridineshS",
      label: "Medium",
      icon: Globe,
    },
    {
      href: "tel:+91 9949887000",
      label: "Phone",
      icon: Smartphone,
    },
    {
      href: "https://www.instagram.com/atomic_coding/",
      label: "Instagram",
      icon: Instagram,
    },
  ];

  return (
    <div className="h-full bg-obsidian-light/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-medium text-alabaster tracking-tight flex items-center gap-2">
          <span>Network</span>
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-pearl/40 font-mono tracking-wider uppercase">
            Signal Strong
          </span>
          <Wifi className="w-3 h-3 text-emerald-500/80" />
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {links.map((link, index) => {
          const Icon = link.icon;
          const isPrimary = link.primary;

          return (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`
                group relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300
                ${
                  isPrimary
                    ? "col-span-2 bg-alabaster text-obsidian border-alabaster hover:bg-white hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]"
                    : "col-span-1 bg-white/[0.03] border-white/5 hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-1 text-pearl hover:text-alabaster"
                }
              `}
            >
              {isPrimary ? (
                // Primary Button Layout
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold text-sm tracking-wide">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              ) : (
                // Grid Item Layout
                <>
                  <div className="mb-3 p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-medium uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </>
              )}
            </a>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-pearl/20 font-mono uppercase">
        <span>Secure Link</span>
        <span>End-to-End</span>
      </div>
    </div>
  );
}
