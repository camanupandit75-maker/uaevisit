'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  costBaselines,
  sumCategoryBaselines,
  travelStyleOptions,
} from '@/data/costBaselines';
import { convertibleCurrencies, exchangeRates } from '@/data/exchangeRates';
import { emirates } from '@/data/uae/emirates';
import ArabesqueDivider from './icons/ArabesqueDivider';
import GeometricPattern from './icons/GeometricPattern';
import SiteFooter from './SiteFooter';
import styles from './BudgetEstimator.module.css';

const CATEGORY_LABELS = {
  hotel: 'Hotel',
  food: 'Food',
  transport: 'Transport',
  activities: 'Activities',
};

function formatRatesDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, month - 1, day));
}

function formatAED(amount) {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatConverted(amount, currency) {
  if (currency === 'INR') {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function RatesNote() {
  return (
    <p className={styles.ratesNote} role="note">
      Rates indicative, updated {formatRatesDate(exchangeRates.lastUpdated)}.
    </p>
  );
}

function CurrencyConverter() {
  const [amount, setAmount] = useState('1000');
  const [currency, setCurrency] = useState('USD');
  const [direction, setDirection] = useState('aed-to-foreign');

  const parsedAmount = Number.parseFloat(amount) || 0;
  const rate = exchangeRates.fromAED[currency];

  const convertedValue = useMemo(() => {
    if (direction === 'aed-to-foreign') {
      return parsedAmount * rate;
    }
    return rate > 0 ? parsedAmount / rate : 0;
  }, [direction, parsedAmount, rate]);

  const sourceLabel = direction === 'aed-to-foreign' ? 'AED' : currency;
  const targetLabel = direction === 'aed-to-foreign' ? currency : 'AED';

  const formattedResult =
    direction === 'aed-to-foreign'
      ? formatConverted(convertedValue, currency)
      : formatAED(convertedValue);

  const swapDirection = () => {
    setDirection((current) =>
      current === 'aed-to-foreign' ? 'foreign-to-aed' : 'aed-to-foreign',
    );
  };

  return (
    <section className={styles.converterCard} aria-labelledby="converter-heading">
      <h2 id="converter-heading" className={styles.sectionTitle}>
        Quick currency converter
      </h2>
      <p className={styles.sectionIntro}>
        Convert between AED and your home currency using the same static rates as
        the budget estimate above.
      </p>

      <div className={styles.converterGrid}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Amount ({sourceLabel})</span>
          <input
            type="number"
            min="0"
            step="any"
            className={styles.input}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Currency</span>
          <select
            className={styles.select}
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
          >
            {convertibleCurrencies.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.converterActions}>
        <button type="button" className={styles.swapButton} onClick={swapDirection}>
          Swap direction ({sourceLabel} → {targetLabel})
        </button>
      </div>

      <p className={styles.converterResult}>
        <span className={styles.converterResultLabel}>{targetLabel}</span>
        <span className={styles.converterResultValue}>{formattedResult}</span>
      </p>

      <RatesNote />
    </section>
  );
}

export default function BudgetEstimator() {
  const [travelers, setTravelers] = useState(2);
  const [nights, setNights] = useState(5);
  const [style, setStyle] = useState('midRange');
  const [emirateKey, setEmirateKey] = useState('dubai');

  const estimate = useMemo(() => {
    const categories = costBaselines[emirateKey][style];
    const perPersonPerNight = sumCategoryBaselines(categories);
    const totalAED = perPersonPerNight * nights * travelers;

    const categoryTotals = Object.fromEntries(
      Object.entries(categories).map(([key, nightlyRate]) => [
        key,
        nightlyRate * nights * travelers,
      ]),
    );

    const conversions = Object.fromEntries(
      convertibleCurrencies.map((currency) => [
        currency,
        totalAED * exchangeRates.fromAED[currency],
      ]),
    );

    return {
      categories,
      categoryTotals,
      perPersonPerNight,
      totalAED,
      conversions,
    };
  }, [emirateKey, nights, style, travelers]);

  const selectedEmirate = emirates.find((emirate) => emirate.key === emirateKey);

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
            <Link href="/essentials" className={styles.navSiteLink}>
              Essentials
            </Link>
            <Link href="/visa" className={styles.navSiteLink}>
              Visa Info
            </Link>
            <Link href="/events" className={styles.navSiteLink}>
              Events
            </Link>
            <Link href="/blog" className={styles.navSiteLink}>
              Blog
            </Link>
            <Link href="/budget" className={styles.navActiveLink}>
              Trip Budget
            </Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.headerBlock}>
          <p className={styles.eyebrow}>Free Planning Tool</p>
          <h1 className={styles.pageTitle}>Trip Budget Estimator</h1>
          <ArabesqueDivider className={styles.divider} />
          <p className={styles.intro}>
            Ballpark your UAE trip cost in AED, then see indicative equivalents in
            USD, EUR, GBP, and INR — no sign-up, no API keys.
          </p>
        </div>

        <div className={styles.layout}>
          <section className={styles.formCard} aria-labelledby="budget-inputs-heading">
            <h2 id="budget-inputs-heading" className={styles.sectionTitle}>
              Trip details
            </h2>

            <div className={styles.formGrid}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Travelers</span>
                <input
                  type="number"
                  min="1"
                  max="20"
                  className={styles.input}
                  value={travelers}
                  onChange={(event) =>
                    setTravelers(Math.max(1, Number(event.target.value) || 1))
                  }
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Nights</span>
                <input
                  type="number"
                  min="1"
                  max="60"
                  className={styles.input}
                  value={nights}
                  onChange={(event) =>
                    setNights(Math.max(1, Number(event.target.value) || 1))
                  }
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Travel style</span>
                <select
                  className={styles.select}
                  value={style}
                  onChange={(event) => setStyle(event.target.value)}
                >
                  {travelStyleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Emirate</span>
                <select
                  className={styles.select}
                  value={emirateKey}
                  onChange={(event) => setEmirateKey(event.target.value)}
                >
                  {emirates.map((emirate) => (
                    <option key={emirate.key} value={emirate.key}>
                      {emirate.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <p className={styles.assumptionNote}>
              Estimates use per-person, per-night baselines for{' '}
              {selectedEmirate?.name ?? 'your emirate'}.
            </p>
          </section>

          <section className={styles.resultsCard} aria-labelledby="budget-results-heading">
            <h2 id="budget-results-heading" className={styles.sectionTitle}>
              Estimated total
            </h2>

            <p className={styles.totalAed}>{formatAED(estimate.totalAED)}</p>
            <p className={styles.totalMeta}>
              {travelers} traveler{travelers === 1 ? '' : 's'} × {nights} night
              {nights === 1 ? '' : 's'} ·{' '}
              {travelStyleOptions.find((option) => option.value === style)?.label}
            </p>

            <ul className={styles.breakdownList}>
              {Object.entries(estimate.categoryTotals).map(([key, value]) => (
                <li key={key} className={styles.breakdownItem}>
                  <span>{CATEGORY_LABELS[key]}</span>
                  <span>{formatAED(value)}</span>
                </li>
              ))}
            </ul>

            <div className={styles.conversions}>
              <h3 className={styles.conversionsTitle}>Converted totals</h3>
              <ul className={styles.conversionList}>
                {convertibleCurrencies.map((currency) => (
                  <li key={currency} className={styles.conversionItem}>
                    <span className={styles.conversionCode}>{currency}</span>
                    <span className={styles.conversionValue}>
                      {formatConverted(estimate.conversions[currency], currency)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <RatesNote />
          </section>
        </div>

        <CurrencyConverter />
      </main>

      <SiteFooter />
    </div>
  );
}
