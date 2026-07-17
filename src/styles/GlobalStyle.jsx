import { createGlobalStyle } from "styled-components";
import { baseCss } from "./baseCss";

export const GlobalStyle = createGlobalStyle`
  :root {
    --ink: ${({ theme }) => theme.colors.ink};
    --paper: ${({ theme }) => theme.colors.paper};
    --soft: ${({ theme }) => theme.colors.soft};
    --line: ${({ theme }) => theme.colors.line};
    --muted: ${({ theme }) => theme.colors.muted};
    --header-height: ${({ theme }) => theme.layout.headerHeight};
    --mobile-gutter: 22px;
    --mobile-section-space: 64px;
  }

  ${baseCss}

  @media (prefers-reduced-motion: no-preference) {
    .motion-ready [data-reveal] {
      opacity: 0;
      transform: translateY(28px);
      will-change: opacity, transform;
    }

    .motion-ready [data-reveal].is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
