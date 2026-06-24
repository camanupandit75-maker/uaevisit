'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { emirates } from '@/data/uae/emirates';
import ArabesqueDivider from './icons/ArabesqueDivider';
import EmirateCard from './EmirateCard';
import styles from './EmirateExplorer.module.css';

export default function EmirateExplorer({
  activeKey,
  scrollRequestKey,
  onActiveChange,
  onEmirateOpen,
}) {
  const [internalKey, setInternalKey] = useState(emirates[0].key);
  const cardRefs = useRef({});

  const currentKey = activeKey ?? internalKey;
  const activeEmirate =
    emirates.find((e) => e.key === currentKey) ?? emirates[0];
  const activeIndex = emirates.findIndex((e) => e.key === currentKey);

  const setActive = useCallback(
    (key) => {
      if (activeKey === undefined) {
        setInternalKey(key);
      }
      onActiveChange?.(key);
    },
    [activeKey, onActiveChange],
  );

  const scrollToCard = useCallback((key) => {
    const el = cardRefs.current[key];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, []);

  useEffect(() => {
    if (scrollRequestKey) {
      scrollToCard(scrollRequestKey);
    }
  }, [scrollRequestKey, scrollToCard]);

  const goPrev = useCallback(() => {
    const prev = activeIndex <= 0 ? emirates.length - 1 : activeIndex - 1;
    const key = emirates[prev].key;
    setActive(key);
    scrollToCard(key);
  }, [activeIndex, setActive, scrollToCard]);

  const goNext = useCallback(() => {
    const next = activeIndex >= emirates.length - 1 ? 0 : activeIndex + 1;
    const key = emirates[next].key;
    setActive(key);
    scrollToCard(key);
  }, [activeIndex, setActive, scrollToCard]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  const handleCardNav = (key) => {
    setActive(key);
    scrollToCard(key);
  };

  return (
    <section className={styles.explorer} aria-labelledby="explorer-heading">
      <div className={styles.headerBlock}>
        <p className={styles.eyebrow}>
          {activeEmirate.index} OF 07 · {activeEmirate.name.toUpperCase()}
        </p>
        <h2 id="explorer-heading" className={styles.sectionTitle}>
          Explore the Emirates
        </h2>
        <ArabesqueDivider className={styles.divider} />
        <p className={styles.sectionSub}>
          Select an emirate to open its travel dashboard — culture, stays, and
          curated video guides.
        </p>
      </div>

      <div className={styles.colonnadeWrap}>
        <div className={styles.colonnade}>
          {emirates.map((emirate, i) => (
            <EmirateCard
              key={emirate.key}
              emirate={emirate}
              isActive={emirate.key === currentKey}
              enterDelay={i * 0.08}
              cardRef={(el) => {
                cardRefs.current[emirate.key] = el;
              }}
              onClick={() => onEmirateOpen?.(emirate.key)}
            />
          ))}
        </div>
      </div>

      <div className={styles.carousel}>
        <button
          type="button"
          className={styles.arrowBtn}
          aria-label="Previous emirate"
          onClick={goPrev}
        >
          ←
        </button>

        <ul className={styles.dots} aria-label="Emirate carousel">
          {emirates.map((emirate) => (
            <li key={emirate.key}>
              <button
                type="button"
                className={`${styles.dot} ${
                  emirate.key === currentKey ? styles.dotActive : ''
                }`}
                aria-label={`Go to ${emirate.name}`}
                aria-current={emirate.key === currentKey ? 'true' : undefined}
                onClick={() => handleCardNav(emirate.key)}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.arrowBtn}
          aria-label="Next emirate"
          onClick={goNext}
        >
          →
        </button>
      </div>
    </section>
  );
}
