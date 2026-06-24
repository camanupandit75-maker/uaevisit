'use client';

import { emirates } from '@/data/uae/emirates';
import StarLogo from './icons/StarLogo';
import styles from './Header.module.css';

export default function Header({ activeKey, onEmirateClick }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Site navigation">
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark}>
            <StarLogo size={22} />
          </span>
          <span className={styles.brandText}>Discover the Emirates.</span>
        </a>

        <ul className={styles.emirateLinks}>
          {emirates.map((emirate) => (
            <li key={emirate.key}>
              <button
                type="button"
                className={`${styles.emirateLink} ${
                  activeKey === emirate.key ? styles.emirateLinkActive : ''
                }`}
                onClick={() => onEmirateClick?.(emirate.key)}
              >
                {emirate.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
