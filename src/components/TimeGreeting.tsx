"use client";

import { useEffect, useState } from "react";
import ShuffleText from "./ShuffleText";

export default function TimeGreeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("good morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("good afternoon");
      } else {
        setGreeting("good evening");
      }
    };

    updateGreeting();
    // Update every minute to ensure accuracy
    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!greeting) return null;

  return (
    <div className="fixed top-6 right-6 z-[80] lg:right-8 lg:top-8">
      <ShuffleText
        text={greeting}
        className="text-lg sm:text-xl lg:text-2xl font-normal text-neutral-600 dark:text-neutral-400"
      />
    </div>
  );
}
