"use client";

import {
  Home,
  User,
  Briefcase,
  Mail,
  Twitter,
  Linkedin,
  Github,
  FileText,
  Sun,
  Moon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Menu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navigation = [
  { name: "Home", href: "#home", icon: Home, hasSlideOver: false },
  {
    name: "About",
    href: "#about",
    icon: User,
    hasSlideOver: false,
    panel: "about",
  },
  {
    name: "Projects",
    href: "#projects",
    icon: Briefcase,
    hasSlideOver: false,
    panel: "projects",
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
    hasSlideOver: false,
    panel: "contact",
  },
];

const socials = [
  { name: "Twitter", href: "https://twitter.com/eyesee_11", icon: Twitter },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayush-chauhan-776321293/",
    icon: Linkedin,
  },
  { name: "GitHub", href: "https://github.com/eyesee11", icon: Github },
];

interface SidebarProps {
  currentSection?: string;
}

export default function Sidebar({ currentSection }: SidebarProps) {
  const [activeSection, setActiveSection] = useState(currentSection || "home");
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Update active section when currentSection prop changes
  useEffect(() => {
    setActiveSection(currentSection || "home");
  }, [currentSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    item: (typeof navigation)[0],
    e: React.MouseEvent
  ) => {
    // All navigation is now handled by scrolling, not slide overs
    // Keep default anchor behavior
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="fixed top-6 left-6 z-[120] flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 shadow-lg border border-neutral-200 dark:border-neutral-700 lg:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open sidebar"
      >
        <Menu className="w-7 h-7 text-neutral-700 dark:text-neutral-200" />
      </button>

      {/* Floating Sidebar Widget */}
      <aside
        className={`fixed top-6 left-6 z-[110] w-72 max-w-[90vw] rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-transform duration-300 overflow-hidden flex flex-col
        ${
          open ? "translate-x-0" : "-translate-x-[110%]"
        } lg:translate-x-0 lg:top-10 lg:left-10 lg:w-80 lg:block lg:rounded-2xl lg:shadow-2xl lg:h-auto`}
        style={{ minHeight: "auto", maxHeight: "90vh" }}
      >
        {/* Close button for mobile */}
        <div className="flex lg:hidden justify-end p-3">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        {/* Profile Section */}
        <div className="p-8 pt-4 text-center">
          <div className="relative w-16 h-16 mx-auto mb-3">
            <Image
              src="/image.png"
              alt="Profile"
              width={64}
              height={64}
              className="rounded-full ring-1 ring-neutral-300 dark:ring-neutral-600"
            />
          </div>
          <h3 className="text-base font-normal mb-1 text-neutral-900 dark:text-neutral-100">
            Ayush Chauhan
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs">
            Software Developer and AI Enthusiast
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(item, e);
                      setOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-sm cursor-pointer relative ${
                      isActive
                        ? "bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 hover:text-neutral-900 dark:hover:text-neutral-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name.toLowerCase()}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Socials */}
        <div className="p-6 border-t border-neutral-200 dark:border-neutral-700">
          {/* Theme Toggle */}
          <div className="mb-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all text-sm"
              aria-label="Toggle theme"
            >
              <span className="text-neutral-700 dark:text-neutral-200 font-medium">
                {theme === "light" ? "light mode" : "dark mode"}
              </span>
              <div className="relative w-10 h-5 bg-neutral-300 dark:bg-neutral-600 rounded-full transition-colors">
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 flex items-center justify-center ${
                    theme === "dark" ? "translate-x-5" : ""
                  }`}
                >
                  {theme === "light" ? (
                    <Sun className="w-2.5 h-2.5 text-yellow-500" />
                  ) : (
                    <Moon className="w-2.5 h-2.5 text-blue-500" />
                  )}
                </div>
              </div>
            </button>
          </div>

          <h4 className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
            socials
          </h4>
          <div className="space-y-1">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors py-1.5 text-sm"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{social.name.toLowerCase()}</span>
                </Link>
              );
            })}
          </div>
          <Link
            href="/resume.pdf"
            className="mt-4 flex items-center justify-center gap-2 w-full bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-900 dark:hover:bg-neutral-600 text-white py-2 rounded-lg transition-colors text-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>resume</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
