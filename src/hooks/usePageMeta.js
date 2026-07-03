import { useEffect } from "react";

export function usePageMeta(page) {
  useEffect(() => {
    document.title = page.title;
    document.body.className = page.bodyClass;
  }, [page]);
}
