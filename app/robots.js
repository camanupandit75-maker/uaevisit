import { getSiteUrl } from '@/lib/site';

/** @returns {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
