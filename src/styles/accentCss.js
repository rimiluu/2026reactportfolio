import { css } from "styled-components";

export const accentCss = css`
  [data-accent="book"] { --accent: #cfa4cc; --accent-rgb: 207, 164, 204; }
  [data-accent="product"] { --accent: #ee5a36; --accent-rgb: 238, 90, 54; }
  [data-accent="uiux"] { --accent: #9fc4e8; --accent-rgb: 159, 196, 232; }
  [data-accent="media"] { --accent: #1a9562; --accent-rgb: 26, 149, 98; }
  [data-accent="forest"] { --accent: #1a9562; --accent-rgb: 26, 149, 98; }
  [data-accent="clothes"] { --accent: #f5ab54; --accent-rgb: 245, 171, 84; }

  .skill-item[data-accent] {
    position: relative;
    padding-left: 15px;
  }

  .skill-item[data-accent]::before {
    content: "";
    position: absolute;
    inset: 2px auto 2px 0;
    width: 4px;
    background: var(--accent);
    transform: scaleY(0.32);
    transform-origin: top;
    transition: transform 300ms ease;
  }

  .skill-item[data-accent]:hover::before {
    transform: scaleY(1);
  }

  .skill-item[data-accent] figcaption {
    border-color: rgba(var(--accent-rgb), 0.7);
  }

  .map button[data-accent][aria-pressed="true"] {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.18);
  }

  .map button[data-accent]:not([aria-pressed="true"]):hover {
    background: rgba(var(--accent-rgb), 0.2);
    border-color: var(--accent);
  }

  .map [data-filter-result][data-accent] {
    color: var(--accent);
  }

  @media (prefers-reduced-motion: reduce) {
    .skill-item[data-accent]::before {
      transition-duration: 0.01ms !important;
    }
  }
`;
