"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";
import styles from "./StatCounter.module.css";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  decimals = 0,
  duration = 1.6,
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      const frameId = requestAnimationFrame(() => {
        setDisplayValue(value);
      });
      return () => cancelAnimationFrame(frameId);
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.valueWrapper}>
        <span className={styles.number}>
          {decimals > 0
            ? displayValue.toFixed(decimals)
            : Math.round(displayValue)}
        </span>
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
