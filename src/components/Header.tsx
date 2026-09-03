import { useState, useEffect, useRef } from 'react';
import { Wrench, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useRouter } from '../utils/router';
import { CATEGORIES } from '../data/categories';
import { searchArticles } from '../data/articles';
import { Article } from '../types';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      setSearchResults(searchArticles(searchQuery).slice(0, 6));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (path: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fcfbf9] border-b border-[#e5e3dd] shadow-2xs backdrop-blur-md bg-opacity-95">
      {/* Top Banner Notice */}
      <div className="bg-[#12382b] text-[#e8f0ec] text-[11px] sm:text-xs py-1.5 px-4 text-center tracking-wide font-medium">
        <span>A Practical Troubleshooting Resource for American Homeowners</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d5c46] rounded py-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#0d5c46] text-white flex items-center justify-center shadow-xs group-hover:bg-[#094736] transition-colors">
              <Wrench className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="font-serif font-black tracking-tight text-lg sm:text-xl text-[#1a1c1e] block leading-none">
                HOME PROBLEM SOLVER
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans text-[#696a6d] tracking-wider uppercase block mt-0.5">
                Practical Home Guides
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            ref={dropdownRef}
            className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-[#2d2f33]"
            aria-label="Main Navigation"
          >
            {/* HVAC Link & Subcategories */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'hvac' ? null : 'hvac')}
                className={`flex items-center gap-1 px-3 py-2 rounded hover:text-[#0d5c46] hover:bg-[#f3f1ec] transition-colors ${
                  activeDropdown === 'hvac' ? 'text-[#0d5c46] bg-[#f3f1ec]' : ''
                }`}
                aria-expanded={activeDropdown === 'hvac'}
              >
                <span>HVAC</span>
                <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              {activeDropdown === 'hvac' && (
                <div className="absolute left-0 mt-1.5 w-64 bg-white border border-[#e2e0da] rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/hvac/"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-2 font-semibold text-xs uppercase tracking-wider text-[#0d5c46] hover:bg-[#f7f6f2]"
                  >
                    All HVAC Guides &rarr;
                  </Link>
                  <div className="border-t border-[#f0eee9] my-1" />
                  {CATEGORIES[0].subcategories?.map(sub => (
                    <Link
                      key={sub.slug}
                      href={sub.path}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-1.5 text-sm text-[#3c3d40] hover:text-[#0d5c46] hover:bg-[#f7f6f2]"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Appliances Link & Subcategories */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'appliances' ? null : 'appliances')}
                className={`flex items-center gap-1 px-3 py-2 rounded hover:text-[#0d5c46] hover:bg-[#f3f1ec] transition-colors ${
                  activeDropdown === 'appliances' ? 'text-[#0d5c46] bg-[#f3f1ec]' : ''
                }`}
                aria-expanded={activeDropdown === 'appliances'}
              >
                <span>Appliances</span>
                <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              {activeDropdown === 'appliances' && (
                <div className="absolute left-0 mt-1.5 w-64 bg-white border border-[#e2e0da] rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/appliances/"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-2 font-semibold text-xs uppercase tracking-wider text-[#0d5c46] hover:bg-[#f7f6f2]"
                  >
                    All Appliance Guides &rarr;
                  </Link>
                  <div className="border-t border-[#f0eee9] my-1" />
                  {CATEGORIES[1].subcategories?.map(sub => (
                    <Link
                      key={sub.slug}
                      href={sub.path}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-1.5 text-sm text-[#3c3d40] hover:text-[#0d5c46] hover:bg-[#f7f6f2]"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Maintenance */}
            <Link
              href="/maintenance/"
              className="px-3 py-2 rounded hover:text-[#0d5c46] hover:bg-[#f3f1ec] transition-colors"
            >
              Maintenance
            </Link>

            {/* About */}
            <Link
              href="/about/"
              className="px-3 py-2 rounded hover:text-[#0d5c46] hover:bg-[#f3f1ec] transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Search Trigger and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm bg-white border border-[#dedcd6] hover:border-[#b8b5ac] text-[#696a6d] rounded-full shadow-2xs hover:text-[#1a1c1e] transition-all"
              aria-label="Search troubleshooting guides"
            >
              <Search className="w-4 h-4 text-[#8a8b8e]" aria-hidden="true" />
              <span className="hidden sm:inline">Search problem...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-[#8a8b8e] bg-[#f5f4ef] rounded border border-[#e4e2db]">
                /
              </kbd>
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded text-[#333] hover:bg-[#f2efe9] focus:outline-none focus:ring-2 focus:ring-[#0d5c46]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e5e3dd] bg-[#fcfbf9] px-4 pt-3 pb-6 space-y-3">
          <div className="font-semibold text-xs uppercase tracking-wider text-[#0d5c46] px-2 pt-2">
            Categories
          </div>
          <div className="space-y-1">
            <Link
              href="/hvac/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-base text-[#1c1d1f] hover:bg-[#f3f1ec]"
            >
              HVAC & Heating / Cooling
            </Link>
            <div className="pl-4 space-y-1">
              <Link
                href="/hvac/air-conditioning/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1 text-sm text-[#595a5d] hover:text-[#0d5c46]"
              >
                &bull; Air Conditioning (10 Guides)
              </Link>
              <Link
                href="/hvac/furnace/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1 text-sm text-[#595a5d] hover:text-[#0d5c46]"
              >
                &bull; Furnaces & Heating (6 Guides)
              </Link>
            </div>

            <Link
              href="/appliances/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-base text-[#1c1d1f] hover:bg-[#f3f1ec]"
            >
              Appliances
            </Link>
            <div className="pl-4 space-y-1">
              <Link
                href="/appliances/refrigerator/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1 text-sm text-[#595a5d] hover:text-[#0d5c46]"
              >
                &bull; Refrigerators
              </Link>
              <Link
                href="/appliances/washer/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1 text-sm text-[#595a5d] hover:text-[#0d5c46]"
              >
                &bull; Washing Machines
              </Link>
              <Link
                href="/appliances/dryer/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1 text-sm text-[#595a5d] hover:text-[#0d5c46]"
              >
                &bull; Clothes Dryers
              </Link>
              <Link
                href="/appliances/dishwasher/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1 text-sm text-[#595a5d] hover:text-[#0d5c46]"
              >
                &bull; Dishwashers
              </Link>
              <Link
                href="/appliances/oven/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1 text-sm text-[#595a5d] hover:text-[#0d5c46]"
              >
                &bull; Ovens & Ranges
              </Link>
            </div>

            <Link
              href="/maintenance/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-base text-[#1c1d1f] hover:bg-[#f3f1ec]"
            >
              HVAC Maintenance & Filters (8 Guides)
            </Link>

            <div className="border-t border-[#e8e6e0] pt-2" />

            <Link
              href="/about/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-[#444548] hover:bg-[#f3f1ec]"
            >
              About Home Problem Solver
            </Link>
            <Link
              href="/editorial-policy/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-[#444548] hover:bg-[#f3f1ec]"
            >
              Editorial Policy & Standards
            </Link>
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-[#444548] hover:bg-[#f3f1ec]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      {/* Instant Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-16 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-xl border border-[#d8d6ce] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={e => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-[#eceae5] flex items-center gap-3">
              <Search className="w-5 h-5 text-[#8a8b8e]" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Search home problems"
                placeholder="Search home problems (e.g. 'AC blowing warm', 'furnace short cycling', 'filter frequency')..."
                className="w-full text-base sm:text-lg bg-transparent border-none outline-none text-[#1c1d1f] placeholder:text-[#9e9ea0]"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1 text-[#888] hover:text-[#111] rounded"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results or Quick Suggestions */}
            <div className="max-h-96 overflow-y-auto p-4 divide-y divide-[#f2efe9]">
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8c8c90] mb-2">
                    {searchResults.length} Troubleshooting Guides Found
                  </div>
                  {searchResults.map(result => (
                    <div
                      key={result.id}
                      onClick={() => handleResultClick(result.path)}
                      className="p-3 rounded-lg hover:bg-[#f6f5f0] cursor-pointer transition-colors"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#0d5c46] mb-0.5">
                        {result.subcategory || result.category}
                      </div>
                      <div className="font-serif font-bold text-sm sm:text-base text-[#1c1d1f] line-clamp-1">
                        {result.title}
                      </div>
                      <div className="text-xs text-[#5f6063] line-clamp-1 mt-0.5">
                        {result.quickAnswer || result.excerpt}
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchQuery.trim().length > 1 ? (
                <div className="py-8 text-center text-[#757679]">
                  <p className="font-medium text-sm">No exact guides found for &ldquo;{searchQuery}&rdquo;</p>
                  <p className="text-xs mt-1">Try keywords like &ldquo;AC&rdquo;, &ldquo;furnace&rdquo;, &ldquo;refrigerator&rdquo;, &ldquo;water leak&rdquo;, or &ldquo;filter&rdquo;.</p>
                </div>
              ) : (
                <div className="py-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#888] mb-3">
                    Common Problems Homeowners Search For:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {[
                      { label: 'AC Not Cooling', path: '/hvac/air-conditioning/why-is-my-ac-not-cooling/' },
                      { label: 'AC Blowing Warm Air', path: '/hvac/air-conditioning/ac-blowing-warm-air/' },
                      { label: 'Furnace Blowing Cold Air', path: '/hvac/furnace/furnace-blowing-cold-air/' },
                      { label: 'Furnace Short Cycling', path: '/hvac/furnace/furnace-short-cycling/' },
                      { label: 'AC Leaking Water Indoors', path: '/hvac/air-conditioning/ac-leaking-water/' },
                      { label: 'Refrigerator Not Cooling', path: '/appliances/refrigerator/refrigerator-not-cooling/' },
                      { label: 'How Often to Change Filter', path: '/maintenance/how-often-change-hvac-filter/' },
                      { label: 'Washing Machine Not Draining', path: '/appliances/washer/washing-machine-not-draining/' }
                    ].map(item => (
                      <button
                        key={item.path}
                        type="button"
                        onClick={() => handleResultClick(item.path)}
                        className="text-left p-2 rounded hover:bg-[#f6f5f0] text-[#2c2d30] font-medium transition-colors"
                      >
                        &bull; {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
