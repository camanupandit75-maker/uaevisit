'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  EVENT_MONTHS,
  filterEvents,
  getCurrentMonthAbbr,
} from '@/data/events';
import { emirates } from '@/data/uae/emirates';
import ArabesqueDivider from './icons/ArabesqueDivider';
import GeometricPattern from './icons/GeometricPattern';
import EventCard from './EventCard';
import SiteFooter from './SiteFooter';
import styles from './EventsCalendar.module.css';

export default function EventsCalendar() {
  const [emirateFilter, setEmirateFilter] = useState('all');
  const [monthFilter, setMonthFilter] = useState(getCurrentMonthAbbr);

  const filteredEvents = useMemo(
    () =>
      filterEvents({
        emirate: emirateFilter,
        month: monthFilter,
      }),
    [emirateFilter, monthFilter],
  );

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
          <Link href="/events" className={styles.navEventsLink}>
            Events
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.headerBlock}>
          <p className={styles.eyebrow}>Calendar</p>
          <h1 className={styles.pageTitle}>Events &amp; Festivals</h1>
          <ArabesqueDivider className={styles.divider} />
          <p className={styles.intro}>
            Major festivals, sporting fixtures, and cultural seasons across the
            seven emirates — filter by region and month to plan around what&apos;s on.
          </p>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel} htmlFor="events-emirate-filter">
              Emirate
            </label>
            <select
              id="events-emirate-filter"
              className={styles.filterSelect}
              value={emirateFilter}
              onChange={(event) => setEmirateFilter(event.target.value)}
            >
              <option value="all">All emirates</option>
              {emirates.map((emirate) => (
                <option key={emirate.key} value={emirate.key}>
                  {emirate.name}
                </option>
              ))}
              <option value="uae">UAE-wide</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel} htmlFor="events-month-filter">
              Month
            </label>
            <select
              id="events-month-filter"
              className={styles.filterSelect}
              value={monthFilter}
              onChange={(event) => setMonthFilter(event.target.value)}
            >
              <option value="all">All months</option>
              {EVENT_MONTHS.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className={styles.grid}>
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No events match these filters. Try another month or emirate.</p>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
