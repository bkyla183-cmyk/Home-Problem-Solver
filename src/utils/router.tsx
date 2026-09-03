import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';

interface RouterContextType {
  path: string;
  search: string;
  query: Record<string, string>;
  navigate: (to: string, options?: { replace?: boolean; scroll?: boolean }) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  search: '',
  query: {},
  navigate: () => {}
});

function parseQuery(searchStr: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!searchStr) return params;
  const clean = searchStr.startsWith('?') ? searchStr.slice(1) : searchStr;
  clean.split('&').forEach(part => {
    if (!part) return;
    const [key, val] = part.split('=');
    if (key) {
      params[decodeURIComponent(key)] = decodeURIComponent(val || '');
    }
  });
  return params;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname || '/');
  const [currentSearch, setCurrentSearch] = useState(() => window.location.search || '');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setCurrentSearch(window.location.search || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean; scroll?: boolean }) => {
    // Check if external or anchor
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
      window.location.href = to;
      return;
    }

    if (to.startsWith('#')) {
      const el = document.querySelector(to);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const [pathname, searchStr] = to.split('?');
    const newPath = pathname.endsWith('/') || pathname.includes('.') ? pathname : `${pathname}/`;
    const newSearch = searchStr ? `?${searchStr}` : '';
    const fullUrl = `${newPath}${newSearch}`;

    if (options?.replace) {
      window.history.replaceState({}, '', fullUrl);
    } else {
      window.history.pushState({}, '', fullUrl);
    }

    setCurrentPath(newPath);
    setCurrentSearch(newSearch);

    if (options?.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  const query = useMemo(() => parseQuery(currentSearch), [currentSearch]);

  const value = useMemo(
    () => ({
      path: currentPath,
      search: currentSearch,
      query,
      navigate
    }),
    [currentPath, currentSearch, query, navigate]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: unknown;
}

export function Link({ href, replace, scroll, children, onClick, className, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // Don't intercept modified clicks (Cmd+click, Ctrl+click, middle click)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return;
    }
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return;
    }

    e.preventDefault();
    navigate(href, { replace, scroll });
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}
