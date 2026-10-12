"use client";

import React from "react";
import styles from "./GlassCard.module.css";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glowBorder?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  hoverable = true,
  glowBorder = true,
  onClick,
}: GlassCardProps) {
  const combinedClasses = [
    styles.card,
    hoverable ? styles.hoverable : "",
    glowBorder ? styles.glowBorder : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
}
