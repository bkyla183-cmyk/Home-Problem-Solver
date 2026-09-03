import { Clock, Calendar, ShieldCheck, UserCheck, Share2 } from 'lucide-react';
import { Article, BreadcrumbItem } from '../types';
import { CATEGORIES } from '../data/categories';
import { SeoHead } from '../seo/SeoHead';
import { generateArticleSchema, generateBreadcrumbSchema, generateFaqSchema } from '../seo/schema';
import { SITE_URL } from '../config/site';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SafetyWarning } from '../components/SafetyWarning';
import { AdSlot } from '../components/AdSlot';
import { QuickAnswerBox } from '../components/article/QuickAnswerBox';
import { TableOfContents } from '../components/article/TableOfContents';
import { TableOfCauses } from '../components/article/TableOfCauses';
import { FaqSection } from '../components/article/FaqSection';
import { SourcesSection } from '../components/article/SourcesSection';
import { RelatedArticles } from '../components/article/RelatedArticles';

interface ArticlePageProps {
  article: Article;
}

export function ArticlePage({ article }: ArticlePageProps) {
  const canonicalUrl = `${SITE_URL}${article.path}`;

  // Build breadcrumbs
  const breadcrumbs: BreadcrumbItem[] = [
    { label: article.category, url: `/${article.categorySlug}/` }
  ];

  const parentCategory = CATEGORIES.find(c => c.slug === article.categorySlug);
  const matchedSubcategory = parentCategory?.subcategories?.find(
    s => s.slug === article.subcategorySlug
  );

  if (matchedSubcategory) {
    breadcrumbs.push({
      label: matchedSubcategory.name,
      url: matchedSubcategory.path
    });
  }

  breadcrumbs.push({
    label: article.title,
    url: article.path
  });

  // Table of Contents items
  const tocItems = [
    { id: 'quick-answer', label: 'Quick Diagnostic Answer' },
    { id: 'causes-table', label: 'Summary Matrix of Causes' },
    { id: 'troubleshooting-steps', label: 'Step-by-Step Troubleshooting' },
    { id: 'safe-checks', label: 'Safe Things You Can Check' },
    { id: 'what-not-to-do', label: 'What NOT To Do' },
    { id: 'when-to-call-professional', label: 'When to Call a Professional' }
  ];

  if (article.repairVsReplacement) {
    tocItems.push({ id: 'repair-vs-replacement', label: 'Repair vs. Replacement Factors' });
  }
  if (article.faqs && article.faqs.length > 0) {
    tocItems.push({ id: 'faqs', label: 'Frequently Asked Questions' });
  }
  if (article.sources && article.sources.length > 0) {
    tocItems.push({ id: 'sources', label: 'Research & References' });
  }

  // Schemas
  const articleSchema = generateArticleSchema(article, canonicalUrl);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = article.faqs ? generateFaqSchema(article.faqs) : null;

  const schemas = [articleSchema, breadcrumbSchema];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <article className="min-h-screen bg-[#fcfbf9] pb-20">
      <SeoHead
        title={article.title}
        description={article.description}
        canonicalPath={article.path}
        ogType="article"
        schemas={schemas}
      />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={breadcrumbs} />

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0d5c46] bg-[#edf5f1] px-2.5 py-1 rounded">
              {article.subcategory || article.category}
            </span>
            <span className="text-xs text-[#737477]">&bull;</span>
            <span className="text-xs text-[#636467] font-medium">
              Diagnostic Guide
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1c1e] tracking-tight leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-[#525356] leading-relaxed mb-6 font-normal">
            {article.excerpt}
          </p>

          {/* Meta Information Bar */}
          <div className="pt-4 border-t border-b border-[#e5e3dd] py-3 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#66676b]">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 font-medium text-[#2d2e30]">
                <UserCheck className="w-4 h-4 text-[#0d5c46]" aria-hidden="true" />
                <span>Home Problem Solver Research Team</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#8a8b8e]" aria-hidden="true" />
                <span>Updated: {article.updatedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#8a8b8e]" aria-hidden="true" />
                <span>{article.readingTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#757679]">
              <ShieldCheck className="w-4 h-4 text-[#0d5c46]" aria-hidden="true" />
              <span>Verified Standards</span>
            </div>
          </div>
        </header>

        {/* Top Ad Placement */}
        <AdSlot format="horizontal-banner" label={true} />

        {/* Quick Answer Box */}
        {article.quickAnswer && (
          <div id="quick-answer">
            <QuickAnswerBox answer={article.quickAnswer} />
          </div>
        )}

        {/* Safety Warning */}
        <SafetyWarning
          level={article.safetyLevel}
          customMessage={article.safetyNotice}
        />

        {/* Table of Contents */}
        <TableOfContents items={tocItems} />

        {/* Introduction Section */}
        <div className="my-8 text-base sm:text-lg text-[#323336] leading-relaxed space-y-4">
          {article.introduction.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Structured Table of Causes */}
        {article.tableOfCauses && article.tableOfCauses.length > 0 && (
          <TableOfCauses causes={article.tableOfCauses} />
        )}

        {/* Step-by-Step Troubleshooting */}
        <section id="troubleshooting-steps" className="my-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1d1f] mb-4">
            Step-by-Step Diagnostic & Troubleshooting Procedure
          </h2>
          <p className="text-sm sm:text-base text-[#525356] mb-6">
            Follow these systematic steps in order, starting with the simplest and safest checks before investigating deeper mechanical parts:
          </p>

          <div className="space-y-6">
            {article.troubleshootingSteps.map(step => (
              <div
                key={step.stepNumber}
                className="bg-white border border-[#e4e2db] rounded-xl p-5 sm:p-6 shadow-2xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#0d5c46] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm shadow-xs">
                    {step.stepNumber}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1c1d1f] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#46474a] leading-relaxed">
                      {step.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* In-Article Ad Placement */}
        <AdSlot format="in-article" label={true} />

        {/* Safe Things You Can Check */}
        {article.safeChecks && article.safeChecks.length > 0 && (
          <section id="safe-checks" className="my-8 bg-[#f5f9f6] border border-[#cfe3d8] rounded-xl p-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0d5c46] mb-3">
              Safe Things Homeowners Can Check Immediately
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-[#2e3e34]">
              {article.safeChecks.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#0d5c46] font-bold text-base leading-none mt-1">&check;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* What NOT To Do */}
        {article.whatNotToDo && article.whatNotToDo.length > 0 && (
          <section id="what-not-to-do" className="my-8 bg-[#fff9f8] border border-[#f5d0c8] rounded-xl p-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#a62b19] mb-3">
              What NOT To Do: Common DIY Mistakes
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-[#48201a]">
              {article.whatNotToDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#c0392b] font-bold text-base leading-none mt-1">&times;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* When to Call a Professional */}
        {article.whenToCallProfessional && article.whenToCallProfessional.length > 0 && (
          <section id="when-to-call-professional" className="my-8 bg-white border border-[#e2e0da] rounded-xl p-6 shadow-2xs">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1c1d1f] mb-3">
              When to Call a Licensed Professional
            </h2>
            <p className="text-sm text-[#5a5b5e] mb-4">
              If your troubleshooting leads to any of the following scenarios, stop and schedule service with a licensed, certified technician:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-[#38393c]">
              {article.whenToCallProfessional.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#0d5c46] font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Repair vs Replacement Section (if applicable) */}
        {article.repairVsReplacement && (
          <section id="repair-vs-replacement" className="my-10 bg-[#faf9f5] border border-[#e2e0da] rounded-xl p-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1c1d1f] mb-3">
              Repair vs. Replacement Decision Guide
            </h2>
            <p className="text-sm sm:text-base text-[#444548] leading-relaxed mb-4">
              {article.repairVsReplacement.explanation}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.repairVsReplacement.factors.map((f, idx) => (
                <div key={idx} className="bg-white border border-[#eae8e2] rounded-lg p-3.5">
                  <div className="font-semibold text-sm text-[#1c1d1f] mb-1">{f.name}</div>
                  <div className="text-xs text-[#595a5d]">{f.advice}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Frequently Asked Questions */}
        {article.faqs && article.faqs.length > 0 && (
          <FaqSection faqs={article.faqs} />
        )}

        {/* Sources & Citations */}
        {article.sources && article.sources.length > 0 && (
          <SourcesSection sources={article.sources} />
        )}

        {/* Bottom Ad Placement */}
        <AdSlot format="responsive" label={true} />

        {/* Related Articles */}
        {article.relatedArticleSlugs && article.relatedArticleSlugs.length > 0 && (
          <RelatedArticles slugs={article.relatedArticleSlugs} />
        )}
      </div>
    </article>
  );
}
