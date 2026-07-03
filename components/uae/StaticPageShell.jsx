import Link from 'next/link';
import ArabesqueDivider from './icons/ArabesqueDivider';
import GeometricPattern from './icons/GeometricPattern';
import SiteFooter from './SiteFooter';
import styles from './StaticPageShell.module.css';

export default function StaticPageShell({ title, eyebrow, intro, children }) {
  return (
    <div className={styles.shell}>
      <GeometricPattern className={`${styles.pattern} star-field`} />

      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Site navigation">
          <Link href="/" className={styles.brand}>
            <span className={styles.brandStar} aria-hidden="true">
              ★
            </span>
            <span className={styles.brandText}>Discover the Emirates</span>
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.headerBlock}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h1 className={styles.pageTitle}>{title}</h1>
          <ArabesqueDivider className={styles.divider} />
          {intro ? <p className={styles.intro}>{intro}</p> : null}
        </div>

        <div className={styles.content}>{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}
