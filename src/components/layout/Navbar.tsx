"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/common/ThemeToggle";
import { profileData } from "@/data/profile";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#committees", label: "Committees" },
  { href: "#projects", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#education", label: "Education & Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand */}
        <a href="#" className={styles.brand} aria-label="Shelfina Khayla Anindita">
          <span className={styles.brandBadge}>S</span>
          <span>{profileData.nickname}.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Theme Toggle & Get in Touch */}
        <div className={styles.actions}>
          <ThemeToggle />
          <a
            href={profileData.contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.drawerOverlay}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className={styles.drawer}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <button
                type="button"
                className={styles.drawerClose}
                onClick={closeMenu}
                aria-label="Close mobile navigation menu"
              >
                <X size={20} />
              </button>

              <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {navLinks.map((link) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`${styles.drawerLink} ${isActive ? styles.active : ""}`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                <a
                  href={profileData.contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaBtn}
                  style={{ display: "inline-flex", width: "100%", justifyContent: "center" }}
                  onClick={closeMenu}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
