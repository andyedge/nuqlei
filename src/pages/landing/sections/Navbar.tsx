import styles from "./Navbar.module.css";
import { NuqleiLogo } from "../../../components/NuqleiLogo";

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>
          <NuqleiLogo size="sm" variant="default" />
        </div>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <button className={styles.navItem}>About Nuqlei</button>
          <button className={styles.navItem}>Features</button>
          <button className={styles.navItem}>
            Solutions
            <span className={styles.badge}>New</span>
          </button>
          <button className={styles.navItem}>
            Team
            <ChevronDownIcon />
          </button>
          <button className={styles.navItem}>
            Reviews
            <ChevronDownIcon />
          </button>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.btnPrimary}>Create Project</button>
          <button className={styles.btnOutline}>Sign in</button>
        </div>
      </div>
    </nav>
  );
}
