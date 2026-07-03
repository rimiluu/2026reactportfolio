export const baseCss = `
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: var(--ink);
    background: var(--paper);
    font-family: "Space Grotesk", "Neue Haas Grotesk Text", "Helvetica Neue", Arial, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", sans-serif;
    line-height: 1.85;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg,
  iframe {
    max-width: 100%;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (min-width: 901px) {
    html:not(:has(body.home-page)) {
      scroll-padding-top: var(--header-height);
      scroll-snap-type: y mandatory;
    }

    html:has(body.home-page) {
      scroll-padding-top: 0;
      scroll-snap-type: none;
    }
  }

  @media (max-width: 900px) {
    html {
      scroll-snap-type: none;
    }
  }

  .not-found {
    display: grid;
    align-content: center;
    min-height: calc(100svh - var(--header-height));
    padding: clamp(72px, 12vh, 140px) clamp(22px, 8vw, 120px);
  }

  .not-found__eyebrow {
    margin: 0 0 18px;
    font-size: clamp(16px, 1.4vw, 24px);
    font-weight: 900;
    letter-spacing: 0.16em;
  }

  .not-found h1 {
    margin: 0 0 18px;
    font-size: clamp(34px, 5vw, 80px);
    line-height: 1.2;
    letter-spacing: 0.08em;
  }

  .not-found p {
    max-width: 620px;
    margin: 0 0 28px;
    color: #383832;
    font-size: clamp(15px, 1.2vw, 20px);
    line-height: 1.9;
    letter-spacing: 0.08em;
  }

  .not-found a {
    width: fit-content;
    border-bottom: 1px solid currentColor;
    font-weight: 900;
    letter-spacing: 0.12em;
  }
`;
