import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components/InputField";
import { NuqleiLogo } from "../../components/NuqleiLogo";
import styles from "./SignIn.module.css";

const HERO_BG = "https://www.figma.com/api/mcp/asset/eacc74ef-4c2b-4fdf-a217-25439911f5ad";

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  }

  return (
    <div className={styles.page}>
      {/* ── Left: dark hero ── */}
      <div className={styles.hero}>
        <img src={HERO_BG} alt="" className={styles.heroBg} aria-hidden="true" />

        <div className={styles.heroContent}>
          {/* Logo */}
          <Link to="/" className={styles.heroLogo}>
            <NuqleiLogo size="md" variant="white" />
          </Link>

          {/* Copy + CTA */}
          <div className={styles.heroCopy}>
            <div className={styles.heroTextBlock}>
              <h1 className={styles.heroTitle}>Start selling</h1>
              <p className={styles.heroSubtitle}>
                Buyer accounts require approval. You'll typically receive an email within 24–48 hrs once your application is reviewed.
              </p>
            </div>
            <div>
              <Link to="/register" className={styles.heroCta}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: white floating card ── */}
      <div className={styles.formSide}>
        <div className={styles.card}>
          {/* Small logo mark inside card */}
          <NuqleiLogo size="xs" variant="default" symbolOnly />

          {/* Title */}
          <div className={styles.titleBlock}>
            <p className={styles.welcomeLabel}>Welcome</p>
            <h2 className={styles.pageTitle}>Sign in</h2>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {error && <div className={styles.errorBanner}>{error}</div>}

            <div className={styles.fieldGroup}>
              <InputField
                label="Email"
                type="email"
                placeholder="joe@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                helperText="Please use a company email. No @gmail.com"
              />
            </div>

            <div className={styles.fieldGroup}>
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          {/* Footer link */}
          <div className={styles.footerRow}>
            <span className={styles.footerText}>Dont have an account?</span>
            <Link to="/register" className={styles.footerLink}>Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
