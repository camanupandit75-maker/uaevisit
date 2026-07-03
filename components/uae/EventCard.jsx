import Link from 'next/link';
import {
  getCategoryLabel,
  getEmirateLabel,
} from '@/data/events';
import styles from './EventCard.module.css';

const ARCH_INK = '#0e1b2a';
const ARCH_OUTER =
  'M 6 158 L 6 78 C 6 48 38 18 100 8 C 162 18 194 48 194 78 L 194 158 Z';
const ARCH_INNER =
  'M 18 154 L 18 80 C 18 54 46 28 100 20 C 154 28 182 54 182 80 L 182 154 Z';

export default function EventCard({ event, compact = false }) {
  const gradId = `event-ogee-${event.id}`;

  return (
    <article
      className={`${styles.card} ${compact ? styles.cardCompact : ''}`}
    >
      <div className={styles.archBox}>
        <svg
          className={styles.archSvg}
          viewBox="0 0 200 164"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id={gradId} cx="50%" cy="100%" r="46%" fx="50%" fy="100%">
              <stop offset="0%" stopColor="#c9a227" stopOpacity="0.92" />
              <stop offset="20%" stopColor="#e8d6a8" stopOpacity="0.78" />
              <stop offset="38%" stopColor="#c9a227" stopOpacity="0.42" />
              <stop offset="52%" stopColor="#c9a227" stopOpacity="0" />
              <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path className={styles.archOuter} d={ARCH_OUTER} />
          <path className={styles.archInner} d={ARCH_INNER} fill={ARCH_INK} />
          <path
            className={styles.archGlow}
            d={ARCH_INNER}
            fill={`url(#${gradId})`}
          />
          <text className={styles.categoryMark} x="100" y="78" textAnchor="middle">
            {getCategoryLabel(event.category).charAt(0)}
          </text>
        </svg>
      </div>

      <div className={styles.textBlock}>
        <p className={styles.meta}>
          <span className={styles.category}>{getCategoryLabel(event.category)}</span>
          <span className={styles.metaSep} aria-hidden="true">
            ·
          </span>
          <span>{getEmirateLabel(event.emirate)}</span>
        </p>
        <h3 className={styles.name}>{event.name}</h3>
        <div className={styles.badges}>
          {event.dateVaries ? (
            <span className={styles.dateVariesBadge}>Dates vary yearly</span>
          ) : (
            event.months.map((month) => (
              <span key={month} className={styles.monthBadge}>
                {month}
              </span>
            ))
          )}
        </div>
        {!compact ? <p className={styles.blurb}>{event.blurb}</p> : null}
        {!compact ? (
          <a
            href={event.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.officialLink}
          >
            Official site →
          </a>
        ) : null}
      </div>
    </article>
  );
}
