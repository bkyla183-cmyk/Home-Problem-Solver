import { useState } from 'react';
import { SeoHead } from '../seo/SeoHead';
import { generateBreadcrumbSchema } from '../seo/schema';
import { LegalPageContent } from '../data/legal';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_URL } from '../config/site';
import { Mail, Copy, Check, Clock, AlertCircle } from 'lucide-react';

interface LegalPageProps {
  content: LegalPageContent;
}

export function LegalPage({ content }: LegalPageProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const domain = SITE_URL.replace(/^https?:\/\//, '').replace(/\/$/, '');

  const breadcrumbs = [
    { label: content.title, url: content.path }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const isContactPage = content.slug === 'contact';

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const contactChannels = [
    {
      key: 'editorial',
      department: 'Editorial & Technical Research',
      email: `editorial@${domain}`,
      description: 'Article suggestions, factual corrections, HVAC technical clarifications, and diagnostic inquiries.'
    },
    {
      key: 'advertising',
      department: 'Advertising & Commercial Partnerships',
      email: `advertising@${domain}`,
      description: 'Display network inquiries, programmatic advertising discussions, and commercial partnerships.'
    },
    {
      key: 'privacy',
      department: 'Privacy & Legal Inquiries',
      email: `privacy@${domain}`,
      description: 'CCPA/CPRA data requests, terms of service inquiries, and copyright/DMCA notices.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf9] pb-20">
      <SeoHead
        title={content.title}
        description={content.metaDescription}
        canonicalPath={content.path}
        schemas={[breadcrumbSchema]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={breadcrumbs} />

        <header className="border-b border-[#e5e3dd] pb-6 mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#1a1c1e] mb-2">
            {content.title}
          </h1>
          <div className="text-xs text-[#75767a]">
            Last Updated: {content.lastUpdated} &bull; Home Problem Solver Editorial Standards
          </div>
        </header>

        <div className="space-y-8 text-base text-[#38393c] leading-relaxed font-normal">
          {content.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1c1e]">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}

              {section.listItems && (
                <ul className="list-disc pl-5 space-y-2 pt-1 text-sm sm:text-base text-[#46474b]">
                  {section.listItems.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Genuine Contact Channels for Contact Page */}
          {isContactPage && (
            <div className="mt-10 pt-8 border-t border-[#e5e3dd] space-y-8">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1c1e] mb-2">
                  Direct Department Contacts
                </h2>
                <p className="text-sm text-[#55575a] mb-6">
                  Please reach out directly via email to the appropriate desk below. We do not use automated bots—your message is reviewed directly by our editorial and technical research team.
                </p>

                <div className="space-y-4">
                  {contactChannels.map((channel) => (
                    <div
                      key={channel.key}
                      className="bg-white border border-[#e2e0da] rounded-xl p-5 shadow-2xs hover:border-[#b8b5ac] transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                        <h3 className="font-serif font-bold text-base text-[#1a1c1e] flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#0d5c46]" />
                          {channel.department}
                        </h3>
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${channel.email}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0d5c46] hover:bg-[#094736] rounded-lg transition-colors shadow-2xs"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            Email Desk
                          </a>
                          <button
                            type="button"
                            onClick={() => handleCopy(channel.email, channel.key)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4c4e51] bg-[#f5f4ef] hover:bg-[#eae8e0] rounded-lg border border-[#dedcd6] transition-colors"
                            aria-label={`Copy email address for ${channel.department}`}
                          >
                            {copiedKey === channel.key ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#0d5c46]" />
                                <span className="text-[#0d5c46] font-semibold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Email</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      <p className="text-sm font-mono text-[#0d5c46] mb-1.5 select-all">
                        {channel.email}
                      </p>
                      <p className="text-xs text-[#5f6165]">
                        {channel.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reader Guidance Box */}
              <div className="bg-[#f7f6f2] border border-[#e2e0da] rounded-xl p-6 space-y-3">
                <h3 className="font-serif font-bold text-base text-[#1a1c1e] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#0d5c46]" />
                  What to Include in Your Message
                </h3>
                <p className="text-xs sm:text-sm text-[#46474b]">
                  To help us investigate and respond effectively, please include:
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-[#46474b] space-y-1.5">
                  <li>The specific guide title or URL on Home Problem Solver.</li>
                  <li>Equipment details (approximate age, central AC, heat pump, or furnace type).</li>
                  <li>A factual description of any discrepancy or suggested clarification.</li>
                  <li>Manufacturer service manual or code reference if applicable.</li>
                </ul>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#6e7074] border-t border-[#dedcd6]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Responses are provided on business days (Monday–Friday) within 48 to 72 hours.</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
