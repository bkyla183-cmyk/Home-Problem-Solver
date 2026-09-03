import { ArrowRight } from 'lucide-react';
import { Article } from '../../types';
import { Link } from '../../utils/router';
import { getArticleBySlug } from '../../data/articles';

interface RelatedArticlesProps {
  slugs: string[];
}

export function RelatedArticles({ slugs }: RelatedArticlesProps) {
  const articles = slugs
    .map(slug => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined)
    .slice(0, 4);

  if (articles.length === 0) return null;

  return (
    <section className="my-10 pt-6 border-t border-[#e8e6e1]">
      <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1c1d1f] mb-4">
        Related Troubleshooting Guides
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map(article => (
          <Link
            key={article.id}
            href={article.path}
            className="group block p-4 bg-[#faf9f6] border border-[#e2e0da] rounded-lg hover:border-[#0d5c46] hover:bg-white transition-all shadow-2xs"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0d5c46] mb-1 block">
              {article.subcategory || article.category}
            </span>
            <h3 className="font-serif font-bold text-base text-[#1c1d1f] group-hover:text-[#0d5c46] transition-colors mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs text-[#595a5d] line-clamp-2 mb-3 leading-relaxed">
              {article.excerpt}
            </p>
            <span className="inline-flex items-center text-xs font-medium text-[#0d5c46] group-hover:translate-x-0.5 transition-transform">
              Read guide <ArrowRight className="w-3 h-3 ml-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
