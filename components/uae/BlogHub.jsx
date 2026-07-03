import Link from 'next/link';
import ArabesqueDivider from './icons/ArabesqueDivider';
import GeometricPattern from './icons/GeometricPattern';
import SiteFooter from './SiteFooter';
import styles from './BlogHub.module.css';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** @param {{ posts: import('@/lib/blog').BlogPost[] }} props */
export default function BlogHub({ posts }) {
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
          <Link href="/blog" className={styles.navActiveLink}>
            Blog
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.headerBlock}>
          <p className={styles.eyebrow}>Travel Guides</p>
          <h1 className={styles.pageTitle}>Blog</h1>
          <ArabesqueDivider className={styles.divider} />
          <p className={styles.intro}>
            Practical planning notes for the seven emirates — seasons, routes, and
            how to choose where to start.
          </p>
        </div>

        <ul className={styles.grid}>
          {posts.map((post) => (
            <li key={post.slug}>
              <article className={styles.card}>
                <p className={styles.cardMeta}>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.emirate ? (
                    <>
                      <span aria-hidden="true"> · </span>
                      <span>{post.emirate}</span>
                    </>
                  ) : null}
                </p>
                <h2 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.cardDesc}>{post.description}</p>
                {post.tags?.length ? (
                  <ul className={styles.tagList} aria-label="Tags">
                    {post.tags.map((tag) => (
                      <li key={tag} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read article →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}
