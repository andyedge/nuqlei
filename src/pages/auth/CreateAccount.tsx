import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components/InputField";
import { NuqleiLogo } from "../../components/NuqleiLogo";
import styles from "./CreateAccount.module.css";

const HERO_BG = "https://www.figma.com/api/mcp/asset/541f8515-702d-4085-b807-e8eee9261fe2";

const ROLES = [
  { value: "buyer",    label: "Buyer" },
  { value: "seller",   label: "Seller" },
  { value: "both",     label: "Both Buyer & Seller" },
];

export function CreateAccount() {
  const navigate = useNavigate();
  const [isBuyer, setIsBuyer]   = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [email, setEmail]       = useState("");
  const [role, setRole]         = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!isBuyer && !isSeller) { setError("Please select at least one role."); return; }
    if (!email.trim())          { setError("Please enter your email address."); return; }
    if (!role)                  { setError("Please select your role."); return; }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/onboarding/name");
    }, 1000);
  }

  return (
    <div className={styles.page}>
      {/* ── Left: dark hero ── */}
      <div className={styles.hero}>
        <img src={HERO_BG} alt="" className={styles.heroBg} aria-hidden="true" />

        <div className={styles.heroContent}>
          <Link to="/" className={styles.heroLogo}>
            <NuqleiLogo size="md" variant="white" />
          </Link>

          <div className={styles.heroCopy}>
            <div className={styles.heroTextBlock}>
              <h1 className={styles.heroTitle}>
                Apply to start<br />
                creating Projects for<br />
                sourcing or selling
              </h1>
              <p className={styles.heroSubtitle}>
                Buyer accounts require approval. You'll typically receive an email within 24–48 hrs once your application is reviewed.
              </p>
            </div>
            <div>
              <Link to="/" className={styles.heroCta}>Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: white form panel ── */}
      <div className={styles.formSide}>
        <div className={styles.formInner}>
          {/* Small logo mark */}
          <NuqleiLogo size="xs" variant="default" symbolOnly />

          {/* Title */}
          <div className={styles.titleBlock}>
            <h2 className={styles.pageTitle}>Join</h2>
            <p className={styles.pageSubtitle}>The Nuqlei Network</p>
          </div>

          {/* Buyer / Seller checkboxes */}
          <div className={styles.checkboxRow}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isBuyer}
                onChange={(e) => setIsBuyer(e.target.checked)}
              />
              I am a Buyer
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isSeller}
                onChange={(e) => setIsSeller(e.target.checked)}
              />
              I am a Seller
            </label>
          </div>

          {/* Fields */}
          <form onSubmit={handleSubmit} noValidate>
            {error && <div className={styles.errorBanner} style={{ marginBottom: 16 }}>{error}</div>}

            <div className={styles.fields}>
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

              {/* Role dropdown — pill-shaped, matches Figma */}
              <div>
                <label htmlFor="role-select" className={styles.selectLabel}>Your Role</label>
                <div className={styles.selectWrap}>
                  <select
                    id="role-select"
                    className={styles.select}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="" disabled>Select your role</option>
                    {ROLES.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                  <span className={styles.selectChevron}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.actions} style={{ marginTop: 24 }}>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? "Applying…" : "Apply"}
              </button>

              <div className={styles.footerRow}>
                <span className={styles.footerText}>Already have an account?</span>
                <Link to="/sign-in" className={styles.footerLink}>Sign In</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
