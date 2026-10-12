"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, LayoutDashboard } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { educationData, skillCategories } from "@/data/education";
import styles from "./EducationSkills.module.css";

export default function EducationSkills() {
  return (
    <section id="education" className={styles.section} aria-label="Education & Skills">
      <div className="container">
        <SectionHeading
          tag="06 — Academic & Capabilities"
          title="Education &"
          highlight="Core Competencies"
          subtitle="Strong academic foundation combined with practical proficiency in engineering tools, product governance, and business design."
        />

        <div className={styles.container}>
          {/* Left Column: Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.eduCard}
          >
            <div>
              <div className={styles.eduHeader}>
                <div className={styles.iconBadge}>
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h3 className={styles.institution}>{educationData.institution}</h3>
                  <p className={styles.program}>{educationData.program}</p>
                </div>
              </div>

              <p className={styles.faculty}>{educationData.faculty}</p>
            </div>

            <div className={styles.eduMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Period</span>
                <span className={styles.metaValue}>{educationData.period}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Cumulative GPA</span>
                <span className={styles.metaValue} style={{ color: "var(--blue-400)" }}>
                  {educationData.gpa}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skills Grouped Glass Chips */}
          <div className={styles.skillsContainer}>
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.skillCategory}
              >
                <h4 className={styles.skillTitle}>
                  {category.title === "Technical & Development" ? (
                    <Code2 size={20} className="gradient-text" />
                  ) : (
                    <LayoutDashboard size={20} className="gradient-text" />
                  )}
                  <span>{category.title}</span>
                </h4>

                <div className={styles.skillChips}>
                  {category.skills.map((skill) => (
                    <span key={skill} className={styles.glassChip}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
