"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";
import { awards, statsBar } from "@/data/awards";

const resultColorMap: Record<string, string> = {
  brand: "bg-brand/15 text-brand",
  amber: "bg-amber/15 text-amber",
  blue: "bg-blue/15 text-blue",
  purple: "bg-purple/15 text-purple",
};

export default function Awards() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const competitionAwards = awards.filter((a) => a.type === "competition");
  const orgAwards = awards.filter((a) => a.type === "organization");

  return (
    <section id="awards" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <span className="text-brand text-sm font-medium tracking-[0.2em] uppercase">
            04 — Awards
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            Honors & Awards
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Competition Wins */}
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
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Trophy size={20} className="text-brand" />
              Competition Wins
            </h3>

            <div className="space-y-3">
              {competitionAwards.map((award) => (
                <motion.div
                  key={award.id}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                  className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4 hover:border-brand/20 transition-all duration-300"
                >
                  <div className="shrink-0">
                    <Trophy size={16} className="text-brand/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      {award.title}
                    </p>
                    <p className="text-muted-text text-xs truncate">
                      {award.event}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 px-2.5 py-1 text-[10px] font-semibold rounded-lg ${
                      resultColorMap[award.resultColor]
                    }`}
                  >
                    {award.result}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Organizational Awards */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Award size={20} className="text-brand" />
              Organizational Awards
            </h3>

            {orgAwards.map((award) => (
              <div
                key={award.id}
                className="bg-surface border-2 border-brand/30 rounded-xl p-6 glow-brand transition-all duration-300 hover:border-brand/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Star size={24} className="text-brand" fill="currentColor" />
                  <h4 className="text-brand font-bold text-lg">
                    {award.result}
                  </h4>
                </div>
                <p className="text-white font-medium">{award.title}</p>
                <p className="text-muted-text text-sm mt-1">{award.event}</p>
              </div>
            ))}

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center bg-surface border border-border rounded-xl p-4">
                <p className="text-brand font-bold text-2xl">{statsBar.totalCompetitions}</p>
                <p className="text-muted-text text-xs mt-1">Competitions</p>
              </div>
              <div className="text-center bg-surface border border-border rounded-xl p-4">
                <p className="text-brand font-bold text-2xl">{statsBar.podiumFinishes}</p>
                <p className="text-muted-text text-xs mt-1">Podium Finishes</p>
              </div>
              <div className="text-center bg-surface border border-border rounded-xl p-4">
                <p className="text-brand font-bold text-2xl">{statsBar.specialAwards}</p>
                <p className="text-muted-text text-xs mt-1">Special Awards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
