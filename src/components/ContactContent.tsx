"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-8">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-100 mb-2">
          let's connect
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          i'm always interested in hearing about new projects and opportunities.
          whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-xs text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-transparent transition-all text-neutral-900 dark:text-neutral-100"
            placeholder="ayush chauhan"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-transparent transition-all text-neutral-900 dark:text-neutral-100"
            placeholder="ayush@chauhan.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-transparent transition-all resize-none text-neutral-900 dark:text-neutral-100"
            placeholder="tell me about your project..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={status.type === "loading"}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          {status.type === "loading" ? "sending..." : "send message"}
        </button>

        {/* Status Message */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg text-xs ${
              status.type === "success"
                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                : status.type === "error"
                ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                : ""
            }`}
          >
            {status.message}
          </motion.div>
        )}
      </motion.form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200 dark:border-neutral-700"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-neutral-100 dark:bg-neutral-900 px-2 text-neutral-500 dark:text-neutral-400">
            or connect via
          </span>
        </div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 gap-3"
      >
        <Link
          href="mailto:your.email@example.com"
          className="flex items-center gap-2 p-3 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors group"
        >
          <Mail className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
          <div>
            <p className="text-xs font-normal text-neutral-900 dark:text-neutral-100">
              email
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              weaboo1164@gmail.com
            </p>
          </div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/ayush-chauhan-776321293/"
          target="_blank"
          className="flex items-center gap-2 p-3 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors group"
        >
          <Linkedin className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
          <div>
            <p className="text-xs font-normal text-neutral-900 dark:text-neutral-100">
              linkedin
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              connect with me
            </p>
          </div>
        </Link>

        <Link
          href="https://github.com/eyesee11"
          target="_blank"
          className="flex items-center gap-2 p-3 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors group"
        >
          <Github className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
          <div>
            <p className="text-xs font-normal text-neutral-900 dark:text-neutral-100">
              github
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              @yourusername
            </p>
          </div>
        </Link>

        <Link
          href="https://twitter.com/eyesee_11"
          target="_blank"
          className="flex items-center gap-2 p-3 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors group"
        >
          <Twitter className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
          <div>
            <p className="text-xs font-normal text-neutral-900 dark:text-neutral-100">
              twitter
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              @yourusername
            </p>
          </div>
        </Link>
      </motion.div>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <h4 className="text-xs font-normal text-neutral-900 dark:text-neutral-100">
            currently available
          </h4>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
          i'm currently open to freelance projects and collaboration
          opportunities. response time is typically within 24 hours.
        </p>
      </motion.div>
    </div>
  );
}
