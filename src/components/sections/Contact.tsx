"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.ctaBox}
        >
          <span className={styles.tag}>Get in Touch</span>

          <h2 className={styles.headline}>
            Let&apos;s build something meaningful together.
          </h2>

          <p className={styles.subheadline}>
            Open for product management roles, product analysis opportunities,
            consulting engagements, and strategic collaborations.
          </p>

          <div className={styles.buttonsRow}>
            {/* WhatsApp CTA */}
            <a
              href={profileData.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              <MessageSquare size={18} />
              <span>WhatsApp Chat</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Email CTA */}
            <a
              href={`mailto:${profileData.contacts.email}`}
              className={styles.outlineBtn}
            >
              <Mail size={18} />
              <span>Send an Email</span>
            </a>

            {/* LinkedIn CTA */}
            <a
              href={profileData.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.outlineBtn}
            >
              <Linkedin size={18} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
