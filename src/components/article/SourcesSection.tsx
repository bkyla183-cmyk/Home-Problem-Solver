import { ExternalLink, BookOpen } from 'lucide-react';
import { SourceReference } from '../../types';

interface SourcesSectionProps {
  sources?: SourceReference[];
}

export function SourcesSection({ sources }: SourcesSectionProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <section id="sources" className="my-10 pt-6 border-t border-[#e8e6e1]">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-[#0d5c46]" aria-hidden="true" />
        <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1c1d1f]">
          Research & Reference Standards
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-[#5d5e61] mb-4">
        Our diagnostic procedures and safety standards are verified against primary technical documentation and federal guidelines:
      </p>

      <ul className="space-y-2.5 text-xs sm:text-sm">
        {sources.map((source, idx) => (
          <li key={idx} className="flex items-start gap-2 text-[#3c3d40]">
            <ExternalLink className="w-3.5 h-3.5 mt-0.5 text-[#0d5c46] flex-shrink-0" aria-hidden="true" />
            <div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#0d5c46] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d5c46] rounded"
              >
                {source.name}
              </a>
              {source.description && (
                <span className="text-[#68696c] ml-1.5">— {source.description}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
