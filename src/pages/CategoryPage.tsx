import { useMemo } from 'react';
import { SeoHead } from '../seo/SeoHead';
import { generateCategorySchema, generateBreadcrumbSchema } from '../seo/schema';
import { SITE_URL } from '../config/site';
import { Category, Subcategory, BreadcrumbItem } from '../types';
import { getArticlesByCategory } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdSlot } from '../components/AdSlot';
import { Link } from '../utils/router';

interface CategoryPageProps {
  category: Category;
  currentSubcategory?: Subcategory;
}

export function CategoryPage({ category, currentSubcategory }: CategoryPageProps) {
  const canonicalPath = currentSubcategory ? currentSubcategory.path : category.path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const articles = useMemo(() => {
    if (currentSubcategory) {
      return getArticlesByCategory(`${category.slug}/${currentSubcategory.slug}`);
    }
    return getArticlesByCategory(category.slug);
  }, [category.slug, currentSubcategory]);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: category.name, url: category.path }
  ];

  if (currentSubcategory) {
    breadcrumbs.push({
      label: currentSubcategory.name,
      url: currentSubcategory.path
    });
  }

  const schemaCategory: Category = currentSubcategory
    ? {
        ...category,
        name: currentSubcategory.name,
        description: currentSubcategory.description,
        path: currentSubcategory.path
      }
    : category;

  const categorySchema = generateCategorySchema(schemaCategory, canonicalUrl);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const displayTitle = currentSubcategory
    ? `${currentSubcategory.name} Troubleshooting & Repair Guides`
    : `${category.name} Troubleshooting & Maintenance Guides`;

  const displayDesc = currentSubcategory
    ? currentSubcategory.description
    : category.description;

  return (
    <div className="min-h-screen bg-[#fcfbf9] pb-20">
      <SeoHead
        title={displayTitle}
        description={displayDesc}
        canonicalPath={canonicalPath}
        schemas={[categorySchema, breadcrumbSchema]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={breadcrumbs} />

        {/* Category Header */}
        <div className="border-b border-[#e2e0da] pb-8 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0d5c46] block mb-1.5">
            {currentSubcategory ? `${category.name} Subcategory` : 'Category Hub'}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#1a1c1e] mb-3">
            {displayTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#555659] max-w-3xl leading-relaxed">
            {displayDesc}
          </p>

          {/* Subcategory Filter Links */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Link
                href={category.path}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  !currentSubcategory
                    ? 'bg-[#0d5c46] text-white shadow-xs'
                    : 'bg-white border border-[#dedcd6] text-[#48494c] hover:border-[#0d5c46]'
                }`}
              >
                All {category.name} ({getArticlesByCategory(category.slug).length})
              </Link>

              {category.subcategories.map(sub => {
                const subCount = getArticlesByCategory(`${category.slug}/${sub.slug}`).length;
                const isSelected = currentSubcategory?.slug === sub.slug;
                return (
                  <Link
                    key={sub.slug}
                    href={sub.path}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#0d5c46] text-white shadow-xs'
                        : 'bg-white border border-[#dedcd6] text-[#48494c] hover:border-[#0d5c46]'
                    }`}
                  >
                    {sub.name} {subCount > 0 && `(${subCount})`}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Top Ad Slot */}
        <AdSlot format="horizontal-banner" label={true} />

        {/* Articles Grid */}
        <div className="my-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1c1e]">
              {currentSubcategory
                ? `Showing ${articles.length} Guides in ${currentSubcategory.name}`
                : `All ${category.name} Troubleshooting Guides (${articles.length})`}
            </h2>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-[#e4e2db] rounded-xl p-8">
              <p className="text-base text-[#5d5e61] font-medium">
                No articles found in this specific topic directory.
              </p>
            </div>
          )}
        </div>

        {/* Category Long Description & Safety Standards */}
        {category.longDescription && !currentSubcategory && (
          <div className="mt-16 bg-white border border-[#e2e0da] rounded-xl p-6 sm:p-8">
            <h3 className="font-serif font-bold text-xl text-[#1a1c1e] mb-3">
              About Our {category.name} Diagnostic Standards
            </h3>
            <p className="text-sm sm:text-base text-[#46474b] leading-relaxed mb-4">
              {category.longDescription}
            </p>
            <div className="text-xs text-[#717377] border-t border-[#f0eee9] pt-4">
              All guides adhere to strict manufacturer safety specifications and U.S. consumer safety standards.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
