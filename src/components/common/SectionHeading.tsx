"use client";

import { motion } from "framer-motion";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${styles.wrapper} ${align === "center" ? styles.center : ""}`}
    >
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
