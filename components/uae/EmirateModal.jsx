'use client';

import { useEffect, useMemo, useState } from 'react';
import { emirateDetails } from '@/data/uae/emirateDetails';
import { emirates } from '@/data/uae/emirates';
import StarLogo from './icons/StarLogo';
import styles from './EmirateModal.module.css';

const STAY_CATEGORIES = [
  { key: 'fiveStar', label: '★★★★★' },
  { key: 'fourStar', label: '★★★★' },
  { key: 'threeStar', label: '★★★' },
  { key: 'value', label: 'Value Pick' },
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

function StayOfficialSite({ officialWebsite }) {
  if (officialWebsite) {
    return (
      <a
        href={officialWebsite}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.stayOfficialLink}
      >
        Official Site
      </a>
    );
  }

  if (officialWebsite === null) {
    return (
      <span className={styles.stayNoOfficialSite}>No official site found</span>
    );
  }

  return null;
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
    <>
      <p className={styles.staysDisclaimer}>
        Prices shown are indicative snapshot rates (Jul 2026) and will vary by
        date and availability.
      </p>
      <div className={styles.staysGrid}>
        {STAY_CATEGORIES.map(({ key, label }) => {
          const pick = stays[key];
          if (!pick) return null;
          return (
            <article key={key} className={styles.stayCard}>
              <p className={styles.stayCategory}>{label}</p>
              <h3 className={styles.stayName}>{pick.name}</h3>
              {pick.area ? (
                <p className={styles.stayArea}>{pick.area}</p>
              ) : null}
              <StayStatRow pick={pick} />
              <StayOfficialSite officialWebsite={pick.officialWebsite} />
              {pick.note ? (
                <p className={styles.stayNote}>{pick.note}</p>
              ) : null}
            </article>
          );
        })}
      </div>
    </>
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

function formatDateInputValue(date) {
  return date.toISOString().slice(0, 10);
}

function defaultCheckInDate() {
  const date = new Date();
  date.setDate(date.getDate() + 14);
  return formatDateInputValue(date);
}

function addDaysToDateString(dateStr, days) {
  const date = new Date(`${dateStr}T12:00:00`);
  date.setDate(date.getDate() + days);
  return formatDateInputValue(date);
}

function clampDays(value) {
  return Math.min(14, Math.max(1, value));
}

function deriveInterestTags(whatToDo) {
  if (!whatToDo?.length) return [];
  return whatToDo.map((group) => group.category).filter(Boolean);
}

function ItinerarySchedule({ schedule }) {
  if (!schedule?.length) return null;

  return (
    <>
      {schedule.map((dayPlan) => (
        <section key={dayPlan.day} className={styles.itineraryDay}>
          <h4 className={styles.itineraryDayTitle}>
            Day {dayPlan.day}
            <span className={styles.itineraryDaySep} aria-hidden="true">
              —
            </span>
            {dayPlan.title}
          </h4>
          <ul className={styles.itineraryList}>
            {dayPlan.stops.map((stop) => (
              <li
                key={`${dayPlan.day}-${stop.time}-${stop.activity}`}
                className={styles.itineraryRow}
              >
                <span className={styles.itineraryTime}>{stop.time}</span>
                <div className={styles.itineraryStopBody}>
                  <strong className={styles.itineraryActivity}>{stop.activity}</strong>
                  {stop.note ? (
                    <span className={styles.itineraryNote}>{stop.note}</span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

function StaticItineraryContent({ itinerary }) {
  if (!itinerary?.schedule?.length) {
    return (
      <div className={styles.comingSoon}>
        <p>Suggested itineraries for this emirate are coming soon.</p>
      </div>
    );
  }

  const dayLabel = itinerary.days === 1 ? '1-Day' : `${itinerary.days}-Day`;

  return (
    <div className={styles.itinerarySections}>
      <header className={styles.itineraryHeader}>
        <h3 className={styles.itineraryTitle}>{dayLabel} Suggested Itinerary</h3>
        <p className={styles.itineraryBlurb}>{itinerary.blurb}</p>
      </header>
      <ItinerarySchedule schedule={itinerary.schedule} />
    </div>
  );
}

function ItineraryResultSkeleton() {
  return (
    <div className={styles.itinerarySkeleton} aria-hidden="true">
      <div className={`${styles.skeletonLine} ${styles.skeletonLineWide}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonLineMedium}`} />
      <div className={styles.skeletonDay}>
        <div className={`${styles.skeletonLine} ${styles.skeletonLineShort}`} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
      </div>
      <div className={styles.skeletonDay}>
        <div className={`${styles.skeletonLine} ${styles.skeletonLineShort}`} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
      </div>
    </div>
  );
}

function HotelSuggestionsList({ hotels }) {
  if (!hotels?.length) {
    return (
      <p className={styles.hotelSuggestionsEmpty}>
        No live hotel matches found for these dates — see the Where to Stay tab for
        our standard picks
      </p>
    );
  }

  return (
    <ul className={styles.hotelSuggestionsList}>
      {hotels.map((hotel, index) => {
        const name = hotel.name ?? hotel.hotelName ?? 'Hotel';
        const rating = hotel.rating ?? hotel.score;
        const price = hotel.price ?? hotel.pricePerNight;
        const priceLabel =
          price != null
            ? typeof price === 'number'
              ? `AED ${price.toLocaleString('en-AE')}`
              : String(price)
            : null;
        const link = hotel.link ?? hotel.url ?? hotel.bookingUrl;

        return (
          <li key={`${name}-${index}`} className={styles.hotelSuggestionItem}>
            <div className={styles.hotelSuggestionMain}>
              <strong className={styles.hotelSuggestionName}>{name}</strong>
              <span className={styles.hotelSuggestionMeta}>
                {rating != null ? (
                  <span className={styles.hotelSuggestionRating}>{rating}</span>
                ) : null}
                {rating != null && priceLabel != null ? (
                  <span aria-hidden="true"> · </span>
                ) : null}
                {priceLabel != null ? (
                  <span className={styles.hotelSuggestionPrice}>{priceLabel}</span>
                ) : null}
              </span>
            </div>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.hotelSuggestionLink}
              >
                View
              </a>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function CustomItineraryGenerator({ emirateKey, defaultDays, whatToDo }) {
  const interestOptions = useMemo(
    () => deriveInterestTags(whatToDo),
    [whatToDo],
  );

  const initialDays = clampDays(defaultDays ?? 2);
  const initialCheckIn = defaultCheckInDate();

  const [days, setDays] = useState(initialDays);
  const [interests, setInterests] = useState([]);
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(
    addDaysToDateString(initialCheckIn, initialDays),
  );
  const [adults, setAdults] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleDaysChange = (value) => {
    const nextDays = clampDays(Number(value) || 1);
    setDays(nextDays);
    setCheckOut(addDaysToDateString(checkIn, nextDays));
  };

  const handleCheckInChange = (value) => {
    setCheckIn(value);
    setCheckOut(addDaysToDateString(value, days));
  };

  const toggleInterest = (tag) => {
    setInterests((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag],
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/itinerary/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emirateKey,
          days,
          interests,
          checkIn,
          checkOut,
          adults,
        }),
      });

      if (!response.ok) {
        setError("Couldn't generate your itinerary right now. Please try again.");
        return;
      }

      const data = await response.json();
      setResult(data);
    } catch {
      setError("Couldn't generate your itinerary right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.customItinerarySection}>
      <header className={styles.customItineraryHeader}>
        <h3 className={styles.customItineraryTitle}>Build Your Own Itinerary</h3>
        <p className={styles.customItinerarySubtitle}>
          Tell us your dates and interests — we&apos;ll build a custom day-by-day plan
          with real hotel picks.
        </p>
      </header>

      <form className={styles.itineraryForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor={`days-${emirateKey}`}>
            Days
          </label>
          <div className={styles.daysStepper}>
            <button
              type="button"
              className={styles.stepperBtn}
              onClick={() => handleDaysChange(days - 1)}
              disabled={loading || days <= 1}
              aria-label="Decrease days"
            >
              −
            </button>
            <input
              id={`days-${emirateKey}`}
              type="number"
              className={styles.formInput}
              min={1}
              max={14}
              value={days}
              disabled={loading}
              onChange={(event) => handleDaysChange(event.target.value)}
            />
            <button
              type="button"
              className={styles.stepperBtn}
              onClick={() => handleDaysChange(days + 1)}
              disabled={loading || days >= 14}
              aria-label="Increase days"
            >
              +
            </button>
          </div>
        </div>

        {interestOptions.length > 0 ? (
          <fieldset className={styles.formFieldset}>
            <legend className={styles.formLabel}>Interests</legend>
            <div className={styles.interestTags}>
              {interestOptions.map((tag) => {
                const selected = interests.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    className={`${styles.interestTag} ${
                      selected ? styles.interestTagSelected : ''
                    }`}
                    aria-pressed={selected}
                    disabled={loading}
                    onClick={() => toggleInterest(tag)}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        <div className={styles.formRowGroup}>
          <div className={styles.formRow}>
            <label className={styles.formLabel} htmlFor={`checkin-${emirateKey}`}>
              Check-in
            </label>
            <input
              id={`checkin-${emirateKey}`}
              type="date"
              className={styles.formInput}
              value={checkIn}
              disabled={loading}
              onChange={(event) => handleCheckInChange(event.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <label className={styles.formLabel} htmlFor={`checkout-${emirateKey}`}>
              Check-out
            </label>
            <input
              id={`checkout-${emirateKey}`}
              type="date"
              className={styles.formInput}
              value={checkOut}
              min={checkIn}
              disabled={loading}
              onChange={(event) => setCheckOut(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor={`adults-${emirateKey}`}>
            Adults
          </label>
          <input
            id={`adults-${emirateKey}`}
            type="number"
            className={styles.formInput}
            min={1}
            max={10}
            value={adults}
            disabled={loading}
            onChange={(event) =>
              setAdults(Math.min(10, Math.max(1, Number(event.target.value) || 1)))
            }
          />
        </div>

        {error ? <p className={styles.itineraryError}>{error}</p> : null}

        <button
          type="submit"
          className={styles.generateBtn}
          disabled={loading}
        >
          {loading ? 'Generating…' : 'Generate My Itinerary'}
        </button>
      </form>

      {(loading || result) && (
        <div className={styles.generatedItinerary}>
          {loading ? <ItineraryResultSkeleton /> : null}
          {!loading && result ? (
            <>
              {result.narrative ? (
                <p className={styles.generatedNarrative}>{result.narrative}</p>
              ) : null}
              <ItinerarySchedule schedule={result.schedule} />
              <section className={styles.hotelSuggestionsSection}>
                <h4 className={styles.hotelSuggestionsTitle}>
                  Hotel options for these dates
                </h4>
                <HotelSuggestionsList hotels={result.hotelSuggestions} />
              </section>
            </>
          ) : null}
        </div>
      )}
    </section>
  );
}

function SuggestedItineraryView({ itinerary }) {
  return <StaticItineraryContent itinerary={itinerary} />;
}

function CustomItineraryView({ emirateKey, defaultDays, whatToDo }) {
  return (
    <CustomItineraryGenerator
      key={emirateKey}
      emirateKey={emirateKey}
      defaultDays={defaultDays}
      whatToDo={whatToDo}
    />
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
          <button
            type="button"
            role="tab"
            id="tab-itinerary"
            aria-selected={activeTab === 'itinerary'}
            aria-controls="panel-itinerary"
            className={`${styles.tab} ${
              activeTab === 'itinerary' ? styles.tabActive : ''
            }`}
            onClick={() => setActiveTab('itinerary')}
          >
            Suggested Itinerary
          </button>
          <button
            type="button"
            role="tab"
            id="tab-custom-itinerary"
            aria-selected={activeTab === 'customItinerary'}
            aria-controls="panel-custom-itinerary"
            className={`${styles.tab} ${
              activeTab === 'customItinerary' ? styles.tabActive : ''
            }`}
            onClick={() => setActiveTab('customItinerary')}
          >
            Custom Itinerary
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
          {activeTab === 'itinerary' && (
            <div
              id="panel-itinerary"
              role="tabpanel"
              aria-labelledby="tab-itinerary"
            >
              <SuggestedItineraryView itinerary={details.suggestedItinerary} />
            </div>
          )}
          {activeTab === 'customItinerary' && (
            <div
              id="panel-custom-itinerary"
              role="tabpanel"
              aria-labelledby="tab-custom-itinerary"
            >
              <CustomItineraryView
                emirateKey={emirateKey}
                defaultDays={details.suggestedItinerary?.days}
                whatToDo={details.whatToDo}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
