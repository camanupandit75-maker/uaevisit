import EmirateIcon from './icons/EmirateIcon';
import styles from './EmirateCard.module.css';

const TINT_COLORS = {
  gold: { inner: '#c9a227', glow: '#e8d6a8', deep: '#0e1b2a' },
  oasis: { inner: '#1f5c4d', glow: '#3d8a72', deep: '#0e1b2a' },
  sand: { inner: '#e8d6a8', glow: '#c9a227', deep: '#16263a' },
};

// Ogee / pointed arch — distinct from India's cusped temple niche
const ARCH_OUTER =
  'M 6 158 L 6 78 C 6 48 38 18 100 8 C 162 18 194 48 194 78 L 194 158 Z';
const ARCH_INNER =
  'M 18 154 L 18 80 C 18 54 46 28 100 20 C 154 28 182 54 182 80 L 182 154 Z';

export default function EmirateCard({
  emirate,
  isActive,
  onClick,
  cardRef,
  enterDelay = 0,
}) {
  const colors = TINT_COLORS[emirate.tint] ?? TINT_COLORS.gold;
  const gradId = `ogee-${emirate.key}`;

  return (
    <button
      type="button"
      ref={cardRef}
      className={`${styles.card} emirate-card card-enter${
        isActive ? ' emirate-card-active' : ''
      }`}
      style={{ '--card-enter-delay': `${enterDelay}s` }}
      onClick={onClick}
      aria-current={isActive ? 'true' : undefined}
    >
      <div className={styles.archBox}>
        {emirate.nameAr && (
          <span className={styles.watermark} lang="ar" dir="rtl" aria-hidden="true">
            {emirate.nameAr}
          </span>
        )}

        <svg
          className={styles.archSvg}
          viewBox="0 0 200 164"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id={gradId} cx="50%" cy="100%" r="46%" fx="50%" fy="100%">
              <stop offset="0%" stopColor={colors.inner} stopOpacity="0.92" />
              <stop offset="20%" stopColor={colors.glow} stopOpacity="0.78" />
              <stop offset="38%" stopColor={colors.inner} stopOpacity="0.42" />
              <stop offset="52%" stopColor={colors.deep} stopOpacity="1" />
              <stop offset="100%" stopColor={colors.deep} stopOpacity="1" />
            </radialGradient>
          </defs>
          <path className={styles.archOuter} d={ARCH_OUTER} />
          <path
            className={`${styles.archInner} arch-glow`}
            d={ARCH_INNER}
            fill={`url(#${gradId})`}
          />
          <EmirateIcon variant={emirate.key} className={styles.emirateIcon} />
          <text className={styles.numeral} x="100" y="78" textAnchor="middle">
            {emirate.index}
          </text>
        </svg>
      </div>

      <div className={styles.textBlock}>
        <h3 className={styles.name}>{emirate.name}</h3>
        {emirate.nameAr && (
          <p className={styles.nameAr} lang="ar" dir="rtl">
            {emirate.nameAr}
          </p>
        )}
        <hr className={styles.divider} />
        <p className={styles.blurb}>{emirate.blurb}</p>
        <span className={styles.enterLabel}>Explore →</span>
      </div>
    </button>
  );
}
