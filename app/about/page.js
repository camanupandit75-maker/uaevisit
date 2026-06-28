import StaticPageShell from '@/components/uae/StaticPageShell';
import styles from '@/components/uae/StaticPageShell.module.css';

export const metadata = {
  title: 'About — Discover the Emirates',
  description:
    'Learn about Discover the Emirates — a region-by-region UAE travel platform with curated content and AI itineraries built on live data.',
};

export default function AboutPage() {
  return (
    <StaticPageShell
      eyebrow="Our Story"
      title="About Discover the Emirates"
      intro="Discover the Emirates is a region-by-region travel platform covering all seven emirates — curated hotels, food, activities, and video guides, paired with an AI itinerary generator that builds personalized day-by-day plans from real, live data rather than guesswork."
    >
      <section className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tickRule} aria-hidden="true" />
          <h2 className={styles.sectionTitle}>Why we built this</h2>
        </div>
        <p className={styles.prose}>
          Planning a UAE trip usually means stitching together static tourism sites,
          generic booking platforms, and AI trip planners that invent hotel names and
          prices that don&apos;t exist. We built a structured alternative instead: real
          regional content, paired with an AI layer that retrieves live, verified data
          before it ever makes a recommendation.
        </p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tickRule} aria-hidden="true" />
          <h2 className={styles.sectionTitle}>Who&apos;s behind it</h2>
        </div>
        <p className={styles.prose}>
          Discover the Emirates is built and run by Manu Pandit, an AI generalist and
          chartered accountant. The platform is currently a solo build — every
          emirate&apos;s content, the design system, and the AI itinerary engine were
          designed and shipped by one person, with a growing team planned as the
          platform scales.
        </p>
      </section>

      <section className={styles.contentSection}>
        <p className={styles.prose}>
          We&apos;re based in, and built for, the Emirates — with Abu Dhabi as our home
          market.
        </p>
      </section>
    </StaticPageShell>
  );
}
