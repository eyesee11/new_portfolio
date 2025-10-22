"use client";

import { useEffect, useState } from "react";

interface ShuffleTextProps {
  text: string;
  className?: string;
}

export default function ShuffleText({
  text,
  className = "",
}: ShuffleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isShuffling, setIsShuffling] = useState(true);

  useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let iteration = 0;
    const speed = 30; 

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsShuffling(false);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
}
