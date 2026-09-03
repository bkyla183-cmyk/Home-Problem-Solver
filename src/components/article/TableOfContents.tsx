import { ListOrdered } from 'lucide-react';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="bg-[#faf9f5] border border-[#e8e6e1] rounded-lg p-5 my-6 max-w-xl"
    >
      <div className="flex items-center gap-2 mb-3 text-[#2a2b2e]">
        <ListOrdered className="w-4 h-4 text-[#0d5c46]" aria-hidden="true" />
        <span className="font-sans font-semibold text-sm uppercase tracking-wider text-[#343538]">
          In This Troubleshooting Guide
        </span>
      </div>
      <ol className="space-y-2 text-sm text-[#444547]">
        {items.map((item, idx) => (
          <li key={item.id} className="flex items-baseline">
            <span className="text-xs font-mono text-[#828385] w-6 flex-shrink-0">
              {String(idx + 1).padStart(2, '0')}.
            </span>
            <a
              href={`#${item.id}`}
              className="text-[#1c1d1f] hover:text-[#0d5c46] hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d5c46] rounded"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
