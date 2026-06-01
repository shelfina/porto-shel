"use client";

import { motion, useReducedMotion } from "framer-motion";

const skills = [
  "Java", "PHP", "JavaScript", "HTML/CSS", "SQL",
  "Figma", "Notion", "Jira", "Trello",
  "Design Thinking", "User Research", "Product Roadmap Planning",
  "RICE", "MoSCoW", "BPMN", "SCAMPER",
];

const stats = [
  { value: "3.92", label: "GPA" },
  { value: "13+", label: "Competitions" },
  { value: "20+", label: "Committees" },
  { value: "6", label: "Awards" },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <span className="text-brand text-sm font-medium tracking-[0.2em] uppercase">
            01 — About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Text + Skills */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-muted-text leading-relaxed text-base md:text-lg mb-8">
              I am a 2024 Information Technology Education student at{" "}
              <span className="text-white font-medium">Brawijaya University</span>{" "}
              with a strong interest in Product Management, Project Management,
              and Business Strategy. I have participated in{" "}
              <span className="text-brand font-medium">20+ organizational committees</span>{" "}
              with a focus on product analysis, strategy, and cross-functional
              collaboration.
            </p>

            <div className="mb-4">
              <h3 className="text-sm font-medium text-muted-text tracking-wide uppercase mb-4">
                Skills & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-text rounded-full border border-border hover:border-brand/30 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                className="bg-surface border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-brand/20 transition-all duration-300 group"
              >
                <span className="text-3xl md:text-4xl font-bold text-brand group-hover:text-glow transition-all">
                  {stat.value}
                </span>
                <span className="text-muted-text text-sm mt-2 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
