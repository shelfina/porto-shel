"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import {
  projectsData,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className={styles.section} aria-label="Projects & Product Development">
      <div className="container">
        <SectionHeading
          tag="04 — Portfolio Showcase"
          title="Projects &"
          highlight="Product Development"
          subtitle="A selection of digital products, business model canvases, system analyses, and research papers."
        />

        {/* Filter Tabs */}
        <div className={styles.filterRow} role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={styles.card}
              >
                <div>
                  <div className={styles.cardHeader}>
                    <span className={styles.categoryTag}>{project.category}</span>
                    <span className={styles.year}>{project.year}</span>
                  </div>

                  <h3 className={styles.name}>{project.name}</h3>
                  <p className={styles.event}>{project.event}</p>

                  {project.result && (
                    <div className={styles.resultBadge}>
                      <Trophy size={13} />
                      <span>{project.result}</span>
                    </div>
                  )}
                </div>

                <p className={styles.description}>{project.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
