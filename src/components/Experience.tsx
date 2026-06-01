"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
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
    <section id="experience" className="py-24 md:py-32 px-6 relative">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <span className="text-brand text-sm font-medium tracking-[0.2em] uppercase">
            02 — Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] md:left-[17px] top-2 bottom-2 w-[2px] timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: "easeOut" as const,
                }}
                className="relative pl-10 md:pl-12 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-1 md:left-2 top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-brand bg-dark group-hover:bg-brand/20 group-hover:shadow-[0_0_12px_rgba(200,241,53,0.3)] transition-all duration-300" />

                <div className="bg-surface/50 border border-border rounded-xl p-5 md:p-6 hover:border-brand/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-white font-semibold text-base md:text-lg">
                      {exp.title}
                    </h3>
                    <span className="text-muted-text text-xs font-medium shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-brand text-sm font-medium mb-2">
                    {exp.organization}
                  </p>
                  <p className="text-muted-text text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
