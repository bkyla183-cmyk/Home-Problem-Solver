import { Article } from '../../types';
import { AC_ARTICLES } from './ac';
import { FURNACE_ARTICLES } from './furnace';
import { MAINTENANCE_ARTICLES } from './maintenance';
import { APPLIANCE_ARTICLES } from './appliances';

export const ALL_ARTICLES: Article[] = [
  ...AC_ARTICLES,
  ...FURNACE_ARTICLES,
  ...MAINTENANCE_ARTICLES,
  ...APPLIANCE_ARTICLES
];

export const POPULAR_PROBLEM_SLUGS = [
  'why-is-my-ac-not-cooling',
  'ac-blowing-warm-air',
  'ac-not-turning-on',
  'ac-leaking-water',
  'furnace-blowing-cold-air',
  'furnace-not-heating',
  'refrigerator-not-cooling',
  'washing-machine-not-draining'
];

export function getArticleBySlug(slug: string): Article | undefined {
  const clean = slug.replace(/^\/|\/$/g, '');
  // Might be full path or slug
  return ALL_ARTICLES.find(a => {
    const aClean = a.slug.replace(/^\/|\/$/g, '');
    const aPathClean = a.path.replace(/^\/|\/$/g, '');
    return aClean === clean || aPathClean === clean || aPathClean.endsWith(`/${clean}`);
  });
}

export function getArticlesByCategory(categoryPathOrSlug: string): Article[] {
  const clean = categoryPathOrSlug.replace(/^\/|\/$/g, '');
  
  if (clean === 'hvac') {
    return ALL_ARTICLES.filter(a => a.categorySlug === 'hvac');
  }
  if (clean === 'hvac/air-conditioning' || clean === 'air-conditioning') {
    return ALL_ARTICLES.filter(a => a.subcategorySlug === 'air-conditioning');
  }
  if (clean === 'hvac/furnace' || clean === 'furnace') {
    return ALL_ARTICLES.filter(a => a.subcategorySlug === 'furnace');
  }
  if (clean === 'appliances') {
    return ALL_ARTICLES.filter(a => a.categorySlug === 'appliances');
  }
  if (clean === 'appliances/refrigerator' || clean === 'refrigerator') {
    return ALL_ARTICLES.filter(a => a.subcategorySlug === 'refrigerator');
  }
  if (clean === 'appliances/washer' || clean === 'washer') {
    return ALL_ARTICLES.filter(a => a.subcategorySlug === 'washer');
  }
  if (clean === 'appliances/dryer' || clean === 'dryer') {
    return ALL_ARTICLES.filter(a => a.subcategorySlug === 'dryer');
  }
  if (clean === 'appliances/dishwasher' || clean === 'dishwasher') {
    return ALL_ARTICLES.filter(a => a.subcategorySlug === 'dishwasher');
  }
  if (clean === 'appliances/oven' || clean === 'oven') {
    return ALL_ARTICLES.filter(a => a.subcategorySlug === 'oven');
  }
  if (clean === 'maintenance') {
    return ALL_ARTICLES.filter(a => a.categorySlug === 'maintenance');
  }

  return ALL_ARTICLES.filter(a => a.categorySlug === clean || a.subcategorySlug === clean);
}

export function getPopularArticles(): Article[] {
  return POPULAR_PROBLEM_SLUGS
    .map(slug => ALL_ARTICLES.find(a => a.slug === slug))
    .filter((a): a is Article => a !== undefined);
}

export function getLatestArticles(limit = 6): Article[] {
  return [...ALL_ARTICLES]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  if (!query || query.trim().length === 0) return [];
  const terms = query.toLowerCase().trim().split(/\s+/);
  
  return ALL_ARTICLES.filter(article => {
    const titleMatch = article.title.toLowerCase();
    const descMatch = article.description.toLowerCase();
    const excerptMatch = article.excerpt.toLowerCase();
    const catMatch = `${article.category} ${article.subcategory}`.toLowerCase();
    const kwMatch = article.keywords.join(' ').toLowerCase();

    return terms.every(term => 
      titleMatch.includes(term) ||
      descMatch.includes(term) ||
      excerptMatch.includes(term) ||
      catMatch.includes(term) ||
      kwMatch.includes(term)
    );
  });
}
