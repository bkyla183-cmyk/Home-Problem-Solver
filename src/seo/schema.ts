import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '../config/site';
import { Article, BreadcrumbItem, Category, FaqItem } from '../types';

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION
  };
}

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.label,
      item: crumb.url.startsWith('http') ? crumb.url : `${SITE_URL}${crumb.url}`
    }))
  };
}

export function generateArticleSchema(article: Article, canonicalUrl: string) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_URL}/`
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_URL}/`
    },
    articleSection: article.subcategory || article.category,
    keywords: article.keywords.join(', ')
  };

  return schema;
}

export function generateFaqSchema(faqs: FaqItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export function generateCategorySchema(category: Category, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Troubleshooting & Guides`,
    description: category.description,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_URL}/`
    }
  };
}
