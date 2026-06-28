import Link from 'next/link';
import styles from './InlineDisclaimer.module.css';

export default function InlineDisclaimer({ children, href = '/legal' }) {
  return (
    <p className={styles.disclaimer}>
      {children}{' '}
      <Link href={href} className={styles.link}>
        Full disclaimer →
      </Link>
    </p>
  );
}
