import { getAllPosts } from '@/lib/blog';
import { emirates } from '@/data/uae/emirates';
import { getSiteUrl } from '@/lib/site';

const staticRoutes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/uae', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/testimonials', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/legal', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/events', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/essentials', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/visa', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.9 },
];

/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const base = getSiteUrl();
  const now = new Date();

  const staticEntries = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const emirateEntries = emirates.map((emirate) => ({
    url: `${base}/emirates/${emirate.key}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const blogEntries = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...emirateEntries, ...blogEntries];
}
