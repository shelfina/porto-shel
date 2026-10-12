"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import {
  committeeExperiences,
  committeeClosingNote,
} from "@/data/committee";
import styles from "./Committee.module.css";

export default function Committee() {
  const [activeTab, setActiveTab] = useState<"external" | "university">("external");

  const filteredItems = committeeExperiences.filter(
    (item) => item.category === activeTab
  );

  return (
    <section id="committees" className={styles.section} aria-label="Committee Experiences">
      <div className="container">
        <SectionHeading
          tag="03 — Leadership & Impact"
          title="Committee &"
          highlight="Event Experiences"
          subtitle="Directing logistics, product strategy, technical guidelines, and team governance across prominent initiatives."
        />

        {/* Category Tabs */}
        <div className={styles.tabRow}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === "external" ? styles.active : ""}`}
            onClick={() => setActiveTab("external")}
          >
            External & National
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === "university" ? styles.active : ""}`}
            onClick={() => setActiveTab("university")}
          >
            University (Brawijaya University)
          </button>
        </div>

        {/* 2-Column Card Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={styles.grid}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={styles.card}
              >
                <div className={styles.header}>
                  <div>
                    <h4 className={styles.role}>{item.role}</h4>
                    <p className={styles.event}>{item.event}</p>
                  </div>
                  <span className={styles.year}>{item.year}</span>
                </div>
                <p className={styles.organization}>{item.organization}</p>
                <p className={styles.description}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.closingNote}
        >
          <Sparkles size={18} className={styles.noteIcon} />
          <span>{committeeClosingNote}</span>
        </motion.div>
      </div>
    </section>
  );
}
