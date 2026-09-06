"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { projects, categories, type ProjectCategory } from "@/data/projects";

const resultColorMap: Record<string, string> = {
  brand: "bg-brand/15 text-brand",
  amber: "bg-amber/15 text-amber",
  blue: "bg-blue/15 text-blue",
  purple: "bg-purple/15 text-purple",
  muted: "bg-muted text-muted-text",
};

const categoryColorMap: Record<string, string> = {
  BMC: "bg-brand/10 text-brand border-brand/20",
  "UI/UX": "bg-blue/10 text-blue border-blue/20",
  "Business Plan": "bg-amber/10 text-amber border-amber/20",
  Essay: "bg-purple/10 text-purple border-purple/20",
  "Software Dev": "bg-muted text-white border-border/50",
  "Raion Project": "bg-purple/20 text-purple border-purple/30",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <span className="text-brand text-sm font-medium tracking-[0.2em] uppercase">
            05 — Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            Selected Projects
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {["All", "BMC", "UI/UX", "Business Plan", "Essay"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as ProjectCategory)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand text-dark"
                  : "bg-surface text-muted-text border border-border hover:border-brand/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="bg-surface border border-border rounded-xl p-5 card-glow transition-all duration-300 hover:scale-[1.02] group"
              >
                {/* Category Tag */}
                <span
                  className={`inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md border mb-4 ${
                    categoryColorMap[project.category] || "bg-muted text-muted-text border-border"
                  }`}
                >
                  {project.category}
                </span>

                {/* Project Name */}
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-brand transition-colors">
                  {project.name}
                </h3>

                {/* Competition */}
                <p className="text-muted-text text-xs mb-3">
                  {project.competition}
                </p>

                {/* Description */}
                <p className="text-muted-text text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Result Badge */}
                <span
                  className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-lg ${
                    resultColorMap[project.resultColor]
                  }`}
                >
                  {project.result}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
