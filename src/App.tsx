import { RouterProvider, useRouter } from './utils/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { CategoryPage } from './pages/CategoryPage';
import { LegalPage } from './pages/LegalPage';
import { AuditPage } from './pages/AuditPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getArticleBySlug } from './data/articles';
import { CATEGORIES } from './data/categories';
import {
  ABOUT_PAGE_CONTENT,
  EDITORIAL_POLICY_CONTENT,
  ADVERTISING_POLICY_CONTENT,
  PRIVACY_POLICY_CONTENT,
  COOKIE_POLICY_CONTENT,
  TERMS_CONTENT,
  CONTACT_CONTENT
} from './data/legal';

function AppRouter() {
  const { path } = useRouter();

  // Normalize path with trailing slash (except empty)
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;

  // 1. Homepage
  if (normalizedPath === '/') {
    return <HomePage />;
  }

  // 2. Trust & Legal Pages
  if (normalizedPath === '/about/') {
    return <LegalPage content={ABOUT_PAGE_CONTENT} />;
  }
  if (normalizedPath === '/editorial-policy/') {
    return <LegalPage content={EDITORIAL_POLICY_CONTENT} />;
  }
  if (normalizedPath === '/advertising-policy/') {
    return <LegalPage content={ADVERTISING_POLICY_CONTENT} />;
  }
  if (normalizedPath === '/privacy-policy/') {
    return <LegalPage content={PRIVACY_POLICY_CONTENT} />;
  }
  if (normalizedPath === '/cookie-policy/') {
    return <LegalPage content={COOKIE_POLICY_CONTENT} />;
  }
  if (normalizedPath === '/terms/') {
    return <LegalPage content={TERMS_CONTENT} />;
  }
  if (normalizedPath === '/contact/') {
    return <LegalPage content={CONTACT_CONTENT} />;
  }

  // 3. Content Audit Dashboard
  if (normalizedPath === '/audit/') {
    return <AuditPage />;
  }

  // 4. Check for individual Article
  const matchedArticle = getArticleBySlug(normalizedPath);
  if (matchedArticle) {
    return <ArticlePage article={matchedArticle} />;
  }

  // 5. Check for Subcategory match
  for (const cat of CATEGORIES) {
    if (cat.subcategories) {
      const matchedSub = cat.subcategories.find(
        sub => sub.path === normalizedPath || sub.path === path
      );
      if (matchedSub) {
        return <CategoryPage category={cat} currentSubcategory={matchedSub} />;
      }
    }
  }

  // 6. Check for Category match
  const matchedCategory = CATEGORIES.find(
    cat => cat.path === normalizedPath || cat.path === path
  );
  if (matchedCategory) {
    return <CategoryPage category={matchedCategory} />;
  }

  // 7. Not Found fallback
  return <NotFoundPage />;
}

export default function App() {
  return (
    <RouterProvider>
      <div className="flex flex-col min-h-screen bg-[#fcfbf9] text-[#1a1c1e] font-sans antialiased selection:bg-[#cbe3d6] selection:text-[#094736]">
        <Header />
        <main className="flex-1">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
