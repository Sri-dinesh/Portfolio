/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Send } from "lucide-react";
import { useState } from "react";
import dotenv from "dotenv";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div
      id="contact"
      className="sm:col-span-2 lg:col-span-3 bg-white dark:bg-black border border-gray-100 dark:border-gray-900 p-6">
      <h3 className="text-sm font-medium text-black dark:text-white mb-4">
        Send a message
      </h3>

      {status === "success" && (
        <div className="mb-4 p-4 bg-green-50 text-green-700 text-sm rounded">
          Thank you for your message. I'll get back to you soon!
        </div>
      )}

      {status === "error" && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 text-sm rounded">
          Failed to send message. Please try again.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-black dark:focus:border-white outline-none transition-colors text-black dark:text-white text-sm placeholder-gray-500 dark:placeholder-gray-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-black dark:focus:border-white outline-none transition-colors text-black dark:text-white text-sm placeholder-gray-500 dark:placeholder-gray-400"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-black dark:focus:border-white outline-none transition-colors text-black dark:text-white text-sm placeholder-gray-500 dark:placeholder-gray-400 resize-none"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-black dark:bg-white text-white dark:text-black font-medium py-3 px-4 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed">
          {status === "loading" ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
