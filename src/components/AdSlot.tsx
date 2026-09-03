import { useEffect, useRef } from 'react';
import { ADSENSE_CONFIG } from '../config/site';

export type AdFormat = 'responsive' | 'horizontal-banner' | 'in-article' | 'sidebar-rectangle';

interface AdSlotProps {
  slotId?: string;
  format?: AdFormat;
  className?: string;
  label?: boolean;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({
  slotId,
  format = 'responsive',
  className = '',
  label = true
}: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);

  // Reserve heights to eliminate Cumulative Layout Shift (CLS)
  const formatStyles: Record<AdFormat, { minHeight: string; maxWidth?: string }> = {
    'responsive': { minHeight: '120px' },
    'horizontal-banner': { minHeight: '90px', maxWidth: '728px' },
    'in-article': { minHeight: '250px', maxWidth: '650px' },
    'sidebar-rectangle': { minHeight: '250px', maxWidth: '300px' }
  };

  const currentStyle = formatStyles[format] || formatStyles.responsive;

  useEffect(() => {
    if (ADSENSE_CONFIG.enabled && ADSENSE_CONFIG.publisherId && !pushedRef.current) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      } catch {
        // Safe catch for ad blocker or network drops
      }
    }
  }, []);

  const isConfigured = ADSENSE_CONFIG.enabled && ADSENSE_CONFIG.publisherId.length > 0 && ADSENSE_CONFIG.publisherId !== 'ca-pub-XXXXXXXXXXXXXXXX';

  return (
    <div
      ref={adRef}
      className={`my-8 mx-auto flex flex-col items-center justify-center clear-both w-full ${className}`}
      style={{ maxWidth: currentStyle.maxWidth || '100%' }}
      role="complementary"
      aria-label="Advertisement"
    >
      {label && (
        <span className="text-[10px] uppercase tracking-widest text-[#8c8c88] mb-1.5 font-medium select-none">
          Advertisement
        </span>
      )}

      <div
        className="w-full bg-[#f7f6f2] border border-[#e8e6e1] rounded flex items-center justify-center overflow-hidden transition-all duration-200"
        style={{ minHeight: currentStyle.minHeight }}
      >
        {isConfigured ? (
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: currentStyle.minHeight }}
            data-ad-client={ADSENSE_CONFIG.publisherId}
            data-ad-slot={slotId || ADSENSE_CONFIG.slots.inArticleMid || ''}
            data-ad-format={format === 'horizontal-banner' ? 'horizontal' : format === 'sidebar-rectangle' ? 'rectangle' : 'auto'}
            data-full-width-responsive="true"
          />
        ) : (
          /* Clean editorial placeholder for development / unconfigured AdSense state */
          <div className="text-center p-4 text-[#8a8a85] select-none">
            <div className="text-xs font-medium uppercase tracking-wider text-[#63635e] mb-0.5">
              Ad Placement Area
            </div>
            <div className="text-[11px] text-[#91918c]">
              Format: {format} &bull; Min Height: {currentStyle.minHeight}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
