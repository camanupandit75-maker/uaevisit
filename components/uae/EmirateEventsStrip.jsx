import Link from 'next/link';
import { getEventsForEmirate } from '@/data/events';
import EventCard from './EventCard';
import styles from './EmirateEventsStrip.module.css';

export default function EmirateEventsStrip({ emirateKey, emirateName }) {
  const emirateEvents = getEventsForEmirate(emirateKey);

  if (!emirateEvents.length) return null;

  return (
    <section className={styles.strip} aria-labelledby={`events-strip-${emirateKey}`}>
      <div className={styles.stripHeader}>
        <span className={styles.tickRule} aria-hidden="true" />
        <h3 id={`events-strip-${emirateKey}`} className={styles.stripTitle}>
          Events in {emirateName}
        </h3>
        <Link href="/events" className={styles.viewAll}>
          View all →
        </Link>
      </div>

      <div className={styles.stripScroll}>
        {emirateEvents.map((event) => (
          <div key={event.id} className={styles.stripItem}>
            <EventCard event={event} compact />
            <a
              href={event.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.stripOfficial}
            >
              Official site →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
