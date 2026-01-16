/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  MapPin,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative h-full bg-obsidian-light/50 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden flex flex-col">
      {/* Top Section: Header Deck */}
      <div className="relative p-6 sm:p-8 border-b border-white/5 bg-white/[0.01]">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-alabaster tracking-tight mb-2">
                Let's start a project
              </h2>
              <p className="text-pearl/60 text-sm max-w-sm leading-relaxed">
                Interested in working together? Drop me a message and let's
                discuss your next big idea.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Available
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-1.5 text-pearl/50">
                <Clock className="w-3.5 h-3.5" />
                <span>Local Time</span>
              </div>
              <span className="text-alabaster font-mono">{time} IST</span>
            </div>
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-1.5 text-pearl/50">
                <MapPin className="w-3.5 h-3.5" />
                <span>Location</span>
              </div>
              <span className="text-alabaster font-mono">India</span>
            </div>
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-1.5 text-pearl/50">
                <Globe className="w-3.5 h-3.5" />
                <span>Response</span>
              </div>
              <span className="text-alabaster font-mono">&lt; 2h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Form */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-end bg-gradient-to-b from-transparent to-black/20">
        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-3 text-emerald-200 text-sm">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Message received. Initiating response protocol.</span>
              </div>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-200 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>Connection failed. Please retry transmission.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-pearl/80 ml-1 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ex. John Doe"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg focus:border-alabaster/30 focus:bg-white/[0.05] focus:outline-none transition-all duration-300 text-alabaster text-sm placeholder-pearl/20"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-pearl/80 ml-1 uppercase tracking-wider"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ex. john@company.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg focus:border-alabaster/30 focus:bg-white/[0.05] focus:outline-none transition-all duration-300 text-alabaster text-sm placeholder-pearl/20"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-pearl/80 ml-1 uppercase tracking-wider"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg focus:border-alabaster/30 focus:bg-white/[0.05] focus:outline-none transition-all duration-300 text-alabaster text-sm placeholder-pearl/20 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-alabaster hover:bg-white text-obsidian font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]"
          >
            {status === "loading" ? (
              <>
                <span className="w-4 h-4 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Send Transmission</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
