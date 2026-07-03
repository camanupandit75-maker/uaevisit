import Link from 'next/link';
import ArabesqueDivider from './icons/ArabesqueDivider';
import GeometricPattern from './icons/GeometricPattern';
import SiteFooter from './SiteFooter';
import styles from './BlogPostView.module.css';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** @param {{ post: import('@/lib/blog').BlogPost, children: React.ReactNode }} props */
export default function BlogPostView({ post, children }) {
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
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <article>
          <header className={styles.articleHeader}>
            <p className={styles.eyebrow}>
              <Link href="/blog" className={styles.backLink}>
                ← All posts
              </Link>
            </p>
            <h1 className={styles.title}>{post.title}</h1>
            <ArabesqueDivider className={styles.divider} />
            <p className={styles.meta}>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.emirate ? (
                <>
                  <span aria-hidden="true"> · </span>
                  <span>{post.emirate}</span>
                </>
              ) : null}
            </p>
            {post.tags?.length ? (
              <ul className={styles.tagList} aria-label="Tags">
                {post.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </header>

          <div className={styles.prose}>{children}</div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
