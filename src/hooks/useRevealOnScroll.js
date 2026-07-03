import { useEffect } from "react";

export function useRevealOnScroll(pageId) {
  useEffect(() => {
    const targets = [...document.querySelectorAll("[data-reveal]")];
    if (!targets.length) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pageId]);
}
