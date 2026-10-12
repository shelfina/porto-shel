"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setMounted(true);
      const currentTheme =
        document.documentElement.getAttribute("data-theme") === "light"
          ? "light"
          : "dark";
      setTheme(currentTheme);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // ignore storage access errors
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className={styles.toggleButton}
        aria-label="Toggle color theme"
        disabled
      >
        <Moon className={styles.icon} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className={styles.icon} />
      ) : (
        <Moon className={styles.icon} />
      )}
    </button>
  );
}
