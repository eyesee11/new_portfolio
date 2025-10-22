"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Code2,
  Sparkles,
  Cpu,
} from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    role: "Web developement intern",
    company: "OctaNet pvt ltd",
    period: "Dec 2024 - Jan 2025",
    description:
      "built scalable web applications and collaborated with cross-functional teams",
  },
  {
    role: "Research and Development intern",
    company: "StudifySuccess - EdTech Startup",
    period: "Nov 2024 - Jan 2025",
    description:
      "developed and researched innovative features for an edtech platform to enhance user engagement. got the best intern of the month award.",
  },
];

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Chitkara University",
    period: "2023 - 2027",
    description: "pursuing a degree with a focus on software development, algorithms, and data structures.",
  },
];

const interests = [
  "open source contributions",
  "AI/ML integrations",
  "AI Research and Development",
  "problem solving",
  "learning new technologies",
  "building side projects",
];

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Numpy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "Selenium",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  },
];

const techContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const techItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function AboutContent() {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
          <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-100">
            who am i?
          </h3>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
          i'm a passionate developer who believes in the power of clean code and
          beautiful design. my journey in tech started with curiosity and has
          evolved into a love for creating meaningful digital experiences.
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          when i'm not coding, you'll find me exploring new design trends,
          contributing to open source, or sketching out ideas for the next big
          project.
        </p>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
          <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-100">
            experience
          </h3>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h4 className="text-sm font-normal text-neutral-900 dark:text-neutral-100">
                  {exp.role}
                </h4>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-2">
                {exp.company}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
          <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-100">
            education
          </h3>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h4 className="text-sm font-normal text-neutral-900 dark:text-neutral-100">
                  {edu.degree}
                </h4>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {edu.period}
                </span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-2">
                {edu.institution}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills Highlight */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
          <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-100">
            what i do best
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <h4 className="text-xs font-normal text-neutral-900 dark:text-neutral-100 mb-1">
              frontend
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              react, next.js, tailwind
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <h4 className="text-xs font-normal text-neutral-900 dark:text-neutral-100 mb-1">
              backend
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              node.js, python, databases
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <h4 className="text-xs font-normal text-neutral-900 dark:text-neutral-100 mb-1">
              design
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              figma, ui/ux, prototyping
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <h4 className="text-xs font-normal text-neutral-900 dark:text-neutral-100 mb-1">
              tools
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              git, docker, aws
            </p>
          </div>
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
          <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-100">
            interests
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-full border border-neutral-200 dark:border-neutral-700"
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
          <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-100">
            tech stack
          </h3>
        </div>
        <motion.div
          variants={techContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={techItem}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all duration-300"
            >
              <div className="relative w-10 h-10">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                {tech.name.toLowerCase()}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 py-2"
      >
        <p className="text-sm italic text-neutral-600 dark:text-neutral-300">
          "simplicity is the ultimate sophistication"
        </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
          — leonardo da vinci
        </p>
      </motion.div>
    </div>
  );
}
