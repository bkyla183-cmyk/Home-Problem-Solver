import React, { useState } from 'react';
import { Search, Shield, AlertTriangle, ArrowRight, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { SeoHead } from '../seo/SeoHead';
import { generateWebsiteSchema, generateOrganizationSchema } from '../seo/schema';
import { SITE_NAME, SITE_DESCRIPTION } from '../config/site';
import { CATEGORIES } from '../data/categories';
import { getPopularArticles, getLatestArticles, getArticlesByCategory, searchArticles } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { CategoryCard } from '../components/CategoryCard';
import { AdSlot } from '../components/AdSlot';
import { Link, useRouter } from '../utils/router';

export function HomePage() {
  const { query, navigate } = useRouter();
  const searchParam = query.search || '';
  const [heroSearch, setHeroSearch] = useState(searchParam);

  const popularArticles = getPopularArticles();
  const latestArticles = getLatestArticles(6);

  const searchResults = searchParam ? searchArticles(searchParam) : [];

  const websiteSchema = generateWebsiteSchema();
  const orgSchema = generateOrganizationSchema();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/?search=${encodeURIComponent(heroSearch.trim())}`);
    } else {
      navigate('/');
    }
  };

  const handleClearSearch = () => {
    setHeroSearch('');
    navigate('/');
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title={searchParam ? `Search Results: ${searchParam}` : "Practical Home Troubleshooting & Maintenance Guides"}
        description={SITE_DESCRIPTION}
        canonicalPath="/"
        noIndex={Boolean(searchParam)}
        schemas={searchParam ? [] : [websiteSchema, orgSchema]}
      />

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-[#f7f5ef] to-[#fcfbf9] border-b border-[#e5e3dd] pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf5f1] border border-[#d2e8dd] text-[#0d5c46] text-xs font-semibold tracking-wide uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Search-Driven Home Diagnostics</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-black text-[#1a1c1e] tracking-tight leading-tight mb-5">
            Practical Troubleshooting for American Homeowners
          </h1>

          <p className="text-base sm:text-lg text-[#555659] max-w-2xl mx-auto leading-relaxed mb-8">
            Clear, safety-first diagnostic checklists when your air conditioning, furnace, or major appliances break down.
            Understand the real cause before paying for an emergency service call.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto relative mb-6">
            <div className="relative flex items-center shadow-md rounded-xl overflow-hidden border border-[#d3d0c7] bg-white focus-within:border-[#0d5c46] focus-within:ring-2 focus-within:ring-[#0d5c46]/20 transition-all">
              <Search className="w-5 h-5 text-[#88898c] ml-4 flex-shrink-0" aria-hidden="true" />
              <input
                type="search"
                value={heroSearch}
                onChange={e => setHeroSearch(e.target.value)}
                aria-label="Search home troubleshooting guides"
                placeholder="What is happening? (e.g. 'AC blowing warm', 'furnace not turning on', 'water leak')..."
                className="w-full py-4 pl-3 pr-28 text-base text-[#1c1d1f] placeholder:text-[#97989b] border-none outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-2 bg-[#0d5c46] hover:bg-[#094736] text-white text-sm font-semibold rounded-lg transition-colors shadow-xs"
              >
                Find Guide
              </button>
            </div>
          </form>

          {/* Quick Problem Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[#636467]">
            <span className="font-medium">Common problems:</span>
            {[
              { label: 'AC Not Cooling', path: '/hvac/air-conditioning/why-is-my-ac-not-cooling/' },
              { label: 'AC Blowing Warm Air', path: '/hvac/air-conditioning/ac-blowing-warm-air/' },
              { label: 'Furnace Blowing Cold', path: '/hvac/furnace/furnace-blowing-cold-air/' },
              { label: 'Filter Schedule', path: '/maintenance/how-often-change-hvac-filter/' }
            ].map(pill => (
              <Link
                key={pill.path}
                href={pill.path}
                className="bg-white border border-[#e0ded8] px-2.5 py-1 rounded-md hover:border-[#0d5c46] hover:text-[#0d5c46] transition-colors"
              >
                {pill.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Header Ad Slot */}
        <AdSlot format="horizontal-banner" label={true} />

        {/* Search Results Display when query is active */}
        {searchParam && (
          <section className="my-8 p-6 bg-white border border-[#e2e0da] rounded-2xl shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#eceae5] gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0d5c46] block mb-1">
                  Search Query Results
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#1a1c1e]">
                  Results for &ldquo;{searchParam}&rdquo; ({searchResults.length})
                </h2>
              </div>
              <button
                type="button"
                onClick={handleClearSearch}
                className="self-start sm:self-auto px-3.5 py-1.5 text-xs font-medium text-[#494a4d] bg-[#f5f4ef] hover:bg-[#eae8e0] rounded-lg border border-[#dedcd6] transition-colors"
              >
                Clear Search &times;
              </button>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-[#555659]">
                <p className="font-serif text-lg font-bold text-[#1a1c1e] mb-2">
                  No direct guides matched &ldquo;{searchParam}&rdquo;
                </p>
                <p className="text-sm max-w-md mx-auto mb-4">
                  Check your spelling or explore our organized HVAC categories below for air conditioning, furnace, or appliance issues.
                </p>
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="px-4 py-2 bg-[#0d5c46] hover:bg-[#094736] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Browse All Categories
                </button>
              </div>
            )}
          </section>
        )}

        {/* 2. Popular Home Problems Section */}
        <section className="my-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e6e4df]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0d5c46] block mb-1">
                Most Common Breakdowns
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
                Popular Home Problems & Instant Fixes
              </h2>
            </div>
            <p className="text-sm text-[#616265] mt-2 md:mt-0 max-w-md">
              Start with these high-frequency troubleshooting checklists designed to eliminate minor issues in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* 3. Browse by Category Section */}
        <section className="my-16 bg-[#faf9f5] border border-[#e6e4df] rounded-2xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0d5c46] block mb-1">
              Topical Directory
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1c1e] mb-3">
              Explore Home Troubleshooting Categories
            </h2>
            <p className="text-sm text-[#5f6063]">
              Organized technical guides for heating, cooling, routine maintenance, and major residential appliances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map(category => {
              const count = getArticlesByCategory(category.slug).length;
              return (
                <CategoryCard
                  key={category.slug}
                  category={category}
                  articleCount={count}
                />
              );
            })}
          </div>
        </section>

        {/* Mid-Page Ad Slot */}
        <AdSlot format="responsive" label={true} />

        {/* 4. Homeowner Safety Principles */}
        <section className="my-16 bg-white border border-[#e2e0da] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#0d5c46] font-semibold text-xs uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Our Safety Commitment</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1c1e] mb-4">
              Clear Boundaries Between DIY Checks and Licensed Pros
            </h2>
            <p className="text-sm sm:text-base text-[#4f5053] leading-relaxed mb-6">
              Home mechanical systems are powerful. While replacing a dirty filter or clearing an exterior drain line is
              completely safe for homeowners, other components require licensed expertise to prevent fire, electrical shock,
              or explosive hazards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#f0eee9]">
            <div className="p-4 bg-[#f8fcf9] border border-[#d8ebe1] rounded-xl">
              <div className="flex items-center gap-2 text-[#0d5c46] font-semibold text-sm mb-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Safe to Check Yourself</span>
              </div>
              <p className="text-xs text-[#525356] leading-relaxed">
                Filter changes, thermostat battery swaps, resetting tripped breakers once, checking exterior disconnect switches,
                and clearing condensate drain line clogs with warm water.
              </p>
            </div>

            <div className="p-4 bg-[#fffaf5] border border-[#fae2cb] rounded-xl">
              <div className="flex items-center gap-2 text-[#b85d19] font-semibold text-sm mb-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Stop & Call Licensed Pro</span>
              </div>
              <p className="text-xs text-[#525356] leading-relaxed">
                Persistent burning smells, continuous circuit breaker trips, refrigerant line freezing with hissing sounds,
                gas odors, cracked heat exchangers, or internal electrical sparks.
              </p>
            </div>

            <div className="p-4 bg-[#f6f8fb] border border-[#dce3ee] rounded-xl">
              <div className="flex items-center gap-2 text-[#1c4d79] font-semibold text-sm mb-2">
                <Wrench className="w-4 h-4 flex-shrink-0" />
                <span>Objective Decisions</span>
              </div>
              <p className="text-xs text-[#525356] leading-relaxed">
                We use the $5,000 Rule and federal SEER2 standards to help you decide whether repairing an aged system makes
                financial sense or if replacement saves more money long-term.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Latest Maintenance & Diagnostic Guides */}
        <section className="my-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e6e4df]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0d5c46] block mb-1">
                Latest Publications
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
                Recent Troubleshooting & Maintenance Guides
              </h2>
            </div>
            <Link
              href="/maintenance/"
              className="text-sm font-semibold text-[#0d5c46] inline-flex items-center hover:underline mt-2 sm:mt-0"
            >
              View all maintenance articles <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
