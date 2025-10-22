"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import InfiniteScroll from "./InfiniteScroll";

const projectsDetailed = [
  {
    id: 1,
    title: "FundN3xus",
    description:
      "FundN3xus acts as a financial advisory platform to help users save money and make informed investment decisions.",
    longDescription:
      "FundN3xus is A collaborative tool used to give smart and sensible financial advice to users, by accessing their information like bank details, investment funds, etc and saving them a fortune.",
    image: "/FundN3xus.png",
    tags: ["next.js", "tailwind", "typescript", "Redis", "Numpy"],
    github: "https://github.com/eyesee11/FundN3xus",
    live: "https://fundn3xus.vercel.app/",
    features: [
      "Integration with Gemini API for real-time financial data",
      "RAG pipeline for personalized advice",
      "Redis for efficient data caching",
      "responsive design system",
    ],
  },
  {
    id: 2,
    title: "Aethermeet",
    description:
      "AetherMeet is designed for secure online meetings with robust features to enhance virtual collaboration.",
    longDescription:
      "A web application featuring secure user authentication, dynamic room creation, and supports demo and authenticated user flows, robust memory management and optimized server-side rendering.",
    image: "/Aethermeet.png",
    tags: ["react", "node.js", "mongodb", "websockets"],
    github: "https://github.com/eyesee11/AetherMeet",
    live: "#",
    features: [
      "Demo and authenticated user flows",
      "robust memory management",
      "optimized server-side rendering",
      "Chat export",
    ],
  },
  {
    id: 3,
    title: "TEKST",
    description:
      "TEKST is a powerful Java-based text editor with advanced features for an enhanced writing experience.",
    longDescription:
      "A powerful Java-based text editor with advanced features including multiple theme support, comprehensive keyboard shortcuts, syntax highlighting and pre-release versions available.",
    image: "/tekst.png",
    tags: ["java", "swing", "flatlaf"],
    github: "https://github.com/eyesee11/TEKST",
    live: "https://eyesee11.github.io/TEKST/",
    features: [
      "multiple theme support",
      "comprehensive keyboard shortcuts",
      "syntax highlighting",
      "pre-release versions available",
    ],
  },
  {
    id: 4,
    title: "MediSync",
    description:
      "MediSync is designed to streamline medical document access and management for patients and healthcare providers.",
    longDescription:
      "An innovative solution to fragmented medical documents of a patient. Effectiveness areas are referrals between doctors, accessing medical history. Built with modern web technologies.",
    image: "/MediSync.png",
    tags: ["react", "typescript", "tailwindCSS", "MongoDB", "Node.js"],
    github: "https://github.com/eyesee11/MediSync",
    live: "https://medi-sync-snowy.vercel.app/",
    features: [
      "secure document access using Blockchain",
      "real-time document sharing",
      "patient consent management",
      "notifications for document updates",
    ],
  },
  {
    id: 5,
    title: "Kwizz",
    description:
      "A simple basic quiz platform made from scratch using Spring Boot and React.",
    longDescription:
      "A comprehensive online quiz platform built with Spring Boot and React, featuring real-time quiz capabilities, AI-powered quiz generation, and microservice architecture.",
    image: "/portfolio.png",
    tags: ["next.js", "tailwindcss", "typescript", "framer-motion"],
    github: "https://github.com/eyesee11/Kwizz",
    live: "#",
  },
];

export default function ProjectsContent() {
  // Transform projects into InfiniteScroll items
  const scrollItems = projectsDetailed.map((project) => ({
    content: (
      <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors bg-white dark:bg-neutral-800 h-full">
        <div className="relative h-64 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain bg-neutral-50 dark:bg-neutral-900"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-100 mb-3">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-loose">
            {project.longDescription}
          </p>

          {/* Features */}
          {project.features && (
            <div className="mb-4">
              <h4 className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                key features:
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 leading-relaxed"
                  >
                    <span className="w-1 h-1 bg-neutral-400 dark:bg-neutral-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.github}
              className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              view code
            </a>
            <a
              href={project.live}
              className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              live demo
            </a>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div
      className="relative w-full"
      style={{ height: "70vh", maxHeight: "600px" }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
        <InfiniteScroll
          items={scrollItems}
          width="100%"
          maxHeight="100%"
          itemMinHeight={550}
          negativeMargin="-1rem"
          isTilted={false}
          autoplay={true}
          autoplaySpeed={1.2}
          autoplayDirection="up"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}
