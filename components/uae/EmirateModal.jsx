'use client';

import { useEffect, useState } from 'react';
import { emirateDetails } from '@/data/uae/emirateDetails';
import { emirates } from '@/data/uae/emirates';
import StarLogo from './icons/StarLogo';
import styles from './EmirateModal.module.css';

const STAY_CATEGORIES = [
  { key: 'fiveStar', label: '★★★★★' },
  { key: 'fourStar', label: '★★★★' },
  { key: 'threeStar', label: '★★★' },
  { key: 'homestay', label: 'Homestay Pick' },
];

function hasStays(stays) {
  if (!stays || typeof stays !== 'object') return false;
  return STAY_CATEGORIES.some(({ key }) => stays[key]);
}

function formatPrice(amount, currency) {
  if (currency === 'AED') {
    return `AED ${amount.toLocaleString('en-AE')}/night`;
  }
  return `${amount.toLocaleString('en-AE')}/night`;
}

function SectionHeader({ title }) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.tickRule} aria-hidden="true" />
      <h3 className={styles.sectionTitle}>{title}</h3>
    </div>
  );
}

function DetailGrid({ rows }) {
  return (
    <div className={styles.grid}>
      {rows.map(({ label, value }) => (
        <div key={label} className={styles.dataCard}>
          <strong>{label}</strong>
          {value}
        </div>
      ))}
    </div>
  );
}

function OverviewView({ details }) {
  return (
    <>
      <p className={styles.intro}>{details.intro}</p>
      <section className={styles.section}>
        <SectionHeader title="Key Facts" />
        <DetailGrid rows={details.overview} />
      </section>
    </>
  );
}

function StayStatRow({ pick }) {
  const hasReviews = pick.score != null && pick.reviews > 0;

  return (
    <p className={styles.stayStats}>
      {hasReviews ? (
        <>
          <span className={styles.stayScore}>{pick.score}</span>
          <span className={styles.stayMeta}>
            ({pick.reviews.toLocaleString('en-AE')} reviews)
          </span>
        </>
      ) : (
        <span className={styles.stayNewListing}>New listing</span>
      )}
      <span className={styles.stayMeta}>
        {' '}
        · {formatPrice(pick.pricePerNight, pick.currency)}
      </span>
    </p>
  );
}

function StaysView({ stays }) {
  if (!hasStays(stays)) {
    return (
      <div className={styles.comingSoon}>
        <p>Hotel picks for this emirate are coming soon.</p>
      </div>
    );
  }

  return (
    <div className={styles.staysGrid}>
      {STAY_CATEGORIES.map(({ key, label }) => {
        const pick = stays[key];
        if (!pick) return null;
        return (
          <article key={key} className={styles.stayCard}>
            <p className={styles.stayCategory}>{label}</p>
            <h3 className={styles.stayName}>{pick.name}</h3>
            <StayStatRow pick={pick} />
          </article>
        );
      })}
    </div>
  );
}

