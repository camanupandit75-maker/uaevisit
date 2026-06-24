import GeometricPattern from './icons/GeometricPattern';
import SkylineSvg from './icons/SkylineSvg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <GeometricPattern className={`${styles.pattern} star-field`} />

      <div className={styles.inner}>
        <p className={styles.arabicAccent} lang="ar" dir="rtl">
          الإمارات
        </p>

        <h1 className={`${styles.headline} hero-title-shimmer`}>
          United Arab Emirates
        </h1>

        <p className={styles.subtitle}>
          Seven emirates — from desert and oasis to the modern Gulf coast.
        </p>
      </div>

      <div className={styles.skylineWrap}>
        <SkylineSvg className={styles.skyline} />
      </div>
    </section>
  );
}
