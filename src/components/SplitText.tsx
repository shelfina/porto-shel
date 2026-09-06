"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
  showCallback?: boolean;
}

export default function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
  showCallback = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Parse words and letters
  const words = text.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (!inView || !containerRef.current) return;

    const targets = containerRef.current.querySelectorAll(
      splitType === "chars" ? ".split-char" : ".split-word"
    );

    gsap.fromTo(
      targets,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: () => {
          if (onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        },
      }
    );
  }, [inView, splitType, from, to, duration, ease, delay, onLetterAnimationComplete]);

  return (
    <div
      ref={containerRef}
      className={`inline-block select-none ${className}`}
      style={{ textAlign, display: "inline-block", width: "100%" }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="split-word inline-block"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            marginRight: wordIndex < words.length - 1 ? "0.25em" : "0",
          }}
        >
          {splitType === "chars"
            ? word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="split-char inline-block"
                  style={{ display: "inline-block", opacity: 0 }}
                >
                  {char}
                </span>
              ))
            : word}
        </span>
      ))}
    </div>
  );
}
