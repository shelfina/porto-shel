"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, Linkedin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(profileData.photos.hero.url);

  return (
    <section className={styles.heroSection} aria-label="Introduction">
      {/* Background Gradient Orbs */}
      <div className={styles.orbContainer} aria-hidden="true">
        <div className={styles.orbBlue} />
        <div className={styles.orbPurple} />
      </div>

      <div className={`container ${styles.container}`}>
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.content}
        >
          <div className={styles.greetingTag}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>Available for Opportunities</span>
          </div>

          <h2 className={styles.nameHeading}>Hello, I&apos;m {profileData.name}</h2>

          <h1 className={styles.tagline}>
            <span className="gradient-text">Product Manager,</span> Product Analyst,
            System Analyst, and Business Strategy
          </h1>

          <p className={styles.descriptor}>{profileData.descriptor}</p>

          <div className={styles.ctaRow}>
            {/* Primary CTA: WhatsApp */}
            <a
              href={profileData.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={18} />
            </a>

            {/* Secondary CTA: Scroll to Awards */}
            <a href="#awards" className={styles.secondaryCta}>
              <Award size={18} />
              <span>View Awards</span>
            </a>

            {/* Social Link: LinkedIn */}
            <a
              href={profileData.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className={styles.imageWrapper}
        >
          <div className={styles.imageFrame}>
            <div className={styles.imageInner}>
              <Image
                src={imgSrc}
                alt={profileData.photos.hero.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                className={styles.heroPhoto}
                onError={() => {
                  // Fall back to local file if external Imgur is blocked or unavailable
                  setImgSrc(profileData.photos.hero.fallback);
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tiny Scroll Cue */}
      <a href="#about" className={styles.scrollCue} aria-label="Scroll to About section">
        <span>Scroll</span>
        <ChevronDown size={14} />
      </a>
    </section>
  );
}
