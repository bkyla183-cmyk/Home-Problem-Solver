import { useEffect } from 'react';
import { SITE_URL, SITE_NAME } from '../config/site';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
  schemas?: Record<string, unknown>[];
  noIndex?: boolean;
}

export function SeoHead({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  schemas = [],
  noIndex = false
}: SeoHeadProps) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = formattedTitle;

    // Helper for meta tags
    const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Format canonical URL strictly from SITE_URL
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${SITE_URL}${cleanPath}`;

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 3. Update standard meta
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 4. Open Graph
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', SITE_NAME);

    // 5. Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);

    // 6. JSON-LD Schemas injection
    const existingScripts = document.querySelectorAll('script[data-schema="dynamic"]');
    existingScripts.forEach(script => script.remove());

    const createdScripts: HTMLScriptElement[] = [];
    schemas.forEach(schemaObj => {
      if (!schemaObj) return;
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-schema', 'dynamic');
      script.textContent = JSON.stringify(schemaObj);
      document.head.appendChild(script);
      createdScripts.push(script);
    });

    return () => {
      createdScripts.forEach(s => s.remove());
    };
  }, [title, description, canonicalPath, ogType, schemas, noIndex]);

  return null;
}