function YouTubeVideosView({ videos }) {
  if (!videos || videos.length === 0) {
    return (
      <div className={styles.comingSoon}>
        <p>Video picks for this emirate are coming soon.</p>
      </div>
    );
  }

  return (
    <div className={styles.youtubeVideos}>
      {videos.map((group) => (
        <section key={group.theme} className={styles.youtubeSection}>
          <h3 className={styles.youtubeTheme}>{group.theme}</h3>
          <p className={styles.youtubeBlurb}>{group.blurb}</p>
          <ul className={styles.youtubeList}>
            {group.videos.map((video) => (
              <li key={video.url} className={styles.youtubeRow}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.youtubeLink}
                >
                  {video.title}
                </a>
                {video.type === 'search' && (
                  <span className={styles.youtubeSearchTag}>YouTube search</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function WhatToEatView({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className={styles.comingSoon}>
        <p>Food picks for this emirate are coming soon.</p>
      </div>
    );
  }

  return (
    <div className={styles.eatGrid}>
      {items.map((item) => (
        <article key={item.dish} className={styles.eatCard}>
          <h3 className={styles.eatDish}>{item.dish}</h3>
          <p className={styles.eatDescription}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function WhatToDoView({ categories }) {
  if (!categories || categories.length === 0) {
    return (
      <div className={styles.comingSoon}>
        <p>Activity picks for this emirate are coming soon.</p>
      </div>
    );
  }

  return (
    <div className={styles.doSections}>
      {categories.map((group) => (
        <section key={group.category} className={styles.doSection}>
          <h3 className={styles.doCategory}>{group.category}</h3>
          <ul className={styles.doList}>
            {group.activities.map((activity) => (
              <li key={activity.name} className={styles.doRow}>
                <strong className={styles.doName}>{activity.name}</strong>
                <span className={styles.doDescription}>{activity.description}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default function EmirateModal({ emirateKey, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  const emirate = emirates.find((e) => e.key === emirateKey);
  const details = emirateDetails[emirateKey];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!emirate || !details) return null;

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="emirate-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close dashboard"
        >
          ×
        </button>

        <header className={styles.header}>
          <span className={styles.glyph}>
            <StarLogo size={24} />
          </span>
          <div className={styles.titleBlock}>
            <h2 id="emirate-modal-title" className={styles.emirateTitle}>
              {emirate.name}
            </h2>
            {emirate.nameAr && (
              <p className={styles.titleAr} lang="ar" dir="rtl">
                {emirate.nameAr}
              </p>
            )}
            <p className={styles.subtitle}>Emirate Overview</p>
          </div>
        </header>

        <div
          className={styles.tabBar}
          role="tablist"
          aria-label="Emirate information tabs"
        >
          <button
            type="button"
            role="tab"
            id="tab-overview"
            aria-selected={activeTab === 'overview'}
            aria-controls="panel-overview"
            className={`${styles.tab} ${
              activeTab === 'overview' ? styles.tabActive : ''
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            type="button"
            role="tab"
            id="tab-stays"
            aria-selected={activeTab === 'stays'}
            aria-controls="panel-stays"
            className={`${styles.tab} ${
              activeTab === 'stays' ? styles.tabActive : ''
            }`}
            onClick={() => setActiveTab('stays')}
          >
            Where to Stay
          </button>
          <button
            type="button"
            role="tab"
            id="tab-youtube"
            aria-selected={activeTab === 'youtube'}
            aria-controls="panel-youtube"
            className={`${styles.tab} ${
              activeTab === 'youtube' ? styles.tabActive : ''
            }`}
            onClick={() => setActiveTab('youtube')}
          >
            YouTube Videos
          </button>
          <button
            type="button"
            role="tab"
            id="tab-eat"
            aria-selected={activeTab === 'eat'}
            aria-controls="panel-eat"
            className={`${styles.tab} ${
              activeTab === 'eat' ? styles.tabActive : ''
            }`}
            onClick={() => setActiveTab('eat')}
          >
            What to Eat
          </button>
          <button
            type="button"
            role="tab"
            id="tab-do"
            aria-selected={activeTab === 'do'}
            aria-controls="panel-do"
            className={`${styles.tab} ${
              activeTab === 'do' ? styles.tabActive : ''
            }`}
            onClick={() => setActiveTab('do')}
          >
            What to Do
          </button>
        </div>

        <div className={styles.body}>
          {activeTab === 'overview' && (
            <div
              id="panel-overview"
              role="tabpanel"
              aria-labelledby="tab-overview"
            >
              <OverviewView details={details} />
            </div>
          )}
          {activeTab === 'stays' && (
            <div id="panel-stays" role="tabpanel" aria-labelledby="tab-stays">
              <StaysView stays={details.stays} />
            </div>
          )}
          {activeTab === 'youtube' && (
            <div
              id="panel-youtube"
              role="tabpanel"
              aria-labelledby="tab-youtube"
            >
              <YouTubeVideosView videos={details.youtubeVideos} />
            </div>
          )}
          {activeTab === 'eat' && (
            <div id="panel-eat" role="tabpanel" aria-labelledby="tab-eat">
              <WhatToEatView items={details.whatToEat} />
            </div>
          )}
          {activeTab === 'do' && (
            <div id="panel-do" role="tabpanel" aria-labelledby="tab-do">
              <WhatToDoView categories={details.whatToDo} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
