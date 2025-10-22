"use client";

import { motion } from "framer-motion";
import ShuffleText from "./ShuffleText";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center py-16 relative"
    >
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl inline-block animate-wave mb-4">👋</span>

          <h1>
            <ShuffleText
              text="well hello there! i'm "
              className="text-2xl sm:text-4xl font-normal mb-4 leading-tight text-neutral-900 dark:text-neutral-100"
            />
            <ShuffleText
              text="Ayush Chauhan"
              className="text-2xl sm:text-4xl font-normal mb-4 leading-tight text-neutral-600 dark:text-neutral-400"
            />
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
            i'm a{" "}
            <span className="text-neutral-800 dark:text-neutral-200">
              full-stack developer
            </span>{" "}
            that loves building products and web apps and hope to impact
            millions of lives
          </p>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            i'm a passionate developer building scalable web apps that are
            performance optimized and good looking. currently pursuing my degree
            and working on exciting projects that solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
