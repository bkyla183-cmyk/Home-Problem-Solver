import { Clock, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { Link } from '../utils/router';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  key?: string | number;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const isHighDanger = article.safetyLevel === 'high' || article.safetyLevel === 'danger';

  return (
    <article
      className={`group flex flex-col justify-between bg-white border rounded-xl p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-[#0d5c46] ${
        featured ? 'border-[#cfcdc6] shadow-xs' : 'border-[#e4e2dc]'
      }`}
    >
      <div>
        {/* Subcategory & Reading Time Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0d5c46] bg-[#edf5f1] px-2.5 py-0.5 rounded">
            {article.subcategory || article.category}
          </span>
          <div className="flex items-center text-xs text-[#737478] gap-1">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{article.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1c1d1f] group-hover:text-[#0d5c46] transition-colors mb-2.5 leading-snug">
          <Link href={article.path} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d5c46] rounded">
            {article.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#505154] line-clamp-3 leading-relaxed mb-4">
          {article.excerpt}
        </p>
      </div>

      <div>
        {/* Quick diagnostic highlight if available */}
        {article.quickAnswer && (
          <div className="text-xs text-[#305c49] bg-[#f2f8f5] p-2.5 rounded-md mb-4 line-clamp-2 border border-[#d9ebe2]">
            <span className="font-semibold">Quick fix: </span>
            {article.quickAnswer}
          </div>
        )}

        {/* Footer info: safety indicator and read link */}
        <div className="pt-3 border-t border-[#f0eee9] flex items-center justify-between text-xs">
          <span
            className={`inline-flex items-center gap-1 font-medium ${
              isHighDanger ? 'text-[#b93822]' : 'text-[#5d5e61]'
            }`}
          >
            {isHighDanger ? (
              <>
                <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>High Voltage / Gas Risk</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-[#0d5c46]" aria-hidden="true" />
                <span>Homeowner Safe Check</span>
              </>
            )}
          </span>

          <Link
            href={article.path}
            className="font-medium text-[#0d5c46] group-hover:translate-x-0.5 transition-transform inline-flex items-center"
          >
            View Checklist <ArrowRight className="w-3 h-3 ml-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
