'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  findVisaCountry,
  getRegionsGroupedByVisaType,
  getVisaRegion,
  getVisaTypeLabel,
  officialVisaSources,
  visaCountries,
  visaTodoVerify,
  visaTypeOrder,
} from '@/data/visaInfo';
import ArabesqueDivider from './icons/ArabesqueDivider';
import GeometricPattern from './icons/GeometricPattern';
import SiteFooter from './SiteFooter';
import styles from './VisaHub.module.css';

function VisaResultCard({ region, countryName }) {
  if (!region) return null;

  return (
    <article className={styles.resultCard}>
      <p className={styles.resultEyebrow}>Result for {countryName}</p>
      <div className={styles.resultHeader}>
        <h2 className={styles.resultTitle}>{region.region}</h2>
        <span className={`${styles.visaBadge} ${styles[`badge${region.visaType.replace(/-/g, '')}`]}`}>
          {getVisaTypeLabel(region.visaType)}
        </span>
      </div>
      <p className={styles.resultMeta}>
        <strong>Typical duration:</strong> {region.duration}
      </p>
      <p className={styles.resultNotes}>{region.notes}</p>
      <p className={styles.resultExamples}>
        <strong>Also covers:</strong> {region.countriesExample}
      </p>
    </article>
  );
}

export default function VisaHub() {
  const [query, setQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('United States');

  const groupedRegions = useMemo(() => getRegionsGroupedByVisaType(), []);

  const matchedCountry = useMemo(() => findVisaCountry(query), [query]);
  const activeCountry =
    matchedCountry ??
    visaCountries.find((country) => country.name === selectedCountry) ??
    null;
  const activeRegion = activeCountry
    ? getVisaRegion(activeCountry.regionId)
    : null;

  const handleSelectCountry = (name) => {
    setSelectedCountry(name);
    setQuery(name);
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
          <Link href="/visa" className={styles.navActiveLink}>
            Visa Info
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.topSection}>
          <div className={styles.headerBlock}>
            <p className={styles.eyebrow}>Entry Requirements</p>
            <h1 className={styles.pageTitle}>UAE Visa Information</h1>
            <ArabesqueDivider className={styles.divider} />
          </div>

          <aside className={styles.disclaimerCard} role="note">
            <p className={styles.disclaimerText}>
              Visa rules change frequently. Always confirm with the official UAE
              ICP/GDRFA website before travel.
            </p>
            <ul className={styles.sourceLinks}>
              {officialVisaSources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceLink}
                  >
                    {source.label} →
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.lookup}>
            <label className={styles.lookupLabel} htmlFor="visa-country-search">
              Look up by country
            </label>
            <input
              id="visa-country-search"
              className={styles.lookupInput}
              type="search"
              value={query}
              placeholder="e.g. United States, India, Pakistan…"
              list="visa-country-options"
              onChange={(event) => setQuery(event.target.value)}
            />
            <datalist id="visa-country-options">
              {visaCountries.map((country) => (
                <option key={country.name} value={country.name} />
              ))}
            </datalist>
            <div className={styles.quickPicks}>
              {['United States', 'United Kingdom', 'India', 'Pakistan', 'Philippines', 'Germany'].map(
                (name) => (
                  <button
                    key={name}
                    type="button"
                    className={`${styles.quickPick} ${
                      activeCountry?.name === name ? styles.quickPickActive : ''
                    }`}
                    onClick={() => handleSelectCountry(name)}
                  >
                    {name}
                  </button>
                ),
              )}
            </div>
          </div>

          {activeCountry && activeRegion ? (
            <VisaResultCard region={activeRegion} countryName={activeCountry.name} />
          ) : (
            <div className={styles.emptyResult}>
              <p>No matching country found. Try a different spelling or pick a quick link above.</p>
            </div>
          )}
        </div>

        <section className={styles.tableSection} aria-labelledby="visa-table-heading">
          <h2 id="visa-table-heading" className={styles.tableHeading}>
            Full overview by visa type
          </h2>

          <details className={styles.todoPanel}>
            <summary>Fields marked TODO-verify in our data</summary>
            <ul>
              {visaTodoVerify.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>

          {visaTypeOrder.map((visaType) => {
            const regions = groupedRegions[visaType];
            if (!regions.length) return null;

            return (
              <div key={visaType} className={styles.typeGroup}>
                <h3 className={styles.typeTitle}>{getVisaTypeLabel(visaType)}</h3>
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th scope="col">Region / category</th>
                        <th scope="col">Example countries</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {regions.map((region) => (
                        <tr key={region.id}>
                          <td>{region.region}</td>
                          <td>{region.countriesExample}</td>
                          <td>{region.duration}</td>
                          <td>{region.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
