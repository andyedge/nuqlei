import { useState } from "react";
import styles from "./BannerHeader.module.css";

export interface BannerHeaderProps {
  /** Pill badge label (e.g. "New") */
  badge?: string;
  /** Announcement message text */
  message?: string;
  /** Whether the banner can be dismissed by the user */
  dismissible?: boolean;
  /** Called when the user dismisses the banner */
  onDismiss?: () => void;
}

export function BannerHeader({
  badge = "New",
  message = "Frontend Pages Added",
  dismissible = false,
  onDismiss,
}: BannerHeaderProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  function handleDismiss() {
    setDismissed(true);
    onDismiss?.();
  }

  return (
    <div className={styles.banner} role="banner" aria-label="Announcement">
      <div className={styles.inner}>
        {badge && <span className={styles.badge}>{badge}</span>}
        <span className={styles.message}>{message}</span>
      </div>

      {dismissible && (
        <button
          className={styles.dismiss}
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
