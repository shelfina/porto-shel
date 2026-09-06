"use client";

import { motion, useReducedMotion } from "framer-motion";
import { externalCommittees, universityCommittees, committeeSummary, committeeBadge } from "@/data/committee";
import { Award, Users } from "lucide-react";

export default function CommitteeExperience() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const renderCommitteeList = (committees: typeof externalCommittees) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {committees.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : index * 0.1,
            ease: "easeOut" as const,
          }}
          className="bg-surface border border-border rounded-xl p-5 hover:border-brand/20 transition-all duration-300 flex flex-col h-full group"
        >
          <div className="flex justify-between items-start mb-3 gap-2">
            <h3 className="text-white font-medium text-base leading-snug">
              {exp.title}
            </h3>
            {exp.period && (
              <span className="text-muted-text text-xs shrink-0 bg-muted px-2 py-1 rounded">
                {exp.period}
              </span>
            )}
          </div>
          <p className="text-brand text-xs font-medium mb-3">
            {exp.organization}
          </p>
          <p className="text-muted-text text-sm leading-relaxed mt-auto">
            {exp.description}
          </p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="committees" className="py-24 md:py-32 px-6 relative bg-dark/50">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="text-brand text-sm font-medium tracking-[0.2em] uppercase">
            04 — Committees
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white mb-6">
            Committee Experiences
          </h2>
        </motion.div>

        <div className="space-y-16">
          {/* External & National */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                <Users size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-white">External & National Level</h3>
            </div>
            {renderCommitteeList(externalCommittees)}
          </motion.div>

          {/* University Level */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                <Award size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-white">University Level (Brawijaya University)</h3>
            </div>
            {renderCommitteeList(universityCommittees)}
          </motion.div>
        </div>

        {/* Closing Summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-white text-lg font-medium italic">
            {committeeSummary}
          </p>
        </motion.div>

        {/* Badge Note */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand/5 border border-brand/20 rounded-full text-brand text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            {committeeBadge}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
