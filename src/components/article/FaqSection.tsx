import { HelpCircle, ChevronDown } from 'lucide-react';
import { FaqItem } from '../../types';

interface FaqSectionProps {
  faqs: FaqItem[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faqs" className="my-10 pt-6 border-t border-[#e8e6e1]">
      <div className="flex items-center gap-2.5 mb-5">
        <HelpCircle className="w-5 h-5 text-[#0d5c46]" aria-hidden="true" />
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1c1d1f]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-[#faf9f5] border border-[#e2e0da] rounded-lg p-4 transition-colors hover:border-[#cfcdc7] open:bg-white open:shadow-xs"
          >
            <summary className="font-semibold text-base text-[#1c1d1f] cursor-pointer flex items-center justify-between list-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d5c46] rounded select-none">
              <span className="pr-4">{faq.question}</span>
              <ChevronDown
                className="w-4 h-4 text-[#777] transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
                aria-hidden="true"
              />
            </summary>
            <div className="mt-3 pt-3 border-t border-[#eceae5] text-sm sm:text-base text-[#46474a] leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
