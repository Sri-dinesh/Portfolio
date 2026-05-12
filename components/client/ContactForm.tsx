"use client";

/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!;

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    formDataObj.append("access_key", ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");
    formDataObj.append("from_name", "Portfolio Contact");
    formDataObj.append("subject", `New Message from ${formData.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { label: "LINKEDIN", href: "https://linkedin.com/in/sridinesh07" },
    { label: "GITHUB", href: "https://github.com/Sri-dinesh" },
    { label: "MEDIUM", href: "https://medium.com/@sridineshS" },
    { label: "X", href: "https://x.com/srixdevv" },
    { label: "TWITCH", href: "https://twitch.tv/sridinesh" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/atomic_coding/" },
  ];

  return (
    <div className="w-full py-12 sm:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl sm:text-8xl font-black tracking-tighter text-white mb-10 sm:mb-16 select-none"
      >
        SAY HELLO<span className="text-emerald-500">.</span>
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col sm:flex-row border-y border-r border-white/10 overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/10"
      >
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <div className="flex-1 bg-transparent">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full h-20 sm:h-24 bg-transparent px-6 text-sm font-medium text-white placeholder:text-white/20 focus:outline-none focus:bg-white/[0.02] transition-colors uppercase tracking-widest border-none outline-none rounded-none appearance-none ring-0 shadow-none"
          />
        </div>

        <div className="flex-1 bg-transparent">
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full h-20 sm:h-24 bg-transparent px-6 text-sm font-medium text-white placeholder:text-white/20 focus:outline-none focus:bg-white/[0.02] transition-colors uppercase tracking-widest border-none outline-none rounded-none appearance-none ring-0 shadow-none"
          />
        </div>

        <div className="flex-[2] bg-transparent">
          <input
            type="text"
            name="message"
            placeholder="MESSAGE"
            required
            value={formData.message}
            onChange={handleInputChange}
            className="w-full h-20 sm:h-24 bg-transparent px-6 text-sm font-medium text-white placeholder:text-white/20 focus:outline-none focus:bg-white/[0.02] transition-colors uppercase tracking-widest border-none outline-none rounded-none appearance-none ring-0 shadow-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto sm:px-12 h-16 sm:h-24 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-emerald-500 transition-colors duration-500 disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <span>SEND</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-emerald-500 flex items-center justify-center gap-3 z-20"
            >
              <CheckCircle className="w-5 h-5 text-black" />
              <span className="text-black font-bold text-xs uppercase tracking-widest">
                Transmission Successful
              </span>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-red-500 flex items-center justify-center gap-3 z-20"
            >
              <AlertCircle className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-xs uppercase tracking-widest">
                Transmission Failed
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-white/40 hover:text-emerald-400 tracking-[0.2em] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden sm:block w-px h-4 bg-white/10" />

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a
            href="mailto:santhisridinesh@gmail.com"
            className="text-[10px] font-bold text-white/40 hover:text-white tracking-[0.2em] transition-colors"
          >
            SANTHISRIDINESH@GMAIL.COM
          </a>
          <a
            href="tel:+919949887000"
            className="text-[10px] font-bold text-white/40 hover:text-white tracking-[0.2em] transition-colors"
          >
            +91 99498 87000
          </a>
        </div>
      </div>
    </div>
  );
}
