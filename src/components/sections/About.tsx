"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import SectionHeading from "@/components/common/SectionHeading";
import styles from "./About.module.css";

export default function About() {
  const [imgSrc, setImgSrc] = useState(profileData.photos.about.url);

  return (
    <section id="about" className={styles.aboutSection} aria-label="About Me">
      <div className={`container ${styles.container}`}>
        {/* Left Column: Formal Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.imageWrapper}
        >
          <div className={styles.imageFrame}>
            <div className={styles.imageInner}>
              <Image
                src={imgSrc}
                alt={profileData.photos.about.alt}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className={styles.photo}
                onError={() => {
                  setImgSrc(profileData.photos.about.fallback);
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.content}
        >
          <SectionHeading
            tag="01 — About Me"
            title="Bridging Business Strategy &"
            highlight="Product Excellence"
          />

          <p className={styles.bioText}>{profileData.aboutText}</p>

          {/* Highlight Chips */}
          <div className={styles.chipRow}>
            {profileData.highlightChips.map((chip) => (
              <div key={chip} className={styles.chip}>
                <span className={styles.chipDot} aria-hidden="true" />
                <span>{chip}</span>
              </div>
            ))}
          </div>

          {/* GPA Stat Card */}
          <div className={styles.gpaCard}>
            <div className={styles.gpaNumber}>{profileData.gpa}</div>
            <div className={styles.gpaInfo}>
              <span className={styles.gpaTitle}>Cumulative GPA</span>
              <span className={styles.gpaSubtitle}>
                Brawijaya University · Faculty of Computer Science
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
