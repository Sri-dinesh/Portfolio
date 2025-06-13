import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Twitter,
} from "lucide-react";
import { JSX } from "react/jsx-dev-runtime";

interface ContactLink {
  href: string;
  icon: JSX.Element;
  label: string;
}

export function ContactLinks() {
  const contactLinks: ContactLink[] = [
    {
      href: "mailto:santhisridinesh@gmail.com",
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
    },
    {
      href: "tel:+91 9949887000",
      icon: <Phone className="w-4 h-4" />,
      label: "Phone",
    },
    {
      href: "https://linkedin.com/in/sridinesh07",
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Sri-dinesh",
      icon: <Github className="w-4 h-4" />,
      label: "GitHub",
    },
    {
      href: "https://x.com/Sridinesh07",
      icon: <Twitter className="w-4 h-4" />,
      label: "Twitter/X",
    },
    {
      href: "https://www.instagram.com/atomic_coding/",
      icon: <Instagram className="w-4 h-4" />,
      label: "Instagram",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 p-6">
      <h3 className="text-sm font-medium text-black dark:text-white mb-4">
        Connect
      </h3>
      <div className="space-y-3">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-xs">
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
