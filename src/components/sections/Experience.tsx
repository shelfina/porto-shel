"use client";

import { motion } from "framer-motion";
import { Briefcase, HeartHandshake, Award } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import {
  organizationalExperience,
  volunteerExperience,
} from "@/data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section} aria-label="Experience">
      <div className="container">
        <SectionHeading
          tag="02 — Career Journey"
          title="Professional &"
          highlight="Leadership Experience"
          subtitle="Proven track record across product management, consulting frameworks, innovation initiatives, and academic research."
        />

        {/* Organizational Experience */}
        <div className={styles.categoryGroup}>
          <h3 className={styles.categoryTitle}>
            <Briefcase size={22} className={styles.categoryIcon} />
            <span>Organizational Experience</span>
          </h3>

          <div className={styles.timeline}>
            {organizationalExperience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={styles.item}
              >
                <div className={styles.node} aria-hidden="true" />
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h4 className={styles.role}>{item.role}</h4>
                      <p className={styles.organization}>{item.organization}</p>
                    </div>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <p className={styles.description}>{item.description}</p>
                  {item.badge && (
                    <div className={styles.badge}>
                      <Award size={13} />
                      <span>{item.badge}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div className={styles.categoryGroup} style={{ marginBottom: 0 }}>
          <h3 className={styles.categoryTitle}>
            <HeartHandshake size={22} className={styles.categoryIcon} />
            <span>Academic & Volunteer Experience</span>
          </h3>

          <div className={styles.timeline}>
            {volunteerExperience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={styles.item}
              >
                <div className={styles.node} aria-hidden="true" />
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h4 className={styles.role}>{item.role}</h4>
                      <p className={styles.organization}>{item.organization}</p>
                    </div>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
