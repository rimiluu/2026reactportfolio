import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import { PageProvider } from "./context/PageContext";
import { caseStudies } from "./data/caseStudies";
import { miniCases } from "./data/miniCases";
import { usePageMeta } from "./hooks/usePageMeta";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { Home } from "./pages/Home";
import { MiniCasePage } from "./pages/MiniCasePage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

const pageDefaults = {
  home: {
    id: "home",
    title: "いとう りみ Portfolio",
    bodyClass: "home-page",
  },
};

function PageContent({ page }) {
  if (page.id === "home") return <Home />;
  if (caseStudies[page.id]) return <CaseStudyPage caseData={caseStudies[page.id]} />;
  if (miniCases[page.id]) return <MiniCasePage caseData={miniCases[page.id]} />;
  return <Home />;
}

function NotFound() {
  return (
    <PortfolioRoute
      page={{
        id: "not-found",
        title: "Not Found | いとう りみ Portfolio",
        bodyClass: "not-found-page",
      }}
    >
      <main className="not-found">
        <p className="not-found__eyebrow">404</p>
        <h1>ページが見つかりません</h1>
        <p>URLが間違っているか、ページが移動した可能性があります。</p>
        <a href="/">トップへ戻る</a>
      </main>
    </PortfolioRoute>
  );
}

function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const target = document.querySelector(hash);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, pathname]);
}

function PortfolioRoute({ page, children }) {
  const scrollProgress = useScrollProgress(page.id);

  usePageMeta(page);
  useRevealOnScroll(page.id);
  useHashScroll();

  return (
    <PageProvider page={page} scrollProgress={scrollProgress}>
      <Layout>{children ?? <PageContent page={page} />}</Layout>
    </PageProvider>
  );
}

const routePages = [
  { path: "/", page: pageDefaults.home },
  ...Object.entries(caseStudies).map(([id, page]) => ({ path: `/${id}`, page: { id, ...page } })),
  ...Object.entries(miniCases).map(([id, page]) => ({ path: `/${id}`, page: { id, ...page } })),
];

const legacyRedirects = [
  ["/index.html", "/"],
  ["/honnova.html", "/honnova"],
  ["/makeyou.html", "/makeyou"],
  ["/kamiyamacast.html", "/kamiyamacast"],
  ["/yousaikonkuru.html", "/yousaikonkuru"],
  ["/cospre2024.html", "/cospre2024"],
  ["/miso.html", "/miso"],
];

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        {routePages.map(({ path, page }) => (
          <Route key={path} path={path} element={<PortfolioRoute page={page} />} />
        ))}
        {legacyRedirects.map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
