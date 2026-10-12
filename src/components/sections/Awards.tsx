"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import {
  awardsSummaryBadge,
  competitionGroups,
  organizationalAwards,
} from "@/data/awards";
import styles from "./Awards.module.css";

export default function Awards() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = [
    "All",
    "UUM (International)",
    "IPB University",
    "Canvas Indonesia",
    "UIN Madura",
    "UNP Kediri",
    "UMSIDA",
  ];

  const filteredGroups = competitionGroups.filter((group) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "UUM (International)") return group.id === "uum-2026";
    if (activeFilter === "IPB University") return group.id === "ipb-2026";
    if (activeFilter === "Canvas Indonesia") return group.id === "canvas-2026";
    if (activeFilter === "UIN Madura") return group.id === "uin-2026";
    if (activeFilter === "UNP Kediri") return group.id === "unp-2026";
    if (activeFilter === "UMSIDA") return group.id === "umsida-2026";
    return true;
  });

  return (
    <section id="awards" className={styles.section} aria-label="Honors & Awards">
      <div className="container">
        <SectionHeading
          tag="05 — Recognition"
          title="Honors &"
          highlight="Prestigious Awards"
          subtitle="National and international podium finishes across Business Plans, Business Model Canvas, and Essay Competitions."
        />

        {/* Summary Badge */}
        <div className={styles.badgeWrapper}>
          <div className={styles.summaryBadge}>
            <Trophy size={18} />
            <span>{awardsSummaryBadge}</span>
          </div>
        </div>

        {/* Competition Filter */}
        <div className={styles.filterRow} role="tablist" aria-label="Filter awards by competition">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              role="tab"
              aria-selected={activeFilter === opt}
              className={`${styles.filterBtn} ${activeFilter === opt ? styles.active : ""}`}
              onClick={() => setActiveFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Competition Awards Grouped List */}
        <div className={styles.groupsContainer}>
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group, groupIdx) => (
              <motion.div
                key={group.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
                className={styles.groupCard}
              >
                <div className={styles.groupHeader}>
                  <div>
                    <h3 className={styles.organizerTitle}>{group.organizer}</h3>
                    <p className={styles.competitionName}>{group.competitionName}</p>
                  </div>
                  <span className={styles.groupDate}>{group.date}</span>
                </div>

                <div className={styles.awardRows}>
                  {group.awards.map((award) => (
                    <div key={award.id} className={styles.awardRow}>
                      <div className={styles.awardInfo}>
                        <Trophy size={20} className={styles.trophyIcon} />
                        <div>
                          <h4 className={styles.awardTitle}>{award.title}</h4>
                          {award.subtitle && (
                            <p className={styles.awardSubtitle}>{award.subtitle}</p>
                          )}
                        </div>
                      </div>

                      <a
                        href={award.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.certBtn}
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Organizational Awards */}
        <div>
          <h3 className={styles.orgHeader}>
            <Award size={24} className="gradient-text" />
            <span>Organizational Recognition</span>
          </h3>

          <div className={styles.orgGrid}>
            {organizationalAwards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={styles.orgCard}
              >
                <a
                  href={award.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.orgImageWrapper}
                  title="Click to view full certificate"
                >
                  <Image
                    src={award.imageUrl}
                    alt={award.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className={styles.orgImage}
                    onError={(e) => {
                      // Fallback to local copy if Imgur is unavailable
                      const target = e.currentTarget as unknown as HTMLImageElement;
                      if (target && target.src !== award.fallbackImage) {
                        target.src = award.fallbackImage;
                      }
                    }}
                  />
                  <span className={styles.orgZoomBadge}>
                    <ExternalLink size={13} />
                    <span>View Certificate</span>
                  </span>
                </a>
                <div className={styles.orgInfo}>
                  <h4 className={styles.orgTitle}>{award.title}</h4>
                  <div className={styles.orgMeta}>
                    <span>{award.organization}</span>
                    <span className={styles.orgDate}>{award.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
