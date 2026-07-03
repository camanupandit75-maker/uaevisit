import { emirateDetails } from '@/data/uae/emirateDetails';
import { visaFaqs } from '@/data/visaInfo';
import { getSiteUrl } from '@/lib/site';

const SITE_NAME = 'Discover the Emirates';

/** @param {{ name: string, url: string }[]} items */
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** @param {{ slug: string, title: string, description: string, date: string, tags?: string[], emirate?: string }} post */
export function buildArticleSchema(post) {
  const url = `${getSiteUrl()}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(post.emirate ? { articleSection: post.emirate } : {}),
    ...(post.tags?.length ? { keywords: post.tags.join(', ') } : {}),
  };
}

export function buildVisaFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: visaFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** @param {string} emirateKey @param {string} emirateName */
export function buildTouristAttractionGraph(emirateKey, emirateName) {
  const details = emirateDetails[emirateKey];
  if (!details?.whatToDo) return null;

  const attractions = [];

  for (const category of details.whatToDo) {
    for (const activity of category.activities) {
      attractions.push({
        '@type': 'TouristAttraction',
        name: activity.name,
        description: activity.description,
        touristType: category.category,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: emirateName,
          containedInPlace: {
            '@type': 'Country',
            name: 'United Arab Emirates',
          },
        },
      });
    }
  }

  if (!attractions.length) return null;

  return {
    '@context': 'https://schema.org',
    '@graph': attractions,
  };
}

/** @param {string} emirateKey @param {string} emirateName */
export function buildEmirateBreadcrumbSchema(emirateKey, emirateName) {
  const base = getSiteUrl();
  return buildBreadcrumbSchema([
    { name: 'Home', url: base },
    { name: 'Emirates', url: `${base}/uae` },
    { name: emirateName, url: `${base}/emirates/${emirateKey}` },
  ]);
}
