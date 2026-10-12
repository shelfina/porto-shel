import { profileData } from "@/data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copyright}>
          © 2026 {profileData.name}. All rights reserved.
        </p>
        <p className={styles.techLine}>
          Built with Next.js, TypeScript, JavaScript, and CSS.
        </p>
      </div>
    </footer>
  );
}
