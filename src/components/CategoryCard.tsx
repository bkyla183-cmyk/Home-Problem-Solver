import { Wind, Flame, Refrigerator, Wrench, Shield, ArrowRight } from 'lucide-react';
import { Category } from '../types';
import { Link } from '../utils/router';

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
  key?: string | number;
}

export function CategoryCard({ category, articleCount }: CategoryCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#0d5c46]" />;
      case 'Refrigerator':
        return <Refrigerator className="w-6 h-6 text-[#0d5c46]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#0d5c46]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#0d5c46]" />;
      case 'Wind':
      default:
        return <Wind className="w-6 h-6 text-[#0d5c46]" />;
    }
  };

  return (
    <div className="group bg-white border border-[#e2e0da] rounded-xl p-6 transition-all duration-200 hover:border-[#0d5c46] hover:shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#edf5f1] flex items-center justify-center group-hover:scale-105 transition-transform">
            {getIcon(category.icon)}
          </div>
          {articleCount !== undefined && (
            <span className="text-xs font-semibold text-[#5a5b5e] bg-[#f5f4ef] px-2.5 py-1 rounded-full">
              {articleCount} Guides
            </span>
          )}
        </div>

        <h3 className="font-serif font-bold text-xl text-[#1c1d1f] group-hover:text-[#0d5c46] transition-colors mb-2">
          <Link href={category.path} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d5c46] rounded">
            {category.name}
          </Link>
        </h3>

        <p className="text-sm text-[#525356] leading-relaxed mb-5">
          {category.description}
        </p>

        {/* Subcategories list */}
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="space-y-1 mb-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8a8b8e] block mb-1.5">
              Subtopics:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {category.subcategories.map(sub => (
                <Link
                  key={sub.slug}
                  href={sub.path}
                  className="text-xs bg-[#faf9f6] border border-[#eceae4] px-2.5 py-1 rounded hover:bg-[#edf5f1] hover:border-[#cde5db] hover:text-[#0d5c46] text-[#3e3f42] transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-[#f0eee9]">
        <Link
          href={category.path}
          className="text-sm font-semibold text-[#0d5c46] inline-flex items-center group-hover:translate-x-1 transition-transform"
        >
          Browse All {category.name} Guides <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
