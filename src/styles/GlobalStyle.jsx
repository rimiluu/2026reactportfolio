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
  }

  ${baseCss}

  @media (prefers-reduced-motion: no-preference) {
    [data-reveal] {
      opacity: 0;
      transform: translateY(28px);
      transition:
        opacity 700ms ease,
        transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
      will-change: opacity, transform;
    }

    [data-reveal].is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
