import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/JsonLd';
import ArabesqueDivider from '@/components/uae/icons/ArabesqueDivider';
import GeometricPattern from '@/components/uae/icons/GeometricPattern';
import SiteFooter from '@/components/uae/SiteFooter';
import { emirateDetails } from '@/data/uae/emirateDetails';
import { emirates } from '@/data/uae/emirates';
import {
  buildEmirateBreadcrumbSchema,
  buildTouristAttractionGraph,
} from '@/lib/schema';
import styles from './EmiratePage.module.css';

export function generateStaticParams() {
  return emirates.map((emirate) => ({ emirateKey: emirate.key }));
}

/** @param {{ params: Promise<{ emirateKey: string }> }} props */
export async function generateMetadata({ params }) {
  const { emirateKey } = await params;
  const emirate = emirates.find((e) => e.key === emirateKey);
  const details = emirateDetails[emirateKey];
  if (!emirate || !details) return {};

  return {
    title: `${emirate.name} — Discover the Emirates`,
    description: emirate.blurb,
  };
}

/** @param {{ params: Promise<{ emirateKey: string }> }} props */
export default async function EmiratePage({ params }) {
  const { emirateKey } = await params;
  const emirate = emirates.find((e) => e.key === emirateKey);
  const details = emirateDetails[emirateKey];

  if (!emirate || !details) notFound();

  const breadcrumbSchema = buildEmirateBreadcrumbSchema(emirate.key, emirate.name);
  const attractionGraph = buildTouristAttractionGraph(emirate.key, emirate.name);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {attractionGraph ? <JsonLd data={attractionGraph} /> : null}

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
            <Link href="/uae" className={styles.navLink}>
              Emirates
            </Link>
          </nav>
        </header>

        <main className={styles.main}>
          <p className={styles.index}>{emirate.index}</p>
          <h1 className={styles.title}>{emirate.name}</h1>
          <p className={styles.nameAr} lang="ar" dir="rtl">
            {emirate.nameAr}
          </p>
          <ArabesqueDivider className={styles.divider} />
          <p className={styles.blurb}>{emirate.blurb}</p>
          <p className={styles.intro}>{details.intro}</p>

          <section className={styles.section} aria-labelledby="what-to-do-heading">
            <h2 id="what-to-do-heading" className={styles.sectionTitle}>
              What to do
            </h2>
            {details.whatToDo.map((category) => (
              <div key={category.category} className={styles.category}>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <ul className={styles.activityList}>
                  {category.activities.map((activity) => (
                    <li key={activity.name}>
                      <strong>{activity.name}</strong> — {activity.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <p className={styles.cta}>
            <Link href="/uae" className={styles.ctaLink}>
              Explore all emirates on the interactive map →
            </Link>
          </p>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
