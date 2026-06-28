import StaticPageShell from '@/components/uae/StaticPageShell';
import styles from '@/components/uae/StaticPageShell.module.css';

const TRUST_POINTS = [
  'Every hotel listing is sourced from live availability data, not static guesses.',
  'Every emirate is fully built — hotels, food, activities, and video guides — not a thin overview.',
  'Itineraries are generated from real, verified regional content, with live hotel data behind every recommendation.',
];

export const metadata = {
  title: 'Testimonials — Discover the Emirates',
  description:
    'What travelers are saying about Discover the Emirates — reviews coming soon.',
};

export default function TestimonialsPage() {
  return (
    <StaticPageShell title="What Travelers Are Saying">
      <section className={styles.comingSoon} aria-label="Reviews coming soon">
        <p>
          We&apos;re newly launched and collecting our first reviews. Check back soon.
        </p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tickRule} aria-hidden="true" />
          <h2 className={styles.sectionTitle}>Why Travelers Trust This Platform</h2>
        </div>
        <ul className={styles.trustList}>
          {TRUST_POINTS.map((point) => (
            <li key={point} className={styles.trustItem}>
              <span className={styles.trustStar} aria-hidden="true">
                ★
              </span>
              <p className={styles.trustText}>{point}</p>
            </li>
          ))}
        </ul>
      </section>
    </StaticPageShell>
  );
}
