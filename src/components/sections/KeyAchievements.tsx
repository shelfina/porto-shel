"use client";

import { motion } from "framer-motion";
import { keyAchievements } from "@/data/stats";
import StatCounter from "@/components/common/StatCounter";
import styles from "./KeyAchievements.module.css";

export default function KeyAchievements() {
  return (
    <section className={styles.section} aria-label="Key Achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className={styles.grid}
        >
          {keyAchievements.map((item) => (
            <StatCounter
              key={item.id}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              decimals={item.decimals}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
