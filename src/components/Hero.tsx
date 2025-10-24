"use client";

import { motion } from "framer-motion";
import ShuffleText from "./ShuffleText";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center"
    >
      <div className="max-w-2xl w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Remove waving emoji, replaced by GIF */}

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
              Software developer
            </span>{" "}
            that loves building products and Softwares and hope to impact
            millions of lives
          </p>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            i'm a passionate developer building scalable Software Applications
            that are performance optimized and good looking. currently pursuing
            my degree and working on exciting projects that solve real-world
            problems.
          </p>
        </motion.div>
      </div>
      <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
        <Image
          src="/hero-model.gif"
          alt="Animated Model"
          width={180}
          height={90}
          priority
          className="rounded-xl shadow-lg bg-transparent max-w-[60vw] h-auto md:max-w-[220px]"
        />
      </div>
    </section>
  );
}
