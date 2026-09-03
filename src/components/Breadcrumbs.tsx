import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../types';
import { Link } from '../utils/router';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs sm:text-sm text-[#666663] mb-6 overflow-x-auto whitespace-nowrap">
      <ol className="flex items-center space-x-1.5 sm:space-x-2">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-[#555552] hover:text-[#0d5c46] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d5c46] rounded"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center space-x-1.5 sm:space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#9e9e99] flex-shrink-0" aria-hidden="true" />
              {isLast ? (
                <span className="font-medium text-[#1c1d1f] truncate max-w-[200px] sm:max-w-[320px]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-[#555552] hover:text-[#0d5c46] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d5c46] rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
