import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: "480px",
          width: "100%",
          padding: "3.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        <span
          className="gradient-text"
          style={{
            fontSize: "5rem",
            fontWeight: 800,
            lineHeight: 1,
            fontFamily: "var(--font-heading)",
          }}
        >
          404
        </span>

        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "0.9375rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get
          you back to Shelfina&apos;s portfolio.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            background: "var(--gradient-signature)",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "0.9375rem",
            borderRadius: "var(--radius-full)",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          <Home size={18} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
