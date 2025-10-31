"use client";

import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import AboutContent from "@/components/AboutContent";
import ProjectsContent from "@/components/ProjectsContent";
import ContactContent from "@/components/ContactContent";
import TimeGreeting from "@/components/TimeGreeting";
import GradualBlur from "@/components/GradualBlur";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["home", "about", "projects", "contact", "blog"];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((element, index) => {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen relative z-[60]">
      <Sidebar currentSection={sections[activeSection]} />

      {/* Time-based greeting */}
      <TimeGreeting />

      {/* Section indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[70] hidden lg:flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeSection === index
                ? "bg-neutral-900 dark:bg-neutral-100 w-8"
                : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
            }`}
            aria-label={`Go to ${section}`}
          />
        ))}
      </div>

      <main className="flex-1 lg:ml-80 relative z-[60]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-12 relative z-[60]">
          {/* Hero Section */}
          <section id="home" className="min-h-[40vh] flex items-start">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen py-20">
            <h2 className="text-2xl sm:text-3xl font-normal mb-8 text-neutral-900 dark:text-neutral-100">
              about
            </h2>
            <AboutContent />
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-20">
            <h2 className="text-2xl sm:text-3xl font-normal mb-8 text-neutral-900 dark:text-neutral-100">
              projects
            </h2>
            <ProjectsContent />
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen py-20">
            <h2 className="text-2xl sm:text-3xl font-normal mb-8 text-neutral-900 dark:text-neutral-100">
              contact
            </h2>
            <ContactContent />
          </section>

          {/* Blog Section */}
          <section
            id="blog"
            className="min-h-[50vh] py-20 flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center">
              <svg
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mb-4 text-neutral-900 dark:text-neutral-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-normal mb-4 text-neutral-900 dark:text-neutral-100">
                blog
              </h2>
              <p className="mb-6 text-lg font-light italic text-neutral-700 dark:text-neutral-300">
                welcome to my blog! here, I share insights, tutorials, and
                thoughts on various topics.
              </p>
              <a
                href="https://eyesee11.github.io/Blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg shadow hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors text-lg font-semibold tracking-wide"
              >
                Visit My Blog
              </a>
            </div>
          </section>
        </div>

        {/* Gradual Blur Effects - Positioned fixed within main content area */}
        <div className="fixed top-0 left-0 lg:left-80 right-0 h-32 pointer-events-none z-[65]">
          <GradualBlur
            target="parent"
            position="top"
            height="8rem"
            strength={3}
            divCount={8}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
        <div className="fixed bottom-0 left-0 lg:left-80 right-0 h-32 pointer-events-none z-[65]">
          <GradualBlur
            target="parent"
            position="bottom"
            height="8rem"
            strength={3}
            divCount={8}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
      </main>
    </div>
  );
}
