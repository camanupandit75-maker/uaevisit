'use client';

import Link from 'next/link';
import { emirates } from '@/data/uae/emirates';
import styles from './Header.module.css';

export default function Header({ activeKey, onEmirateClick }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Site navigation">
        <a href="#top" className={styles.brand}>
          <span className={styles.brandStar} aria-hidden="true">
            ★
          </span>
          <span className={styles.brandText}>Discover the Emirates</span>
        </a>

        <div className={styles.navLinks}>
          <Link href="/essentials" className={styles.siteLink}>
            Essentials
          </Link>
          <Link href="/visa" className={styles.siteLink}>
            Visa Info
          </Link>
          <Link href="/events" className={styles.siteLink}>
            Events
          </Link>

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
        </div>
      </nav>
    </header>
  );
}
