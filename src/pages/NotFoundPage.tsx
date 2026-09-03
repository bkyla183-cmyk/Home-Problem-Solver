import { Search, Wrench, ArrowRight, Home } from 'lucide-react';
import { SeoHead } from '../seo/SeoHead';
import { Link } from '../utils/router';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Page Not Found (404)"
        description="The troubleshooting page you requested could not be located on Home Problem Solver."
        canonicalPath="/404"
        noIndex={true}
      />

      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-[#f4f3ee] text-[#0d5c46] flex items-center justify-center mx-auto mb-6">
          <Wrench className="w-8 h-8" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-[#0d5c46] block mb-2">
          Error 404
        </span>

        <h1 className="font-serif text-3xl font-black text-[#1a1c1e] mb-3">
          Troubleshooting Guide Not Found
        </h1>

        <p className="text-sm text-[#5d5e61] leading-relaxed mb-8">
          The specific URL you visited may have moved, or you may have followed an outdated link.
          Try searching for your home issue or explore our popular diagnostic checklists below:
        </p>

        {/* Quick Links */}
        <div className="space-y-2 text-left bg-white border border-[#e2e0da] p-4 rounded-xl shadow-2xs mb-8 text-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#888] mb-2 px-1">
            Common Solutions
          </div>
          {[
            { label: 'AC Not Cooling Diagnostic', path: '/hvac/air-conditioning/why-is-my-ac-not-cooling/' },
            { label: 'Furnace Blowing Cold Air', path: '/hvac/furnace/furnace-blowing-cold-air/' },
            { label: 'How Often to Change HVAC Filters', path: '/maintenance/how-often-change-hvac-filter/' },
            { label: 'Refrigerator Not Cooling', path: '/appliances/refrigerator/refrigerator-not-cooling/' }
          ].map(item => (
            <Link
              key={item.path}
              href={item.path}
              className="block p-2 rounded hover:bg-[#f6f5f0] text-[#2d2e30] font-medium transition-colors"
            >
              &bull; {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0d5c46] hover:bg-[#094736] text-white font-semibold rounded-lg text-sm transition-colors shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
