import Link from 'next/link';
import StarLogo from './icons/StarLogo';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/uae" className={styles.brand}>
          <StarLogo className={styles.brandMark} size={22} />
          <span className={styles.brandText}>Discover the Emirates</span>
        </Link>

        <nav className={styles.links} aria-label="Site links">
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <Link href="/testimonials" className={styles.link}>
            Testimonials
          </Link>
          <Link href="/legal" className={styles.link}>
            Legal
          </Link>
        </nav>

        <p className={styles.note}>
          Seven emirates — curated travel, live data, and AI itineraries.
        </p>

        <p className={styles.legalNote}>
          Discover the Emirates is an independent guide and is not affiliated with
          the UAE Government or Emirates Group.{' '}
          <Link href="/legal" className={styles.legalLink}>
            Full disclaimer →
          </Link>
        </p>
      </div>
    </footer>
  );
}
