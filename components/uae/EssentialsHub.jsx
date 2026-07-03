'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import {
  essentialsSections,
  getWeatherRatingLabel,
  weatherByMonth,
} from '@/data/essentials';
import ArabesqueDivider from './icons/ArabesqueDivider';
import GeometricPattern from './icons/GeometricPattern';
import SiteFooter from './SiteFooter';
import styles from './EssentialsHub.module.css';

const ARCH_OUTER =
  'M 6 158 L 6 78 C 6 48 38 18 100 8 C 162 18 194 48 194 78 L 194 158 Z';

function AccordionArch({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 164"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <path className={styles.archOuter} d={ARCH_OUTER} />
      <path className={styles.archInner} d="M 18 154 L 18 80 C 18 54 46 28 100 20 C 154 28 182 54 182 80 L 182 154 Z" />
    </svg>
  );
}

function WeatherGrid() {
  return (
    <div className={styles.weatherGrid}>
      {weatherByMonth.map((entry) => (
        <article
          key={entry.month}
          className={`${styles.weatherCard} ${styles[`weather${entry.rating.charAt(0).toUpperCase()}${entry.rating.slice(1)}`]}`}
        >
          <div className={styles.weatherCardHeader}>
            <span className={styles.weatherMonth}>{entry.month}</span>
            <span className={styles.weatherRating}>
              {getWeatherRatingLabel(entry.rating)}
            </span>
          </div>
          <p className={styles.weatherTemp}>{entry.tempRange}</p>
          <p className={styles.weatherHumidity}>{entry.humidity}</p>
          <p className={styles.weatherVerdict}>{entry.verdict}</p>
        </article>
      ))}
    </div>
  );
}

function EssentialsAccordion({ section, isOpen, onToggle }) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <section className={styles.accordion}>
      <h2 className={styles.accordionHeading}>
        <button
          type="button"
          id={buttonId}
          className={styles.accordionTrigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <AccordionArch className={styles.accordionArch} />
          <span className={styles.accordionTitle}>{section.title}</span>
          <span className={styles.accordionIcon} aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h2>

      {isOpen ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className={styles.accordionPanel}
        >
          {section.intro ? (
            <p className={styles.sectionIntro}>{section.intro}</p>
          ) : null}

          {section.type === 'weather' ? (
            <WeatherGrid />
          ) : (
            <ul className={styles.itemList}>
              {section.items?.map((item, index) => (
                <li key={item.heading ?? index} className={styles.item}>
                  {item.heading ? (
                    <h3 className={styles.itemHeading}>{item.heading}</h3>
                  ) : null}
                  <p className={styles.itemBody}>{item.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </section>
  );
}

export default function EssentialsHub() {
  const [openId, setOpenId] = useState(essentialsSections[0]?.id ?? null);

  const toggleSection = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

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
          <div className={styles.navSiteLinks}>
            <Link href="/essentials" className={styles.navActiveLink}>
              Essentials
            </Link>
            <Link href="/events" className={styles.navSiteLink}>
              Events
            </Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.headerBlock}>
          <p className={styles.eyebrow}>Practical Guides</p>
          <h1 className={styles.pageTitle}>Travel Essentials</h1>
          <ArabesqueDivider className={styles.divider} />
          <p className={styles.intro}>
            Weather, dress codes, transport, and everyday norms — the practical
            details that make a UAE trip smoother before you land.
          </p>
        </div>

        <div className={styles.accordions}>
          {essentialsSections.map((section) => (
            <EssentialsAccordion
              key={section.id}
              section={section}
              isOpen={openId === section.id}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
