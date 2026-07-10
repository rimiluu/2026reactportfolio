import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import { PageProvider } from "./context/PageContext";
import { caseStudies } from "./data/caseStudies";
import { miniCases } from "./data/miniCases";
import { usePageMeta } from "./hooks/usePageMeta";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { ContactPage } from "./pages/ContactPage";
import { Home } from "./pages/Home";
import { MiniCasePage } from "./pages/MiniCasePage";
import { NotFound } from "./pages/NotFound";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

const pageDefaults = {
  home: {
    id: "home",
    title: "いとう りみ Portfolio",
    bodyClass: "home-page",
  },
};

const contactPage = {
  id: "contact",
  title: "Contact | いとう りみ Portfolio",
  bodyClass: "contact-page",
};

const notFoundPage = {
  id: "not-found",
  title: "Not Found | いとう りみ Portfolio",
  bodyClass: "not-found-page",
};

function useHashScroll() {//毎回ページ上に戻ってスクロールする
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

function PortfolioRoute({ page, element }) {
  const scrollProgress = useScrollProgress(page.id);

  usePageMeta(page);
  useRevealOnScroll(page.id);
  useHashScroll();

  return (
    <PageProvider page={page} scrollProgress={scrollProgress}>
      <Layout>{element}</Layout>
    </PageProvider>
  );
}

const routePages = [
  { path: "/", page: pageDefaults.home, element: <Home /> },
  { path: "/contact", page: contactPage, element: <ContactPage /> },
  ...Object.entries(caseStudies).map(([id, page]) => ({
    path: `/${id}`,
    page: { id, ...page },
    element: <CaseStudyPage caseData={caseStudies[id]} />,
  })),
  ...Object.entries(miniCases).map(([id, page]) => ({
    path: `/${id}`,
    page: { id, ...page },
    element: <MiniCasePage caseData={miniCases[id]} />,
  })),
  { path: "*", page: notFoundPage, element: <NotFound /> },
];

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          {routePages.map(({ path, page, element }) => (
            <Route key={path} path={path} element={<PortfolioRoute page={page} element={element} />} />
          ))}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
