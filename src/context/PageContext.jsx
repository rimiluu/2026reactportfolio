import { createContext, useContext } from "react";

const PageContext = createContext(null);

export function PageProvider({ page, scrollProgress, children }) {
  return (
    <PageContext.Provider value={{ page, isHome: page.id === "home", scrollProgress }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used inside PageProvider");
  }
  return context;
}
