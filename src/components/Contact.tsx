"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, Instagram, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "shelfinakhayla_@student.ub.ac.id",
    href: "mailto:shelfinakhayla_@student.ub.ac.id",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shelfina-khayla-anindita",
    href: "https://linkedin.com/in/shelfina-khayla-anindita",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@shelfinakhayla_",
    href: "https://instagram.com/shelfinakhayla_",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+6281336171455",
    href: "tel:+6281336171455",
  },
];

export default function Contact() {
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
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <span className="text-brand text-sm font-medium tracking-[0.2em] uppercase">
            05 — Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            Get In Touch
          </h2>
          <p className="text-muted-text mt-4 text-base leading-relaxed">
            Let&apos;s collaborate on products, competitions, or organizational initiatives.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {contactLinks.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label !== "Email" && contact.label !== "Phone" ? "_blank" : undefined}
              rel={contact.label !== "Email" && contact.label !== "Phone" ? "noopener noreferrer" : undefined}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
              }}
              whileHover={{ y: -2 }}
              className="flex items-center gap-4 bg-surface border border-border rounded-xl p-5 hover:border-brand/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-brand/10 transition-all duration-300">
                <contact.icon
                  size={20}
                  className="text-muted-text group-hover:text-brand transition-colors duration-300"
                />
              </div>
              <div className="text-left">
                <p className="text-muted-text text-xs font-medium uppercase tracking-wider">
                  {contact.label}
                </p>
                <p className="text-white text-sm font-medium group-hover:text-brand transition-colors">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
