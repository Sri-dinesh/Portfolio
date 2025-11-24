import { Linkedin, Twitter, Github, FileText, User } from "lucide-react";

export function CodeIllustration() {
  const socials = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/sridinesh07",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/Sridinesh07",
      label: "Twitter",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Sri-dinesh",
      label: "GitHub",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      href: "https://medium.com/@sridineshS",
      label: "Medium",
    },
  ];

  return (
    <div className="sm:col-span-2 lg:col-span-2 row-span-2 bg-white p-6 sm:p-8 flex flex-col items-center justify-center gap-8 group border border-gray-100 rounded-1xl ">
      <div className="flex items-center gap-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
      
      <a
        href="https://drive.google.com/file/d/1fO-eTQ5husAEKMeuARSghLAoG-TQ913Y/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <User className="w-4 h-4" />
        <span className="font-medium text-sm">View Resume</span>
      </a>
    </div>
  );
}
